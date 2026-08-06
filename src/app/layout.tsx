import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netrix — Transforming businesses through intelligent technology",
  description:
    "Netrix ofrece soluciones tecnológicas avanzadas: automatización con IA, desarrollo web, agente WhatsApp, sistemas a medida, auditorías y más.",
  keywords: "automatización IA, desarrollo web, WhatsApp IA, sistemas empresariales, LATAM, Chile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen w-full bg-[#06060e] text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
