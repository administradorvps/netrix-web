"use client";

import { translations, type Lang } from "@/lib/i18n";
import { Globe, MessageCircle, Zap, Search, Code2, Smartphone, Shield } from "lucide-react";

const icons = [Globe, MessageCircle, Zap, Search, Code2, Smartphone, Shield];
const iconColors = ["text-blue-400","text-green-400","text-cyan-400","text-yellow-400","text-blue-400","text-purple-400","text-red-400"];
const iconBg    = ["bg-blue-500/10 border-blue-500/20","bg-green-500/10 border-green-500/20","bg-cyan-500/10 border-cyan-500/20","bg-yellow-500/10 border-yellow-500/20","bg-blue-500/10 border-blue-500/20","bg-purple-500/10 border-purple-500/20","bg-red-500/10 border-red-500/20"];

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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "1rem" }}>
          {t.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className={`group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/[0.12] transition-all duration-300 cursor-default overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 transition-all duration-300 ${iconBg[i]}`}>
                  <Icon size={18} className={iconColors[i]} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2.5">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
