"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { MobiBrandLogo } from "@/components/mobi-brand-logo";
import { MobiButton } from "@/components/button";
import { MobiMenuOverlay } from "@/components/mobi-menu-overlay";
import { activeTheme } from "@/lib/themes";
import { navItems } from "@/lib/site-data";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={activeTheme.header.shell}>
      <div className={activeTheme.header.inner}>
        <Link href="/" className={activeTheme.header.logo} aria-label="MOBI Digital">
          <MobiBrandLogo markClassName="h-11" />
        </Link>

        <nav className={activeTheme.header.nav} aria-label="Navegação principal">
          {navItems.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href} className={activeTheme.header.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobiButton href="/cadastro" size="sm" variant="primary" className="hidden sm:inline-flex">
            Começar meu site
          </MobiButton>
          <button
            type="button"
            className={activeTheme.header.menuButton}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
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
