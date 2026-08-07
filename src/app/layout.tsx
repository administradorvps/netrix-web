import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Netrix — Transforming businesses through intelligent technology";
const description =
  "Netrix ofrece soluciones tecnológicas avanzadas: automatización con IA, desarrollo web, agente WhatsApp, sistemas a medida, auditorías y más.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: "automatización IA, desarrollo web, WhatsApp IA, sistemas empresariales, LATAM, Chile",
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Netrix",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
