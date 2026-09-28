"use client";

import { translations, type Lang } from "@/lib/i18n";

export default function Services({ lang }: { lang: Lang }) {
  const t = translations[lang].services;

  return (
    <section id="services" style={{ position: "relative", paddingTop: "6rem", paddingBottom: "6rem" }}>
      {/* separator line */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: 96, background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3), transparent)" }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ display: "block", color: "#60a5fa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {lang === "es" ? "Lo que hacemos" : "What we do"}
          </span>
          <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            {t.title}
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto" }}>
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
          {t.categories.map((cat, i) => (
            <div
              key={cat.number}
              className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.045] transition-all duration-300 overflow-hidden"
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.06)",
                marginTop: i % 2 === 1 ? "1.25rem" : 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = "#3b82f6"; e.currentTarget.style.borderLeftWidth = "2px"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderLeftWidth = "1px"; }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-0.5rem",
                  right: "0.75rem",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(96,165,250,0.14)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {cat.number}
              </span>
              <span className="text-blue-400/60 font-mono text-xs tracking-widest">{cat.number}</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {cat.tags.map((tag) => (
                  <span key={tag} className="text-slate-400 text-xs border border-white/[0.08] rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complementary capabilities */}
        <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.8rem", marginTop: "2.5rem", letterSpacing: "0.02em" }}>
          {t.complementary}
        </p>
      </div>
    </section>
  );
}
