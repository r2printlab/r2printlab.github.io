import { monsterShortcuts } from "../data/monster";
import { ProductQuickCard } from "./ProductQuickCard";

export function QuickShop() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
            <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
            Quick Shop Monsters
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-pine sm:text-5xl">Escolha seu Monster</h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">
            Encontre rápido a cor ou modelo que você viu no Instagram.
          </p>
        </div>
        <div className="inline-flex items-center gap-4 self-start rounded-2xl border border-line bg-paper px-5 py-3 shadow-card md:self-auto">
          <img src="/assets/logo%20monster.png" alt="Monster" className="h-14 w-16 object-contain" />
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-berry">Coleção original</p>
            <p className="font-display text-xl text-pine">R2 Monsters</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {monsterShortcuts.map((item) => (
          <div key={item.name}>
            <ProductQuickCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
