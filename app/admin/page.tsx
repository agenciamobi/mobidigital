import Link from "next/link";
import { LockKeyhole, ServerCog, UsersRound } from "lucide-react";
import { PageShell } from "@/components/ui";

export const metadata = {
  title: "Admin MOBI",
  description: "Prévia da área administrativa interna da MOBI Digital.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPlaceholderPage() {
  return (
    <PageShell>
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-page max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
              Admin MOBI
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">Painel administrativo em preparação</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Esta rota será protegida na etapa de autenticação. Ela será usada para clientes, sites, planos, templates, parceiros e provisionamento.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Clientes e parceiros",
                description: "Gestão de organizações, membros, planos e white label.",
                icon: UsersRound,
              },
              {
                title: "Provisionamento",
                description: "Jobs, logs, tentativas e integração futura com WHM/cPanel.",
                icon: ServerCog,
              },
              {
                title: "Acesso restrito",
                description: "Área administrativa futura com role admin e políticas de segurança.",
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

          <div className="mt-10 flex justify-center">
            <Link href="/" className="focus-ring rounded-full bg-ink px-6 py-3 text-center text-sm font-black text-white transition hover:bg-brand-700">
              Voltar para a home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
