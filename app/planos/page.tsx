import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { MobiButton } from "@/components/button";
import { CTASection, PageHero, PageShell, PlanCard, SectionHeading } from "@/components/ui";
import { plans, whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Planos",
  description: "Planos iniciais da MOBI Digital para criação de sites com IA, hospedagem, WordPress e suporte da MOBI.",
};

const planGuides = [
  {
    title: "Start",
    description: "Para validar presença digital, WhatsApp e primeiras páginas sem complexidade.",
  },
  {
    title: "Pro",
    description: "Para empresa que precisa de estrutura institucional, SEO local e conteúdo inicial.",
  },
  {
    title: "Catálogo",
    description: "Para negócios com produtos, serviços, categorias e atendimento rápido pelo WhatsApp.",
  },
];

const comparisonRows = [
  {
    feature: "Melhor uso",
    start: "Presença inicial",
    pro: "Site institucional completo",
    catalog: "Produtos e serviços",
  },
  {
    feature: "Páginas planejadas",
    start: "Essenciais",
    pro: "Até 5 páginas iniciais",
    catalog: "Categorias e itens",
  },
  {
    feature: "SEO local",
    start: "Base inicial",
    pro: "Estrutura ampliada",
    catalog: "Categorias otimizadas",
  },
  {
    feature: "WhatsApp",
    start: "CTA principal",
    pro: "CTA por página",
    catalog: "CTA por produto/serviço",
  },
  {
    feature: "Blog",
    start: "Opcional futuro",
    pro: "Preparado",
    catalog: "Opcional futuro",
  },
  {
    feature: "Indicado para",
    start: "Autônomos e validação rápida",
    pro: "Empresas locais e serviços",
    catalog: "Lojas, cardápios e catálogos",
  },
];

export default function PlanosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Planos"
        title="Escolha o ponto de partida para o site do cliente"
        description="A primeira versão opera com ativação manual pela equipe MOBI. Os planos abaixo organizam a oferta comercial antes da automação completa."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={plan.name} className={index === 1 ? "lg:-translate-y-8" : index === 2 ? "lg:translate-y-8" : ""}>
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-5 rounded-lg border border-line bg-surface p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="text-sm leading-7 text-muted">
              <strong className="text-ink">Observação:</strong> os valores podem variar conforme configuração, domínio, volume de conteúdo e necessidades específicas. A primeira versão pode operar com ativação manual pela equipe MOBI.
            </p>
            <MobiButton href={whatsAppLink} external variant="primary" size="md">
              Tirar dúvida <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </MobiButton>
          </div>
        </div>
      </section>

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Comparativo"
            title="Compare rapidamente antes de escolher"
            description="A tabela reduz a dúvida entre começar simples, montar um site institucional mais completo ou organizar produtos e serviços em formato de catálogo."
          />
          <div className="mt-12 overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
            <div className="grid grid-cols-1 border-b border-line bg-ink text-white md:grid-cols-[1fr_repeat(3,0.85fr)]">
              <div className="p-5 text-xs font-black uppercase tracking-[0.18em] text-white/50">Critério</div>
              <div className="border-t border-white/10 p-5 text-lg font-black tracking-[-0.05em] md:border-l md:border-t-0">Start</div>
              <div className="border-t border-white/10 p-5 text-lg font-black tracking-[-0.05em] md:border-l md:border-t-0">Pro</div>
              <div className="border-t border-white/10 p-5 text-lg font-black tracking-[-0.05em] md:border-l md:border-t-0">Catálogo</div>
            </div>
            <div className="divide-y divide-line">
              {comparisonRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-1 md:grid-cols-[1fr_repeat(3,0.85fr)]">
                  <div className="bg-surface-muted p-5 text-sm font-black tracking-[-0.03em] text-ink">{row.feature}</div>
                  <div className="border-t border-line p-5 text-sm leading-6 text-muted md:border-l md:border-t-0">{row.start}</div>
                  <div className="border-t border-line p-5 text-sm leading-6 text-muted md:border-l md:border-t-0">{row.pro}</div>
                  <div className="border-t border-line p-5 text-sm leading-6 text-muted md:border-l md:border-t-0">{row.catalog}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <MobiButton href="/cadastro" variant="primary" size="lg">
              Fazer pré-cadastro <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MobiButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Modelo comercial"
            title="Planos de entrada, estrutura de produto e expansão futura"
            description="Depois da validação inicial, os planos poderão se conectar a assinatura, painel do cliente, templates, limites, parceiros e provisionamento automatizado."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {planGuides.map((guide, index) => (
              <article key={guide.title} className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-editorial">
                <div className="flex items-center justify-between gap-4">
                  <CheckCircle2 className="h-7 w-7 text-brand-700" aria-hidden="true" />
                  <span className="text-3xl font-black text-line">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-[-0.06em] text-ink">{guide.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{guide.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page rounded-lg border border-ink bg-ink p-8 text-white shadow-editorial">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Escolha assistida</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-5xl">Na dúvida, comece pela conversa comercial.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                A MOBI ajuda a escolher o plano conforme segmento, volume de páginas, domínio, necessidade de catálogo e urgência de publicação.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <MobiButton href={whatsAppLink} external variant="secondary" size="lg">
                Falar no WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href="/cadastro" variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white hover:text-black">
                Pré-cadastro
              </MobiButton>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
