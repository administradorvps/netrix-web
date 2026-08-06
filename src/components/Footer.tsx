"use client";

import NovaxisLogo from "./NovaxisLogo";
import { translations, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="container">
        {/* Top row: logo + nav */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <NovaxisLogo size={28} />
            <p style={{ color: "#334155", fontSize: "0.75rem", maxWidth: "22rem" }}>{t.tagline}</p>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { label: nav.services, href: "#services" },
              { label: nav.about, href: "#about" },
              { label: nav.contact, href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: "#475569", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#cbd5e1")}
                onMouseOut={e => (e.currentTarget.style.color = "#475569")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row: copyright left + LATAM badge right */}
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ color: "#334155", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Netrix. {t.rights}
          </span>

          {/* LATAM badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 1rem", borderRadius: "0.625rem", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", opacity: 0.8 }} />
            <span style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              LATAM &amp; Chile
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
