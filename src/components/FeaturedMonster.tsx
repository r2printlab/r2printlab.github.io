import { ArrowLeft, Play, ShoppingBag, Store } from "lucide-react";
import { useEffect, useState } from "react";
import { monsterProduct } from "../data/monster";
import type { MonsterShortcut } from "../data/monster";

type FeaturedMonsterProps = {
  selectedMonster?: MonsterShortcut;
  onBackToCollection: () => void;
};

export function FeaturedMonster({ selectedMonster, onBackToCollection }: FeaturedMonsterProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = imageFailed ? monsterProduct.fallbackImage : (selectedMonster?.image ?? monsterProduct.image);
  const mercadoLivreUrl = selectedMonster?.mercadoLivreUrl ?? monsterProduct.mercadoLivreUrl;
  const shopeeUrl = selectedMonster?.shopeeUrl ?? monsterProduct.shopeeUrl;
  const mercadoLivreIsActive = mercadoLivreUrl !== "#";
  const shopeeIsActive = shopeeUrl !== "#";

  useEffect(() => {
    setImageFailed(false);
  }, [selectedMonster?.image]);

  return (
    <section id="monster-detail" className="scroll-mt-4 mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-[2rem] border border-mist bg-white p-5 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[390px] overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-mist via-white to-mist dark:from-darkCardAlt dark:via-darkCard dark:to-darkCardAlt">
          <div className="absolute inset-x-8 top-9 h-[76%] rounded-[2rem] border border-white/80 bg-white/60 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard/60" />
          <VideoPanel
            src={monsterProduct.sideVideo}
            className="absolute left-4 top-10 hidden w-[34%] -rotate-1 sm:block"
            label="Video Monster branco neon"
          />
          <div className="absolute inset-x-0 bottom-3 z-10 mx-auto w-[54%] min-w-[190px] max-w-[280px] overflow-hidden rounded-[1.7rem] border border-white/85 bg-white shadow-lift dark:border-darkAccent/20 dark:bg-darkCard">
            <img
              src={imageSrc}
              alt={monsterProduct.title}
              className="aspect-[3/4] w-full object-cover"
              onError={() => setImageFailed(true)}
            />
          </div>
          <VideoPanel
            src={monsterProduct.video}
            className="absolute right-4 top-24 z-20 w-[31%] rotate-1 sm:top-24"
            label="Video Monster em uso"
          />
        </div>
        <div>
          {selectedMonster ? (
            <button
              type="button"
              onClick={onBackToCollection}
              className="mb-5 inline-flex min-h-10 items-center gap-2 rounded-2xl border border-mist bg-white px-3 text-sm font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar para colecao
            </button>
          ) : null}
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">{monsterProduct.subtitle}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-textMain dark:text-darkText sm:text-4xl">
            {selectedMonster ? `${selectedMonster.name} | ` : ""}
            {monsterProduct.title}
          </h2>
          {selectedMonster ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand dark:bg-darkCardAlt dark:text-darkAccent">
              <span
                className="h-4 w-4 rounded-full border border-white/70"
                style={{ backgroundColor: selectedMonster.color }}
                aria-hidden="true"
              />
              {selectedMonster.tag}
            </div>
          ) : null}
          <p className="mt-4 text-base leading-7 text-textMuted dark:text-darkMuted">{monsterProduct.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {mercadoLivreIsActive ? (
              <a
                href={mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand px-5 font-black text-white transition hover:bg-brandDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:bg-darkAccent dark:text-darkBg"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                Comprar no Mercado Livre
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand px-5 font-black text-white disabled:cursor-default disabled:opacity-90 dark:bg-darkAccent dark:text-darkBg"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                Mercado Livre em breve
              </button>
            )}
            {shopeeIsActive ? (
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-mist bg-white px-5 font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              >
                <Store className="h-5 w-5" aria-hidden="true" />
                Comprar na Shopee
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-mist bg-white px-5 font-black text-brand disabled:cursor-default disabled:opacity-75 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              >
                <Store className="h-5 w-5" aria-hidden="true" />
                Shopee em breve
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type VideoPanelProps = {
  src: string;
  className: string;
  label: string;
};

function VideoPanel({ src, className, label }: VideoPanelProps) {
  return (
    <div className={`${className} overflow-hidden rounded-3xl border border-white/80 bg-white shadow-soft dark:border-darkAccent/20 dark:bg-darkCard`}>
      <video
        src={src}
        className="aspect-[9/16] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
      <div className="absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-brand shadow-sm dark:bg-darkBg/80 dark:text-darkAccent">
        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
      </div>
    </div>
  );
}
