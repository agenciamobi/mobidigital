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
    ? "group inline-flex items-center gap-3 border-b border-white/40 pb-2 text-3xl font-black tracking-[-0.06em] text-white/80 transition hover:text-white"
    : "text-sm font-semibold text-white/70 transition hover:text-white";

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

export function MobiFooter({ contact, social, columns }: MobiFooterProps) {
  return (
    <footer className="overflow-hidden bg-black py-20 text-white sm:py-28" aria-label="Rodapé MOBI Digital">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr_1.2fr]">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-sm" aria-label="MOBI Digital">
              <span className="text-4xl font-black tracking-[-0.08em]">
                <span className="text-cyan-500">M</span><span className="text-brand-500">O</span><span className="text-magenta-500">B</span><span className="text-orange-500">I</span>
              </span>
              <span className="text-2xl font-black tracking-[-0.06em] text-white">Digital</span>
            </Link>

            <div className="mt-12 grid gap-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">E-mail</p>
                <a href={`mailto:${contact.email}`} className="mt-2 block text-2xl font-black tracking-[-0.04em] text-white hover:text-orange-300">
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">WhatsApp</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4">
            {social.map((item) => (
              <FooterLink key={item.label} href={item.href} large>
                {item.label}
              </FooterLink>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Sparkles className="h-24 w-24 text-orange-500" aria-hidden="true" />
              <p className="mt-8 text-sm text-white/60">© {new Date().getFullYear()} MOBI Digital. Produto da Agência MOBI, Pelotas/RS.</p>
            </div>
            <div>
              <p className="text-sm font-black text-white">• {contact.location}</p>
              <p className="mt-8 text-[clamp(5rem,12vw,13rem)] font-black leading-[0.78] tracking-[-0.1em] text-white">
                Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
