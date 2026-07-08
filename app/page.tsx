import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { CTASection, FeatureCard, PageShell, PlanCard, SectionHeading } from "@/components/ui";
import { audiences, features, plans, processSteps, statusItems, trustItems } from "@/lib/site-data";

function StatusMockup() {
  return (
    <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-brand-700">Painel MOBI Digital</p>
            <p className="mt-1 text-lg font-black text-ink">Criação do site</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Em progresso</span>
        </div>
        <div className="mt-5 grid gap-3">
          {statusItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${index < 4 ? "bg-brand-50 text-brand-700" : "bg-slate-100 text-slate-400"}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black text-ink">{item.label}</p>
                  <p className="text-xs text-slate-500">Etapa {index + 1} de {statusItems.length}</p>
                </div>
                {index < 4 ? <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>
        <div className="mt-5 rounded-2xl bg-ink p-4 text-white">
          <div className="flex items-center gap-2 text-brand-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <p className="text-xs font-black uppercase tracking-wider">Prompt gerado</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">
            Crie um site profissional em português do Brasil, com SEO local, WhatsApp como CTA principal e páginas claras para conversão.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
        <div className="container-page relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
              MOBI Sites com IA
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-6xl">
              Crie seu site profissional com IA, hospedagem e suporte da MOBI
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A MOBI Digital guia seu cadastro, organiza o briefing, prepara a estrutura do site e entrega uma base pronta para evoluir com WordPress, IA e suporte humano.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cadastro" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700">
                Começar meu site <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/planos" className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-slate-100">
                Ver planos
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden="true" />
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <StatusMockup />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fluxo comercial"
            title="Como funciona em 4 passos"
            description="A primeira versão organiza a venda e a experiência. Depois, o mesmo fluxo receberá painel, banco de dados e provisionamento automatizado."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-xxl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-3xl font-black text-slate-200">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-black text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Incluso"
            title="Muito além de uma hospedagem comum"
            description="A proposta é transformar hospedagem, WordPress, IA e suporte em uma experiência guiada para o cliente final."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Público"
            title="Para quem a MOBI Digital foi pensada"
            description="Começamos pela venda de sites com IA, mas a arquitetura já considera operação com clientes diretos e parceiros."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planos"
            title="Comece simples, evolua com estrutura"
            description="Planos iniciais para validar o produto comercialmente antes da automação completa de WHM/cPanel e Softaculous."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
              IA com direção
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-ink sm:text-4xl">MOBI + IA + suporte humano</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A IA acelera textos, ajustes e organização. A MOBI estrutura o processo, reduz decisões técnicas para o cliente e mantém o foco em site publicado, claro e comercial.
            </p>
          </div>
          <div className="rounded-xxl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Briefing guiado",
                "Prompt personalizado",
                "Site com estrutura comercial",
                "Domínio próprio",
                "WordPress preparado",
                "White label futuro",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-black text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
