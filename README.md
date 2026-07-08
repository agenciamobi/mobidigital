# MOBI Digital

Plataforma SaaS da MOBI para venda, criação e gestão de sites com IA.

## Produto

**MOBI Digital** será a marca guarda-chuva para produtos digitais da MOBI.

Produto inicial:

**MOBI Sites com IA** — plataforma para criação de sites profissionais com hospedagem, WordPress, orientação por IA, domínio próprio e suporte da MOBI.

## Domínio

- Produção futura: `mobidigital.com.br`
- Preview/deploy: Vercel

## Stack inicial

- Next.js App Router
- TypeScript
- Tailwind CSS
- Estrutura preparada para shadcn/ui
- Deploy na Vercel

## Fase atual

Fase 1: frente comercial pública.

Rotas previstas nesta primeira etapa:

- `/`
- `/planos`
- `/como-funciona`
- `/white-label`
- `/faq`
- `/contato`
- `/cadastro`
- `/entrar`

## Fases futuras

- Painel do cliente em `/app`
- Painel administrativo em `/admin`
- Supabase Auth e PostgreSQL
- Organizações, clientes, parceiros e white label
- Briefing guiado para criação de site
- Provisionamento mockado
- Integração WHM/cPanel
- Integração Softaculous
- Acesso orientado ao Code With AI
- Domínio próprio por cliente
- Planos e cobrança

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Deploy na Vercel

Application Preset recomendado:

```txt
Next.js
```

Configuração esperada:

```txt
Install Command: npm install
Build Command: npm run build
Output Directory: padrão / vazio
Root Directory: ./
```

## Observação de segurança

Não armazenar tokens WHM/cPanel, senhas, URLs `cpsess` ou credenciais no repositório.
Integrações reais deverão usar variáveis de ambiente server-side.