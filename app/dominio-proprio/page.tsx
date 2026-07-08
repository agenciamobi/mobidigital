import { ArrowRight, Globe2 } from "lucide-react";
import Link from "next/link";
import { CTASection, PageHero, PageShell, SectionHeading } from "@/components/ui";
import { domainSteps } from "@/lib/site-data";

export const metadata = {
  title: "Domínio próprio",
  description: "Entenda como a MOBI Digital prepara o uso de domínio próprio para sites criados com IA, hospedagem e WordPress.",
};

export default function DominioProprioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Domínio próprio"
        title="O site pode começar temporário e depois usar o domínio do cliente"
        description="A MOBI Digital será preparada para permitir subdomínio inicial, validação de DNS, ativação do domínio definitivo e orientação clara para o cliente."
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fluxo de domínio"
            title="Um caminho simples para tirar o cliente da dúvida técnica"
            description="O cliente não precisa entender hospedagem para começar. O painel deve traduzir a parte técnica em etapas objetivas."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {domainSteps.map((step, index) => (
              <article key={step.title} className="rounded-xxl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Globe2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-lg font-black text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <article className="rounded-xxl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-700">Exemplo prático</p>
            <h2 className="mt-4 text-2xl font-black text-ink">Como o cliente enxerga</h2>
            <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-700">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <strong>Temporário:</strong> clinicasilva.mobidigital.com.br
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <strong>Definitivo:</strong> www.clinicasilva.com.br
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <strong>Status:</strong> aguardando DNS, validando, ativo ou com revisão manual.
              </div>
            </div>
          </article>

          <article className="rounded-xxl border border-slate-200 bg-ink p-8 text-white shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-200">Estrutura futura</p>
            <h2 className="mt-4 text-2xl font-black">O domínio próprio entra como módulo do painel</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Na etapa de backend, cada site terá registros de domínio, status de DNS, SSL, verificação e vínculo com a organização. Isso evita gambiarra e prepara o caminho para white label.
            </p>
            <Link href="/cadastro" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-brand-50">
              Quero preparar meu site <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
