"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { activeTheme } from "@/lib/themes";
import { navItems, whatsAppLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type MobiMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MobiMenuOverlay({ open, onClose }: MobiMenuOverlayProps) {
  if (!open) return null;

  return (
    <div className="absolute inset-x-0 top-full z-50">
      <div className={activeTheme.menu.panel} role="dialog" aria-modal="true" aria-label="Menu de navegação MOBI Digital">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink transition hover:bg-surface-muted"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="grid gap-1" aria-label="Menu principal">
          <Link href="/" onClick={onClose} className={activeTheme.menu.link}>
            <span>Home</span>
          </Link>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className={activeTheme.menu.link}>
              <span>{item.label}</span>
              <span className="text-xl font-black text-muted">+</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-line pt-6">
          <p className={cn(activeTheme.menu.mutedText, "font-semibold text-ink")}>MOBI Digital</p>
          <p className={cn(activeTheme.menu.mutedText, "mt-2")}>Sites com IA, WordPress, domínio próprio, hospedagem e suporte humano.</p>
          <a href={whatsAppLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-black text-ink underline decoration-brand-300 decoration-2 underline-offset-4 hover:text-brand-700">
            Falar com a MOBI
          </a>
        </div>
      </div>
    </div>
  );
}
