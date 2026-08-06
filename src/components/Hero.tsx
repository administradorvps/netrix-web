"use client";

import { translations, type Lang } from "@/lib/i18n";

interface HeroProps {
  lang: Lang;
}

function Logo3D() {
  const size = 148;
  return (
    <div className="logo-3d-scene" style={{ width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="hero-float" style={{ position: "relative", width: size, height: size }}>
        {/* Glow behind */}
        <div
          className="glow-pulse"
          style={{
            position: "absolute",
            width: size + 80,
            height: size + 80,
            top: -40,
            left: -40,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(34,211,238,0.1) 50%, transparent 75%)",
            pointerEvents: "none",
          }}
        />

        <div className="logo-3d-inner" style={{ position: "relative", width: size, height: size }}>
          {/* Orbit ring 1 */}
          <div className="orbit-ring-1" style={{ position: "absolute", inset: 0 }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ position: "absolute" }}>
              <ellipse cx={size/2} cy={size/2} rx={size/2 - 4} ry={size/2 - 30} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
              <circle cx={size - 4} cy={size/2} r="3.5" fill="#60a5fa" opacity="0.9" />
            </svg>
          </div>
          {/* Orbit ring 2 */}
          <div className="orbit-ring-2" style={{ position: "absolute", inset: 0 }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ position: "absolute" }}>
              <ellipse cx={size/2} cy={size/2} rx={size/2 - 4} ry={size/2 - 30} stroke="#22d3ee" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />
              <circle cx="4" cy={size/2} r="3" fill="#22d3ee" opacity="0.85" />
            </svg>
          </div>
          {/* Orbit ring 3 */}
          <div className="orbit-ring-3" style={{ position: "absolute", inset: 0 }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ position: "absolute" }}>
              <ellipse cx={size/2} cy={size/2} rx={size/2 - 4} ry={size/2 - 30} stroke="#818cf8" strokeWidth="1" strokeDasharray="3 5" opacity="0.35" />
              <circle cx={size/2} cy="4" r="2.5" fill="#818cf8" opacity="0.7" />
            </svg>
          </div>

          {/* Central hexagon + N */}
          <div style={{ position: "absolute", width: 88, height: 88, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{ position: "absolute" }}>
              <polygon points="44,4 80,24 80,64 44,84 8,64 8,24" fill="rgba(30,58,95,0.6)" stroke="#3b82f6" strokeWidth="1.5" opacity="0.9" />
              <polygon points="44,12 72,28 72,60 44,76 16,60 16,28" fill="rgba(15,30,60,0.7)" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
            </svg>
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{ position: "absolute" }}>
              <path d="M26 62V26L44 52V26" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M44 62V36L62 62V26" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="44" cy="44" r="3.5" fill="#60a5fa" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.022,
        backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        pointerEvents: "none",
      }} />
      {/* Glows */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 500, borderRadius: "50%", background: "rgba(59,130,246,0.07)", filter: "blur(140px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "33%", left: "25%", width: 300, height: 300, borderRadius: "50%", background: "rgba(34,211,238,0.05)", filter: "blur(90px)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%", maxWidth: "48rem", margin: "0 auto", gap: "1.5rem" }}>
        {/* 3D Logo */}
        <Logo3D />

        {/* Wordmark */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
          <span style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 800, letterSpacing: "0.18em", color: "white", lineHeight: 1 }}>
            NET<span style={{ color: "#60a5fa" }}>RIX</span>
          </span>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#475569" }}>
            {t.titleHighlight}
          </span>
        </div>

        {/* Subtitle */}
        <p style={{ color: "#94a3b8", fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)", lineHeight: 1.7, maxWidth: "36rem" }}>
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", width: "100%" }}>
          <a
            href="#services"
            style={{ padding: "0.75rem 2rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#e2e8f0", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", transition: "all 0.25s" }}
            onMouseOver={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.color = "white"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,99,235,0.3)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {t.cta}
          </a>
          <a
            href="#contact"
            style={{ padding: "0.75rem 2rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#e2e8f0", fontWeight: 500, fontSize: "0.875rem", textDecoration: "none", transition: "all 0.25s" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.background = "rgba(59,130,246,0.08)"; e.currentTarget.style.color = "white"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#e2e8f0"; }}
          >
            {t.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(1.5rem, 5vw, 4rem)", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", width: "100%" }}>
          {[
            { value: "100%", label: lang === "es" ? "A medida" : "Custom" },
            { value: "24/7", label: lang === "es" ? "Soporte" : "Support" },
            { value: "IA", label: lang === "es" ? "Tecnología" : "Technology" },
          ].map((stat, i) => (
            <div key={stat.value} style={{ textAlign: "center", position: "relative" }}>
              {i > 0 && <div style={{ position: "absolute", left: "clamp(-1.5rem, -3vw, -2.5rem)", top: "50%", transform: "translateY(-50%)", width: 1, height: 24, background: "rgba(255,255,255,0.07)" }} />}
              <div style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>{stat.value}</div>
              <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
