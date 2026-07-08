import { CTASection, PageHero, PageShell, PlanCard, SectionHeading } from "@/components/ui";
import { plans } from "@/lib/site-data";

export const metadata = {
  title: "Planos",
  description: "Planos iniciais da MOBI Digital para criação de sites com IA, hospedagem, WordPress e suporte da MOBI.",
};

export default function PlanosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Planos"
        title="Escolha o ponto de partida para o site do cliente"
        description="A primeira versão opera com ativação manual pela equipe MOBI. Os planos abaixo organizam a oferta comercial antes da automação completa."
      />
      <section className="bg-page py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={plan.name} className={index === 1 ? "lg:-translate-y-8" : index === 2 ? "lg:translate-y-8" : ""}>
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6 text-sm leading-7 text-orange-900 shadow-sm">
            <strong>Observação:</strong> os valores podem variar conforme configuração, domínio, volume de conteúdo e necessidades específicas. A primeira versão pode operar com ativação manual pela equipe MOBI.
          </div>
        </div>
      </section>
      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Modelo comercial"
            title="Planos de entrada, estrutura de produto e expansão futura"
            description="Depois da validação inicial, os planos poderão se conectar a assinatura, painel do cliente, templates, limites, parceiros e provisionamento automatizado."
          />
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
