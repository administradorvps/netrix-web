"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/F107793495F";

const display = { fontFamily: "var(--font-display)" };
const mono = { fontFamily: "var(--font-mono)" };

// Espaciado: el reset global de Netrix (globals.css) pone `* { margin:0; padding:0 }`
// fuera de las capas de Tailwind, lo que anula las utilidades px-/mx-auto/mt- etc.
// Por eso, igual que el resto del sitio, el espaciado de esta página va inline.
const wrap: React.CSSProperties = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "0 clamp(20px, 5vw, 40px)",
};
const sectionPad: React.CSSProperties = { padding: "clamp(64px, 9vw, 112px) 0" };

const manifesto = [
  { a: "No necesitas saber programar.", b: "Necesitas saber dirigir." },
  { a: "Claude escribe gran parte del código.", b: "Tú decides qué merece la pena construir." },
  { a: "Primero observar.", b: "Después actuar." },
  { a: "Divide. Construye. Verifica.", b: "Continúa." },
  { a: "Un error no es un fracaso.", b: "Es una directriz." },
  { a: "Una interfaz bonita", b: "no es un producto terminado." },
  { a: "Nunca publiques tus secretos.", b: "Nunca inventes los datos de un cliente." },
  { a: "Nadie compra código.", b: "Compran resultados." },
];

const skills = [
  "Entender cómo funciona la IA en la terminal sin necesidad de conocimientos previos.",
  "Dominar el arte de guiar a la inteligencia artificial mediante instrucciones claras y estructuradas.",
  "Construir aplicaciones, herramientas y webs funcionales desde una simple idea.",
  "Resolver los errores comunes sin entrar en pánico.",
  "Desplegar tus proyectos en internet para que cualquier persona del mundo pueda usarlos.",
  "Monetizar tus habilidades: micro-SaaS, prototipos para negocios locales o servicios profesionales.",
];

const toc = [
  { n: "00", t: "Introducción", d: "El día en que la programación dejó de importar" },
  { n: "01", t: "La barrera técnica está cambiando", d: "Programador vs. Builder" },
  { n: "02", t: "Tu nuevo compañero de trabajo", d: "Qué es Claude Code y tu primera conversación" },
  { n: "03", t: "El secreto no es programar", d: "Es saber dirigir: el Prompt Maestro" },
  { n: "04", t: "De una idea a un proyecto", d: "El caso práctico" },
  { n: "05", t: "Añadiendo superpoderes al proyecto", d: "Secciones y funcionalidad" },
  { n: "06", t: "El protocolo de Debugging con IA", d: "Cuando las cosas salen mal" },
  { n: "07", t: "Pon tu proyecto en Internet", d: "Deployment sin miedo" },
  { n: "08", t: "Monetiza tus superpoderes", d: "Cómo convertir código en ingresos" },
  { n: "FP", t: "Proyecto final: From Idea to Internet", d: "El ciclo completo del Builder", sep: true },
  { n: "BN", t: "Bonus: The Builder Prompt Library", d: "15 instrucciones maestras" },
  { n: "CL", t: "Builder Checklists", d: "Todos los checkpoints en un solo lugar" },
];

const routes = [
  { l: "A", via: "LA VÍA DE SERVICIO", h: "Landing Pages y Demos orientadas a conversión", p: "Vendes un servicio concreto sin necesitar primero una audiencia o un producto propio. Muchos negocios locales tienen una presencia digital desactualizada o poco adaptada al móvil." },
  { l: "B", via: "LA VÍA DE PRODUCTO", h: "Micro-SaaS o herramientas de nicho", p: "Pequeños nichos necesitan herramientas específicas que el software grande no cubre bien o cobra demasiado caro. No empieces por el precio. Empieza por el problema." },
  { l: "C", via: "LA VÍA DE PROYECTOS", h: "Freelancing potenciado por IA", p: "Aceleras interfaces, prototipos, componentes y MVPs. La ventaja no es ser más rápido que un desarrollador experimentado, sino poder asumir proyectos que antes no podías." },
  { l: "D", via: "LA VÍA DE SOLUCIONES", h: "Automatizaciones y herramientas internas", p: "Calculadoras a medida, formularios inteligentes, paneles internos, generadores de documentos: utilidades que un negocio necesita y nadie le ha construido todavía." },
];

const included = [
  "El libro completo — Introducción + 8 capítulos",
  "Proyecto final: From Idea to Internet (10 etapas)",
  "Bonus: The Builder Prompt Library — 15 instrucciones maestras",
  "Builder Checklists — todos los checkpoints en un solo lugar",
  "Formato PDF, acceso inmediato tras la compra",
];

