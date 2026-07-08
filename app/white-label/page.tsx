import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection, FeatureCard, PageHero, PageShell, SectionHeading } from "@/components/ui";
import { whiteLabelLevels } from "@/lib/site-data";

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
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Parceiros"
            title="Do cliente direto ao modelo de agência"
            description="O white label será implementado no nível da aplicação e do painel, sem prometer remoção completa de marcas técnicas de cPanel ou Softaculous quando essas ferramentas forem abertas diretamente."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whiteLabelLevels.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-xxl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-black text-ink">O parceiro poderá configurar</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
              {[
                "Nome da marca",
                "Logo e cores",
                "WhatsApp e e-mail de suporte",
                "Domínio próprio para o painel",
                "Clientes separados por organização",
                "Planos comerciais próprios",
                "Opção de exibir ou ocultar Powered by MOBI",
              ].map((item) => (
                <li key={item} className="rounded-2xl bg-white p-4 font-semibold shadow-sm">{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xxl border border-slate-200 bg-ink p-8 text-white shadow-soft">
            <h2 className="text-2xl font-black">Modelo comercial de longo prazo</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              O objetivo é permitir que a MOBI venda diretamente e, ao mesmo tempo, crie uma camada Partner para agências que querem entregar sites sem montar toda a operação técnica do zero.
            </p>
            <Link href="/contato" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-brand-50">
              Quero ser parceiro MOBI Digital <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
