import { ArrowRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";
import { whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Contato",
  description: "Fale com a MOBI para entender qual plano da MOBI Digital faz mais sentido para seu projeto.",
};

const contactCards = [
  {
    label: "WhatsApp",
    value: "(53) 98110-2176",
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    value: "contato@agenciamobi.com.br",
    icon: Mail,
  },
  {
    label: "Base",
    value: "Pelotas/RS",
    icon: MapPin,
  },
];

export default function ContatoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato"
        title="Fale com a MOBI sobre seu próximo site"
        description="Explique o projeto, o domínio desejado e o tipo de site que precisa. A equipe MOBI orienta o melhor caminho."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <article className="rounded-lg border border-line bg-ink p-8 text-white shadow-editorial">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-ink">
              <MessageCircle className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.07em]">Atendimento direto pelo WhatsApp</h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Use o contato oficial da MOBI para validar plano, domínio, escopo, prazo e primeira ativação do site.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MobiButton href={whatsAppLink} external variant="secondary" size="md">
                Chamar no WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href="/planos" variant="ghost" size="md" className="border border-white/20 text-white hover:bg-white hover:text-black">
                Ver planos
              </MobiButton>
            </div>

            <div className="mt-10 grid gap-3">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 rounded-md border border-white/15 bg-white/[0.03] p-4">
                    <Icon className="h-5 w-5 text-orange-300" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">{item.label}</p>
                      <p className="mt-1 font-black text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-lg border border-line bg-surface p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Pré-briefing</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-ink">Organize a conversa antes do atendimento</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Este formulário ainda é visual, mas já define quais dados o atendimento precisa coletar para acelerar a proposta.
            </p>
            <div className="mt-7 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="Nome" aria-label="Nome" />
                <input className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="WhatsApp" aria-label="WhatsApp" />
              </div>
              <input className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="E-mail" aria-label="E-mail" />
              <select className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-muted" aria-label="Tipo de site">
                <option>Tipo de site</option>
                <option>Site institucional</option>
                <option>Catálogo com WhatsApp</option>
                <option>Landing page</option>
                <option>White label / parceiro</option>
              </select>
              <textarea className="focus-ring min-h-36 rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="Conte rapidamente o que você quer criar" aria-label="Mensagem" />
              <button type="button" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-line px-6 py-3 text-sm font-black uppercase tracking-tight text-muted" disabled>
                Envio será ativado depois <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
