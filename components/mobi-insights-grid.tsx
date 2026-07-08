import { ArrowUpRight, Sparkles } from "lucide-react";
import { MobiButton } from "@/components/button";
import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiInsightsGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  items: readonly {
    title: string;
    description: string;
    meta: string;
    accent: HeroCollageAccent;
  }[];
};

export function MobiInsightsGrid({ eyebrow, title, description, cta, href, items }: MobiInsightsGridProps) {
  return (
    <section className="bg-page py-20 sm:py-32" aria-labelledby="mobi-insights-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
          <h2 id="mobi-insights-title" className="mt-5 max-w-2xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
            {title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted">{description}</p>
          <div className="mt-8">
            <MobiButton href={href} variant="primary" size="md">
              {cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </MobiButton>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "group flex min-h-[360px] flex-col justify-between border border-line bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial",
                index % 2 === 1 ? "sm:translate-y-14" : "",
              )}
            >
              <div>
                <div className={cn("mb-8 grid h-28 w-full place-items-center rounded-md border border-line p-5", activeTheme.tenantScroller.accents[item.accent])}>
                  <Sparkles className="h-10 w-10 text-ink transition group-hover:rotate-12" aria-hidden="true" />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">{item.meta}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.06em] text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              </div>
              <a href={href} className="mt-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-ink">
                <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
                Ler guia
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
