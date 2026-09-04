import { NextRequest, NextResponse } from "next/server";
import { auditarDominio, isValidDomain, normalizeDomain, type DnsAuditResult } from "@/lib/dnsAudit";

export const dynamic = "force-dynamic";

const LEADS_API_URL = process.env.LEADS_API_URL || "https://api.netrix.cl/leads";
const LEADS_API_KEY = process.env.LEADS_API_KEY;

// Envia el resultado al VPS para quede registrado como lead. Nunca debe
// tumbar ni demorar de mas la respuesta al visitante: si el VPS esta caido
// o tarda, la auditoria igual se muestra normalmente.
async function registrarLead(result: DnsAuditResult): Promise<void> {
  if (!LEADS_API_KEY) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    await fetch(LEADS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Api-Key": LEADS_API_KEY },
      body: JSON.stringify({
        dominio: result.dominio,
        nivel: result.nivel,
        hallazgos: result.hallazgos,
      }),
      signal: controller.signal,
    });
  } catch (err) {
    console.error("No se pudo registrar el lead:", err);
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("domain") ?? "";
  const domain = normalizeDomain(raw);

  if (!domain || !isValidDomain(domain)) {
    return NextResponse.json(
      { error: "Dominio invalido. Escribe algo como ejemplo.cl" },
      { status: 400 }
    );
  }

  try {
    const result = await auditarDominio(domain);
    await registrarLead(result);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "No se pudo auditar el dominio. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
