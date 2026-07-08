# Arquitetura de temas — MOBI Digital

A MOBI Digital deve separar **conteúdo** de **apresentação visual**.

Isso permite criar novos temas no futuro sem perder cards, textos, planos, informações comerciais ou fluxos.

## Estrutura atual

```txt
lib/design-tokens.ts
lib/themes/types.ts
lib/themes/mobi-editorial-agency.ts
lib/themes/index.ts
lib/home-content.ts
lib/site-data.ts
components/button.tsx
components/mobi-header.tsx
components/mobi-menu-overlay.tsx
components/mobi-hero-collage.tsx
```

## Responsabilidade de cada camada

### 1. Tokens globais

Arquivo:

```txt
lib/design-tokens.ts
```

Responsável por:

- cores base da marca MOBI;
- cores derivadas;
- tokens semânticos;
- bordas;
- raios;
- sombras;
- motion;
- keyframes;
- animações.

Nenhum tema deve criar cor, raio ou sombra fora desse arquivo sem necessidade real.

### 2. Contrato de tema

Arquivo:

```txt
lib/themes/types.ts
```

Responsável por definir o formato mínimo de um tema.

Todo tema precisa seguir esse contrato para que os componentes possam mudar de aparência sem mudar os dados.

### 3. Tema visual ativo

Arquivo atual:

```txt
lib/themes/mobi-editorial-agency.ts
```

Tema atual:

```txt
mobi-editorial-agency
```

Direção visual:

```txt
agency editorial + SaaS técnico + marca MOBI
```

Esse arquivo controla classes de:

- layout;
- header;
- menu overlay;
- botões;
- hero;
- collage;
- cards;
- seções.

### 4. Registro de temas

Arquivo:

```txt
lib/themes/index.ts
```

Responsável por exportar:

```ts
activeTheme
```

No futuro, para trocar o tema ativo, a primeira mudança deve acontecer nesse arquivo ou em uma camada de configuração.

### 5. Conteúdo separado do tema

Arquivos:

```txt
lib/home-content.ts
lib/site-data.ts
```

Responsáveis por armazenar:

- títulos;
- descrições;
- cards;
- planos;
- features;
- público-alvo;
- etapas;
- links;
- FAQ.

Esses dados não devem depender de um tema específico.

## Como criar um novo tema no futuro

1. Criar novo arquivo:

```txt
lib/themes/mobi-nome-do-theme.ts
```

2. Seguir o contrato de:

```txt
lib/themes/types.ts
```

3. Usar apenas tokens de:

```txt
lib/design-tokens.ts
```

4. Registrar o tema em:

```txt
lib/themes/index.ts
```

5. Alterar `activeTheme` para o novo tema.

6. Não alterar `lib/home-content.ts` ou `lib/site-data.ts` se a intenção for apenas mudar o visual.

## Regra para componentes

Componentes de tema devem consumir:

```ts
activeTheme
```

E receber conteúdo por props ou por arquivos de dados.

Exemplo correto:

```tsx
<MobiHeroCollage items={mobiHomeContent.collage} />
```

Exemplo incorreto:

```tsx
// Não gravar textos fixos dentro do componente de tema.
<h2>Briefing guiado</h2>
```

## Regra para botões

Botões devem passar pelo componente:

```txt
components/button.tsx
```

O componente deve buscar estilos em:

```txt
activeTheme.button
```

Assim, trocar o tema pode alterar o botão em todo o site sem reescrever cada página.

## Regra para hero collage

O conteúdo dos cards fica em:

```txt
lib/home-content.ts
```

A aparência dos cards fica em:

```txt
activeTheme.collage
```

Dessa forma, outro tema pode trocar cards inclinados por cards retos, grid, mockups ou timeline sem apagar os dados.

## Objetivo

Permitir que a MOBI Digital evolua para múltiplos temas:

```txt
mobi-editorial-agency
mobi-saas-clean
mobi-corporate-flat
mobi-dark-tech
mobi-partner-whitelabel
```

Cada tema muda a apresentação. O produto, conteúdo e estrutura comercial continuam preservados.
