import Link from "next/link";
import { PageShell } from "@/components/ui";
import { whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Entrar",
  description: "Login em preparação para a plataforma MOBI Digital.",
};

export default function EntrarPage() {
  return (
    <PageShell>
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
            Acesso
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">Login em preparação</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            O painel do cliente será ativado na próxima etapa. Por enquanto, a frente comercial pública já está preparada para deploy.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsAppLink} target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-ink px-6 py-3 text-sm font-black text-white transition hover:bg-brand-700">
              Falar no WhatsApp
            </a>
            <Link href="/" className="focus-ring rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-slate-100">
              Voltar para a home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
