import { ArrowRight, LockKeyhole } from "lucide-react";
import { MobiButton } from "@/components/button";
import { PageHero, PageShell } from "@/components/ui";
import { whatsAppLink } from "@/lib/site-data";

export const metadata = {
  title: "Entrar",
  description: "Login em preparação para a plataforma MOBI Digital.",
};

export default function EntrarPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Acesso"
        title="O painel do cliente está em preparação"
        description="A área de login será o centro para acompanhar briefing, domínio, status do site, suporte e futuras integrações de IA."
      />

      <section className="bg-page py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <article className="rounded-lg border border-line bg-surface p-8 shadow-editorial">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <LockKeyhole className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.07em] text-ink">Login ainda não liberado publicamente</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Por enquanto, a frente comercial pública está pronta para validação. A entrada no painel será ativada junto com a camada de backend e autenticação.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MobiButton href="/" variant="primary" size="md">
                Voltar para a home <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MobiButton>
              <MobiButton href={whatsAppLink} external variant="secondary" size="md">
                Falar com a MOBI
              </MobiButton>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-surface-muted p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-700">Futuro painel</p>
            <div className="mt-8 grid gap-4">
              {["Status do site", "Briefing", "Domínio", "Suporte", "Prompt de IA"].map((item, index) => (
                <div key={item} className="flex items-center justify-between border-b border-line pb-4">
                  <span className="text-lg font-black tracking-[-0.05em] text-ink">{item}</span>
                  <span className="text-2xl font-black text-line">0{index + 1}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
