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
    metric: "60+",
    metricLabel: "possibilidades de nicho",
    people: ["M", "IA", "P"],
    exploreLabel: "Explorar tudo",
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
      {
        title: "Resultados que importam",
        description: "Cada site nasce com chamada comercial, contato, SEO local e uma base clara para medir evolução.",
      },
    ],
  },
  insights: {
    eyebrow: "Guias rápidos",
    title: "Decisões melhores antes de publicar o site",
    description:
      "Conteúdos curtos ajudam o cliente a entender domínio, briefing, IA, WordPress e SEO sem transformar a venda em uma conversa técnica demais.",
    cta: "Ver FAQ",
    href: "/faq",
    items: [
      {
        title: "Como escolher um domínio sem travar o projeto",
        description: "O domínio pode ser conectado depois. O importante é iniciar com estrutura clara e evitar que DNS bloqueie o começo.",
        meta: "Domínio próprio",
        accent: "brand" as HeroCollageAccent,
      },
      {
        title: "Por que briefing guiado melhora o resultado da IA",
        description: "A IA entrega melhor quando recebe informações objetivas sobre público, serviços, diferenciais e tom comercial.",
        meta: "Briefing + IA",
        accent: "cyan" as HeroCollageAccent,
      },
      {
        title: "WordPress ainda faz sentido para sites comerciais",
        description: "A base continua útil para páginas, blog, SEO local, conteúdo e evolução com suporte técnico quando necessário.",
        meta: "WordPress",
        accent: "magenta" as HeroCollageAccent,
      },
      {
        title: "White label exige marca, operação e suporte bem definidos",
        description: "Parceiros precisam de identidade própria, mas também de regras claras para suporte, domínio, clientes e planos.",
        meta: "Parceiros",
        accent: "orange" as HeroCollageAccent,
      },
    ],
  },
  testimonial: {
    eyebrow: "Depoimento demonstrativo",
    title: "Histórias de clientes que saem do improviso digital",
    description:
      "Nesta fase, usamos um case conceitual para representar o tipo de experiência que a plataforma deve entregar aos tenants.",
    quote:
      "A MOBI organizou o caminho: briefing, site, domínio, WhatsApp e estrutura para SEO. O processo ficou claro e o site saiu do papel com muito menos atrito.",
    author: "Cliente MOBI Digital",
    role: "Case conceitual",
    rating: "★★★★★",
    cards: [
      { label: "Antes", accent: "magenta" as HeroCollageAccent },
      { label: "Durante", accent: "cyan" as HeroCollageAccent },
      { label: "Depois", accent: "orange" as HeroCollageAccent },
    ],
  },
  people: {
    eyebrow: "Tecnologia com direção humana",
    title: "IA acelera. Pessoas dão direção.",
    description:
      "A plataforma deve ser técnica por trás e simples na frente. O papel da MOBI é transformar opções soltas em uma jornada clara para o cliente.",
    backgroundText: "Pessoas + IA + estratégia",
    members: [
      { name: "MOBI", role: "produto e estratégia", accent: "brand" as HeroCollageAccent },
      { name: "Cliente", role: "briefing e decisão", accent: "cyan" as HeroCollageAccent },
      { name: "IA", role: "velocidade e apoio", accent: "magenta" as HeroCollageAccent },
      { name: "Partner", role: "white label futuro", accent: "orange" as HeroCollageAccent },
    ],
  },
  footer: {
    contact: {
      email: "contato@agenciamobi.com.br",
      phone: "(53) 98110-2176",
      location: "Pelotas/RS",
    },
    social: [
      { label: "WhatsApp", href: "/contato" },
      { label: "Instagram", href: "https://www.instagram.com/agenciamobi" },
      { label: "Agência MOBI", href: "https://agenciamobi.com.br" },
    ],
    columns: [
      {
        title: "Produto",
        links: [
          { label: "Planos", href: "/planos" },
          { label: "Como funciona", href: "/como-funciona" },
          { label: "Domínio próprio", href: "/dominio-proprio" },
        ],
      },
      {
        title: "Plataforma",
        links: [
          { label: "Cadastro", href: "/cadastro" },
          { label: "Entrar", href: "/entrar" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Parceiros",
        links: [
          { label: "White Label", href: "/white-label" },
          { label: "Contato", href: "/contato" },
        ],
      },
    ],
  },
} as const;
