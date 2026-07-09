export type CodeWithAiBriefingPayload = {
  tenantId?: string;
  projectName: string;
  businessName: string;
  segment?: string;
  domain?: string;
  plan?: string;
  tone?: string;
  pages?: string[];
  services?: string[];
  keywords?: string[];
  city?: string;
  state?: string;
  whatsapp?: string;
  notes?: string;
};

export type CodeWithAiGenerationResult = {
  provider: "cpanel-code-with-ai";
  ok: boolean;
  status: number;
  jobId?: string;
  message?: string;
  raw?: unknown;
};

type CodeWithAiConfig = {
  baseUrl: string;
  apiToken: string;
  endpointPath: string;
};

function readConfig(): CodeWithAiConfig {
  const baseUrl = process.env.CPANEL_CODE_WITH_AI_BASE_URL;
  const apiToken = process.env.CPANEL_CODE_WITH_AI_TOKEN;
  const endpointPath = process.env.CPANEL_CODE_WITH_AI_GENERATE_PATH ?? "/api/code-with-ai/generate";

  if (!baseUrl || !apiToken) {
    throw new Error("CPANEL_CODE_WITH_AI_BASE_URL and CPANEL_CODE_WITH_AI_TOKEN must be configured on the server.");
  }

  return {
    baseUrl: baseUrl.replace(/\/$/, ""),
    apiToken,
    endpointPath: endpointPath.startsWith("/") ? endpointPath : `/${endpointPath}`,
  };
}

export function buildCodeWithAiPrompt(payload: CodeWithAiBriefingPayload) {
  const pages = payload.pages?.length ? payload.pages.join(", ") : "Home, Sobre, Serviços, Contato";
  const services = payload.services?.length ? payload.services.join(", ") : "serviços principais a definir";
  const keywords = payload.keywords?.length ? payload.keywords.join(", ") : "SEO local, conversão, WhatsApp";
  const location = [payload.city, payload.state].filter(Boolean).join("/") || "Brasil";

  return [
    "Você é um especialista de criação de sites comerciais para a MOBI Digital.",
    "Crie uma primeira estrutura de site objetiva, orientada a conversão, SEO local, AEO/GEO e WhatsApp.",
    "Responda em português do Brasil, com copy comercial clara e seções prontas para implementação em WordPress ou front-end.",
    "",
    `Projeto: ${payload.projectName}`,
    `Empresa: ${payload.businessName}`,
    `Segmento: ${payload.segment ?? "não informado"}`,
    `Plano: ${payload.plan ?? "não informado"}`,
    `Domínio: ${payload.domain ?? "a definir"}`,
    `Localização: ${location}`,
    `WhatsApp: ${payload.whatsapp ?? "não informado"}`,
    `Tom desejado: ${payload.tone ?? "profissional, direto e confiável"}`,
    `Páginas previstas: ${pages}`,
    `Serviços/produtos: ${services}`,
    `Palavras-chave: ${keywords}`,
    `Observações: ${payload.notes ?? "sem observações adicionais"}`,
    "",
    "Entregue:",
    "1. Estrutura de páginas.",
    "2. Hero da home com título, subtítulo e CTA.",
    "3. Seções recomendadas para a home.",
    "4. Sugestões de SEO title e meta description.",
    "5. Perguntas frequentes para AEO/GEO.",
    "6. Prompt curto para evoluir o site com Code With AI.",
  ].join("\n");
}

export async function submitCodeWithAiBriefing(payload: CodeWithAiBriefingPayload): Promise<CodeWithAiGenerationResult> {
  const config = readConfig();
  const url = `${config.baseUrl}${config.endpointPath}`;
  const prompt = buildCodeWithAiPrompt(payload);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiToken}`,
    },
    body: JSON.stringify({
      tenantId: payload.tenantId,
      projectName: payload.projectName,
      businessName: payload.businessName,
      prompt,
      payload,
    }),
    cache: "no-store",
  });

  const contentType = response.headers.get("content-type") ?? "";
  const raw = contentType.includes("application/json") ? await response.json() : await response.text();

  return {
    provider: "cpanel-code-with-ai",
    ok: response.ok,
    status: response.status,
    jobId: typeof raw === "object" && raw !== null && "jobId" in raw ? String((raw as { jobId?: unknown }).jobId ?? "") : undefined,
    message: typeof raw === "object" && raw !== null && "message" in raw ? String((raw as { message?: unknown }).message ?? "") : undefined,
    raw,
  };
}
