import { MessageCircle, Send } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";
import { whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Contato",
  description: "Fale com a MOBI para entender qual plano da MOBI Digital faz mais sentido para seu projeto.",
};

export default function ContatoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato"
        title="Fale com a MOBI sobre seu próximo site"
        description="Explique o projeto, o domínio desejado e o tipo de site que precisa. A equipe MOBI orienta o melhor caminho."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border border-line bg-surface p-8 shadow-editorial">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <MessageCircle className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink">Atendimento pelo WhatsApp</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Fale com a MOBI para entender qual plano faz mais sentido para seu projeto, validar domínio e alinhar a primeira etapa.
            </p>
            <div className="mt-8">
              <MobiButton href={whatsAppLink} external variant="primary" size="md">
                Chamar no WhatsApp
              </MobiButton>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-surface p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Pré-briefing</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-ink">Formulário visual</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Este formulário ainda não envia dados. Ele prepara a interface para a próxima etapa do projeto.</p>
            <div className="mt-7 grid gap-4">
              <input className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="Nome" aria-label="Nome" />
              <input className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="WhatsApp" aria-label="WhatsApp" />
              <input className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-muted" placeholder="E-mail" aria-label="E-mail" />
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
