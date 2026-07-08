import type { Metadata } from "next";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 font-sans antialiased">{children}</body>
    </html>
  );
}
