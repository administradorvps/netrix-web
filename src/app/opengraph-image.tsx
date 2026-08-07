import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#06060e",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(59,130,246,0.25) 0%, transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width={90} height={90} viewBox="0 0 40 40" fill="none">
            <path
              d="M11 28V12L20 24V12"
              stroke="white"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 28V16L29 28V12"
              stroke="#3b82f6"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>
            <span style={{ color: "white" }}>NET</span>
            <span style={{ color: "#60a5fa" }}>RIX</span>
          </div>
        </div>
        <div style={{ display: "flex", color: "#94a3b8", fontSize: 32, marginTop: 24 }}>
          Transformando negocios con tecnología inteligente
        </div>
      </div>
    ),
    size
  );
}
