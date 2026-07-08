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

## Motivo

A troca futura de identidade visual deve exigir alteração centralizada, sem varrer páginas e componentes procurando cores hardcoded.

Antes de criar novos componentes, revisar se a cor escolhida já existe como token. Se não existir, criar ou ajustar o token primeiro.
