import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { navItems, whatsAppLink } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex min-h-16 items-center justify-between gap-6 py-3">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-xl">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-sm font-black text-white shadow-soft">
            M
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-ink">MOBI Digital</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">Sites com IA</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/entrar"
            className="focus-ring hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-ink sm:inline-flex"
          >
            Entrar
          </Link>
          <Link href="/cadastro" className="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700">
            Começar agora
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-black text-ink">MOBI Digital</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Plataforma da MOBI para venda, criação e gestão de sites com IA, hospedagem, WordPress, domínio próprio e suporte humano.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Produto</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/planos" className="hover:text-ink">Planos</Link>
            <Link href="/como-funciona" className="hover:text-ink">Como funciona</Link>
            <Link href="/white-label" className="hover:text-ink">White Label</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Contato</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/faq" className="hover:text-ink">FAQ</Link>
            <Link href="/contato" className="hover:text-ink">Fale com a MOBI</Link>
            <a href={whatsAppLink} className="hover:text-ink" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MOBI Digital. Todos os direitos reservados.</p>
          <p>mobidigital.com.br</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-3xl font-black tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="rounded-xxl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export function PlanCard({ plan }: { plan: { name: string; description: string; badge: string; price: string; cta: string; href: string; highlighted?: boolean; features: string[] } }) {
  return (
    <article className={`relative flex h-full flex-col rounded-xxl border p-6 shadow-sm ${plan.highlighted ? "border-brand-300 bg-ink text-white shadow-soft" : "border-slate-200 bg-white text-ink"}`}>
      <div className="flex items-center justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${plan.highlighted ? "bg-white text-ink" : "bg-brand-50 text-brand-700"}`}>
          {plan.badge}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-black tracking-tight">{plan.name}</h3>
      <p className={`mt-3 text-sm leading-6 ${plan.highlighted ? "text-slate-200" : "text-slate-600"}`}>{plan.description}</p>
      <p className="mt-6 text-3xl font-black">{plan.price}</p>
      <ul className="mt-6 grid gap-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-none ${plan.highlighted ? "text-brand-200" : "text-brand-600"}`} aria-hidden="true" />
            <span className={plan.highlighted ? "text-slate-100" : "text-slate-700"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={plan.href}
        className={`focus-ring mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm font-black transition ${plan.highlighted ? "bg-white text-ink hover:bg-brand-50" : "bg-ink text-white hover:bg-brand-700"}`}
      >
        {plan.cta}
      </Link>
    </article>
  );
}

export function CTASection() {
  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-200">Próximo passo</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Comece pela estrutura certa antes de pensar em automação pesada.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A primeira versão da MOBI Digital organiza a venda, o posicionamento e o fluxo comercial. Depois entram painel, Supabase, provisionamento e integrações reais.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Link href="/cadastro" className="focus-ring rounded-full bg-white px-6 py-3 text-center text-sm font-black text-ink transition hover:bg-brand-50">
            Começar meu site
          </Link>
          <a href={whatsAppLink} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-white/30 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-white/10">
            Falar com a MOBI
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="container-page mx-auto max-w-4xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}
