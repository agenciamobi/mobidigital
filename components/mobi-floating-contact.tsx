import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsAppLink } from "@/lib/site-data";

export function MobiFloatingContact() {
  return (
    <aside className="pointer-events-none fixed inset-x-0 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 px-3 print:hidden sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]" aria-label="Atalho de contato MOBI">
      <div className="container-page flex justify-end">
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto group inline-flex max-w-[calc(100vw-24px)] items-center gap-3 rounded-full border border-line bg-ink px-4 py-3 text-sm font-black uppercase tracking-tight text-white shadow-editorial transition hover:-translate-y-0.5 hover:bg-brand-700 sm:px-5"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Falar com a MOBI</span>
          <span className="sm:hidden">WhatsApp</span>
          <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
