"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, ShieldAlert, ShieldX, Mail, Search, Loader2, Send, CheckCircle2 } from "lucide-react";

interface AuditResult {
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

const NIVEL_INFO = {
  alto: {
    label: "Riesgo alto",
    desc: "Varias piezas clave faltan. Es muy probable que tus correos masivos estén cayendo en spam o directamente rebotando.",
    color: "#f87171",
    bg: "rgba(248,113,113,0.1)",
  },
  medio: {
    label: "Riesgo medio",
    desc: "Tienes parte de la configuración, pero falta al menos una pieza importante para asegurar buena entregabilidad.",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.1)",
  },
  bajo: {
    label: "Riesgo bajo",
    desc: "Tu dominio tiene la base de autenticación de correo bien configurada.",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
  },
} as const;

function QuickCheckLine({ ok, label, text }: { ok: boolean; label: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontSize: "0.9rem", padding: "0.35rem 0" }}>
      <span style={{ color: ok ? "#4ade80" : "#fbbf24", fontWeight: 700 }}>{ok ? "✓" : "⚠"}</span>
      <span style={{ color: "white", fontWeight: 600 }}>{label}:</span>
      <span style={{ color: "#94a3b8" }}>{text}</span>
    </div>
  );
}

function CheckRow({ ok, label, detail }: { ok: boolean; label: string; detail?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {ok ? (
        <ShieldCheck size={20} style={{ color: "#4ade80", flexShrink: 0, marginTop: 2 }} />
      ) : (
        <ShieldX size={20} style={{ color: "#f87171", flexShrink: 0, marginTop: 2 }} />
      )}
      <div>
        <div style={{ color: "white", fontWeight: 600, fontSize: "0.9rem" }}>{label}</div>
        {detail && <div style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: 2 }}>{detail}</div>}
      </div>
    </div>
  );
}

