import { monsterColors } from "../data/monster";
import { ShoppingBag } from "lucide-react";

export function MonsterColors() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Cores disponiveis</p>
          <h2 className="mt-2 text-3xl font-black text-textMain dark:text-darkText">Escolha pela cor</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-textMuted dark:text-darkMuted">
          Uma forma rapida de conferir as variacoes mais pedidas da colecao Monsters.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {monsterColors.map((color) => (
          <div key={color.name} className="rounded-3xl border border-mist bg-white p-3 text-center shadow-sm dark:border-darkAccent/20 dark:bg-darkCard">
            <span
              className="mx-auto block h-14 w-14 rounded-2xl border border-mist shadow-sm dark:border-darkAccent/20"
              style={{ backgroundColor: color.value }}
            />
            <p className="mt-3 text-sm font-black text-textMain dark:text-darkText">{color.name}</p>
            {color.mercadoLivreUrl !== "#" ? (
              <a
                href={color.mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-3 text-xs font-black text-white transition hover:bg-brandDark dark:bg-darkAccent dark:text-darkBg"
              >
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                ML
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-3 inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-3 text-xs font-black text-white disabled:cursor-default disabled:opacity-80 dark:bg-darkAccent dark:text-darkBg"
              >
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                ML breve
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
