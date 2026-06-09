import { ShoppingBag, Store } from "lucide-react";
import { useEffect, useState } from "react";
import type { MonsterShortcut } from "../data/monster";

type ProductQuickCardProps = {
  item: MonsterShortcut;
  isSelected?: boolean;
  onSelect: () => void;
};

export function ProductQuickCard({ item, isSelected, onSelect }: ProductQuickCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = imageFailed ? undefined : item.image;
  const shopeeIsActive = item.shopeeUrl !== "#";

  useEffect(() => {
    setImageFailed(false);
  }, [item.image]);

  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:bg-darkCard ${
        isSelected ? "border-brand ring-2 ring-brand/15 dark:border-darkAccent dark:ring-darkAccent/20" : "border-mist dark:border-darkAccent/20"
      }`}
    >
      <div className="product-grid flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-white via-mist to-white p-2 dark:from-darkCard dark:via-darkCardAlt dark:to-darkCard">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={item.name}
            className="h-full w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.04]"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white text-brand shadow-soft dark:bg-darkCardAlt dark:text-darkAccent">
            <span className="text-2xl font-black">3D</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-black text-textMain dark:text-darkText">{item.name}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-textMuted dark:text-darkMuted">{item.tag}</p>
          </div>
          <span
            className="h-6 w-6 shrink-0 rounded-full border border-mist shadow-sm dark:border-darkAccent/30"
            style={{ backgroundColor: item.color }}
            aria-label={`Cor ${item.tag}`}
          />
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <button
            type="button"
            onClick={onSelect}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl bg-brand px-3 text-sm font-black text-white transition hover:bg-brandDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:bg-darkAccent dark:text-darkBg"
          >
            Ver produto
          </button>
          {shopeeIsActive ? (
            <a
              href={item.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-2xl border border-mist bg-white text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              aria-label={`Ver ${item.name} na Shopee`}
            >
              <Store className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="grid h-10 w-10 place-items-center rounded-2xl border border-mist bg-white text-brand disabled:cursor-default disabled:opacity-70 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              aria-label="Shopee em breve"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
