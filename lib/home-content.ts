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
  collage: [
    {
      title: "Briefing guiado",
      description: "Dados, objetivos, cores, páginas e palavras-chave organizados antes da criação.",
      accent: "cyan" as HeroCollageAccent,
    },
    {
      title: "WordPress preparado",
      description: "Base pronta para receber páginas, conteúdo, blog e evolução com IA.",
      accent: "brand" as HeroCollageAccent,
    },
    {
      title: "Prompt de IA",
      description: "Instrução estruturada para orientar melhorias com Code With AI.",
      accent: "magenta" as HeroCollageAccent,
    },
    {
      title: "Domínio próprio",
      description: "Comece em subdomínio temporário e conecte o domínio do cliente depois.",
      accent: "orange" as HeroCollageAccent,
    },
    {
      title: "Painel MOBI",
      description: "Status, acessos, suporte e próxima etapa do projeto em um só lugar.",
      accent: "cyan" as HeroCollageAccent,
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
