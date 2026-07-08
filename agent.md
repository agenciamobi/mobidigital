# Regras do agente — MOBI Digital

## Regra crítica de cores

Todas as cores do projeto devem ser centralizadas e tokenizadas.

O arquivo central de cores é:

```txt
lib/design-tokens.ts
```

As cores base foram extraídas do logotipo oficial da MOBI anexado no início do projeto:

```txt
Ciano MOBI:   #18BDCD
Roxo MOBI:    #5E2CED
Magenta MOBI: #E70B85
Laranja MOBI: #F27035
Preto:        #000000
Branco:       #FFFFFF
```

Todas as demais cores, tons, estados, superfícies, bordas, sombras e variações visuais devem derivar dessas cores base.

## Como aplicar cores

Use sempre tokens já existentes do Tailwind configurados a partir de `lib/design-tokens.ts`:

```txt
brand-*
cyan-*
purple-*
magenta-*
orange-*
slate-*
ink
muted
strong
soft
page
surface
surface-muted
line
emerald-*
amber-*
```

Exemplos permitidos:

```tsx
className="bg-brand-600 text-white"
className="border-line bg-surface text-ink"
className="bg-surface-muted text-muted"
className="text-magenta-500"
className="bg-orange-50 text-orange-700"
```

## Proibido

Não usar cores soltas diretamente em componentes, páginas ou CSS.

Evitar:

```tsx
className="bg-blue-600"
className="text-gray-700"
className="border-zinc-200"
style={{ color: "#3177f6" }}
```

Evitar também `rgba`, `rgb`, `hex` ou nomes de cores diretamente fora do arquivo central.

## Quando precisar de uma cor nova

1. Primeiro avaliar se ela pode ser representada por token já existente.
2. Se precisar de uma nova variação, adicionar em `lib/design-tokens.ts`.
3. Usar o novo token pela configuração do Tailwind.
4. Não criar cor inline no componente.

## Regra para identidade visual

A identidade visual da MOBI Digital deve partir da marca MOBI:

- Roxo como cor principal de ação e tecnologia.
- Ciano como cor de apoio e confiança.
- Magenta como acento comercial e destaque.
- Laranja como acento pontual para energia, alerta ou chamada secundária.
- Neutros derivados de preto/branco para legibilidade, fundos, bordas e hierarquia.

## Regra crítica de bordas, raios e cantos

Bordas e arredondamentos também devem ser tokenizados.

O objetivo é permitir uma troca futura de direção visual, por exemplo de interface arredondada para interface reta, alterando apenas os tokens de raio em `lib/design-tokens.ts`.

Tokens permitidos:

```txt
rounded-none
rounded-xs
rounded-sm
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-xxl
rounded-full
border-line
```

Evitar criar valores arbitrários diretamente no componente:

```tsx
className="rounded-[2rem]"
className="rounded-[18px]"
className="border-[#e2e8f0]"
```

Se for necessário criar um novo tipo de canto, adicionar primeiro em:

```txt
lib/design-tokens.ts -> mobiDesignTokens.radius
```

Depois expor no Tailwind via:

```txt
tailwind.config.ts -> borderRadius: mobiBorderRadius
```

## Regra crítica de botões

Botões devem ser padronizados por intenção, tamanho e estado.

Não criar botões soltos com combinações aleatórias de classes em cada página.

Toda implementação nova deve seguir variantes previsíveis:

```txt
primary   -> ação principal, fundo roxo/brand, texto branco
secondary -> ação secundária, fundo surface, borda line, texto ink
outline   -> ação discreta, fundo transparente/surface, borda line
ghost     -> navegação ou ação leve, sem borda forte
danger    -> ação destrutiva futura, deve ser tokenizada antes de uso
whatsapp  -> CTA de contato, deve respeitar tokens de marca e não usar verde solto sem decisão de design
```

Tamanhos recomendados:

```txt
sm -> ações compactas
md -> padrão do produto
lg -> CTA principal de landing page
```

Estados obrigatórios:

```txt
hover
focus-visible
active
disabled
loading, quando aplicável
```

Regras:

1. Botão primário deve ser consistente em todo o projeto.
2. CTA principal deve usar a mesma variante em todas as páginas públicas.
3. Não usar verde WhatsApp como padrão sem token. Se necessário, criar token específico antes.
4. Não criar `className` extenso de botão dentro da página quando já existir componente reutilizável.
5. Usar `components/button.tsx` para novas ações clicáveis com aparência de botão.

## Regra de arquitetura de temas

A arquitetura de temas está documentada em:

```txt
docs/theme-architecture.md
```

Separação obrigatória:

```txt
Conteúdo/dados: lib/home-content.ts e lib/site-data.ts
Tokens globais: lib/design-tokens.ts
Contrato de tema: lib/themes/types.ts
Tema ativo: lib/themes/index.ts
Tema atual: lib/themes/mobi-editorial-agency.ts
Componentes de tema: components/mobi-*.tsx
```

Regras:

1. Não gravar conteúdo fixo dentro de componentes de tema quando esse conteúdo puder viver em arquivo de dados.
2. Um novo tema deve alterar apresentação, não apagar ou recriar cards, planos, textos e informações comerciais.
3. Componentes de tema devem consumir `activeTheme` e receber conteúdo por props.
4. Para criar outro tema, criar novo arquivo em `lib/themes/`, registrar em `lib/themes/index.ts` e trocar `activeTheme`.
5. Trocar tema não deve exigir mudanças em `lib/home-content.ts` nem em `lib/site-data.ts`.

## Regra de direção visual

A referência visual aprovada para guiar a próxima limpeza está documentada em:

```txt
docs/visual-reference-idotive.md
```

A referência deve orientar linguagem visual, estrutura e movimento, não cópia literal de código, assets, textos ou marca.

Direção adotada:

```txt
agency editorial + SaaS técnico + marca MOBI
```

Antes da limpeza dos componentes, usar essa referência para guiar:

- densidade dos cards;
- nível de arredondamento;
- sombras;
- contraste;
- botões;
- hero;
- uso de gradientes;
- estilo de ilustrações/mockups;
- comportamento mobile;
- menu overlay;
- motion/parallax suave.

Depois que a referência visual for aprovada, a limpeza deve aplicar o padrão no projeto inteiro, não apenas em uma página isolada.

## Regra de originalidade

Não copiar código, assets, imagens, textos, marca ou template de terceiros de forma literal.

É permitido capturar:

- estrutura de composição;
- ritmo visual;
- hierarquia;
- comportamento de menu;
- ideia de cards inclinados;
- motion patterns;
- sensação editorial/agência.

É obrigatório reimplementar tudo como tema original MOBI Digital.

## Motivo

A troca futura de identidade visual deve exigir alteração centralizada, sem varrer páginas e componentes procurando cores, bordas, botões e estilos hardcoded.

Antes de criar novos componentes, revisar se cor, raio, sombra, borda e botão já existem como token ou componente reutilizável. Se não existir, criar ou ajustar o token primeiro.
