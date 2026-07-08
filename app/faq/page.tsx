import { CTASection, PageHero, PageShell } from "@/components/ui";
import { faqs } from "@/lib/site-data";

export const metadata = {
  title: "FAQ",
  description: "Perguntas frequentes sobre MOBI Digital, sites com IA, domínio próprio, hospedagem, WordPress e white label.",
};

export default function FAQPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes sobre a MOBI Digital"
        description="Respostas objetivas para explicar o produto, reduzir objeções comerciais e preparar o cliente para o próximo passo."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page max-w-4xl">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition hover:shadow-editorial">
                <summary className="cursor-pointer list-none text-base font-black tracking-[-0.04em] text-ink outline-none group-open:text-brand-700 sm:text-lg">
                  <span className="mr-4 text-muted">{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
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
