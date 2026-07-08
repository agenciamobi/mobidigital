import { Sparkles } from "lucide-react";
import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiPeopleSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundText: string;
  members: readonly {
    name: string;
    role: string;
    accent: HeroCollageAccent;
  }[];
};

export function MobiPeopleSection({ eyebrow, title, description, backgroundText, members }: MobiPeopleSectionProps) {
  return (
    <section className="relative overflow-hidden bg-page py-20 sm:py-32" aria-labelledby="mobi-people-title">
      <div className="container-page text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
        <h2 id="mobi-people-title" className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">{description}</p>

        <div className="mx-auto mt-16 grid h-24 w-24 place-items-center rounded-full border border-line bg-page">
          <Sparkles className="h-9 w-9 text-orange-500" aria-hidden="true" />
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-4 sm:min-h-[560px]">
        <p className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden text-center text-[clamp(5rem,14vw,15rem)] font-black leading-[0.78] tracking-[-0.08em] text-ink/30 sm:block">
          {backgroundText}
        </p>

        <div className="relative z-10 mx-auto grid max-w-4xl gap-6 sm:h-[560px] sm:block">
          {members.map((member, index) => {
            const positions = [
              "sm:absolute sm:left-4 sm:top-20 sm:rotate-[-5deg]",
              "sm:absolute sm:right-6 sm:top-28 sm:rotate-[7deg]",
              "sm:absolute sm:left-1/2 sm:top-64 sm:-translate-x-1/2 sm:rotate-[-2deg]",
              "sm:absolute sm:bottom-0 sm:right-1/3 sm:rotate-[4deg]",
            ];

            return (
              <article
                key={member.name}
                className={cn(
                  "mx-auto w-full max-w-sm rounded-lg border-[10px] border-white bg-white p-2 shadow-polaroid sm:w-72",
                  positions[index % positions.length],
                )}
              >
                <div className={cn("grid h-64 place-items-center rounded-md p-5", activeTheme.tenantScroller.accents[member.accent])}>
                  <div className="grid h-28 w-28 place-items-center rounded-full border border-white/70 bg-white/45 text-4xl font-black text-ink backdrop-blur-sm">
                    {member.name.slice(0, 2)}
                  </div>
                </div>
                <div className="px-2 py-4 text-left">
                  <h3 className="text-xl font-black tracking-[-0.06em] text-ink">{member.name}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-muted">{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
