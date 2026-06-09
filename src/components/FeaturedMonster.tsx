import { MessageCircle, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { monsterProduct } from "../data/monster";
import type { MonsterShortcut } from "../data/monster";

type FeaturedMonsterProps = {
  selectedMonster: MonsterShortcut;
};

export function FeaturedMonster({ selectedMonster }: FeaturedMonsterProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = imageFailed ? monsterProduct.fallbackImage : selectedMonster.image;
  const productIsActive = selectedMonster.productUrl !== "#";
  const whatsappIsActive = selectedMonster.whatsappUrl !== "#";

  useEffect(() => {
    setImageFailed(false);
  }, [selectedMonster.image]);

  return (
    <section id="monster-detail" className="scroll-mt-4 mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-[2rem] border border-mist bg-white p-5 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-mist via-white to-mist dark:from-darkCardAlt dark:via-darkCard dark:to-darkCardAlt">
          <div className="absolute inset-x-8 top-8 h-[78%] rounded-[2rem] border border-white/80 bg-white/60 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard/60" />
          <img
            src={imageSrc}
            alt={monsterProduct.title}
            className="absolute inset-x-0 bottom-[-5%] mx-auto h-[102%] w-full max-w-[520px] object-contain drop-shadow-2xl"
            onError={() => setImageFailed(true)}
          />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">{monsterProduct.subtitle}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-textMain dark:text-darkText sm:text-4xl">
            {selectedMonster.name} | {monsterProduct.title}
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand dark:bg-darkCardAlt dark:text-darkAccent">
            <span
              className="h-4 w-4 rounded-full border border-white/70"
              style={{ backgroundColor: selectedMonster.color }}
              aria-hidden="true"
            />
            {selectedMonster.tag}
          </div>
          <p className="mt-4 text-base leading-7 text-textMuted dark:text-darkMuted">{monsterProduct.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {productIsActive ? (
              <a
                href={monsterProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand px-5 font-black text-white transition hover:bg-brandDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:bg-darkAccent dark:text-darkBg"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                Comprar
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand px-5 font-black text-white disabled:cursor-default disabled:opacity-90 dark:bg-darkAccent dark:text-darkBg"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                Compra em breve
              </button>
            )}
            {whatsappIsActive ? (
              <a
                href={monsterProduct.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-mist bg-white px-5 font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Consultar
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-mist bg-white px-5 font-black text-brand disabled:cursor-default disabled:opacity-75 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp em breve
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
