import { NextResponse } from "next/server";
import { submitCodeWithAiBriefing, type CodeWithAiBriefingPayload } from "@/lib/cpanel/code-with-ai";

export const dynamic = "force-dynamic";

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function normalizePayload(body: unknown): CodeWithAiBriefingPayload {
  if (!body || typeof body !== "object") {
    throw new Error("Payload inválido.");
  }

  const data = body as Record<string, unknown>;

  if (typeof data.projectName !== "string" || !data.projectName.trim()) {
    throw new Error("projectName é obrigatório.");
  }

  if (typeof data.businessName !== "string" || !data.businessName.trim()) {
    throw new Error("businessName é obrigatório.");
  }

  return {
    tenantId: typeof data.tenantId === "string" ? data.tenantId : undefined,
    projectName: data.projectName.trim(),
    businessName: data.businessName.trim(),
    segment: typeof data.segment === "string" ? data.segment : undefined,
    domain: typeof data.domain === "string" ? data.domain : undefined,
    plan: typeof data.plan === "string" ? data.plan : undefined,
    tone: typeof data.tone === "string" ? data.tone : undefined,
    pages: isStringArray(data.pages) ? data.pages : undefined,
    services: isStringArray(data.services) ? data.services : undefined,
    keywords: isStringArray(data.keywords) ? data.keywords : undefined,
    city: typeof data.city === "string" ? data.city : undefined,
    state: typeof data.state === "string" ? data.state : undefined,
    whatsapp: typeof data.whatsapp === "string" ? data.whatsapp : undefined,
    notes: typeof data.notes === "string" ? data.notes : undefined,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = normalizePayload(body);
    const result = await submitCodeWithAiBriefing(payload);

    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao enviar briefing para o Code With AI.";
    const isConfigError = message.includes("CPANEL_CODE_WITH_AI");

    return NextResponse.json(
      {
        ok: false,
        provider: "cpanel-code-with-ai",
        message: isConfigError ? "Integração Code With AI ainda não configurada no ambiente." : message,
      },
      { status: isConfigError ? 503 : 400 },
    );
  }
}
