import { ArrowRight } from "lucide-react";
import { MobiAboutBand } from "@/components/mobi-about-band";
import { MobiButton } from "@/components/button";
import { MobiDarkImpact } from "@/components/mobi-dark-impact";
import { MobiFeaturedSites } from "@/components/mobi-featured-sites";
import { MobiHeader } from "@/components/mobi-header";
import { MobiServiceRows } from "@/components/mobi-service-rows";
import { MobiSuccessGrid } from "@/components/mobi-success-grid";
import { MobiTenantSiteScroller } from "@/components/mobi-tenant-site-scroller";
import { Footer } from "@/components/ui";
import { mobiHomeContent } from "@/lib/home-content";
import { audiences, features, plans, processSteps } from "@/lib/site-data";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

function HomeSectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className={activeTheme.hero.eyebrow}>{eyebrow}</p>
      <h2 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] text-ink sm:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}

export default function HomePage() {
  const { hero, tenantSites, about, featuredSites, serviceRows, darkImpact, successGrid, pillars } = mobiHomeContent;

  return (
    <>
      <MobiHeader />
      <main className={activeTheme.layout.page}>
        <section className={activeTheme.hero.shell}>
          <div className="container-page relative z-10 text-center motion-safe:animate-enter-up">
            <p className={activeTheme.hero.eyebrow}>{hero.eyebrow}</p>
            <h1 className={activeTheme.hero.title}>{hero.title}</h1>
            <p className={activeTheme.hero.subtitle}>{hero.subtitle}</p>
            <div className={activeTheme.hero.actions}>
              <MobiButton href={hero.primaryCta.href} size="md" variant="primary">
                {hero.primaryCta.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href={hero.secondaryCta.href} size="md" variant="secondary">
                {hero.secondaryCta.label}
              </MobiButton>
            </div>
          </div>
          <MobiTenantSiteScroller sites={tenantSites} />
        </section>

        <MobiAboutBand {...about} />

        <MobiFeaturedSites {...featuredSites} />

        <MobiServiceRows {...serviceRows} />

        <MobiDarkImpact {...darkImpact} />

        <MobiSuccessGrid {...successGrid} />

        <section className="border-b border-t border-line bg-surface py-14">
          <div className="container-page grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className={activeTheme.card.compact}>
                <h2 className="text-lg font-black tracking-[-0.04em] text-ink">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={activeTheme.card.section}>
          <div className="container-page">
            <HomeSectionHeading
              eyebrow="Fluxo comercial"
              title="Como funciona em 4 passos"
              description="A primeira versão organiza a venda e a experiência. Depois, o mesmo fluxo receberá painel, banco de dados e provisionamento automatizado."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className={activeTheme.card.base}>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-3xl font-black text-line">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-black tracking-[-0.04em] text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-page py-16 sm:py-20">
          <div className="container-page">
            <HomeSectionHeading
              eyebrow="Incluso"
              title="Muito além de uma hospedagem comum"
              description="A proposta é transformar hospedagem, WordPress, IA e suporte em uma experiência guiada para o cliente final."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className={activeTheme.card.base}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-black tracking-[-0.05em] text-ink">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={activeTheme.card.section}>
          <div className="container-page">
            <HomeSectionHeading
              eyebrow="Público"
              title="Para quem a MOBI Digital foi pensada"
              description="Começamos pela venda de sites com IA, mas a arquitetura já considera operação com clientes diretos e parceiros."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {audiences.map((item) => (
                <article key={item.title} className={activeTheme.card.compact}>
                  <h3 className="text-base font-black tracking-[-0.04em] text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-page py-16 sm:py-20">
          <div className="container-page">
            <HomeSectionHeading
              eyebrow="Planos"
              title="Comece simples, evolua com estrutura"
              description="Planos iniciais para validar o produto comercialmente antes da automação completa de WHM/cPanel e Softaculous."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={cn(
                    "flex h-full flex-col border p-6 shadow-sm",
                    plan.highlighted
                      ? "rounded-lg border-ink bg-ink text-white shadow-editorial"
                      : "rounded-lg border-line bg-surface text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "w-fit rounded-sm px-3 py-1 text-xs font-black uppercase tracking-[0.18em]",
                      plan.highlighted ? "bg-white text-ink" : "bg-brand-50 text-brand-700",
                    )}
                  >
                    {plan.badge}
                  </span>
                  <h3 className="mt-5 text-3xl font-black leading-none tracking-[-0.06em]">{plan.name}</h3>
                  <p className={cn("mt-4 text-sm leading-6", plan.highlighted ? "text-slate-200" : "text-muted")}>{plan.description}</p>
                  <p className="mt-6 text-2xl font-black tracking-[-0.04em]">{plan.price}</p>
                  <ul className="mt-6 grid gap-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className={cn("border-t pt-3", plan.highlighted ? "border-white/15 text-slate-100" : "border-line text-muted")}>{feature}</li>
                    ))}
                  </ul>
                  <MobiButton href={plan.href} variant={plan.highlighted ? "secondary" : "primary"} size="md" className="mt-8 w-full">
                    {plan.cta}
                  </MobiButton>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-ink py-16 text-white sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-sm border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
                IA com direção
              </p>
              <h2 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                MOBI + IA + suporte humano
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                A IA acelera textos, ajustes e organização. A MOBI estrutura o processo, reduz decisões técnicas para o cliente e mantém o foco em site publicado, claro e comercial.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Briefing guiado", "Prompt personalizado", "Site com estrutura comercial", "Domínio próprio", "WordPress preparado", "White label futuro"].map((item) => (
                <div key={item} className="rounded-md border border-white/15 bg-white/10 p-5 text-sm font-black text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-page py-16 sm:py-20">
          <div className="container-page flex flex-col gap-8 border-y border-line py-12 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-700">Próximo passo</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-ink sm:text-5xl">
                Comece pela estrutura certa antes de pensar em automação pesada.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-end">
              <MobiButton href="/cadastro" variant="primary" size="lg">
                Começar meu site
              </MobiButton>
              <MobiButton href="/contato" variant="secondary" size="lg">
                Falar com a MOBI
              </MobiButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
