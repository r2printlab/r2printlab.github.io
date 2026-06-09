import { ArrowLeft, Maximize2, Play, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { monsterProduct } from "../data/monster";
import type { MonsterShortcut } from "../data/monster";

type FeaturedMonsterProps = {
  selectedMonster?: MonsterShortcut;
  onBackToCollection: () => void;
  onBackToHome: () => void;
};

export function FeaturedMonster({ selectedMonster, onBackToCollection, onBackToHome }: FeaturedMonsterProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [preview, setPreview] = useState<MediaPreview | null>(null);
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
            enhance
            onOpen={() => setPreview({ type: "video", src: monsterProduct.sideVideo, label: "Video Monster branco neon" })}
          />
          <button
            type="button"
            onClick={() => setPreview({ type: "image", src: imageSrc, label: monsterProduct.title })}
            className="group/card absolute inset-x-0 bottom-3 z-10 mx-auto w-[54%] min-w-[190px] max-w-[280px] overflow-hidden rounded-[1.7rem] border border-white/80 bg-white text-left shadow-lift transition duration-300 hover:-translate-y-3 hover:rotate-1 hover:scale-[1.04] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCard"
            aria-label="Ampliar imagem do produto"
          >
            <img
              src={imageSrc}
              alt={monsterProduct.title}
              className="aspect-[3/4] w-full object-cover"
              onError={() => setImageFailed(true)}
            />
            <MediaOverlay />
          </button>
          <VideoPanel
            src={monsterProduct.video}
            className="absolute right-4 top-24 z-20 w-[31%] rotate-1 sm:top-24"
            label="Video Monster em uso"
            onOpen={() => setPreview({ type: "video", src: monsterProduct.video, label: "Video Monster em uso" })}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={selectedMonster ? onBackToCollection : onBackToHome}
            className="mb-5 inline-flex min-h-10 items-center gap-2 rounded-2xl border border-mist bg-white px-3 text-sm font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {selectedMonster ? "Voltar para colecao" : "Voltar para links"}
          </button>
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
                className="inline-grid min-h-[56px] grid-cols-[auto_1fr] items-center gap-3 rounded-2xl bg-[#ffd600] px-4 text-left font-black text-[#27346a] shadow-sm transition hover:bg-[#f2c900] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 sm:min-w-[205px]"
              >
                <img src="/assets/mercado-livre-icone.png" alt="" className="h-7 w-7 rounded-full object-contain" />
                <span className="leading-tight">
                  <span className="block text-sm">Comprar no</span>
                  <span className="block text-[#1f2d70]">Mercado Livre</span>
                </span>
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
                className="inline-grid min-h-[56px] grid-cols-[auto_1fr] items-center gap-3 rounded-2xl bg-[#ee4d2d] px-4 text-left font-black text-white shadow-sm transition hover:bg-[#d83f22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 sm:min-w-[170px]"
              >
                <img src="/assets/shopee-icone2.png" alt="" className="h-7 w-7 object-contain" />
                <span className="leading-tight">
                  <span className="block text-sm">Comprar na</span>
                  <span className="block text-white">Shopee</span>
                </span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-mist bg-white px-5 font-black text-brand disabled:cursor-default disabled:opacity-75 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
              >
                <img src="/assets/shopee-icone2.png" alt="" className="h-7 w-7 object-contain opacity-80" />
                Shopee em breve
              </button>
            )}
          </div>
        </div>
      </div>
      {preview ? <MediaLightbox preview={preview} onClose={() => setPreview(null)} /> : null}
    </section>
  );
}

type MediaPreview = {
  type: "image" | "video";
  src: string;
  label: string;
};

type VideoPanelProps = {
  src: string;
  className: string;
  label: string;
  enhance?: boolean;
  onOpen: () => void;
};

function VideoPanel({ src, className, label, enhance, onOpen }: VideoPanelProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`${className} group/card overflow-hidden rounded-3xl border border-white/80 bg-white text-left shadow-soft transition duration-300 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-[1.06] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCard`}
      aria-label={`Ampliar ${label}`}
    >
      <video
        src={src}
        className={`aspect-[9/16] w-full object-cover ${enhance ? "brightness-125 contrast-125 saturate-150" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
      {enhance ? <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20 mix-blend-screen" /> : null}
      <div className="absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-brand shadow-sm dark:bg-darkBg/80 dark:text-darkAccent">
        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
      </div>
      <MediaOverlay />
    </button>
  );
}

function MediaOverlay() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand/60 via-transparent to-transparent p-3 opacity-0 transition duration-200 group-hover/card:opacity-100">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black text-brand shadow-sm">
        <Maximize2 className="h-4 w-4" aria-hidden="true" />
        Ver maior
      </span>
    </span>
  );
}

type MediaLightboxProps = {
  preview: MediaPreview;
  onClose: () => void;
};

function MediaLightbox({ preview, onClose }: MediaLightboxProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-brandDark/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={preview.label}>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-brand shadow-soft transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Fechar visualizacao"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl dark:bg-darkCard">
        {preview.type === "video" ? (
          <video src={preview.src} className="max-h-[86vh] w-full object-contain" autoPlay muted loop playsInline controls />
        ) : (
          <img src={preview.src} alt={preview.label} className="max-h-[86vh] w-full object-contain" />
        )}
      </div>
    </div>
  );
}
