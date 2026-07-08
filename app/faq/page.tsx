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
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page max-w-4xl">
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-black text-ink outline-none group-open:text-brand-700">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
