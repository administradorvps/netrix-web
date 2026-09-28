import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "Netrix — Diseñamos lo digital. Construimos lo que hay detrás.";
const description =
  "Diseño, tecnología y automatización para hacer crecer negocios: experiencias digitales, IA, sistemas a medida y seguridad.";

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
      className={`${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen w-full bg-[#06060e] text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
