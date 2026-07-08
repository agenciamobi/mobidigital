import { HelpCircle, MessageCircle, Search } from "lucide-react";
import { MobiButton } from "@/components/button";
import { CTASection, PageHero, PageShell } from "@/components/ui";
import { faqs, whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "FAQ",
  description: "Perguntas frequentes sobre MOBI Digital, sites com IA, domínio próprio, hospedagem, WordPress e white label.",
};

const topics = ["IA", "Domínio", "WordPress", "Hospedagem", "White label", "Cadastro"];

export default function FAQPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes sobre a MOBI Digital"
        description="Respostas objetivas para explicar o produto, reduzir objeções comerciais e preparar o cliente para o próximo passo."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-lg border border-line bg-surface p-6 shadow-sm lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.06em] text-ink">Encontre a objeção certa</h2>
            <p className="mt-3 text-sm leading-7 text-muted">Use o FAQ como apoio comercial para explicar o produto antes do cliente travar em detalhes técnicos.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span key={topic} className="rounded-full border border-line bg-page px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-muted">
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <MobiButton href={whatsAppLink} external variant="primary" size="md" className="w-full">
                Falar com a MOBI <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
            </div>
          </aside>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition hover:shadow-editorial">
                <summary className="flex cursor-pointer list-none items-start gap-4 text-base font-black tracking-[-0.04em] text-ink outline-none group-open:text-brand-700 sm:text-lg">
                  <span className="text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{faq.question}</span>
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-line transition group-open:text-brand-700" aria-hidden="true" />
                </summary>
                <p className="mt-5 border-t border-line pt-5 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
