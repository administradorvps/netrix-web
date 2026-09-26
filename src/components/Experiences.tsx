"use client";

import Image from "next/image";
import { translations, type Lang } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

export default function Experiences({ lang }: { lang: Lang }) {
  const t = translations[lang].experiences;

  return (
    <section style={{ position: "relative", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ display: "block", color: "#60a5fa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {t.eyebrow}
          </span>
          <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            {t.title}
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto" }}>
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "1.25rem" }}>
          {t.items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/30 transition-all duration-300 overflow-hidden no-underline"
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#0a0e1a" }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 260px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-white font-semibold text-xl mt-1.5">{item.name}</h3>
                </div>
                <span className="flex items-center gap-1.5 text-blue-400 text-sm font-medium mt-3">
                  {t.viewDemo}
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Closing line */}
        <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "34rem", margin: "2.5rem auto 0" }}>
          {t.closing}
        </p>
      </div>
    </section>
  );
}