const promptFields = [
  { k: "CONTEXTO", v: "Landing page para una peluquería urbana de alta gama llamada Barber & Style. Proyecto en blanco. Antes de implementar, analiza los requisitos y recomiéndame un stack tecnológico adecuado." },
  { k: "OBJETIVO", v: "Captar reservas rápidas mediante un botón flotante y un formulario simplificado, con estética minimalista y profesional." },
  { k: "RESTRICCIONES", v: "No uses librerías de componentes pesadas; diseña todo a medida. La web debe ser 100% responsiva." },
  { k: "PLAN", v: "Antes de escribir código, preséntame un plan detallado de la estructura de archivos y espera mi aprobación." },
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ ...mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.3em", color: "#B7FF00", textTransform: "uppercase", marginBottom: 16 }}>
      {children}
    </div>
  );
}

function FlowRow({ steps, activeIndex }: { steps: string[]; activeIndex?: number }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, ...mono }}>
      {steps.map((step, i) => (
        <div key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              border: `1px solid ${i === activeIndex ? "#B7FF00" : "#222"}`,
              borderRadius: 4,
              padding: "6px 10px",
              color: i === activeIndex ? "#B7FF00" : "#A1A1A1",
            }}
          >
            {step}
          </span>
          {i < steps.length - 1 && <span style={{ color: "#B7FF00", fontSize: 12 }}>→</span>}
        </div>
      ))}
    </div>
  );
}

function CtaButton({ big = false }: { big?: boolean }) {
  return (
    <a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...display,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#B7FF00",
        color: "#050505",
        fontWeight: 700,
        fontSize: big ? 16 : 14,
        letterSpacing: "0.01em",
        padding: big ? "20px 36px" : "16px 28px",
        borderRadius: 6,
        whiteSpace: "nowrap",
      }}
      className="cc-cta"
    >
      QUIERO SER BUILDER
      <ArrowRight size={big ? 19 : 17} strokeWidth={2.5} />
    </a>
  );
}

