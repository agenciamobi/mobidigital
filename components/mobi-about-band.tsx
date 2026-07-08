import { Plus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type MobiAboutBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  badges: readonly string[];
  stats: readonly {
    value: string;
    label: string;
  }[];
  collaborators: readonly string[];
};

const petalRotations = [
  "rotate-0",
  "rotate-45",
  "rotate-90",
  "rotate-[135deg]",
  "rotate-180",
  "rotate-[225deg]",
  "rotate-[270deg]",
  "rotate-[315deg]",
];

export function MobiAboutBand({ eyebrow, title, description, badges, stats, collaborators }: MobiAboutBandProps) {
  return (
    <section className="bg-page py-20 sm:py-28" aria-labelledby="mobi-about-title">
      <div className="container-page">
        <div className="grid gap-14 border-t border-line pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
            <h2 id="mobi-about-title" className="mt-5 max-w-5xl text-balance text-4xl font-black leading-[0.92] tracking-[-0.075em] text-ink sm:text-6xl lg:text-7xl">
              {title}
            </h2>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {collaborators.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-page bg-surface text-sm font-black text-ink shadow-sm"
                >
                  {item}
                </div>
              ))}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-editorial">
                <Plus className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-editorial sm:p-8">
            <div className="absolute right-4 top-4 hidden h-48 w-48 rounded-full bg-orange-100 blur-2xl sm:block" aria-hidden="true" />
            <div className="absolute right-8 top-8 grid h-60 w-60 place-items-center rounded-full bg-orange-50 sm:h-80 sm:w-80">
              <div className="relative h-44 w-44 sm:h-56 sm:w-56" aria-hidden="true">
                {petalRotations.map((rotation) => (
                  <span
                    key={rotation}
                    className={cn(
                      "absolute left-1/2 top-1/2 h-24 w-11 origin-[50%_100%] -translate-x-1/2 -translate-y-full rounded-full bg-gradient-to-b from-orange-200 to-orange-500 opacity-90 shadow-soft sm:h-32 sm:w-16",
                      rotation,
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-end gap-8">
              <Sparkles className="h-10 w-10 text-orange-500" aria-hidden="true" />
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-ink bg-page px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-ink">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="grid gap-6 border-t border-line pt-7 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-5xl font-black tracking-[-0.08em] text-ink">{stat.value}</p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
