"use client";

import { useState, useEffect } from "react";
import NovaxisLogo from "./NovaxisLogo";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.services, href: "/#services" },
    { label: t.about, href: "/#about" },
    { label: t.contact, href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060e]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container" style={{ height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <NovaxisLogo size={32} />

        {/* Desktop links */}
        <div style={{ display: "none", gap: "2rem" }} className="md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => onLangChange(lang === "es" ? "en" : "es")}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href="/#contact"
            className="hidden md:flex items-center text-sm font-medium px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            {t.contact}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Menu"
          >
            <div style={{ width: "1.25rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#06060e]/95 backdrop-blur-xl border-t border-white/5 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200"
          >
            {t.contact}
          </a>
        </div>
      )}
    </header>
  );
}
