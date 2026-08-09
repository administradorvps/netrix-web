"use client";

import { useState, useRef, useEffect } from "react";
import { generateResponse, type BusinessConfig } from "@/lib/demoResponder";

interface Preset extends BusinessConfig {
  label: string;
}

const PRESETS: Preset[] = [
  {
    label: "Negocio genérico",
    name: "Tu Negocio",
    horario: "[completa el horario]",
    ubicacion: "[completa la ubicación]",
    servicios: "[completa servicios y precios, uno por línea]",
  },
  {
    label: "Mi Guapa (peluquería)",
    name: "Mi Guapa",
    horario: "Lunes a Sábado, 10:00 a 19:00 [confirmar]",
    ubicacion: "Vitacura, Santiago",
    servicios: "[completar servicios y precios reales antes de la llamada]",
  },
  {
    label: "Veranvior (peluquería)",
    name: "Veranvior",
    horario: "[completar horario real]",
    ubicacion: "Providencia, Santiago",
    servicios: "[completar servicios y precios reales antes de la llamada]",
  },
  {
    label: "Prisscolor (salón)",
    name: "Prisscolor",
    horario: "[completar horario real]",
    ubicacion: "Providencia, Santiago",
    servicios: "[completar servicios y precios reales antes de la llamada]",
  },
  {
    label: "Clínica Onsen (dental)",
    name: "Clínica Dental Onsen",
    horario: "Lunes a Viernes 09:00-19:00, Sábado 10:00-14:00",
    ubicacion: "Metro Pedro de Valdivia, Providencia",
    servicios: "[completar valores reales antes de la llamada]",
  },
  {
    label: "Odonty (dental)",
    name: "Odonty",
    horario: "[completar horario real]",
    ubicacion: "Providencia, Santiago",
    servicios: "[completar valores reales antes de la llamada]",
  },
  {
    label: "Clínica Enamel (dental)",
    name: "Clínica Dental Enamel",
    horario: "Lunes a Viernes 9:00-19:00 [confirmar]",
    ubicacion: "Ñuñoa, Santiago",
    servicios: "[completar valores reales antes de la llamada]",
  },
  {
    label: "Cocinería PyC (restaurante)",
    name: "Cocinería PyC",
    horario: "[completar horario real]",
    ubicacion: "[completar ubicación real]",
    servicios: "[completar menú y precios reales antes de la llamada]",
  },
];

interface Message {
  id: number;
  sender: "cliente" | "bot";
  text: string;
  time: string;
}

function now() {
  return new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" });
}

export default function DemoPage() {
  const [config, setConfig] = useState<BusinessConfig>(PRESETS[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const applyPreset = (preset: Preset) => {
    setConfig(preset);
    setMessages([]);
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: nextId.current++, sender: "cliente", text, time: now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const delay = 700 + Math.random() * 700;
    setTimeout(() => {
      const reply = generateResponse(text, config);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, sender: "bot", text: reply, time: now() },
      ]);
    }, delay);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#06060e", color: "#e2e8f0", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>
          Demo interna — Agente WhatsApp IA
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "2rem" }}>
          Configura el negocio y prueba cómo respondería el asistente. Página no indexada, solo para uso interno de Netrix.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 380px) 1fr", gap: "1.5rem" }}>
          {/* Config panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem" }}>
                Preset rápido
              </label>
              <select
                onChange={(e) => {
                  const preset = PRESETS.find((p) => p.label === e.target.value);
                  if (preset) applyPreset(preset);
                }}
                style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
              >
                {PRESETS.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            {(
              [
                ["name", "Nombre del negocio"],
                ["horario", "Horario"],
                ["ubicacion", "Ubicación"],
              ] as [keyof BusinessConfig, string][]
            ).map(([key, label]) => (
              <div key={key}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem" }}>
                  {label}
                </label>
                <input
                  value={config[key]}
                  onChange={(e) => setConfig((c) => ({ ...c, [key]: e.target.value }))}
                  style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
                />
              </div>
            ))}

            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem" }}>
                Servicios y precios (uno por línea)
              </label>
              <textarea
                rows={6}
                value={config.servicios}
                onChange={(e) => setConfig((c) => ({ ...c, servicios: e.target.value }))}
                style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontFamily: "inherit", resize: "vertical" }}
              />
            </div>

            <button
              onClick={() => setMessages([])}
              style={{ padding: "0.6rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#e2e8f0", cursor: "pointer" }}
            >
              Limpiar conversación
            </button>
          </div>

          {/* Chat window styled like WhatsApp */}
          <div style={{ borderRadius: "0.75rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", height: 560 }}>
            {/* Header */}
            <div style={{ background: "#075e54", padding: "0.9rem 1.1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>
                {config.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.95rem" }}>{config.name}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>
                  {isTyping ? "escribiendo..." : "en línea"}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                background: "#0b141a",
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {messages.length === 0 && (
                <div style={{ color: "#64748b", fontSize: "0.85rem", textAlign: "center", marginTop: "2rem" }}>
                  Escribe abajo como si fueras un cliente preguntando por horario, precios o para agendar hora.
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    alignSelf: msg.sender === "cliente" ? "flex-end" : "flex-start",
                    maxWidth: "75%",
                    background: msg.sender === "cliente" ? "#dcf8c6" : "white",
                    color: "#111",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.6rem",
                    whiteSpace: "pre-wrap",
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                  }}
                >
                  {msg.text}
                  <div style={{ fontSize: "0.65rem", color: "#64748b", textAlign: "right", marginTop: "0.25rem" }}>
                    {msg.time}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ alignSelf: "flex-start", background: "white", color: "#64748b", padding: "0.5rem 0.75rem", borderRadius: "0.6rem", fontSize: "0.875rem" }}>
                  escribiendo...
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ display: "flex", gap: "0.5rem", padding: "0.75rem", background: "#111827" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escribe como cliente..."
                style={{ flex: 1, padding: "0.6rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.1)", background: "#1f2937", color: "white", outline: "none" }}
              />
              <button
                onClick={send}
                style={{ padding: "0.6rem 1.2rem", borderRadius: "9999px", background: "#25d366", color: "#06060e", fontWeight: 700, border: "none", cursor: "pointer" }}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
