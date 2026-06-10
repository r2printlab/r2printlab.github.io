import { ArrowLeft, Shield } from "lucide-react";
import { mascotItems } from "../data/mascots";

type MascotsPageProps = {
  onBackToHome: () => void;
};

export function MascotsPage({ onBackToHome }: MascotsPageProps) {
  return (
    <section id="mascots" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-mist bg-white/90 p-5 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard/90 sm:p-8">
        <button
          type="button"
          onClick={onBackToHome}
          className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-2xl border border-mist bg-white px-3 text-sm font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar para links
        </button>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Linha de mascotes</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-textMain dark:text-darkText sm:text-5xl">Escolha seu Mascote</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-textMuted dark:text-darkMuted">
              Mascotes 3D para torcedores, colecionadores e presentes personalizados.
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-mist bg-mist/60 p-5 dark:border-darkAccent/20 dark:bg-darkCardAlt">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-sm dark:bg-darkCard dark:text-darkAccent">
                <Shield className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black text-textMain dark:text-darkText">Mascotes R2 Print Lab</p>
                <p className="mt-1 text-sm text-textMuted dark:text-darkMuted">Novas opcoes em preparacao.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {mascotItems.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-mist bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-darkAccent/20 dark:bg-darkCard"
            >
              <div className="grid aspect-square place-items-center rounded-[1.5rem] bg-gradient-to-br from-mist via-white to-mist dark:from-darkCardAlt dark:via-darkCard dark:to-darkCardAlt">
                <span className="grid h-20 w-20 place-items-center rounded-3xl bg-white text-brand shadow-soft dark:bg-darkCardAlt dark:text-darkAccent">
                  <Shield className="h-9 w-9" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-black text-textMain dark:text-darkText">{item.name}</h2>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-textMuted dark:text-darkMuted">{item.tag}</p>
                </div>
                <span className="h-6 w-6 shrink-0 rounded-full border border-mist shadow-sm dark:border-darkAccent/30" style={{ background: item.color }} />
              </div>
              <button
                type="button"
                disabled
                className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-2xl bg-mist px-3 text-sm font-black uppercase tracking-[0.1em] text-brand disabled:cursor-default dark:bg-darkCardAlt dark:text-darkAccent"
              >
                Em breve
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
