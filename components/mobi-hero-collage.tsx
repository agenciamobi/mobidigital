import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiHeroCollageItem = {
  title: string;
  description: string;
  accent: HeroCollageAccent;
};

type MobiHeroCollageProps = {
  items: readonly MobiHeroCollageItem[];
};

export function MobiHeroCollage({ items }: MobiHeroCollageProps) {
  return (
    <div className={activeTheme.collage.stage} aria-label="Recursos visuais da MOBI Digital">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={cn(
            activeTheme.collage.card,
            activeTheme.collage.rotations[index % activeTheme.collage.rotations.length],
            "motion-reduce:animate-none",
          )}
        >
          <div className={cn(activeTheme.collage.cardMediaBase, activeTheme.collage.accents[item.accent])}>
            <div className="grid h-full place-items-center overflow-hidden rounded-md border border-white/60 bg-white/10 p-5">
              <div className="w-full rounded-md border border-white/60 bg-white/40 p-4 backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/60">MOBI Digital</p>
                <p className="mt-3 text-xl font-black leading-tight tracking-[-0.05em] text-ink">{item.title}</p>
                <p className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-ink/70">{item.description}</p>
              </div>
            </div>
          </div>
          <h2 className={activeTheme.collage.cardLabel}>{item.title}</h2>
        </article>
      ))}
    </div>
  );
}
