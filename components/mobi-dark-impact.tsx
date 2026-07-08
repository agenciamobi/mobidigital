import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { MobiButton } from "@/components/button";
import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiDarkImpactProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  rating: string;
  ratingLabel: string;
  metric: string;
  metricLabel: string;
  people: readonly string[];
  showcaseTitle: string;
  cards: readonly {
    title: string;
    description: string;
    accent: HeroCollageAccent;
  }[];
};

function DarkShowcaseCard({ title, description, accent }: { title: string; description: string; accent: HeroCollageAccent }) {
  return (
    <article className="rounded-lg border-[12px] border-white bg-white p-3 shadow-polaroid">
      <div className={cn("h-56 rounded-md p-5 sm:h-72", activeTheme.tenantScroller.accents[accent])}>
        <div className="flex h-full items-end rounded-md border border-white/70 bg-white/30 p-5 backdrop-blur-sm">
          <Sparkles className="h-10 w-10 text-ink" aria-hidden="true" />
        </div>
      </div>
      <div className="grid gap-4 px-2 py-5 sm:grid-cols-[0.8fr_1fr]">
        <h3 className="text-xl font-black tracking-[-0.06em] text-ink">{title}</h3>
        <p className="text-sm leading-6 text-muted">{description}</p>
      </div>
    </article>
  );
}

export function MobiDarkImpact({
  eyebrow,
  title,
  description,
  cta,
  href,
  rating,
  ratingLabel,
  metric,
  metricLabel,
  people,
  showcaseTitle,
  cards,
}: MobiDarkImpactProps) {
  return (
    <section className="bg-page px-3 py-10 sm:px-6" aria-labelledby="mobi-dark-impact-title">
      <div className="overflow-hidden rounded-xl bg-black px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">{eyebrow}</p>
            <h2 id="mobi-dark-impact-title" className="mt-5 max-w-2xl text-balance text-4xl font-black leading-[0.92] tracking-[-0.07em] sm:text-6xl">
              {title}
            </h2>
            <p className="mt-10 max-w-xl text-base leading-8 text-white/75">{description}</p>
            <div className="mt-8">
              <MobiButton href={href} variant="secondary" size="md">
                {cta}
              </MobiButton>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center">
                  {people.map((person, index) => (
                    <span
                      key={`${person}-${index}`}
                      className="-ml-3 flex h-14 w-14 first:ml-0 items-center justify-center rounded-full border-2 border-black bg-surface text-sm font-black text-ink"
                    >
                      {person}
                    </span>
                  ))}
                  <span className="-ml-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-orange-500 text-white">
                    <Plus className="h-7 w-7" aria-hidden="true" />
                  </span>
                </div>
                <p className="text-xl font-black tracking-[-0.04em]">{rating} <span className="text-orange-400">★</span></p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/70">{ratingLabel}</p>
              </div>
              <div className="border-t border-white/20 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="text-7xl font-black tracking-[-0.08em]">{metric}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/70">{metricLabel}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className={cn("h-[420px] rounded-md p-6 sm:h-[560px]", activeTheme.tenantScroller.accents.magenta)}>
              <div className="flex h-full flex-col justify-between rounded-md border border-white/70 bg-white/30 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/60">MOBI Digital</p>
                  <ArrowUpRight className="h-5 w-5 text-ink" aria-hidden="true" />
                </div>
                <p className="max-w-sm text-5xl font-black leading-[0.86] tracking-[-0.08em] text-ink">Site com estrutura, IA e suporte.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-4xl text-center">
          <h3 className="text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl">{showcaseTitle}</h3>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-16">
          {cards.map((card, index) => (
            <div key={card.title} className={cn(index % 2 === 1 ? "lg:ml-auto lg:w-4/5" : "lg:w-4/5") }>
              <DarkShowcaseCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
