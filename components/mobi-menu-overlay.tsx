"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { activeTheme } from "@/lib/themes";
import { navItems, whatsAppLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type MobiMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MobiMenuOverlay({ open, onClose }: MobiMenuOverlayProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div id="mobi-menu-overlay" className="absolute inset-x-0 top-full z-50">
      <button
        type="button"
        className="fixed inset-0 z-40 cursor-default bg-ink/10 backdrop-blur-sm"
        aria-label="Fechar menu"
        onClick={onClose}
      />
      <div className={activeTheme.menu.panel} role="dialog" aria-modal="true" aria-label="Menu de navegação MOBI Digital">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-line pb-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Menu MOBI Digital</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted">Navegação rápida, contato e próximos passos do produto.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-ink transition hover:bg-surface-muted"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="grid gap-1" aria-label="Menu principal">
          <Link href="/" onClick={onClose} className={cn(activeTheme.menu.link, pathname === "/" ? "text-brand-700" : "")} aria-current={pathname === "/" ? "page" : undefined}>
            <span>Home</span>
            <span className="text-xl font-black text-muted">+</span>
          </Link>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} onClick={onClose} className={cn(activeTheme.menu.link, isActive ? "text-brand-700" : "")} aria-current={isActive ? "page" : undefined}>
                <span>{item.label}</span>
                <span className="text-xl font-black text-muted">+</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 border-t border-line pt-6">
          <p className={cn(activeTheme.menu.mutedText, "font-semibold text-ink")}>Sites com IA, WordPress, domínio próprio e suporte humano.</p>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <a href={whatsAppLink} target="_blank" rel="noreferrer" className="group rounded-md border border-line bg-surface-muted p-4 transition hover:-translate-y-0.5 hover:bg-surface hover:shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">Contato</p>
              <span className="mt-2 inline-flex items-center gap-2 font-black text-ink group-hover:text-brand-700">
                WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
            <Link href="/cadastro" onClick={onClose} className="group rounded-md border border-line bg-ink p-4 text-white transition hover:-translate-y-0.5 hover:shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">Próximo passo</p>
              <span className="mt-2 inline-flex items-center gap-2 font-black">
                Começar site <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
