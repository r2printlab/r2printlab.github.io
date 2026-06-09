import { monsterColors } from "../data/monster";

export function MonsterColors() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Paleta Monsters</p>
          <h2 className="mt-2 text-3xl font-black text-textMain dark:text-darkText">Cores disponiveis</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-textMuted dark:text-darkMuted">
          Toque em uma cor para abrir a variacao correspondente no Mercado Livre.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-10">
        {monsterColors.map((color) => {
          const content = (
            <>
            <span
              className="mx-auto block h-16 w-16 rounded-2xl border border-mist shadow-sm transition group-hover:scale-105 dark:border-darkAccent/20"
              style={{ background: color.value }}
            />
            <p className="mt-3 text-sm font-black text-textMain dark:text-darkText">{color.name}</p>
            <span className="mt-2 block text-[0.68rem] font-black uppercase tracking-[0.12em] text-brand/70 dark:text-darkAccent/80">
              Mercado Livre
            </span>
            </>
          );

          return color.mercadoLivreUrl !== "#" ? (
            <a
              key={color.name}
              href={color.mercadoLivreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-mist bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/25 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCard"
              aria-label={`Abrir Monster ${color.name} no Mercado Livre`}
            >
              {content}
            </a>
          ) : (
            <button
              key={color.name}
              type="button"
              disabled
              className="group rounded-3xl border border-mist bg-white p-3 text-center shadow-sm disabled:cursor-default disabled:opacity-75 dark:border-darkAccent/20 dark:bg-darkCard"
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
}
