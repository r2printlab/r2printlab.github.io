import { ShoppingBag, Store } from "lucide-react";
import { useEffect, useState } from "react";
import type { MonsterShortcut } from "../data/monster";
import { trackOutboundClick } from "../lib/analytics";

type ProductQuickCardProps = {
  item: MonsterShortcut;
};

export function ProductQuickCard({ item }: ProductQuickCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = imageFailed ? undefined : item.image;
  const shopeeIsActive = item.shopeeUrl !== "#";

  useEffect(() => {
    setImageFailed(false);
  }, [item.image]);

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-[#f1ede4] p-2">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={item.name}
            className="h-full w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white text-pine shadow-card">
            <span className="font-display text-2xl">R2</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-extrabold leading-tight text-ink">{item.name}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">{item.tag}</p>
          </div>
          <span
            className="h-6 w-6 shrink-0 rounded-full border border-black/10 shadow-sm"
            style={{ background: item.color }}
            role="img"
            aria-label={`Cor ${item.tag}`}
          />
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <a
            href={item.mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundClick({ channel: "mercado_livre", placement: "monster_card", item: item.name })
            }
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-berry px-2 text-[0.8125rem] font-extrabold text-white transition hover:bg-berry-dark sm:px-3 sm:text-sm"
          >
            Ver produto
          </a>
          {shopeeIsActive ? (
            <a
              href={item.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick({ channel: "shopee", placement: "monster_card", item: item.name })}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-pine/20 bg-white text-pine transition hover:border-pine hover:bg-pine hover:text-white"
              aria-label={`Ver ${item.name} na Shopee`}
            >
              <Store className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-pine/20 bg-white text-pine disabled:cursor-default disabled:opacity-60"
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
