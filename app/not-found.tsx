import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container-page max-w-2xl text-center">
        <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-700">
          404
        </p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">Página não encontrada</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A página que você tentou acessar não existe ou ainda será criada em uma próxima fase da MOBI Digital.
        </p>
        <Link href="/" className="focus-ring mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-black text-white transition hover:bg-brand-700">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
