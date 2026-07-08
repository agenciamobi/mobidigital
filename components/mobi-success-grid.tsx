import { MobiButton } from "@/components/button";

type MobiSuccessGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  cards: readonly {
    title: string;
    description: string;
  }[];
};

export function MobiSuccessGrid({ eyebrow, title, description, cta, href, cards }: MobiSuccessGridProps) {
  return (
    <section className="bg-page py-20 sm:py-28" aria-labelledby="mobi-success-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
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
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <article key={card.title} className="min-h-64 border border-line bg-surface p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">0{index + 1}</p>
              <h3 className="mt-10 text-2xl font-black tracking-[-0.06em] text-ink">{card.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted">{card.description}</p>
            </article>
          ))}
          <article className="grid min-h-64 place-items-center border border-dashed border-line bg-page p-8">
            <div className="text-center">
              <p className="text-4xl font-black text-orange-500">+</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-muted">mais módulos</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
