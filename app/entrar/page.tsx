import { ArrowRight, Clock3, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
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
        <div className="container-page grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
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

          <article className="rounded-lg border border-line bg-ink p-8 text-white shadow-editorial">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Prévia visual</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em]">Acesso futuro ao painel</h2>
            <div className="mt-7 grid gap-4">
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.14em] text-white/45">
                E-mail
                <input className="focus-ring rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-sm normal-case tracking-normal text-white placeholder:text-white/35" placeholder="cliente@empresa.com.br" aria-label="E-mail" disabled />
              </label>
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.14em] text-white/45">
                Senha
                <input className="focus-ring rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-sm normal-case tracking-normal text-white placeholder:text-white/35" placeholder="••••••••" aria-label="Senha" disabled />
              </label>
              <button type="button" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-black uppercase tracking-tight text-black opacity-70" disabled>
                Entrar em breve <KeyRound className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Autenticação",
              description: "Login seguro e dados separados por cliente.",
              icon: ShieldCheck,
            },
            {
              title: "Status do site",
              description: "Acompanhamento do briefing, domínio e publicação.",
              icon: Clock3,
            },
            {
              title: "Acesso ao suporte",
              description: "Histórico de orientação e próximos passos do projeto.",
              icon: LockKeyhole,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-line bg-surface p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-black tracking-[-0.06em] text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
