# Integração cPanel / Code With AI

Este projeto prepara uma camada segura para enviar briefings da MOBI Digital para a API Code With AI hospedada no cPanel.

## Objetivo

Transformar dados de pré-cadastro em um prompt técnico/comercial para gerar a primeira estrutura do site:

- páginas recomendadas;
- hero da home;
- seções comerciais;
- SEO title e meta description;
- FAQs para AEO/GEO;
- prompt curto para evolução no Code With AI.

## Arquivos criados

```txt
lib/cpanel/code-with-ai.ts
app/api/cpanel/code-with-ai/briefing/route.ts
.env.example
```

## Variáveis de ambiente

Configure no ambiente do servidor, Vercel ou painel equivalente. Não commitar credenciais reais.

```env
CPANEL_CODE_WITH_AI_BASE_URL="https://seudominio-ou-servidor.com"
CPANEL_CODE_WITH_AI_TOKEN="replace-with-secure-token"
CPANEL_CODE_WITH_AI_GENERATE_PATH="/api/code-with-ai/generate"
```

## Endpoint interno do Next.js

```http
POST /api/cpanel/code-with-ai/briefing
Content-Type: application/json
```

Payload mínimo:

```json
{
  "projectName": "Site da Clínica Silva",
  "businessName": "Clínica Silva",
  "segment": "Saúde",
  "domain": "clinicasilva.com.br",
  "plan": "Site Pro com IA",
  "city": "Pelotas",
  "state": "RS",
  "whatsapp": "(53) 98110-2176",
  "pages": ["Home", "Sobre", "Serviços", "Contato"],
  "services": ["Consulta", "Avaliação", "Atendimento especializado"],
  "keywords": ["clínica em Pelotas", "atendimento de saúde", "consulta especializada"],
  "notes": "Criar site institucional com CTA para WhatsApp."
}
```

## Próxima etapa

Quando o endpoint real do Code With AI estiver disponível, validar:

1. método HTTP esperado;
2. path real;
3. formato de autenticação;
4. formato de payload aceito;
5. formato de resposta;
6. campos de job/status, se houver processamento assíncrono.

Depois disso, conectar o formulário de pré-cadastro ao endpoint interno e criar uma tela de status no painel do cliente.
