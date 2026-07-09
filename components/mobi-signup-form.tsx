"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { whatsAppLink } from "@/lib/site-data";

const planOptions = [
  { label: "Site Start com IA", value: "site-start" },
  { label: "Site Pro com IA", value: "site-pro" },
  { label: "Catálogo com IA", value: "catalogo" },
  { label: "Ainda não sei", value: "indefinido" },
];

const urgencyOptions = ["Sem urgência", "Quero iniciar esta semana", "Preciso publicar em até 15 dias", "Tenho campanha ou prazo definido"];

const emptyForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  domain: "",
  segment: "",
  urgency: "Quero iniciar esta semana",
  message: "",
};

function getPlanLabel(value: string | null) {
  return planOptions.find((plan) => plan.value === value)?.label ?? "Ainda não sei";
}

export function MobiSignupForm() {
  const searchParams = useSearchParams();
  const planFromUrl = searchParams.get("plano");
  const [form, setForm] = useState(emptyForm);
  const [plan, setPlan] = useState(getPlanLabel(planFromUrl));

  const whatsappHref = useMemo(() => {
    const baseUrl = whatsAppLink.split("?")[0];
    const message = [
      "Olá, quero fazer o pré-cadastro na MOBI Digital.",
      "",
      `Plano desejado: ${plan}`,
      `Nome: ${form.name || "-"}`,
      `Empresa: ${form.company || "-"}`,
      `Segmento: ${form.segment || "-"}`,
      `WhatsApp: ${form.phone || "-"}`,
      `E-mail: ${form.email || "-"}`,
      `Domínio: ${form.domain || "Ainda não tenho / vou decidir"}`,
      `Urgência: ${form.urgency}`,
      "",
      `Observações: ${form.message || "Quero validar o melhor caminho para criar meu site."}`,
    ].join("\n");

    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }, [form, plan]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
        Plano desejado
        <select
          className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink"
          value={plan}
          onChange={(event) => setPlan(event.target.value)}
        >
          {planOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
          Nome
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="Seu nome"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
          Empresa
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="Nome da empresa"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
          WhatsApp
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="(53) 99999-9999"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
          E-mail
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="voce@empresa.com.br"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
          Segmento
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="Ex.: floricultura, clínica, restaurante"
            value={form.segment}
            onChange={(event) => updateField("segment", event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
          Domínio
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="seudominio.com.br ou ainda não tenho"
            value={form.domain}
            onChange={(event) => updateField("domain", event.target.value)}
          />
        </label>
      </div>

      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
        Urgência
        <select
          className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink"
          value={form.urgency}
          onChange={(event) => updateField("urgency", event.target.value)}
        >
          {urgencyOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
        Observações
        <textarea
          className="focus-ring min-h-32 rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
          placeholder="Conte quais páginas, produtos ou objetivos você imagina para o site"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>

      <button type="submit" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-black uppercase tracking-tight text-white transition hover:bg-brand-700">
        Enviar pré-cadastro pelo WhatsApp <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-muted transition hover:text-ink">
        Abrir conversa manualmente <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </form>
  );
}
