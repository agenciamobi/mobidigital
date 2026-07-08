import { ArrowUpRight, Sparkles } from "lucide-react";
import { MobiButton } from "@/components/button";
import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type FeaturedSite = {
  name: string;
  type: string;
  summary: string;
  accent: HeroCollageAccent;
  tags: readonly string[];
  large?: boolean;
};

type MobiFeaturedSitesProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  items: readonly FeaturedSite[];
};

function SiteVisual({ accent, large = false }: { accent: HeroCollageAccent; large?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-line", large ? "h-[340px]" : "h-[210px]", activeTheme.tenantScroller.accents[accent])}>
      <div className="absolute inset-x-6 top-6 rounded-md border border-white/70 bg-white/45 p-4 backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-magenta-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
        </div>
        <div className="h-4 w-2/3 rounded-full bg-ink/20" />
        <div className="mt-3 h-3 w-full rounded-full bg-ink/10" />
        <div className="mt-2 h-3 w-5/6 rounded-full bg-ink/10" />
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
        {Array.from({ length: large ? 3 : 2 }).map((_, index) => (
          <div key={index} className="h-20 rounded-md border border-white/70 bg-white/40 backdrop-blur-sm" />
        ))}
      </div>
    </div>
  );
}

function FeaturedSiteCard({ item }: { item: FeaturedSite }) {
  return (
    <article className={cn("grid gap-4", item.large ? "lg:col-span-2" : "") }>
      <SiteVisual accent={item.accent} large={item.large} />
      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">{item.type}</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.06em] text-ink">{item.name}</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{item.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-page px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition hover:bg-brand-700" aria-label={`Abrir ${item.name}`} type="button">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export function MobiFeaturedSites({ eyebrow, title, description, cta, href, items }: MobiFeaturedSitesProps) {
  return (
    <section className="bg-page py-20 sm:py-28" aria-labelledby="mobi-featured-title">
      <div className="container-page">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-ink">
            <Sparkles className="h-5 w-5 text-orange-500" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="mobi-featured-title" className="mt-5 text-balance text-[clamp(4rem,10vw,8rem)] font-black leading-[0.84] tracking-[-0.08em] text-ink">
            {title}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted">{description}</p>
          <div className="mt-8">
            <MobiButton href={href} variant="primary" size="md">
              {cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </MobiButton>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {items.map((item) => (
            <FeaturedSiteCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
