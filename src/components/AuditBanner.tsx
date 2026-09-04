"use client";

import { translations, type Lang } from "@/lib/i18n";
import { ShieldAlert, ArrowRight } from "lucide-react";

export default function AuditBanner({ lang }: { lang: Lang }) {
  const t = translations[lang].auditBanner;

  return (
    <section style={{ position: "relative", paddingTop: "1rem", paddingBottom: "1rem" }}>
      <div className="container">
        <a
          href="/auditoria-correo"
          className="group relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-transparent p-8 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="w-12 h-12 rounded-xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center shrink-0">
              <ShieldAlert size={22} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">{t.title}</h3>
              <p className="text-slate-400 text-sm">{t.subtitle}</p>
            </div>
          </div>
          <span className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-blue-600 group-hover:bg-blue-500 text-white transition-all duration-200 shrink-0 whitespace-nowrap">
            {t.cta}
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
