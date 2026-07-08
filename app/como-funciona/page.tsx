import { CTASection, PageHero, PageShell } from "@/components/ui";
import { processSteps } from "@/lib/site-data";

export const metadata = {
  title: "Como funciona",
  description: "Entenda o fluxo da MOBI Digital: cadastro, plano, briefing, estrutura do site, WordPress, IA, domínio próprio e publicação.",
};

export default function ComoFuncionaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Como funciona"
        title="Do briefing ao site publicado com menos atrito técnico"
        description="A MOBI Digital organiza o caminho entre a intenção do cliente e uma estrutura real de site, pronta para evoluir com IA e suporte humano."
      />
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="relative rounded-xxl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="absolute right-5 top-5 text-4xl font-black text-slate-100">0{index + 1}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-lg font-black text-ink">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-700">Fluxo planejado</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-ink">Cadastro → plano → briefing → estrutura → WordPress/IA → domínio → publicação</h2>
          </div>
          <div className="grid gap-4">
            {[
              "O cliente começa escolhendo o plano e preenchendo um briefing guiado.",
              "A plataforma registra dados comerciais, domínio, identidade visual, páginas e palavras-chave.",
              "A etapa inicial entrega a experiência comercial e prepara a arquitetura para automação.",
              "Na evolução do produto, a criação do site será conectada a WHM/cPanel, Softaculous e Code With AI.",
              "O cliente não precisa lidar com instalação manual de WordPress, hospedagem ou instruções técnicas complexas para começar.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-page rounded-xxl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-700">Bloco técnico simplificado</p>
          <h2 className="mt-4 text-2xl font-black text-ink">Integrações previstas</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Por trás, a plataforma será preparada para integrar WHM/cPanel, Softaculous e Code With AI. O cliente não precisa lidar com a parte técnica para começar. A automação real será adicionada depois da validação da frente comercial e da área de cadastro.
          </p>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
