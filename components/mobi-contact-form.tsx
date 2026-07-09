"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { whatsAppLink } from "@/lib/site-data";

const projectTypes = ["Site institucional", "Catálogo com WhatsApp", "Landing page", "White label / parceiro", "Ainda não sei"];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  projectType: "Site institucional",
  message: "",
};

export function MobiContactForm() {
  const [form, setForm] = useState(emptyForm);

  const whatsappHref = useMemo(() => {
    const baseUrl = whatsAppLink.split("?")[0];
    const message = [
      "Olá, quero falar sobre a MOBI Digital.",
      "",
      `Nome: ${form.name || "-"}`,
      `WhatsApp: ${form.phone || "-"}`,
      `E-mail: ${form.email || "-"}`,
      `Tipo de site: ${form.projectType || "-"}`,
      "",
      `Mensagem: ${form.message || "Quero entender o melhor plano para meu projeto."}`,
    ].join("\n");

    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }, [form]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
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
          WhatsApp
          <input
            className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
            placeholder="(53) 99999-9999"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
          />
        </label>
      </div>

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

      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
        Tipo de site
        <select
          className="focus-ring rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink"
          value={form.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
        >
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-muted">
        Mensagem
        <textarea
          className="focus-ring min-h-36 rounded-md border border-line bg-surface-muted px-4 py-3 text-sm font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
          placeholder="Conte rapidamente o que você quer criar"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>

      <button type="submit" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-black uppercase tracking-tight text-white transition hover:bg-brand-700">
        Enviar briefing pelo WhatsApp <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-muted transition hover:text-ink">
        Abrir conversa manualmente <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </form>
  );
}
