"use client";

import { useState } from "react";
import { translations, type Lang } from "@/lib/i18n";
import { MessageCircle, Mail, ArrowRight, Send } from "lucide-react";

export default function Contact({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola Netrix! Soy ${name || "un interesado"}.\n\n${message || "Me interesa conocer sus servicios."}`);
    window.open(`https://wa.me/56900000000?text=${text}`, "_blank");
  };

  return (
    <section id="contact" style={{ position: "relative", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 350, borderRadius: "50%", background: "rgba(37,99,235,0.06)", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ display: "block", color: "#60a5fa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {lang === "es" ? "Contáctanos" : "Get in touch"}
          </span>
          <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            {t.title}
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "28rem", margin: "0 auto", lineHeight: 1.7 }}>
            {t.subtitle}
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "1.5rem", maxWidth: "56rem", margin: "0 auto" }}>
          {/* Form */}
          <div style={{ borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ color: "white", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
              {lang === "es" ? "Cuéntanos sobre tu proyecto" : "Tell us about your project"}
            </h3>
            <div>
              <label style={{ display: "block", color: "#64748b", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                {lang === "es" ? "Tu nombre" : "Your name"}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === "es" ? "Ej: Juan Pérez" : "e.g. John Doe"}
                style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "0.75rem 1rem", color: "white", fontSize: "0.875rem", outline: "none", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <div>
              <label style={{ display: "block", color: "#64748b", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                {lang === "es" ? "¿En qué podemos ayudarte?" : "How can we help?"}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === "es" ? "Cuéntanos qué necesitas..." : "Tell us what you need..."}
                style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "0.75rem 1rem", color: "white", fontSize: "0.875rem", outline: "none", resize: "none", transition: "border-color 0.2s", fontFamily: "inherit" }}
                onFocus={e => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <button
              onClick={handleWhatsApp}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "0.875rem", borderRadius: "0.75rem", background: "#2563eb", color: "white", fontWeight: 600, fontSize: "0.875rem", border: "none", cursor: "pointer", transition: "background 0.2s", boxShadow: "0 4px 24px rgba(37,99,235,0.2)" }}
              onMouseOver={e => (e.currentTarget.style.background = "#3b82f6")}
              onMouseOut={e => (e.currentTarget.style.background = "#2563eb")}
            >
              <Send size={16} />
              {lang === "es" ? "Enviar por WhatsApp" : "Send via WhatsApp"}
            </button>
          </div>

          {/* Contact options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", textDecoration: "none", transition: "all 0.3s", flex: 1 }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.25)"; e.currentTarget.style.background = "rgba(34,197,94,0.04)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: "0.75rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <MessageCircle size={18} style={{ color: "#4ade80" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.875rem" }}>WhatsApp</div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.cta}</div>
              </div>
              <ArrowRight size={15} style={{ color: "#475569", flexShrink: 0 }} />
            </a>

            <a
              href="mailto:contacto@netrix.io"
              style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", textDecoration: "none", transition: "all 0.3s", flex: 1 }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)"; e.currentTarget.style.background = "rgba(59,130,246,0.04)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: "0.75rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={18} style={{ color: "#60a5fa" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.875rem" }}>Email</div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: 2 }}>contacto@netrix.io</div>
              </div>
              <ArrowRight size={15} style={{ color: "#475569", flexShrink: 0 }} />
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.015)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", flexShrink: 0, animation: "pulse 2s infinite" }} />
              <p style={{ color: "#64748b", fontSize: "0.75rem", lineHeight: 1.5 }}>
                {lang === "es" ? "Respondemos en menos de 24 horas hábiles" : "We respond within 24 business hours"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
