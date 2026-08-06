"use client";

import { useEffect, useRef, useState } from "react";
import { translations, type Lang } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

function AnimatedBar({ pct, color }: { pct: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setWidth(pct), 200); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);
  return (
    <div ref={ref} style={{ height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`} style={{ width: `${width}%` }} />
    </div>
  );
}

export default function About({ lang }: { lang: Lang }) {
  const t = translations[lang].about;
  const skills = [
    { label: lang === "es" ? "Infraestructura" : "Infrastructure", pct: 95, color: "bg-gradient-to-r from-blue-500 to-blue-400" },
    { label: lang === "es" ? "Automatización IA" : "AI Automation",  pct: 90, color: "bg-gradient-to-r from-cyan-500 to-cyan-400" },
    { label: lang === "es" ? "Desarrollo Web" : "Web Development",   pct: 88, color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
    { label: lang === "es" ? "Ciberseguridad" : "Cybersecurity",      pct: 82, color: "bg-gradient-to-r from-blue-600 to-blue-400" },
  ];

  return (
    <section id="about" style={{ position: "relative", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: 500, height: 400, borderRadius: "50%", background: "rgba(59,130,246,0.04)", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ display: "block", color: "#60a5fa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {lang === "es" ? "Quiénes somos" : "Who we are"}
          </span>
          <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            {t.title}
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto" }}>
            {t.subtitle}
          </p>
        </div>

        {/* Two-column layout — fixed 50/50 on desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "3rem", alignItems: "center" }}>
          {/* Skills card */}
          <div style={{ position: "relative", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)", padding: "2rem", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ color: "#cbd5e1", fontWeight: 500, fontSize: "0.875rem" }}>{skill.label}</span>
                    <span style={{ color: "#60a5fa", fontWeight: 700, fontSize: "0.875rem", minWidth: "3rem", textAlign: "right" }}>{skill.pct}%</span>
                  </div>
                  <AnimatedBar pct={skill.pct} color={skill.color} />
                </div>
              ))}
            </div>
          </div>

          {/* Points */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {t.points.map((point) => (
                <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={18} style={{ color: "#60a5fa", marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
