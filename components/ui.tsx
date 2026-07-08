import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { MobiButton } from "@/components/button";
import { MobiFooter } from "@/components/mobi-footer";
import { MobiHeader } from "@/components/mobi-header";
import { mobiHomeContent } from "@/lib/home-content";
import { whatsAppLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  return <MobiHeader />;
}

export function Footer() {
  return <MobiFooter {...mobiHomeContent.footer} />;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-page text-ink">{children}</main>
      <Footer />
    </>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex rounded-sm border border-line bg-surface px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700 shadow-sm">
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] text-ink sm:text-6xl">{title}</h2>
      {description ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="group rounded-lg border border-line bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700 transition group-hover:bg-ink group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black tracking-[-0.05em] text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

export function PlanCard({ plan }: { plan: { name: string; description: string; badge: string; price: string; cta: string; href: string; highlighted?: boolean; features: string[] } }) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[520px] flex-col rounded-lg border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial",
        plan.highlighted ? "border-ink bg-ink text-white shadow-editorial" : "border-line bg-surface text-ink",
      )}
    >
      <span
        className={cn(
          "w-fit rounded-sm px-3 py-1 text-xs font-black uppercase tracking-[0.18em]",
          plan.highlighted ? "bg-white text-ink" : "bg-brand-50 text-brand-700",
        )}
      >
        {plan.badge}
      </span>
      <h3 className="mt-7 text-4xl font-black leading-none tracking-[-0.07em]">{plan.name}</h3>
      <p className={cn("mt-5 text-sm leading-7", plan.highlighted ? "text-slate-200" : "text-muted")}>{plan.description}</p>
      <p className="mt-8 text-3xl font-black tracking-[-0.05em]">{plan.price}</p>
      <ul className="mt-8 grid gap-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 border-t border-line/70 pt-3">
            <CheckCircle2 className={cn("mt-0.5 h-5 w-5 flex-none", plan.highlighted ? "text-brand-200" : "text-brand-600")} aria-hidden="true" />
            <span className={plan.highlighted ? "text-slate-100" : "text-muted"}>{feature}</span>
          </li>
        ))}
      </ul>
      <MobiButton href={plan.href} variant={plan.highlighted ? "secondary" : "primary"} size="md" className="mt-auto w-full">
        {plan.cta}
      </MobiButton>
    </article>
  );
}

export function CTASection() {
  return (
    <section className="bg-page px-3 py-10 sm:px-6">
      <div className="container-page overflow-hidden rounded-xl bg-black px-6 py-14 text-white sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">Próximo passo</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-5xl">Comece pela estrutura certa antes de pensar em automação pesada.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              A primeira versão da MOBI Digital organiza venda, posicionamento e fluxo comercial. Depois entram painel, Supabase, provisionamento e integrações reais.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <MobiButton href="/cadastro" variant="secondary" size="lg">
              Começar meu site
            </MobiButton>
            <a href={whatsAppLink} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-tight text-white transition hover:bg-white hover:text-black">
              Falar com a MOBI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-line bg-page py-16 sm:py-24">
      <div className="container-page mx-auto max-w-5xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-7 text-balance text-[clamp(3.4rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.08em] text-ink">{title}</h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
