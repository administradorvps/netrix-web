"use client";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function NovaxisLogo({
  className = "",
  showText = true,
  size = 40,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbit ring */}
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6.5"
          stroke="#3b82f6"
          strokeWidth="1.1"
          strokeDasharray="3 2"
          opacity="0.5"
          transform="rotate(-30 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6.5"
          stroke="#22d3ee"
          strokeWidth="0.9"
          strokeDasharray="2 3"
          opacity="0.3"
          transform="rotate(30 20 20)"
        />
        {/* N letter */}
        <path
          d="M11 28V12L20 24V12"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 28V16L29 28V12"
          stroke="#3b82f6"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center node */}
        <circle cx="20" cy="20" r="1.8" fill="#3b82f6" />
        <circle cx="20" cy="20" r="3.2" stroke="#3b82f6" strokeWidth="0.7" opacity="0.4" />
        {/* Corner nodes */}
        <circle cx="11" cy="12" r="1.1" fill="#60a5fa" opacity="0.7" />
        <circle cx="29" cy="12" r="1.1" fill="#60a5fa" opacity="0.7" />
        <circle cx="11" cy="28" r="1.1" fill="#60a5fa" opacity="0.7" />
        <circle cx="29" cy="28" r="1.1" fill="#60a5fa" opacity="0.7" />
      </svg>

      {showText && (
        <span
          className="font-bold tracking-widest text-white"
          style={{ fontSize: size * 0.48, letterSpacing: "0.14em" }}
        >
          NET<span className="text-blue-400">RIX</span>
        </span>
      )}
    </div>
  );
}
