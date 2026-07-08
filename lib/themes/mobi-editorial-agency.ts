import type { ThemeRecord } from "./types";

export const mobiEditorialAgencyTheme: ThemeRecord = {
  id: "mobi-editorial-agency",
  name: "MOBI Editorial Agency",
  description:
    "Tema editorial inspirado em agência criativa: fundo off-white, headline forte, CTA escuro, menu overlay e cards inclinados.",
  layout: {
    page: "bg-page text-ink",
    section: "border-line bg-page",
    container: "container-page",
  },
  header: {
    shell: "sticky top-0 z-50 border-b border-line bg-page/95 backdrop-blur-xl",
    inner: "container-page flex min-h-[88px] items-center justify-between gap-5 py-4",
    logo: "focus-ring inline-flex items-center gap-3 rounded-md",
    nav: "hidden items-center gap-1 xl:flex",
    navLink:
      "focus-ring rounded-md px-3 py-2 text-sm font-black uppercase tracking-tight text-ink transition hover:bg-surface-muted",
    menuButton:
      "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-page text-ink transition hover:bg-surface",
  },
  menu: {
    panel:
      "absolute right-4 top-[88px] z-50 w-[min(440px,calc(100vw-32px))] rounded-xl border border-line bg-surface p-6 shadow-editorial sm:right-8 lg:right-[max(2rem,calc((100vw-1120px)/2))]",
    link: "flex items-center justify-between rounded-md px-1 py-2 text-2xl font-black tracking-tight text-ink transition hover:text-brand-600 sm:text-3xl",
    mutedText: "text-sm leading-6 text-muted",
  },
  button: {
    base:
      "focus-ring inline-flex items-center justify-center gap-2 rounded-sm text-center font-black uppercase tracking-tight transition duration-200 disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5",
    sizes: {
      sm: "px-4 py-2 text-xs",
      md: "px-5 py-3 text-sm",
      lg: "px-7 py-4 text-sm",
    },
    variants: {
      primary: "bg-ink text-white shadow-editorial hover:bg-brand-700",
      secondary: "border border-line bg-surface text-ink hover:bg-surface-muted",
      outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
      ghost: "bg-transparent text-ink hover:bg-surface-muted",
      danger: "bg-magenta-600 text-white hover:bg-magenta-700",
      whatsapp: "bg-cyan-600 text-white hover:bg-cyan-700",
    },
  },
  hero: {
    shell: "relative overflow-hidden border-b border-line bg-page py-16 sm:py-24 lg:py-28",
    eyebrow:
      "inline-flex rounded-sm border border-line bg-surface px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700 shadow-sm",
    title:
      "mx-auto mt-8 max-w-6xl text-balance text-center text-[clamp(3.6rem,10vw,8.8rem)] font-black leading-[0.86] tracking-[-0.08em] text-ink",
    subtitle: "mx-auto mt-7 max-w-2xl text-center text-base leading-7 text-muted sm:text-lg",
    actions: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
  },
  collage: {
    stage:
      "pointer-events-none relative mx-auto mt-12 h-[360px] max-w-7xl overflow-hidden sm:h-[430px] lg:-mb-24 lg:h-[520px]",
    card:
      "absolute w-[260px] rounded-lg border-[10px] border-white bg-white p-2 shadow-polaroid motion-safe:animate-float-slow sm:w-[330px] lg:w-[380px]",
    cardMediaBase: "h-36 rounded-md sm:h-44 lg:h-52",
    cardLabel: "pt-3 text-center text-base font-black tracking-[-0.04em] text-ink sm:text-lg",
    rotations: [
      "left-[-52px] bottom-8 rotate-[-18deg] [--mobi-card-rotation:-18deg] [animation-delay:0ms]",
      "left-[18%] bottom-16 rotate-[-8deg] [--mobi-card-rotation:-8deg] [animation-delay:180ms]",
      "right-[18%] bottom-12 rotate-[7deg] [--mobi-card-rotation:7deg] [animation-delay:360ms]",
      "right-[-64px] bottom-8 rotate-[17deg] [--mobi-card-rotation:17deg] [animation-delay:540ms]",
      "left-1/2 top-0 hidden -translate-x-1/2 rotate-[2deg] [--mobi-card-rotation:2deg] [animation-delay:720ms] lg:block",
    ],
    accents: {
      brand: "bg-gradient-to-br from-brand-100 via-brand-300 to-magenta-200",
      cyan: "bg-gradient-to-br from-cyan-100 via-cyan-300 to-brand-200",
      magenta: "bg-gradient-to-br from-magenta-100 via-magenta-300 to-orange-200",
      orange: "bg-gradient-to-br from-orange-100 via-orange-300 to-cyan-200",
    },
  },
  card: {
    base: "rounded-lg border border-line bg-surface p-6 shadow-sm",
    compact: "rounded-md border border-line bg-surface p-5 shadow-sm",
    section: "border-y border-line bg-surface-muted py-16 sm:py-20",
  },
};
