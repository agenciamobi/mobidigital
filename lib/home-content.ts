import type { HeroCollageAccent } from "@/lib/themes";

export const mobiHomeContent = {
  hero: {
    eyebrow: "MOBI Sites com IA",
    title: "Sites profissionais com IA, hospedagem e suporte MOBI",
    subtitle:
      "A MOBI Digital organiza briefing, estrutura, WordPress, domínio e IA em uma experiência guiada para tirar o site do papel com menos atrito técnico.",
    primaryCta: {
      label: "Começar meu site",
      href: "/cadastro",
    },
    secondaryCta: {
      label: "Ver planos",
      href: "/planos",
    },
  },
  tenantSites: [
    {
      name: "Floricultura Aurora",
      niche: "Floricultura",
      url: "aurora.mobidigital.com.br",
      headline: "Buquês, arranjos e presentes com pedido rápido pelo WhatsApp.",
      accent: "cyan" as HeroCollageAccent,
      metrics: ["Catálogo", "WhatsApp", "SEO local"],
    },
    {
      name: "Clínica Silva",
      niche: "Saúde",
      url: "clinicasilva.com.br",
      headline: "Site institucional com serviços, localização e captação de contatos.",
      accent: "brand" as HeroCollageAccent,
      metrics: ["Institucional", "Domínio próprio", "Blog"],
    },
    {
      name: "Bistrô Central",
      niche: "Gastronomia",
      url: "bistrocentral.mobidigital.com.br",
      headline: "Cardápio, reservas e presença digital organizada em uma base leve.",
      accent: "orange" as HeroCollageAccent,
      metrics: ["Cardápio", "Reservas", "Mobile"],
    },
    {
      name: "Advocacia Prado",
      niche: "Serviços profissionais",
      url: "pradoadv.com.br",
      headline: "Conteúdo institucional, áreas de atuação e estrutura para SEO local.",
      accent: "magenta" as HeroCollageAccent,
      metrics: ["Serviços", "SEO", "Contato"],
    },
    {
      name: "Studio Forma",
      niche: "Arquitetura",
      url: "studioforma.mobidigital.com.br",
      headline: "Portfólio, apresentação comercial e páginas preparadas para conversão.",
      accent: "cyan" as HeroCollageAccent,
      metrics: ["Portfólio", "Briefing", "IA"],
    },
  ],
  pillars: [
    {
      title: "Produto guiado",
      description: "O cliente não precisa entender cPanel, hospedagem ou instalação para começar com uma base clara.",
    },
    {
      title: "IA com direção",
      description: "A plataforma não joga uma tela vazia para o cliente: ela transforma briefing em prompt e estrutura.",
    },
    {
      title: "Infraestrutura evolutiva",
      description: "A arquitetura já considera WHM/cPanel, Softaculous, domínio próprio, painel e white label.",
    },
  ],
} as const;
