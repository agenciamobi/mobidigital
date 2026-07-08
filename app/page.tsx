import { ArrowRight } from "lucide-react";
import { MobiAboutBand } from "@/components/mobi-about-band";
import { MobiButton } from "@/components/button";
import { MobiDarkImpact } from "@/components/mobi-dark-impact";
import { MobiFeaturedSites } from "@/components/mobi-featured-sites";
import { MobiFooter } from "@/components/mobi-footer";
import { MobiHeader } from "@/components/mobi-header";
import { MobiInsightsGrid } from "@/components/mobi-insights-grid";
import { MobiPeopleSection } from "@/components/mobi-people-section";
import { MobiPlatformMap } from "@/components/mobi-platform-map";
import { MobiServiceRows } from "@/components/mobi-service-rows";
import { MobiSuccessGrid } from "@/components/mobi-success-grid";
import { MobiTenantSiteScroller } from "@/components/mobi-tenant-site-scroller";
import { MobiTestimonialShowcase } from "@/components/mobi-testimonial-showcase";
import { PlanCard } from "@/components/ui";
import { mobiHomeContent } from "@/lib/home-content";
import { plans } from "@/lib/site-data";
import { activeTheme } from "@/lib/themes";

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
    insights,
    testimonial,
    people,
    footer,
  } = mobiHomeContent;

  return (
    <>
      <MobiHeader />
      <main id="conteudo-principal" className={activeTheme.layout.page} tabIndex={-1}>
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
        <MobiPlatformMap />
        <MobiDarkImpact {...darkImpact} />
        <MobiSuccessGrid {...successGrid} />
        <MobiInsightsGrid {...insights} />
        <MobiTestimonialShowcase {...testimonial} />
        <MobiPeopleSection {...people} />

        <section className="bg-page py-20 sm:py-28">
          <div className="container-page border-t border-line pt-16">
            <HomeSectionHeading
              eyebrow="Planos"
              title="Comece simples, evolua com estrutura"
              description="Planos iniciais para validar o produto comercialmente antes da automação completa de WHM/cPanel e Softaculous."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div key={plan.name} className={index === 1 ? "lg:-translate-y-8" : index === 2 ? "lg:translate-y-8" : ""}>
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <MobiFooter {...footer} />
    </>
  );
}