export default function ClaudeCodeLanding() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh", color: "#F5F5F5", fontFamily: "var(--font-body)" }}>
      <style>{`
        .cc-cta { transition: background-color .2s; }
        .cc-cta:hover { background: #cbff4d; }
        .cc-ghost { transition: color .2s; }
        .cc-ghost:hover { color: #F5F5F5; }
        .cc-cover { transition: transform .5s; }
        .cc-cover:hover { transform: rotate(0deg) !important; }
      `}</style>

      {/* ============ TOP BAR ============ */}
      <header style={{ ...wrap, paddingTop: 32, display: "flex", alignItems: "center", gap: 16 }}>
        <a href="https://netrix.cl" style={{ ...mono, fontSize: 12, letterSpacing: "0.25em", color: "#A1A1A1" }} className="cc-ghost">
          NETRIX
        </a>
        <div style={{ height: 1, flex: 1, background: "#222" }} />
        <span style={{ ...mono, fontSize: 12, letterSpacing: "0.2em", color: "#5E5E5E" }}>
          THE BUILDER MANUAL
        </span>
      </header>

      {/* ============ HERO ============ */}
      <section style={{ ...wrap, paddingTop: "clamp(48px,8vw,80px)", paddingBottom: 80 }} className="cc-hero">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="cc-hero-grid">
          <div>
            <div style={{ ...mono, fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", color: "#B7FF00", marginBottom: 20 }}>
              CLAUDE CODE
            </div>
            <h1
              style={{ ...display, fontSize: "clamp(2.8rem, 7vw, 5.4rem)", lineHeight: 0.94, letterSpacing: "-0.02em", fontWeight: 700, margin: 0 }}
            >
              DE CERO
              <br />
              A <span style={{ color: "#B7FF00" }}>BUILDER.</span>
            </h1>
            <p style={{ marginTop: 24, color: "#A1A1A1", fontSize: "clamp(1rem, 1.6vw, 1.15rem)", lineHeight: 1.6, maxWidth: "34rem" }}>
              Cómo crear webs, herramientas y aplicaciones con IA — aunque nunca hayas programado.
            </p>

            <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
              <CtaButton big />
              <a
                href="#recorrido"
                style={{ fontSize: 14, color: "#A1A1A1", textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "#333" }}
                className="cc-ghost"
              >
                Ver qué incluye ↓
              </a>
            </div>

            <div style={{ marginTop: 48 }}>
              <FlowRow steps={["IDEA", "CLAUDE CODE", "VERCEL", "INGRESOS"]} />
            </div>
          </div>

          <div style={{ position: "relative", margin: "0 auto", maxWidth: 320, width: "100%" }}>
            <div
              style={{
                position: "absolute", inset: -30, borderRadius: "50%", opacity: 0.3, filter: "blur(60px)",
                background: "radial-gradient(circle, rgba(183,255,0,0.25), transparent 70%)",
              }}
            />
            <div
              className="cc-cover"
              style={{
                position: "relative", borderRadius: 10, overflow: "hidden", border: "1px solid #222",
                boxShadow: "0 40px 100px -20px rgba(0,0,0,0.8)", transform: "rotate(1.5deg)",
              }}
            >
              <Image
                src="/claude-code/portada.png"
                alt="Claude Code — De Cero a Builder"
                width={700}
                height={1120}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANIFESTO ============ */}
      <section style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, ...sectionPad }}>
          <SectionKicker>The Builder Manifesto</SectionKicker>
          <h2 style={{ ...display, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 48px" }}>
            Antes de empezar.
          </h2>
          <ol style={{ maxWidth: "46rem", listStyle: "none" }}>
            {manifesto.map((m, i) => (
              <li
                key={i}
                style={{
                  display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: 16, padding: "16px 0",
                  borderTop: "1px solid #1c1c1c", alignItems: "baseline",
                }}
              >
                <span style={{ ...mono, fontSize: 11, color: "#B7FF00", letterSpacing: "0.05em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ ...display, fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 500, lineHeight: 1.4 }}>
                  {m.a} <span style={{ color: "#A1A1A1", fontWeight: 400 }}>{m.b}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ NO ES OTRO CURSO DE PROMPTS ============ */}
      <section style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, ...sectionPad }}>
          <SectionKicker>El método</SectionKicker>
          <h2 style={{ ...display, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", maxWidth: "38rem", margin: "0 0 20px" }}>
            No es otro curso de prompts.
          </h2>
          <p style={{ color: "#A1A1A1", fontSize: "clamp(1rem, 1.6vw, 1.15rem)", lineHeight: 1.6, maxWidth: "38rem", margin: "0 0 32px" }}>
            La razón principal por la que la gente se frustra usando IA para crear software es simple:
            le piden a la herramienta que adivine lo que tienen en la cabeza. Este libro te da un método
            estructurado para dirigirla.
          </p>

          <FlowRow steps={["IDEA", "PLAN", "BUILD", "DEBUG", "VERIFY", "DEPLOY"]} activeIndex={5} />

          {/* Prompt block — página arrancada del libro */}
          <div
            style={{
              marginTop: 56, maxWidth: "42rem", borderRadius: 8, border: "1px solid #222",
              background: "#0B0B0B", overflow: "hidden", boxShadow: "inset 2px 0 0 #B7FF00",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: "1px solid #222", background: "#0E0E0E" }}>
              <span style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#B7FF00", display: "block" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2a2a2a", display: "block" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2a2a2a", display: "block" }} />
              </span>
              <span style={{ ...mono, fontSize: 10, letterSpacing: "0.2em", color: "#F5F5F5", fontWeight: 700 }}>BUILDER PROMPT</span>
              <span style={{ ...mono, fontSize: 10, letterSpacing: "0.2em", color: "#5E5E5E", marginLeft: "auto" }}>PROMPT MAESTRO</span>
            </div>
            <div style={{ padding: "24px clamp(20px,4vw,28px)", display: "flex", flexDirection: "column", gap: 18 }}>
              {promptFields.map((row) => (
                <div key={row.k}>
                  <div style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#B7FF00", marginBottom: 6 }}>
                    {row.k}
                  </div>
                  <div style={{ ...mono, fontSize: 13, lineHeight: 1.65, color: "#E6E6E6" }}>{row.v}</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ ...mono, marginTop: 16, fontSize: 13, color: "#5E5E5E", maxWidth: "42rem" }}>
            → así se ve un Prompt de Builder real, sacado directamente del libro.
          </p>
        </div>
      </section>

      {/* ============ QUÉ VAS A LOGRAR ============ */}
      <section style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, ...sectionPad, display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48 }} className="cc-skills-grid">
          <div>
            <SectionKicker>Al terminar el libro</SectionKicker>
            <h2 style={{ ...display, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>
              Vas a ser capaz de:
            </h2>
          </div>
          <div style={{ borderRadius: 8, border: "1px solid #222", background: "#0B0B0B", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", borderBottom: "1px solid #222", ...mono }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#B7FF00" }}>✓ BUILDER OUTCOMES</span>
              <span style={{ fontSize: 11, color: "#5E5E5E", marginLeft: "auto" }}>06 SKILLS</span>
            </div>
            <ul style={{ listStyle: "none" }}>
              {skills.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px", fontSize: 15,
                    lineHeight: 1.5, color: "#DADADA",
                    borderBottom: i < skills.length - 1 ? "1px dashed #1c1c1c" : "none",
                  }}
                >
                  <Check size={16} color="#B7FF00" style={{ marginTop: 3, flexShrink: 0 }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ RECORRIDO / TOC ============ */}
      <section id="recorrido" style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, ...sectionPad }}>
          <SectionKicker>El recorrido</SectionKicker>
          <h2 style={{ ...display, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 48px" }}>
            12 secciones. Un solo sistema.
          </h2>
          <div style={{ maxWidth: "50rem" }}>
            {toc.map((row) => (
              <div
                key={row.n}
                style={{
                  display: "grid", gridTemplateColumns: "3rem 1fr", gap: 16, padding: "14px 0",
                  borderTop: "1px solid #1c1c1c", alignItems: "baseline", marginTop: row.sep ? 16 : 0,
                }}
              >
                <span style={{ ...mono, fontSize: 11, letterSpacing: "0.05em", color: row.sep ? "#4D7CFE" : "#B7FF00" }}>
                  {row.n}
                </span>
                <div>
                  <div style={{ ...display, fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 600, color: "#F5F5F5", lineHeight: 1.3 }}>
                    {row.t}
                  </div>
                  <div style={{ fontSize: 14, color: "#A1A1A1", marginTop: 4 }}>{row.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RUTAS DE MONETIZACIÓN ============ */}
      <section style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, ...sectionPad }}>
          <SectionKicker>Qué puedes hacer con esto</SectionKicker>
          <h2 style={{ ...display, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", maxWidth: "36rem", margin: "0 0 48px" }}>
            4 rutas para convertir código en ingresos.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }} className="cc-routes-grid">
            {routes.map((r) => (
              <div key={r.l} style={{ display: "grid", gridTemplateColumns: "3rem 1fr", gap: 16, padding: "24px 0", borderTop: "1px solid #1c1c1c" }}>
                <span style={{ ...display, fontSize: 36, fontWeight: 700, lineHeight: 1, WebkitTextStroke: "1px #B7FF00", color: "transparent" }}>
                  {r.l}
                </span>
                <div>
                  <div style={{ ...mono, fontSize: 10, letterSpacing: "0.2em", color: "#B7FF00", marginBottom: 6 }}>{r.via}</div>
                  <h3 style={{ ...display, fontSize: 18, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>{r.h}</h3>
                  <p style={{ fontSize: 14, color: "#A1A1A1", lineHeight: 1.6, margin: 0 }}>{r.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, padding: "clamp(64px,9vw,112px) clamp(20px,5vw,40px) clamp(80px,10vw,140px)" }}>
          <div
            style={{
              borderRadius: 16, border: "1px solid #222", background: "#0B0B0B",
              padding: "clamp(32px,5vw,56px)", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
            }}
            className="cc-final-grid"
          >
            <div>
              <SectionKicker>Incluye</SectionKicker>
              <h2 style={{ ...display, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em", maxWidth: "28rem", margin: "0 0 24px" }}>
                Todo lo que necesitas para empezar a construir.
              </h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {included.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#DADADA" }}>
                    <Check size={16} color="#B7FF00" style={{ marginTop: 4, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ ...mono, fontSize: 13, color: "#5E5E5E", maxWidth: "28rem", margin: 0 }}>
                ESTO NO ES UNA FÓRMULA MÁGICA. ES UN MÉTODO.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ ...display, fontSize: 40, fontWeight: 700, color: "#F5F5F5", lineHeight: 1 }}>
                  US$19<span style={{ fontSize: 20, color: "#A1A1A1" }}>,99</span>
                </div>
                <div style={{ ...mono, fontSize: 10, letterSpacing: "0.15em", color: "#5E5E5E", marginTop: 6 }}>
                  PAGO ÚNICO
                </div>
              </div>
              <CtaButton big />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ borderTop: "1px solid #161616" }}>
        <div style={{ ...wrap, padding: "40px clamp(20px,5vw,40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <a href="https://netrix.cl" style={{ ...mono, fontSize: 12, letterSpacing: "0.2em", color: "#A1A1A1" }} className="cc-ghost">
            UN PRODUCTO DE NETRIX
          </a>
          <span style={{ ...mono, fontSize: 10, letterSpacing: "0.15em", color: "#3a3a3a" }}>
            CLAUDE CODE — DE CERO A BUILDER
          </span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 820px) {
          .cc-hero-grid { grid-template-columns: 1fr !important; }
          .cc-skills-grid { grid-template-columns: 1fr !important; }
          .cc-routes-grid { grid-template-columns: 1fr !important; }
          .cc-final-grid { grid-template-columns: 1fr !important; }
          .cc-final-grid > a { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}
