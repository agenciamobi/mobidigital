import { ArrowRight, CheckCircle2, Globe2, LayoutDashboard, LockKeyhole, MessageCircle, Rocket } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";
import { whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Painel do cliente",
  description: "Prévia do painel do cliente da MOBI Digital.",
};

const appCards = [
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
];

const statusSteps = ["Plano escolhido", "Briefing recebido", "Domínio em análise", "Site em preparação", "Publicação assistida"];

export default function AppPlaceholderPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Painel do cliente"
        title="Área do cliente em preparação"
        description="Esta rota será usada para login, sites, briefing guiado, domínio próprio, status de criação e prompt para Code With AI."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
                {appCards.map((item) => {
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
            </div>

            <article className="rounded-lg border border-ink bg-ink p-6 text-white shadow-editorial sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Prévia do painel</p>
                  <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.07em]">Site Pro com IA</h2>
                </div>
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/70">Em estruturação</span>
              </div>

              <div className="mt-8 grid gap-4">
                {statusSteps.map((step, index) => (
                  <div key={step} className="grid gap-4 rounded-md border border-white/15 bg-white/[0.04] p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <span className="text-2xl font-black text-white/25">0{index + 1}</span>
                    <div>
                      <p className="font-black text-white">{step}</p>
                      <p className="mt-1 text-sm text-white/55">Etapa visível para o cliente acompanhar sem depender de conversa solta.</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-orange-300" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-10 grid gap-5 rounded-lg border border-line bg-surface p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-4">
              <Globe2 className="mt-1 h-6 w-6 shrink-0 text-brand-700" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-black tracking-[-0.06em] text-ink">O painel deve reduzir ruído operacional</h2>
                <p className="mt-2 text-sm leading-7 text-muted">O cliente precisa ver o que já foi recebido, o que falta e qual é o próximo passo para publicar o site.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <MobiButton href="/cadastro" variant="primary" size="md">
                Ir para cadastro <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href={whatsAppLink} external variant="secondary" size="md">
                WhatsApp <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
