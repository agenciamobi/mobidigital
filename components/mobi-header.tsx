"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { MobiButton } from "@/components/button";
import { MobiMenuOverlay } from "@/components/mobi-menu-overlay";
import { activeTheme } from "@/lib/themes";
import { navItems } from "@/lib/site-data";
import { useState } from "react";

function MobiLogo() {
  return (
    <Link href="/" className={activeTheme.header.logo} aria-label="MOBI Digital">
      <span className="flex items-end text-3xl font-black leading-none tracking-[-0.08em] text-ink">
        <span className="text-cyan-500">M</span>
        <span className="text-brand-500">O</span>
        <span className="text-magenta-500">B</span>
        <span className="text-orange-500">I</span>
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-base font-black tracking-[-0.04em] text-ink">Digital</span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-muted">Sites com IA</span>
      </span>
    </Link>
  );
}

export function MobiHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={activeTheme.header.shell}>
      <div className={activeTheme.header.inner}>
        <MobiLogo />

        <nav className={activeTheme.header.nav} aria-label="Navegação principal">
          {navItems.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href} className={activeTheme.header.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobiButton href="/cadastro" size="sm" variant="primary" className="hidden sm:inline-flex">
            Começar agora
          </MobiButton>
          <button
            type="button"
            className={activeTheme.header.menuButton}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <MobiMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
