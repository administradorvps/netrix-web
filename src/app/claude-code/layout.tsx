import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const title = "Claude Code: De Cero a Builder — Netrix";
const description =
  "Cómo crear webs, herramientas y aplicaciones con IA aunque nunca hayas programado. El método completo: IDEA → PLAN → BUILD → DEBUG → VERIFY → DEPLOY.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/claude-code`,
    siteName: "Netrix",
    locale: "es_CL",
    type: "website",
    images: ["/claude-code/portada.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/claude-code/portada.png"],
  },
  robots: { index: true, follow: true },
};

export default function ClaudeCodeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  );
}
