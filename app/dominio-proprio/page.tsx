import { ArrowRight, CheckCircle2, Globe2, ServerCog, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CTASection, PageHero, PageShell, SectionHeading } from "@/components/ui";
import { domainSteps } from "@/lib/site-data";

export const metadata = {
  title: "Domínio próprio",
  description: "Entenda como a MOBI Digital prepara o uso de domínio próprio para sites criados com IA, hospedagem e WordPress.",
};

const statusCards = [
  "Subdomínio temporário liberado",
  "Domínio informado pelo cliente",
  "DNS em validação",
  "SSL e publicação ativos",
];

export default function DominioProprioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Domínio próprio"
        title="O site pode começar temporário e depois usar o domínio do cliente"
        description="A MOBI Digital será preparada para permitir subdomínio inicial, validação de DNS, ativação do domínio definitivo e orientação clara para o cliente."
      />

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fluxo de domínio"
            title="Um caminho simples para tirar o cliente da dúvida técnica"
            description="O cliente não precisa entender hospedagem para começar. O painel deve traduzir a parte técnica em etapas objetivas."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {domainSteps.map((step, index) => (
              <article key={step.title} className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-editorial">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700 transition group-hover:bg-ink group-hover:text-white">
                    <Globe2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-3xl font-black text-line">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-lg font-black tracking-[-0.04em] text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <article className="rounded-lg border border-line bg-surface p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-700">Exemplo prático</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-ink">Como o cliente enxerga</h2>
            <div className="mt-6 grid gap-4 text-sm leading-6 text-muted">
              <div className="rounded-md border border-line bg-page p-5 shadow-sm">
                <strong className="text-ink">Temporário:</strong> clinicasilva.mobidigital.com.br
              </div>
              <div className="rounded-md border border-line bg-page p-5 shadow-sm">
                <strong className="text-ink">Definitivo:</strong> www.clinicasilva.com.br
              </div>
              <div className="rounded-md border border-line bg-page p-5 shadow-sm">
                <strong className="text-ink">Status:</strong> aguardando DNS, validando, ativo ou com revisão manual.
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-ink bg-ink p-8 text-white shadow-editorial">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-200">Estrutura futura</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em]">O domínio próprio entra como módulo do painel</h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Na etapa de backend, cada site terá registros de domínio, status de DNS, SSL, verificação e vínculo com a organização. Isso evita gambiarra e prepara o caminho para white label.
            </p>
            <div className="mt-7 grid gap-3">
              {statusCards.map((item) => (
                <div key={item} className="flex items-center gap-3 border-t border-white/15 pt-3 text-sm font-semibold text-white/75">
                  <CheckCircle2 className="h-5 w-5 text-orange-300" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/cadastro" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-black uppercase tracking-tight text-ink transition hover:bg-brand-50">
              Quero preparar meu site <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <ServerCog className="h-10 w-10 text-brand-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black tracking-[-0.06em] text-ink">DNS sem conversa técnica demais</h2>
            <p className="mt-3 text-sm leading-7 text-muted">A interface deve explicar o que falta, quem precisa agir e quando o domínio está pronto para publicação.</p>
          </article>
          <article className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <ShieldCheck className="h-10 w-10 text-brand-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black tracking-[-0.06em] text-ink">SSL e status visível</h2>
            <p className="mt-3 text-sm leading-7 text-muted">O cliente precisa enxergar se o site está temporário, aguardando apontamento, validado ou publicado no domínio final.</p>
          </article>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
