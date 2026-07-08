import { LockKeyhole, ServerCog, UsersRound } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";

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
      <PageHero
        eyebrow="Admin MOBI"
        title="Painel administrativo em preparação"
        description="Esta rota será protegida na etapa de autenticação. Ela será usada para clientes, sites, planos, templates, parceiros e provisionamento."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
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
                <article key={item.title} className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-editorial">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700 transition group-hover:bg-ink group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-black tracking-[-0.05em] text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <MobiButton href="/" variant="primary" size="md">
              Voltar para a home
            </MobiButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
