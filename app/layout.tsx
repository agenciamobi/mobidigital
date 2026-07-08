import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MOBI Digital | Sites com IA, hospedagem e suporte",
    template: "%s | MOBI Digital",
  },
  description:
    "Crie seu site profissional com IA, hospedagem, WordPress, domínio próprio e suporte da MOBI em um único fluxo.",
  metadataBase: new URL("https://mobidigital.com.br"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 font-sans antialiased">{children}</body>
    </html>
  );
}
