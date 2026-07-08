import { MobiButton } from "@/components/button";
import { Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-page py-20">
      <div className="container-page max-w-2xl text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.08em] text-ink sm:text-7xl">Página não encontrada</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
          A página que você tentou acessar não existe ou ainda será criada em uma próxima fase da MOBI Digital.
        </p>
        <div className="mt-8 flex justify-center">
          <MobiButton href="/" variant="primary" size="md">
            Voltar para a home
          </MobiButton>
        </div>
      </div>
    </main>
  );
}
