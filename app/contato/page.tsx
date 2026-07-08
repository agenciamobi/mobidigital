import { MessageCircle, Send } from "lucide-react";
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
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-xxl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <MessageCircle className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-black text-ink">Atendimento pelo WhatsApp</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Fale com a MOBI para entender qual plano faz mais sentido para seu projeto.
            </p>
            <a href={whatsAppLink} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-black text-white transition hover:bg-brand-700">
              Chamar no WhatsApp
            </a>
          </article>

          <article className="rounded-xxl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-ink">Formulário visual</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Este formulário ainda não envia dados. Ele prepara a interface para a próxima etapa do projeto.</p>
            <div className="mt-6 grid gap-4">
              <input className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Nome" aria-label="Nome" />
              <input className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="WhatsApp" aria-label="WhatsApp" />
              <input className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="E-mail" aria-label="E-mail" />
              <textarea className="focus-ring min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Conte rapidamente o que você quer criar" aria-label="Mensagem" />
              <button type="button" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-slate-200 px-6 py-3 text-sm font-black text-slate-600" disabled>
                Envio será ativado depois <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
