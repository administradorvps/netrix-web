import { promises as dns } from "node:dns";

const TIMEOUT_MS = 4000;

// Proveedores de email marketing detectables por su "include" en el SPF.
// Si el dominio ya usa uno, el angulo de venta cambia (ahorro/migracion,
// no "arreglar spam" desde cero).
const ESP_SPF_SIGNATURES: Record<string, string> = {
  "servers.mcsv.net": "Mailchimp",
  "mailchimp.com": "Mailchimp",
  "sendgrid.net": "SendGrid",
  "sendgrid.com": "SendGrid",
  "spf.klaviyomail.com": "Klaviyo",
  "klaviyomail.com": "Klaviyo",
  "activehosted.com": "ActiveCampaign",
  "amazonses.com": "Amazon SES (ya lo usan)",
  "hubspot.com": "HubSpot",
  "mktomail.com": "Marketo",
  "sparkpostmail.com": "SparkPost",
  "mailgun.org": "Mailgun",
  "acemlna.com": "ActiveCampaign",
  "google.com": "Google Workspace (Gmail corporativo)",
  "outlook.com": "Microsoft 365 / Outlook",
  "secureserver.net": "GoDaddy / hosting generico",
};

const DKIM_SELECTORS_COMUNES = [
  "default", "selector1", "selector2", "google", "k1", "k2", "k3",
  "mail", "dkim", "smtp", "mandrill", "mx", "s1", "s2",
  "mailo", "everlytickey1", "everlytickey2", "zoho", "em",
];

const MX_PATTERNS: Record<string, string> = {
  "google.com": "Gmail / Google Workspace",
  "googlemail.com": "Gmail / Google Workspace",
  "outlook.com": "Microsoft 365 / Outlook",
  "protection.outlook.com": "Microsoft 365 / Outlook",
  "secureserver.net": "GoDaddy (hosting generico)",
  "cpanel": "Hosting cPanel generico",
};

export interface DnsAuditResult {
  dominio: string;
  spfExiste: boolean;
  spfRaw: string;
  dmarcExiste: boolean;
  dmarcPolicy: string;
  dkimSelectoresEncontrados: string[];
  mxHosts: string[];
  espDetectado: string;
  nivel: "alto" | "medio" | "bajo";
  hallazgos: string[];
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); }
    );
  });
}

async function queryTxt(name: string): Promise<string[]> {
  try {
    const records = await withTimeout(dns.resolveTxt(name), TIMEOUT_MS);
    return records.map((chunks) => chunks.join(""));
  } catch {
    return [];
  }
}

async function queryMx(domain: string): Promise<string[]> {
  try {
    const records = await withTimeout(dns.resolveMx(domain), TIMEOUT_MS);
    return records.map((r) => r.exchange.toLowerCase());
  } catch {
    return [];
  }
}

export function normalizeDomain(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "");
}

export function isValidDomain(domain: string): boolean {
  return /^(?!-)[a-z0-9-]{1,63}(\.[a-z0-9-]{1,63})+$/.test(domain);
}

export async function auditarDominio(domainInput: string): Promise<DnsAuditResult> {
  const dominio = normalizeDomain(domainInput);

  const result: DnsAuditResult = {
    dominio,
    spfExiste: false,
    spfRaw: "",
    dmarcExiste: false,
    dmarcPolicy: "",
    dkimSelectoresEncontrados: [],
    mxHosts: [],
    espDetectado: "",
    nivel: "medio",
    hallazgos: [],
  };

  const [spfTxts, dmarcTxts, mxHosts, dkimResults] = await Promise.all([
    queryTxt(dominio),
    queryTxt(`_dmarc.${dominio}`),
    queryMx(dominio),
    Promise.all(
      DKIM_SELECTORS_COMUNES.map(async (selector) => {
        const txts = await queryTxt(`${selector}._domainkey.${dominio}`);
        const found = txts.some(
          (t) => t.toLowerCase().includes("v=dkim1") || t.toLowerCase().includes("p=")
        );
        return found ? selector : null;
      })
    ),
  ]);

  // --- SPF ---
  const spf = spfTxts.find((t) => t.toLowerCase().startsWith("v=spf1"));
  if (spf) {
    result.spfExiste = true;
    result.spfRaw = spf;
    for (const [firma, nombre] of Object.entries(ESP_SPF_SIGNATURES)) {
      if (spf.toLowerCase().includes(firma)) {
        result.espDetectado = nombre;
        break;
      }
    }
  }
  if (!result.spfExiste) {
    result.hallazgos.push("Sin SPF");
  } else if (!result.spfRaw.includes("-all") && !result.spfRaw.includes("~all")) {
    result.hallazgos.push("SPF incompleto (sin mecanismo -all/~all)");
  }

  // --- DMARC ---
  const dmarc = dmarcTxts.find((t) => t.toLowerCase().startsWith("v=dmarc1"));
  if (dmarc) {
    result.dmarcExiste = true;
    for (const part of dmarc.split(";")) {
      const p = part.trim();
      if (p.toLowerCase().startsWith("p=")) {
        result.dmarcPolicy = p.split("=", 2)[1].trim().toLowerCase();
      }
    }
  }
  if (!result.dmarcExiste) {
    result.hallazgos.push("Sin DMARC");
  } else if (result.dmarcPolicy === "none") {
    result.hallazgos.push("DMARC en modo 'none' (no protege contra spoofing)");
  }

  // --- DKIM ---
  result.dkimSelectoresEncontrados = dkimResults.filter((s): s is string => s !== null);
  if (result.dkimSelectoresEncontrados.length === 0) {
    result.hallazgos.push("Sin DKIM detectable (selectores comunes)");
  }

  // --- MX ---
  result.mxHosts = mxHosts;
  const mxStr = mxHosts.join(" ");
  for (const [patron, nombre] of Object.entries(MX_PATTERNS)) {
    if (mxStr.includes(patron)) {
      result.hallazgos.push(`Correo corporativo sobre ${nombre}`);
      break;
    }
  }

  if (result.espDetectado) {
    result.hallazgos.push(`Usa ${result.espDetectado} para envios`);
  }

  // --- Nivel de riesgo ---
  const problemasCriticos = [
    !result.spfExiste,
    !result.dmarcExiste,
    result.dkimSelectoresEncontrados.length === 0,
  ].filter(Boolean).length;

  if (problemasCriticos >= 2) result.nivel = "alto";
  else if (problemasCriticos === 1) result.nivel = "medio";
  else result.nivel = "bajo";

  return result;
}
