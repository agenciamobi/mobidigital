import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, UsersRound } from "lucide-react";
import { CTASection, FeatureCard, PageHero, PageShell, SectionHeading } from "@/components/ui";
import { partnerBenefits, whiteLabelLevels } from "@/lib/site-data";

export const metadata = {
  title: "White Label",
  description: "Modelo white label da MOBI Digital para parceiros e agências venderem sites com sua própria marca.",
};

export default function WhiteLabelPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="White Label"
        title="Venda sites com sua marca usando a estrutura da MOBI"
        description="A camada Partner da MOBI Digital será pensada para agências e parceiros que querem vender sites, manter relacionamento com seus clientes e usar a infraestrutura MOBI por trás."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Parceiros"
            title="Do cliente direto ao modelo de agência"
            description="O white label será implementado no nível da aplicação e do painel, sem prometer remoção completa de marcas técnicas de cPanel ou Softaculous quando essas ferramentas forem abertas diretamente."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whiteLabelLevels.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-line bg-surface p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Configuração do parceiro</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-ink">O parceiro poderá configurar</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
              {partnerBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-md border border-line bg-page p-4 font-semibold shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-ink bg-ink p-8 text-white shadow-editorial">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Longo prazo</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em]">Modelo comercial de longo prazo</h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              O objetivo é permitir que a MOBI venda diretamente e, ao mesmo tempo, crie uma camada Partner para agências que querem entregar sites sem montar toda a operação técnica do zero.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-white/15 bg-white/[0.04] p-4">
                <Palette className="h-7 w-7 text-orange-300" aria-hidden="true" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white/45">Marca própria</p>
              </div>
              <div className="rounded-md border border-white/15 bg-white/[0.04] p-4">
                <UsersRound className="h-7 w-7 text-orange-300" aria-hidden="true" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white/45">Clientes separados</p>
              </div>
            </div>
            <Link href="/contato" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-black uppercase tracking-tight text-ink transition hover:bg-brand-50">
              Quero ser parceiro MOBI Digital <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page rounded-lg border border-line bg-surface p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Regra importante</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink">White label não é só trocar logo.</h2>
            </div>
            <p className="text-base leading-8 text-muted">
              A experiência precisa separar cliente, parceiro, suporte, domínio, marca, planos e responsabilidades. Por isso o produto precisa tratar white label como operação, não apenas como personalização visual.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
