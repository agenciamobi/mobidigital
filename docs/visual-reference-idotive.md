# Referência visual — MOBI Digital

Referência informada pelo cliente:

```txt
https://idotive.webflow.io/
```

## Observação legal e de produto

A referência deve guiar direção visual, estrutura e sensação de interação.

Não copiar código, assets, textos, imagens, marca, identidade ou template de forma literal.

O objetivo é criar um tema original da MOBI Digital, inspirado na linguagem visual da referência, usando componentes próprios, copy própria, tokens próprios e assets próprios.

## Elementos visuais capturados da referência

### 1. Base de layout

- Fundo off-white claro, quase editorial.
- Header limpo, horizontal, com bastante respiro.
- Linha divisória fina abaixo do header.
- Logo à esquerda.
- CTA retangular escuro à direita.
- Ícone de menu minimalista à direita.
- Hero centralizado com tipografia gigante.
- Pouco texto na primeira dobra.
- CTA curto logo abaixo do título.
- Composição visual grande abaixo do hero.

### 2. Tipografia

- Título extremamente grande, preto, pesado e com entrelinha curta.
- Hierarquia baseada em contraste tipográfico, não em muitos elementos coloridos.
- Poucas palavras por bloco.
- Botões em caixa alta ou com peso forte.

Aplicação MOBI:

- Hero deve ser forte e direto.
- Evitar subtítulos longos dentro da primeira dobra.
- Usar títulos com peso visual alto.
- Manter contraste entre headline preta e fundo claro.

### 3. Botões

- Botões escuros, sólidos, com aparência editorial/agency.
- Raio baixo ou médio, não excessivamente arredondado.
- CTA principal muito claro e isolado.

Aplicação MOBI:

- Reduzir uso de botões pill/rounded-full em CTAs principais se a direção final for mais parecida com a referência.
- Usar variante `primary` com fundo `ink` ou `brand`, de acordo com a seção.
- Padronizar botões em componente único antes da limpeza.

### 4. Cards e imagens

- Cards grandes com aparência de fotografia/polaroid.
- Imagens rotacionadas em ângulos diferentes.
- Bordas brancas fortes nos cards de imagem.
- Sobreposição parcial e sensação de movimento.
- Composição visual invade a dobra inferior.

Aplicação MOBI:

- Trocar mockup genérico por composição de cards inclinados.
- Usar cards com prints/representações de sites, painéis, WordPress, IA, domínio e hospedagem.
- Criar um `MobiHeroCollage` com cards rotacionados.

### 5. Movimento

Efeitos desejados:

- Entrada suave do título.
- Cards surgindo de baixo com rotação.
- Movimento/parallax leve conforme scroll.
- Hover sutil nos cards, sem excesso.
- Menu overlay abrindo com painel claro e sombra suave.

Não usar animações pesadas que prejudiquem performance.
Respeitar `prefers-reduced-motion`.

### 6. Menu

- Menu aberto em painel flutuante à direita.
- Fundo branco/surface.
- Sombra ampla e suave.
- Links grandes.
- Itens com sinal de expansão.
- Contato no final do painel.

Aplicação MOBI:

- Criar menu mobile/desktop alternativo com painel flutuante.
- Links principais: Home, Como funciona, Planos, Domínio próprio, White Label, FAQ, Contato.
- CTA fixo no header.

### 7. Direção visual MOBI

O tema da MOBI Digital deve ficar entre:

```txt
agency editorial + SaaS técnico + marca MOBI
```

Não seguir visual infantil de IA.
Não seguir visual genérico azul SaaS.
Não usar excesso de gradientes.
Usar as cores da MOBI como acentos, não como carnaval visual.

## Tradução da referência para MOBI Digital

Referência original fala de branding/design.
MOBI Digital deve falar de:

- sites com IA;
- hospedagem;
- WordPress;
- domínio próprio;
- white label;
- painel do cliente;
- suporte humano;
- criação guiada.

Exemplo de primeira dobra adaptada:

```txt
Headline:
Sites profissionais com IA, hospedagem e suporte MOBI

CTA:
Começar meu site

Composição visual:
Cards inclinados mostrando:
- Briefing guiado
- WordPress preparado
- Domínio próprio
- Prompt de IA
- Painel do cliente
```

## Regras para implementação

1. Criar componentes próprios com prefixo ou contexto MOBI, sem nomes idotive.
2. Não importar CSS, JS ou assets da referência.
3. Não usar textos da referência.
4. Não copiar a marca ou elementos gráficos proprietários.
5. Capturar apenas a linguagem visual: fundo, respiro, grid, hierarquia, cards inclinados, menu overlay e motion.
6. Manter tudo tokenizado em `lib/design-tokens.ts`.
7. Padronizar botões antes de refatorar páginas.
8. Criar motion utilities centralizadas, sem espalhar `transition` e `animation` sem critério.

## Componentes sugeridos

```txt
components/button.tsx
components/mobi-header.tsx
components/mobi-menu-overlay.tsx
components/mobi-hero-collage.tsx
components/mobi-polaroid-card.tsx
components/mobi-section-heading.tsx
components/mobi-cta.tsx
```

## Fase recomendada antes da limpeza

1. Criar componente central de botão.
2. Criar componente central de header/menu.
3. Criar componente de collage hero.
4. Refatorar home primeiro.
5. Validar visual.
6. Aplicar padrão nas demais páginas.
