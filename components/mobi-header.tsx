"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { MobiBrandLogo } from "@/components/mobi-brand-logo";
import { MobiButton } from "@/components/button";
import { MobiMenuOverlay } from "@/components/mobi-menu-overlay";
import { activeTheme } from "@/lib/themes";
import { navItems, whatsAppLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function DotMenuIcon() {
  return (
    <span className="grid grid-cols-2 gap-1" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
    </span>
  );
}

export function MobiHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className={activeTheme.header.shell}>
      <div className={activeTheme.header.inner}>
        <Link href="/" className={activeTheme.header.logo} aria-label="MOBI Digital">
          <MobiBrandLogo markClassName="h-11" />
        </Link>

        <nav className={activeTheme.header.nav} aria-label="Navegação principal">
          {navItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(activeTheme.header.navLink, isActive ? "bg-ink text-white hover:bg-ink" : "")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden items-center gap-2 rounded-sm border border-line bg-surface px-4 py-2 text-xs font-black uppercase tracking-tight text-ink transition hover:bg-surface-muted lg:inline-flex"
          >
            WhatsApp <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <MobiButton href="/cadastro" size="sm" variant="primary" className="hidden sm:inline-flex">
            Começar meu site
          </MobiButton>
          <button
            type="button"
            className={cn(activeTheme.header.menuButton, menuOpen ? "bg-surface" : "")}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobi-menu-overlay"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <DotMenuIcon />}
          </button>
        </div>
      </div>
      <MobiMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
