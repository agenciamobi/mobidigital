import { ArrowRight, Building2, CheckCircle2, MessageCircle, Palette, PanelsTopLeft } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";
import { whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Cadastro",
  description: "Cadastro em preparação para a plataforma MOBI Digital.",
};

const briefingItems = [
  {
    title: "Empresa",
    description: "Nome, segmento, WhatsApp, e-mail e cidade de atuação.",
    icon: Building2,
  },
  {
    title: "Identidade",
    description: "Logo, cores, tom de comunicação e referências visuais.",
    icon: Palette,
  },
  {
    title: "Estrutura",
    description: "Plano, páginas iniciais, domínio, serviços e CTA principal.",
    icon: PanelsTopLeft,
  },
];

export default function CadastroPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Cadastro"
        title="Cadastro em preparação para os primeiros tenants"
        description="A frente comercial já está organizada. Nesta etapa, a ativação ainda pode ser conduzida manualmente pela MOBI enquanto o painel e o provisionamento evoluem."
      />

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <article className="rounded-lg border border-line bg-surface p-8 shadow-editorial">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <MessageCircle className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink">Quer entrar antes da automação?</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Fale com a MOBI para validar plano, domínio, tipo de site e próximos passos. O cadastro técnico será conectado ao painel na próxima fase.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MobiButton href={whatsAppLink} external variant="primary" size="md">
                Falar no WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href="/planos" variant="secondary" size="md">
                Ver planos
              </MobiButton>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-ink p-8 text-white shadow-editorial">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Próxima fase</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.07em]">O cadastro vira o ponto inicial do site</h2>
            <div className="mt-8 grid gap-4 text-sm leading-6 text-white/70">
              {["Dados da empresa", "Plano escolhido", "Domínio desejado", "Briefing comercial", "Cores, logo e primeiras páginas"].map((item) => (
                <div key={item} className="flex items-center gap-3 border-t border-white/15 pt-4 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-orange-300" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {briefingItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-editorial">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700 transition group-hover:bg-ink group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-3xl font-black text-line">0{index + 1}</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-black tracking-[-0.06em] text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
