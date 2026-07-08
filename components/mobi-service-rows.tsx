import { Circle, Hexagon, Layers, Square } from "lucide-react";

const serviceIcons = [Circle, Layers, Square, Hexagon];

type MobiServiceRowsProps = {
  eyebrow: string;
  title: string;
  items: readonly {
    title: string;
    description: string;
  }[];
};

export function MobiServiceRows({ eyebrow, title, items }: MobiServiceRowsProps) {
  return (
    <section className="bg-page py-20 sm:py-28" aria-labelledby="mobi-services-title">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
          <h2 id="mobi-services-title" className="mt-5 text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] text-ink sm:text-6xl">
            {title}
          </h2>
        </div>

        <div className="mt-16 grid gap-7">
          {items.map((item, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <article key={item.title} className="grid gap-8 border border-line bg-surface px-6 py-10 shadow-sm md:grid-cols-[0.9fr_1fr_auto] md:items-center md:px-10 lg:px-12">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black tracking-[-0.06em] text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-line" aria-hidden="true" />
                  <h3 className="text-2xl font-black tracking-[-0.06em] text-ink sm:text-3xl">{item.title}</h3>
                </div>
                <p className="max-w-xl text-base leading-7 text-muted">{item.description}</p>
                <div className="hidden h-20 w-20 items-center justify-center text-ink/60 md:flex">
                  <Icon className="h-16 w-16 stroke-[1.2]" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
