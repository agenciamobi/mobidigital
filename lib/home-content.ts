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
  about: {
    eyebrow: "Sobre a plataforma",
    title:
      "A MOBI Digital transforma criação de sites em um fluxo guiado, com IA, infraestrutura e suporte humano trabalhando juntos.",
    description:
      "Em vez de entregar uma tela vazia, a plataforma organiza briefing, plano, domínio, estrutura inicial, WordPress e orientação para Code With AI. O cliente entende o caminho; a MOBI mantém controle técnico e comercial.",
    badges: ["Sites com IA", "WordPress", "Domínio próprio"],
    stats: [
      { value: "4", label: "etapas principais" },
      { value: "24h", label: "para triagem inicial" },
      { value: "100%", label: "fluxo orientado" },
    ],
    collaborators: ["P", "M", "IA"],
  },
  featuredSites: {
    eyebrow: "Projetos em destaque",
    title: "Sites criados para vender, informar e captar contatos",
    description:
      "Cada tenant pode partir de um briefing diferente, mas a base comercial permanece organizada: páginas claras, CTA, SEO local e evolução com IA.",
    cta: "Ver planos",
    href: "/planos",
    items: [
      {
        name: "Floricultura Aurora",
        type: "Catálogo com WhatsApp",
        summary: "Produtos organizados por categoria, pedidos rápidos e estrutura para campanhas sazonais.",
        accent: "cyan" as HeroCollageAccent,
        tags: ["Catálogo", "WhatsApp", "SEO local"],
        large: true,
      },
      {
        name: "Clínica Silva",
        type: "Site institucional",
        summary: "Apresentação de serviços, contato, localização e conteúdo preparado para busca local.",
        accent: "brand" as HeroCollageAccent,
        tags: ["Institucional", "Serviços"],
      },
      {
        name: "Bistrô Central",
        type: "Landing + cardápio",
        summary: "Experiência mobile-first com chamada para reserva, WhatsApp e cardápio organizado.",
        accent: "orange" as HeroCollageAccent,
        tags: ["Mobile", "Reservas"],
      },
      {
        name: "Advocacia Prado",
        type: "Conteúdo + autoridade",
        summary: "Páginas por serviço, FAQ, contato e base preparada para ranqueamento local.",
        accent: "magenta" as HeroCollageAccent,
        tags: ["SEO", "FAQ", "Contato"],
      },
      {
        name: "Studio Forma",
        type: "Portfólio comercial",
        summary: "Apresentação visual, serviços e CTA para transformar interesse em orçamento.",
        accent: "cyan" as HeroCollageAccent,
        tags: ["Portfólio", "Orçamento"],
        wide: true,
      },
    ],
  },
  serviceRows: {
    eyebrow: "Nosso método",
    title: "Onde IA, hospedagem e estratégia viram site publicado",
    items: [
      {
        title: "Briefing guiado",
        description:
          "Organizamos informações da empresa, objetivos, serviços, diferenciais, domínio e palavras-chave antes da criação.",
      },
      {
        title: "Estrutura WordPress",
        description:
          "A base do site é planejada para páginas comerciais, conteúdo, blog, SEO local e evolução com IA.",
      },
      {
        title: "Domínio e hospedagem",
        description:
          "O cliente pode começar em subdomínio temporário e depois conectar o domínio próprio com orientação clara.",
      },
      {
        title: "Prompt para Code With AI",
        description:
          "Transformamos o briefing em instrução prática para evoluir textos, seções e páginas com assistência de IA.",
      },
    ],
  },
  darkImpact: {
    eyebrow: "Fluxo completo",
    title: "Cada etapa pensada para tirar o site do improviso",
    description:
      "A MOBI Digital combina produto, infraestrutura e suporte para transformar ideia, briefing e domínio em uma presença digital publicável.",
    cta: "Conhecer o método",
    href: "/como-funciona",
    rating: "4.9",
    ratingLabel: "clientes orientados",
    metric: "25+",
    metricLabel: "anos de web somados",
    people: ["P", "IA", "M"],
    showcaseTitle: "Sua visão, nossa estrutura: uma parceria para publicar com clareza.",
    cards: [
      {
        title: "Estratégia + execução",
        description: "A plataforma reduz decisões soltas e guia o cliente até uma base pronta para evoluir.",
        accent: "brand" as HeroCollageAccent,
      },
      {
        title: "Site com direção",
        description: "Cada página nasce conectada a CTA, SEO local, serviços e contexto comercial.",
        accent: "orange" as HeroCollageAccent,
      },
    ],
  },
  successGrid: {
    eyebrow: "Evolução do produto",
    title: "Transformando ideias em sites mensuráveis",
    description:
      "Da venda inicial ao painel do cliente, a MOBI Digital nasce preparada para crescer com domínio próprio, white label e provisionamento técnico.",
    cta: "Ver próximos passos",
    href: "/como-funciona",
    cards: [
      {
        title: "Experiência multi-segmento",
        description: "A mesma base pode atender floriculturas, clínicas, restaurantes, profissionais liberais e agências parceiras.",
      },
      {
        title: "Fluxo de ponta a ponta",
        description: "Plano, cadastro, briefing, site, domínio, prompt de IA e suporte ficam conectados no mesmo produto.",
      },
      {
        title: "Operação white label",
        description: "Parceiros poderão usar marca, cores, suporte e domínio próprio no painel, sem recriar a infraestrutura.",
      },
    ],
  },
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
