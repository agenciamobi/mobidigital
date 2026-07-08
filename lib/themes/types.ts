export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

export type HeroCollageAccent = "brand" | "cyan" | "magenta" | "orange";

export type ThemeRecord = {
  id: string;
  name: string;
  description: string;
  layout: {
    page: string;
    section: string;
    container: string;
  };
  header: {
    shell: string;
    inner: string;
    logo: string;
    nav: string;
    navLink: string;
    menuButton: string;
  };
  menu: {
    panel: string;
    link: string;
    mutedText: string;
  };
  button: {
    base: string;
    sizes: Record<ButtonSize, string>;
    variants: Record<ButtonVariant, string>;
  };
  hero: {
    shell: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    actions: string;
  };
  collage: {
    stage: string;
    card: string;
    cardMediaBase: string;
    cardLabel: string;
    rotations: string[];
    accents: Record<HeroCollageAccent, string>;
  };
  card: {
    base: string;
    compact: string;
    section: string;
  };
};
