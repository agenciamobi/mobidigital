import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { MobiButton } from "@/components/button";
import { whatsAppLink } from "@/lib/site-data";

const goodFit = [
  "Empresas locais que precisam de site claro, rápido e orientado a WhatsApp.",
  "Prestadores de serviço que dependem de confiança, autoridade e captação de contato.",
  "Negócios com domínio, Instagram ou indicação, mas sem estrutura própria de presença digital.",
  "Parceiros que querem vender sites sem montar toda a operação técnica do zero.",
];

const badFit = [
  "Quem precisa de e-commerce complexo, ERP integrado ou marketplace já na primeira versão.",
  "Projetos que exigem sistema sob medida antes de validar a oferta comercial.",
  "Empresas que não têm serviços, produtos ou proposta minimamente definidos.",
  "Quem quer apenas uma arte bonita, sem conteúdo, SEO, CTA e operação de atendimento.",
];

export function MobiAudienceFit() {
  return (
    <section className="bg-surface-muted py-20 sm:py-32" aria-labelledby="audience-fit-title">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Qualificação</p>
            <h2 id="audience-fit-title" className="mt-5 text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
              Para quem a MOBI Digital faz sentido agora
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              Nem todo projeto precisa começar por sistema complexo. A MOBI Digital é mais forte quando o objetivo é publicar uma presença comercial clara, com IA, WordPress, domínio e WhatsApp trabalhando juntos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <MobiButton href="/cadastro" variant="primary" size="md">
                Fazer pré-cadastro <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href={whatsAppLink} external variant="secondary" size="md">
                Tirar dúvida
              </MobiButton>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-line bg-surface p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
                <h3 className="text-3xl font-black tracking-[-0.07em] text-ink">Bom encaixe</h3>
                <CheckCircle2 className="h-8 w-8 text-brand-700" aria-hidden="true" />
              </div>
              <div className="mt-6 grid gap-4">
                {goodFit.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-line bg-page p-4 text-sm font-semibold leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-ink bg-ink p-6 text-white shadow-editorial sm:p-8 lg:translate-y-10">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
                <h3 className="text-3xl font-black tracking-[-0.07em] text-white">Talvez não seja agora</h3>
                <XCircle className="h-8 w-8 text-orange-300" aria-hidden="true" />
              </div>
              <div className="mt-6 grid gap-4">
                {badFit.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-white/15 bg-white/[0.04] p-4 text-sm font-semibold leading-6 text-white/70">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
