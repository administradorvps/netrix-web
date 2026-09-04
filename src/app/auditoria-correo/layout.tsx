import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auditoría de Entregabilidad de Correo — Netrix",
  description:
    "Revisa gratis si tu dominio tiene SPF, DKIM y DMARC bien configurados. Descubre en segundos si tus correos masivos están llegando a spam.",
};

export default function AuditoriaCorreoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
