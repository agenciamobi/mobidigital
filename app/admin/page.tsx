import { Activity, ArrowRight, Bot, LockKeyhole, ServerCog, UsersRound } from "lucide-react";
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

const adminCards = [
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
];

const queueItems = [
  { label: "Novos cadastros", value: "12" },
  { label: "Domínios em análise", value: "05" },
  { label: "Jobs pendentes", value: "08" },
  { label: "Sites em revisão", value: "03" },
];

export default function AdminPlaceholderPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Admin MOBI"
        title="Painel administrativo em preparação"
        description="Esta rota será protegida na etapa de autenticação. Ela será usada para clientes, sites, planos, templates, parceiros e provisionamento."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="grid gap-5">
              {adminCards.map((item) => {
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

            <article className="rounded-lg border border-ink bg-ink p-6 text-white shadow-editorial sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/15 pb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Operação interna</p>
                  <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.07em]">Fila de criação e suporte</h2>
                </div>
                <Activity className="h-10 w-10 text-orange-300" aria-hidden="true" />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {queueItems.map((item) => (
                  <div key={item.label} className="rounded-md border border-white/15 bg-white/[0.04] p-5">
                    <p className="text-5xl font-black tracking-[-0.08em] text-white">{item.value}</p>
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-white/45">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-md border border-white/15 bg-white/[0.04] p-5">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-orange-300" aria-hidden="true" />
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-white/45">Prompt operacional</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  A administração deve enxergar briefing, plano, domínio, status técnico e próximos comandos antes de qualquer automação executar.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-10 flex justify-center">
            <MobiButton href="/" variant="primary" size="md">
              Voltar para a home <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MobiButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
