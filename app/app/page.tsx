import Link from "next/link";
import { LayoutDashboard, LockKeyhole, Rocket } from "lucide-react";
import { PageShell } from "@/components/ui";

export const metadata = {
  title: "Painel do cliente",
  description: "Prévia do painel do cliente da MOBI Digital.",
};

export default function AppPlaceholderPage() {
  return (
    <PageShell>
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
              Painel do cliente
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">Área do cliente em preparação</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Esta rota será usada para login, sites, briefing guiado, domínio próprio, status de criação e prompt para Code With AI.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Meus sites",
                description: "Lista de sites criados, status e atalhos de acesso.",
                icon: LayoutDashboard,
              },
              {
                title: "Criação guiada",
                description: "Plano, briefing, identidade visual, SEO e domínio.",
                icon: Rocket,
              },
              {
                title: "Acesso seguro",
                description: "Autenticação, permissões e dados isolados por cliente.",
                icon: LockKeyhole,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xxl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-lg font-black text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/cadastro" className="focus-ring rounded-full bg-ink px-6 py-3 text-center text-sm font-black text-white transition hover:bg-brand-700">
              Ir para cadastro
            </Link>
            <Link href="/" className="focus-ring rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-black text-ink transition hover:bg-slate-100">
              Voltar para a home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
