import type { HeroCollageAccent } from "@/lib/themes";
import { activeTheme } from "@/lib/themes";
import { cn } from "@/lib/utils";

type TenantSite = {
  name: string;
  niche: string;
  url: string;
  headline: string;
  accent: HeroCollageAccent;
  metrics: readonly string[];
};

type MobiTenantSiteScrollerProps = {
  sites: readonly TenantSite[];
};

function TenantSiteCard({ site }: { site: TenantSite }) {
  const theme = activeTheme.tenantScroller;

  return (
    <article className={theme.card} aria-label={`Site tenant ${site.name}`}>
      <div className={theme.browser}>
        <div className={theme.browserBar}>
          <span className={theme.browserDot} aria-hidden="true" />
          <span className={theme.browserDot} aria-hidden="true" />
          <span className={theme.browserDot} aria-hidden="true" />
          <span className="ml-2 truncate text-xs font-bold text-muted">{site.url}</span>
        </div>
        <div className={cn(theme.screen, theme.accents[site.accent])}>
          <p className={theme.meta}>{site.niche}</p>
          <h2 className="mt-4 max-w-sm text-3xl font-black leading-[0.92] tracking-[-0.07em] text-ink sm:text-4xl">
            {site.name}
          </h2>
          <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-ink/70">{site.headline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {site.metrics.map((metric) => (
              <span key={metric} className="rounded-sm border border-white/60 bg-white/55 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink/70 backdrop-blur-sm">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className={theme.label}>{site.name}</p>
    </article>
  );
}

export function MobiTenantSiteScroller({ sites }: MobiTenantSiteScrollerProps) {
  const theme = activeTheme.tenantScroller;
  const repeatedSites = [...sites, ...sites];

  return (
    <section className={theme.shell} aria-label="Exemplos de sites de tenants da MOBI Digital">
      <div className={theme.viewport}>
        <div className={theme.track}>
          {repeatedSites.map((site, index) => (
            <TenantSiteCard key={`${site.name}-${index}`} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
}
