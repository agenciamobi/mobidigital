import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MobiFloatingContact } from "@/components/mobi-floating-contact";
import "./globals.css";

const siteUrl = "https://mobidigital.com.br";
const siteDescription =
  "Crie seu site profissional com IA, hospedagem, WordPress, domínio próprio e suporte da MOBI em um único fluxo.";

export const metadata: Metadata = {
  title: {
    default: "MOBI Digital | Sites com IA, hospedagem e suporte",
    template: "%s | MOBI Digital",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "MOBI Digital",
    title: "MOBI Digital | Sites com IA, hospedagem e suporte",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "MOBI Digital | Sites com IA, hospedagem e suporte",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-page font-sans antialiased">
        <a
          href="#conteudo-principal"
          className="focus-ring sr-only fixed left-4 top-4 z-[100] rounded-sm bg-ink px-4 py-3 text-sm font-black uppercase tracking-tight text-white focus:not-sr-only"
        >
          Pular para conteúdo
        </a>
        {children}
        <MobiFloatingContact />
      </body>
    </html>
  );
}
