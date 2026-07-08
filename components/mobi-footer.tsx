import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

type MobiFooterProps = {
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: readonly {
    label: string;
    href: string;
  }[];
  columns: readonly {
    title: string;
    links: readonly {
      label: string;
      href: string;
    }[];
  }[];
};

function FooterLink({ href, children, large = false }: { href: string; children: React.ReactNode; large?: boolean }) {
  const isExternal = href.startsWith("http");
  const className = large
    ? "group inline-flex items-center justify-between gap-3 border-b border-white/35 pb-2 text-3xl font-black tracking-[-0.06em] text-white/75 transition hover:border-orange-400 hover:text-white sm:text-4xl"
    : "text-sm font-semibold text-white/65 transition hover:text-white";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
        {large ? <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {large ? <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /> : null}
    </Link>
  );
}

function MobiFooterMark() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-sm bg-white text-sm font-black tracking-[-0.08em] shadow-sm" aria-hidden="true">
      <span>
        <span className="text-cyan-500">M</span><span className="text-brand-500">O</span>
      </span>
    </span>
  );
}

export function MobiFooter({ contact, social, columns }: MobiFooterProps) {
  return (
    <footer className="overflow-hidden bg-black py-20 text-white sm:py-28" aria-label="Rodapé MOBI Digital">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_0.85fr_1.2fr] lg:items-start">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-sm" aria-label="MOBI Digital">
              <MobiFooterMark />
              <span className="leading-none">
                <span className="block text-2xl font-black tracking-[-0.06em] text-white">MOBI</span>
                <span className="block text-xs font-black uppercase tracking-[0.22em] text-white/45">Digital</span>
              </span>
            </Link>

            <p className="mt-10 max-w-sm text-base font-semibold leading-7 text-white/60">
              Sites com IA, WordPress, domínio próprio, hospedagem e suporte humano para transformar briefing em presença digital.
            </p>

            <div className="mt-12 grid gap-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">E-mail</p>
                <a href={`mailto:${contact.email}`} className="mt-2 block max-w-sm break-words text-2xl font-black tracking-[-0.04em] text-white hover:text-orange-300">
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">WhatsApp</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4 lg:pt-1">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">Canais</p>
            {social.map((item) => (
              <FooterLink key={item.label} href={item.href} large>
                {item.label}
              </FooterLink>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:pt-1">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="grid content-start gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">{column.title}</p>
                {column.links.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-white/20 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="grid h-32 w-32 place-items-center rounded-full border border-white/20 bg-white/[0.03]">
                <Sparkles className="h-20 w-20 text-orange-500" aria-hidden="true" />
              </div>
              <p className="mt-8 max-w-sm text-sm text-white/55">© {new Date().getFullYear()} MOBI Digital. Produto da Agência MOBI, Pelotas/RS.</p>
            </div>
            <div className="lg:text-right">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/75">• {contact.location}</p>
              <p className="mt-8 text-[clamp(4.7rem,13vw,14.5rem)] font-black leading-[0.78] tracking-[-0.105em] text-white">
                Digital
              </p>
              <div className="mt-8 flex flex-wrap gap-3 lg:justify-end">
                <Link href="/cadastro" className="focus-ring inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-black uppercase tracking-tight text-black transition hover:bg-orange-300">
                  Começar meu site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/planos" className="focus-ring inline-flex items-center gap-2 rounded-sm border border-white/30 px-5 py-3 text-sm font-black uppercase tracking-tight text-white transition hover:border-white hover:bg-white hover:text-black">
                  Ver planos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