export default function AuditoriaCorreoPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);

  const [testEmail, setTestEmail] = useState("");
  const [testLoading, setTestLoading] = useState(false);
  const [testError, setTestError] = useState("");
  const [testSent, setTestSent] = useState(false);

  const runAudit = async () => {
    const clean = domain.trim();
    if (!clean) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/audit-dns?domain=${encodeURIComponent(clean)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "No se pudo auditar el dominio.");
      } else {
        setResult(data);
      }
    } catch {
      setError("No se pudo conectar con el auditor. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const nivel = result ? NIVEL_INFO[result.nivel] : null;

  const sendTestEmail = async () => {
    const clean = testEmail.trim();
    if (!clean) return;
    setTestLoading(true);
    setTestError("");
    try {
      const res = await fetch("/api/send-test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: clean }),
      });
      const data = await res.json();
      if (!res.ok) {
        setTestError(data.error || "No se pudo enviar la prueba.");
      } else {
        setTestSent(true);
      }
    } catch {
      setTestError("No se pudo conectar con el servidor. Intenta de nuevo.");
    } finally {
      setTestLoading(false);
    }
  };

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "44rem", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ display: "block", color: "#60a5fa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Herramienta gratuita
            </span>
            <h1 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
              ¿Tus correos masivos están llegando a spam?
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "34rem", margin: "0 auto" }}>
              Escribe tu dominio y revisamos en segundos si tienes SPF, DKIM y DMARC bien configurados —
              las tres cosas que Gmail y Outlook revisan antes de decidir si tu correo llega a la bandeja
              de entrada o a spam.
            </p>
          </div>

          {/* Form */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <div style={{ flex: 1, minWidth: 220, position: "relative" }}>
              <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runAudit()}
                placeholder="tudominio.cl"
                style={{ width: "100%", padding: "0.9rem 1rem 0.9rem 2.5rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontSize: "0.95rem", outline: "none" }}
              />
            </div>
            <button
              onClick={runAudit}
              disabled={loading || !domain.trim()}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 1.75rem", borderRadius: "0.75rem", background: loading ? "rgba(37,99,235,0.5)" : "#2563eb", color: "white", fontWeight: 600, fontSize: "0.9rem", border: "none", cursor: loading ? "default" : "pointer", whiteSpace: "nowrap" }}
            >
              {loading ? <Loader2 size={16} className="spin" /> : null}
              {loading ? "Auditando..." : "Auditar mi dominio"}
            </button>
          </div>

          {error && (
            <div style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: "0.75rem", padding: "1rem", marginBottom: "2rem", fontSize: "0.875rem" }}>
              {error}
            </div>
          )}

          {/* Results */}
          {result && nivel && (
            <div style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ color: "#64748b", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Resultado para</div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "1.1rem" }}>{result.dominio}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", background: nivel.bg, border: `1px solid ${nivel.color}33` }}>
                  <ShieldAlert size={16} style={{ color: nivel.color }} />
                  <span style={{ color: nivel.color, fontWeight: 700, fontSize: "0.8rem" }}>{nivel.label}</span>
                </div>
              </div>

              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{nivel.desc}</p>

              <div style={{ marginBottom: "1rem" }}>
                <CheckRow
                  ok={result.spfExiste}
                  label="SPF"
                  detail={result.spfExiste ? "Configurado — autoriza qué servidores pueden enviar correo por tu dominio." : "No encontrado — cualquiera podría enviar correo haciéndose pasar por tu dominio."}
                />
                <CheckRow
                  ok={result.dkimSelectoresEncontrados.length > 0}
                  label="DKIM"
                  detail={result.dkimSelectoresEncontrados.length > 0 ? "Detectado — tus correos llevan una firma digital que confirma que no fueron alterados." : "No detectado en los selectores más comunes — puede que no esté configurado."}
                />
                <CheckRow
                  ok={result.dmarcExiste && result.dmarcPolicy !== "none"}
                  label="DMARC"
                  detail={
                    !result.dmarcExiste
                      ? "No encontrado — no hay política que le diga a Gmail/Outlook qué hacer con correos falsificados de tu dominio."
                      : result.dmarcPolicy === "none"
                      ? `Configurado en modo "none" — solo monitorea, no bloquea nada.`
                      : `Configurado en modo "${result.dmarcPolicy}" — protege activamente contra suplantación.`
                  }
                />
              </div>

              {result.mxHosts.length > 0 && (
                <div style={{ color: "#64748b", fontSize: "0.8rem" }}>
                  Correo alojado en: {result.mxHosts.join(", ")}
                </div>
              )}
            </div>
          )}

          {/* Desglose rápido + CTA + widget de prueba, justo debajo de la tarjeta */}
          {result && (
            <div style={{ marginTop: "1.5rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", padding: "1.75rem" }}>
              {/* 1. Desglose simple */}
              <div style={{ marginBottom: "1.5rem" }}>
                <QuickCheckLine
                  ok={result.spfExiste}
                  label="SPF"
                  text={result.spfExiste ? "Configurado" : "No encontrado"}
                />
                <QuickCheckLine
                  ok={result.dkimSelectoresEncontrados.length > 0}
                  label="DKIM"
                  text={result.dkimSelectoresEncontrados.length > 0 ? "Configurado" : "No detectado"}
                />
                <QuickCheckLine
                  ok={result.dmarcExiste && result.dmarcPolicy !== "none"}
                  label="DMARC"
                  text={
                    !result.dmarcExiste
                      ? "No detectado"
                      : result.dmarcPolicy === "none"
                      ? `No detectado o en modo "p=none"`
                      : `Configurado (p=${result.dmarcPolicy})`
                  }
                />
              </div>

              {/* 2. CTA de solución */}
              <a
                href={`https://wa.me/56976292908?text=${encodeURIComponent(
                  `Hola Netrix! Audité mi dominio ${result.dominio} en su web y quiero corregir mi entregabilidad con NETRIX MailEngine.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "0.9rem", borderRadius: "0.75rem", background: "#2563eb", color: "white", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", marginBottom: "1.5rem" }}
              >
                <Mail size={16} />
                Corregir mi entregabilidad con NETRIX MailEngine
              </a>

              {/* 3. Widget de prueba de envío real vía SES */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
                {testSent ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#4ade80", fontSize: "0.9rem", fontWeight: 600 }}>
                    <CheckCircle2 size={18} />
                    ¡Listo! Revisa tu bandeja de entrada — te llegó desde NETRIX MailEngine.
                  </div>
                ) : (
                  <>
                    <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
                      ¿Quieres ver la diferencia? Ingresa tu correo para enviarte una prueba procesada
                      desde AWS SES us-east-1 en 1 segundo.
                    </p>
                    <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                      <input
                        type="email"
                        value={testEmail}
                        onChange={(e) => setTestEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendTestEmail()}
                        placeholder="tu@correo.com"
                        style={{ flex: 1, minWidth: 180, padding: "0.75rem 1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontSize: "0.875rem", outline: "none" }}
                      />
                      <button
                        onClick={sendTestEmail}
                        disabled={testLoading || !testEmail.trim()}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", borderRadius: "0.75rem", background: testLoading ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "white", fontWeight: 600, fontSize: "0.875rem", cursor: testLoading ? "default" : "pointer", whiteSpace: "nowrap" }}
                      >
                        {testLoading ? <Loader2 size={15} className="spin" /> : <Send size={15} />}
                        {testLoading ? "Enviando..." : "Enviarme la prueba"}
                      </button>
                    </div>
                    {testError && (
                      <div style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "0.625rem" }}>{testError}</div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
