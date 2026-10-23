import { monsterColors } from "../data/monster";
import { trackOutboundClick } from "../lib/analytics";

export function MonsterColors() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
            <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
            Paleta Monsters
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-pine">Cores disponíveis</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted">
          Toque em uma cor para abrir a variação correspondente no Mercado Livre.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-10">
        {monsterColors.map((color) => {
          const content = (
            <>
              <span
                className="mx-auto block h-16 w-16 rounded-full border border-black/10 shadow-sm transition group-hover:scale-110"
                style={{ background: color.value }}
              />
              <p className="mt-3 text-sm font-extrabold text-ink">{color.name}</p>
              <span className="mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-berry">
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
              onClick={() =>
                trackOutboundClick({
                  channel: "mercado_livre",
                  placement: "monster_color",
                  item: color.name,
                })
              }
              className="group rounded-2xl border border-line bg-paper p-3 text-center shadow-card transition hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift"
              aria-label={`Abrir Monster ${color.name} no Mercado Livre`}
            >
              {content}
            </a>
          ) : (
            <button
              key={color.name}
              type="button"
              disabled
              className="group rounded-2xl border border-line bg-paper p-3 text-center shadow-card disabled:cursor-default disabled:opacity-70"
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
}
