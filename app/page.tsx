import { ArrowRight } from "lucide-react";
import { MobiAboutBand } from "@/components/mobi-about-band";
import { MobiButton } from "@/components/button";
import { MobiDarkImpact } from "@/components/mobi-dark-impact";
import { MobiFeaturedSites } from "@/components/mobi-featured-sites";
import { MobiFooter } from "@/components/mobi-footer";
import { MobiHeader } from "@/components/mobi-header";
import { MobiPeopleSection } from "@/components/mobi-people-section";
import { MobiServiceRows } from "@/components/mobi-service-rows";
import { MobiSuccessGrid } from "@/components/mobi-success-grid";
import { MobiTenantSiteScroller } from "@/components/mobi-tenant-site-scroller";
import { MobiTestimonialShowcase } from "@/components/mobi-testimonial-showcase";
import { mobiHomeContent } from "@/lib/home-content";
import { plans } from "@/lib/site-data";
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
  const {
    hero,
    tenantSites,
    about,
    featuredSites,
    serviceRows,
    darkImpact,
    successGrid,
    testimonial,
    people,
    footer,
  } = mobiHomeContent;

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
        <MobiTestimonialShowcase {...testimonial} />
        <MobiPeopleSection {...people} />

        <section className="bg-page py-20 sm:py-28">
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
      </main>
      <MobiFooter {...footer} />
    </>
  );
}
