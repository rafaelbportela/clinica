import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Clínica Abirachid | Desenvolvimento infantil com acolhimento",
  description:
    "Atendimento especializado em desenvolvimento infantil, terapia ocupacional, integração sensorial e orientação familiar com cuidado humanizado.",
  keywords: [
    "Clínica Abirachid",
    "desenvolvimento infantil",
    "terapia ocupacional infantil",
    "integração sensorial",
    "orientação familiar",
    "clínica infantil"
  ],
  openGraph: {
    title: "Clínica Abirachid",
    description: "Desenvolvimento com cuidado, acolhimento e propósito.",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
