import { ArrowUpRight, Bot, Globe2, LayoutDashboard, PanelTop, ServerCog, ShieldCheck } from "lucide-react";
import { MobiButton } from "@/components/button";
import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiPlatformMapProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  nodes: readonly {
    title: string;
    description: string;
    accent: HeroCollageAccent;
  }[];
};

const icons = [LayoutDashboard, ServerCog, PanelTop, Bot, Globe2, ShieldCheck];

export function MobiPlatformMap({ eyebrow, title, description, cta, href, nodes }: MobiPlatformMapProps) {
  return (
    <section className="bg-page py-20 sm:py-32" aria-labelledby="mobi-platform-map-title">
      <div className="container-page">
        <div className="grid gap-12 border-y border-line py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ink">{eyebrow}</p>
            <h2 id="mobi-platform-map-title" className="mt-5 max-w-2xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-6xl">
              {title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted">{description}</p>
            <div className="mt-8">
              <MobiButton href={href} variant="primary" size="md">
                {cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-line lg:block" aria-hidden="true" />
            <div className="grid gap-4">
              {nodes.map((node, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <article key={node.title} className="group relative grid gap-5 rounded-lg border border-line bg-surface p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial sm:grid-cols-[auto_1fr] sm:p-6">
                    <div className={cn("relative z-10 flex h-14 w-14 items-center justify-center rounded-md border border-line text-ink transition group-hover:rotate-3", activeTheme.tenantScroller.accents[node.accent])}>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-black tracking-[-0.06em] text-ink sm:text-2xl">{node.title}</h3>
                        <span className="text-2xl font-black text-line">0{index + 1}</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted">{node.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
