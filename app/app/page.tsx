import { LayoutDashboard, LockKeyhole, Rocket } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";

export const metadata = {
  title: "Painel do cliente",
  description: "Prévia do painel do cliente da MOBI Digital.",
};

export default function AppPlaceholderPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Painel do cliente"
        title="Área do cliente em preparação"
        description="Esta rota será usada para login, sites, briefing guiado, domínio próprio, status de criação e prompt para Code With AI."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
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

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <MobiButton href="/cadastro" variant="primary" size="md">
              Ir para cadastro
            </MobiButton>
            <MobiButton href="/" variant="secondary" size="md">
              Voltar para a home
            </MobiButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
