import { Plus } from "lucide-react";
import { activeTheme } from "@/lib/themes";

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

export function MobiAboutBand({ eyebrow, title, description, badges, stats, collaborators }: MobiAboutBandProps) {
  return (
    <section className="bg-page py-20 sm:py-28" aria-labelledby="mobi-about-title">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
          <h2 id="mobi-about-title" className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
            {title}
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <p className="mt-8 max-w-xl text-sm leading-7 text-muted">{description}</p>
        </div>

        <div className="relative min-h-[360px]">
          <div className="absolute right-4 top-0 hidden h-40 w-40 rounded-full bg-orange-100 blur-2xl sm:block" aria-hidden="true" />
          <div className="absolute right-8 top-8 grid h-56 w-56 place-items-center rounded-full bg-orange-50 sm:h-72 sm:w-72">
            <div className="relative h-40 w-40 sm:h-52 sm:w-52" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute left-1/2 top-1/2 h-20 w-10 origin-[50%_100%] rounded-full bg-gradient-to-b from-orange-300 to-orange-500 opacity-90 shadow-soft sm:h-28 sm:w-14"
                  style={{ transform: `translate(-50%, -100%) rotate(${index * 45}deg)` }}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 grid gap-4">
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-ink bg-page px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-ink">
                  {badge}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-black tracking-[-0.06em] text-ink">{stat.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
