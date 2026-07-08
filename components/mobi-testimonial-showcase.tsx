import { ArrowDown, ArrowUp } from "lucide-react";
import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiTestimonialShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  quote: string;
  author: string;
  role: string;
  rating: string;
  cards: readonly {
    label: string;
    accent: HeroCollageAccent;
  }[];
};

const fallbackCard = {
  label: "Case",
  accent: "brand" as HeroCollageAccent,
};

function TestimonialVisual({ accent, label, active = false }: { accent: HeroCollageAccent; label: string; active?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-line", active ? "h-[420px] sm:h-[620px]" : "h-28", activeTheme.tenantScroller.accents[accent])}>
      <div className="flex h-full flex-col justify-between p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/60">{label}</p>
        <div className="grid gap-3">
          <span className="h-4 w-2/3 rounded-full bg-white/55" />
          <span className="h-4 w-1/2 rounded-full bg-white/45" />
        </div>
      </div>
    </div>
  );
}

export function MobiTestimonialShowcase({ eyebrow, title, description, quote, author, role, rating, cards }: MobiTestimonialShowcaseProps) {
  const activeCard = cards[2] ?? cards[0] ?? fallbackCard;

  return (
    <section className="bg-page py-20 sm:py-28" aria-labelledby="mobi-testimonial-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="order-2 lg:order-1">
          <TestimonialVisual accent={activeCard.accent} label={activeCard.label} active />
        </div>

        <div className="order-1 grid gap-10 lg:order-2 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
            <h2 id="mobi-testimonial-title" className="mt-5 max-w-2xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
              {title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted">{description}</p>

            <blockquote className="mt-14 max-w-2xl text-2xl font-black leading-tight tracking-[-0.05em] text-ink sm:mt-28 sm:text-3xl">
              “{quote}”
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="text-base font-black text-ink">{author}</p>
              <span className="h-px w-10 bg-line" aria-hidden="true" />
              <p className="text-sm text-muted">{role}</p>
            </div>
            <p className="mt-6 text-2xl tracking-[0.12em] text-orange-500" aria-label="Avaliação cinco estrelas">
              {rating}
            </p>
          </div>

          <div className="hidden flex-col items-center gap-3 lg:flex">
            <button type="button" className="focus-ring grid h-10 w-10 place-items-center rounded-sm bg-ink text-white" aria-label="Depoimento anterior">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
            {cards.map((card) => (
              <div key={card.label} className="w-24">
                <TestimonialVisual accent={card.accent} label={card.label} />
              </div>
            ))}
            <button type="button" className="focus-ring grid h-10 w-10 place-items-center rounded-sm bg-ink text-white" aria-label="Próximo depoimento">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
