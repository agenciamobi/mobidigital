import {
  BadgeCheck,
  Bot,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  Globe2,
  Handshake,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  LockKeyhole,
  MessageCircle,
  PanelTop,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/planos", label: "Planos" },
  { href: "/dominio-proprio", label: "Domínio próprio" },
  { href: "/white-label", label: "White Label" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export const publicRoutes = [
  "/",
  "/planos",
  "/como-funciona",
  "/dominio-proprio",
  "/white-label",
  "/faq",
  "/contato",
  "/cadastro",
  "/entrar",
  "/app",
  "/admin",
];

export const whatsAppLink =
  "https://wa.me/5553999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20MOBI%20Digital";

export const features = [
  {
    title: "Hospedagem gerenciada",
    description: "Estrutura preparada para hospedar o site sem o cliente precisar lidar com a parte técnica.",
    icon: ServerCog,
  },
  {
    title: "WordPress preparado",
    description: "Base inicial pensada para receber páginas, conteúdo, SEO e evolução com IA.",
    icon: PanelTop,
  },
  {
    title: "Prompt para Code With AI",
    description: "Briefing organizado em um prompt claro para orientar melhorias no site com IA.",
    icon: Bot,
  },
  {
    title: "Domínio próprio",
    description: "O cliente começa com subdomínio temporário e pode conectar seu domínio quando estiver pronto.",
    icon: Globe2,
  },
  {
    title: "Suporte MOBI",
    description: "A IA acelera o processo, mas o suporte humano mantém o projeto no caminho certo.",
    icon: LifeBuoy,
  },
  {
    title: "SEO inicial",
    description: "Estrutura comercial preparada para SEO local, páginas claras e chamadas para conversão.",
    icon: LineChart,
  },
];

export const plans = [
  {
    name: "Site Start com IA",
    description: "Para autônomos e pequenos negócios que precisam começar com presença profissional.",
    badge: "Entrada",
    price: "Sob consulta",
    cta: "Escolher Site Start",
    href: "/cadastro?plano=site-start",
    features: [
      "Estrutura inicial do site",
      "Hospedagem inclusa",
      "WordPress preparado",
      "Prompt personalizado para IA",
      "WhatsApp integrado",
      "Suporte inicial MOBI",
    ],
  },
  {
    name: "Site Pro com IA",
    description: "Para empresas que querem um site mais completo, com páginas institucionais e SEO local.",
    badge: "Mais escolhido",
    highlighted: true,
    price: "Sob consulta",
    cta: "Escolher Site Pro",
    href: "/cadastro?plano=site-pro",
    features: [
      "Até 5 páginas planejadas",
      "SEO local inicial",
      "Blog preparado",
      "WordPress + estrutura comercial",
      "Prompt avançado para Code With AI",
      "Suporte MOBI",
    ],
  },
  {
    name: "Catálogo com IA",
    description: "Para negócios que precisam organizar produtos ou serviços e receber contatos pelo WhatsApp.",
    badge: "Produtos e serviços",
    price: "Sob consulta",
    cta: "Escolher Catálogo",
    href: "/cadastro?plano=catalogo",
    features: [
      "Estrutura de catálogo",
      "Categorias de produtos/serviços",
      "CTAs para WhatsApp",
      "SEO por categoria",
      "Base para PDF/QR Code futuramente",
      "Suporte MOBI",
    ],
  },
];

export const processSteps = [
  {
    title: "Escolha o plano",
    description: "O cliente seleciona o formato ideal: site institucional, página de entrada ou catálogo.",
    icon: CircleDollarSign,
  },
  {
    title: "Preencha o briefing",
    description: "A plataforma coleta segmento, contatos, serviços, cores, domínio e objetivos comerciais.",
    icon: LayoutDashboard,
  },
  {
    title: "A estrutura é preparada",
    description: "A base do projeto fica organizada para receber hospedagem, WordPress e evolução técnica.",
    icon: ServerCog,
  },
  {
    title: "Evolua com IA e suporte",
    description: "O prompt gerado orienta o uso do Code With AI, com suporte humano da MOBI quando necessário.",
    icon: Sparkles,
  },
];

export const audiences = [
  { title: "Autônomos", description: "Para quem precisa sair do improviso e ter uma presença profissional." },
  { title: "Pequenos negócios", description: "Para empresas locais que vendem pelo WhatsApp e precisam organizar a comunicação." },
  { title: "Prestadores de serviço", description: "Para negócios que dependem de confiança, clareza e captação de contatos." },
  { title: "Lojas locais", description: "Para organizar produtos, categorias e chamadas comerciais." },
  { title: "Agências parceiras", description: "Para quem quer revender sites com operação white label no futuro." },
];

export const faqs = [
  {
    question: "A IA cria o site sozinha?",
    answer:
      "Não de forma isolada. A proposta da MOBI Digital é usar IA para acelerar planejamento, textos, estrutura e ajustes, mas com fluxo guiado e suporte humano da MOBI.",
  },
  {
    question: "Preciso ter domínio?",
    answer:
      "Não para começar. O projeto pode iniciar em um subdomínio temporário e depois receber o domínio próprio do cliente.",
  },
  {
    question: "Posso usar meu próprio domínio?",
    answer:
      "Sim. O painel será preparado para orientar os apontamentos DNS e acompanhar a ativação do domínio no site.",
  },
  {
    question: "O que é Code With AI?",
    answer:
      "É uma camada de edição assistida por IA disponível no ambiente Softaculous/cPanel. A MOBI Digital deve gerar um prompt estruturado para orientar esse uso.",
  },
  {
    question: "O que é WordPress?",
    answer:
      "É uma das plataformas mais usadas para criação e gestão de sites. O objetivo é entregar uma base pronta para o cliente evoluir com menos atrito técnico.",
  },
  {
    question: "A hospedagem está inclusa?",
    answer:
      "A proposta comercial da plataforma prevê hospedagem integrada nos planos. Condições finais podem variar conforme configuração, domínio e volume do projeto.",
  },
  {
    question: "Posso contratar como agência/parceiro?",
    answer:
      "Sim. O modelo white label será uma etapa importante do produto para parceiros que desejam vender sites com sua própria marca.",
  },
  {
    question: "A MOBI aparece no site do cliente?",
    answer:
      "Depende do plano. Para white label e projetos específicos, a marca MOBI pode ficar oculta na experiência pública do cliente.",
  },
  {
    question: "O que acontece depois do cadastro?",
    answer:
      "Na primeira etapa, a ativação pode ser manual pela equipe MOBI. Depois, o fluxo deve evoluir para criação automática com provisionamento controlado.",
  },
  {
    question: "Posso cancelar?",
    answer:
      "Sim. As regras de cancelamento dependem do plano, hospedagem, domínio e serviços contratados.",
  },
];

export const statusItems = [
  { label: "Briefing recebido", icon: BadgeCheck },
  { label: "Hospedagem preparada", icon: ServerCog },
  { label: "WordPress instalado", icon: PanelTop },
  { label: "Prompt de IA gerado", icon: Code2 },
  { label: "Site pronto", icon: Rocket },
];

export const whiteLabelLevels = [
  {
    title: "White Label Básico",
    description: "Site no domínio do cliente, identidade visual própria e possibilidade de ocultar a marca MOBI no site público.",
    icon: Building2,
  },
  {
    title: "White Label Partner",
    description: "Agência parceira com logo, cores, suporte, clientes e domínio próprio no painel.",
    icon: Handshake,
  },
  {
    title: "White Label Infra",
    description: "Camada futura para parceiros com necessidades avançadas de infraestrutura, DNS e operação técnica.",
    icon: LockKeyhole,
  },
];

export const trustItems = [
  { title: "Fluxo guiado", icon: CheckCircle2 },
  { title: "Controle técnico", icon: ShieldCheck },
  { title: "WhatsApp integrado", icon: MessageCircle },
];

export const domainSteps = [
  {
    title: "Comece com subdomínio temporário",
    description: "O cliente pode iniciar em algo como cliente.mobidigital.com.br enquanto prepara o domínio definitivo.",
  },
  {
    title: "Informe o domínio próprio",
    description: "O painel vai coletar domínio principal, versão com www e responsável pela configuração DNS.",
  },
  {
    title: "Configure os apontamentos",
    description: "A plataforma exibe instruções claras para A record, CNAME e validação de propagação.",
  },
  {
    title: "Ative SSL e publicação",
    description: "Após validação, o domínio entra como ativo e o site passa a responder no endereço do cliente.",
  },
];

export const partnerBenefits = [
  "Painel com marca, cores e logo do parceiro",
  "Clientes separados por organização",
  "Planos comerciais próprios",
  "Suporte com WhatsApp do parceiro",
  "Domínio customizado para acesso ao painel",
  "Possibilidade de ocultar a marca MOBI conforme plano",
];
