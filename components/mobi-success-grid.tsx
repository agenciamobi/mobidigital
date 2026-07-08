import { Plus } from "lucide-react";
import { MobiButton } from "@/components/button";
import { cn } from "@/lib/utils";

type MobiSuccessGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  metric: string;
  metricLabel: string;
  people: readonly string[];
  exploreLabel: string;
  cards: readonly {
    title: string;
    description: string;
  }[];
};

export function MobiSuccessGrid({ eyebrow, title, description, cta, href, metric, metricLabel, people, exploreLabel, cards }: MobiSuccessGridProps) {
  return (
    <section className="bg-page py-20 sm:py-32" aria-labelledby="mobi-success-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
          <h2 id="mobi-success-title" className="mt-5 max-w-2xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
            {title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted">{description}</p>
          <div className="mt-8">
            <MobiButton href={href} variant="primary" size="md">
              {cta}
            </MobiButton>
          </div>

          <div className="mt-16 lg:mt-28">
            <div className="mb-5 flex items-center">
              {people.map((person, index) => (
                <span
                  key={`${person}-${index}`}
                  className="-ml-3 flex h-14 w-14 first:ml-0 items-center justify-center rounded-full border-2 border-page bg-surface text-sm font-black text-ink shadow-sm"
                >
                  {person}
                </span>
              ))}
            </div>
            <p className="text-4xl font-black tracking-[-0.06em] text-ink">{metric}</p>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-ink">{metricLabel}</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={cn(
                "flex min-h-[340px] flex-col justify-between border border-line bg-surface p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial",
                index % 2 === 0 ? "lg:translate-y-16" : "",
              )}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">0{index + 1}</p>
                <h3 className="mt-10 text-2xl font-black tracking-[-0.06em] text-ink">{card.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{card.description}</p>
              </div>
              <a href={href} className="mt-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-ink">
                <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
                Saiba mais
              </a>
            </article>
          ))}
          <a href={href} className="grid min-h-[260px] place-items-center rounded-full border border-line bg-page p-8 text-center transition hover:-translate-y-1 hover:bg-surface hover:shadow-editorial sm:col-start-2 sm:min-h-[340px]">
            <div>
              <Plus className="mx-auto h-10 w-10 text-ink" aria-hidden="true" />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-ink">{exploreLabel}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
