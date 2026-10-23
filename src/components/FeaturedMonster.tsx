import { ArrowLeft, Maximize2, Play, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { monsterProduct } from "../data/monster";
import type { MonsterShortcut } from "../data/monster";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { trackOutboundClick } from "../lib/analytics";

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
    <section id="monster-detail" className="mx-auto w-full max-w-6xl scroll-mt-4 px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={selectedMonster ? onBackToCollection : onBackToHome}
        className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-pine/20 bg-paper px-4 text-sm font-extrabold text-pine transition hover:border-pine hover:bg-pine hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {selectedMonster ? "Voltar para coleção" : "Voltar para links"}
      </button>

      <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-line bg-paper p-4 shadow-card sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="on-dark layer-lines relative min-h-[390px] overflow-hidden rounded-[1.6rem] bg-pine">
          <VideoPanel
            src={monsterProduct.sideVideo}
            className="absolute left-3 top-10 w-[31%] -rotate-2 sm:left-4 sm:w-[32%]"
            label="Vídeo Monster branco neon"
            enhance
            onOpen={() => setPreview({ type: "video", src: monsterProduct.sideVideo, label: "Vídeo Monster branco neon" })}
          />
          <button
            type="button"
            onClick={() => setPreview({ type: "image", src: imageSrc, label: monsterProduct.title })}
            className="group/card absolute inset-x-0 bottom-4 z-10 mx-auto w-[54%] min-w-[190px] max-w-[280px] overflow-hidden rounded-3xl border-4 border-gold bg-white text-left shadow-lift transition duration-300 hover:-translate-y-2 hover:rotate-1"
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
            className="absolute right-3 top-20 z-20 w-[31%] rotate-2 sm:right-4"
            label="Vídeo Monster em uso"
            onOpen={() => setPreview({ type: "video", src: monsterProduct.video, label: "Vídeo Monster em uso" })}
          />
        </div>
        <div>
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
            <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
            {monsterProduct.subtitle}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-pine sm:text-4xl">
            {selectedMonster ? `${selectedMonster.name} | ` : ""}
            {monsterProduct.title}
          </h2>
          {selectedMonster ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-snow px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-pine">
              <span
                className="h-4 w-4 rounded-full border border-black/10"
                style={{ background: selectedMonster.color }}
                aria-hidden="true"
              />
              {selectedMonster.tag}
            </div>
          ) : null}
          <p className="mt-4 text-base leading-7 text-muted">{monsterProduct.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {mercadoLivreIsActive ? (
              <a
                href={mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackOutboundClick({
                    channel: "mercado_livre",
                    placement: "featured_monster",
                    item: selectedMonster?.name ?? monsterProduct.title,
                  })
                }
                className="inline-grid min-h-14 grid-cols-[auto_1fr] items-center gap-3 rounded-full bg-[#ffe600] px-5 text-left font-extrabold text-[#27346a] transition hover:-translate-y-0.5 hover:bg-[#f2d900] sm:min-w-[210px]"
              >
                <img src="/assets/mercado-livre-icone.png" alt="" className="h-8 w-8 rounded-full object-contain" />
                <span className="leading-tight">
                  <span className="block text-xs font-bold">Comprar no</span>
                  <span className="block text-base text-[#1f2d70]">Mercado Livre</span>
                </span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-pine px-6 font-extrabold text-white disabled:cursor-default disabled:opacity-90"
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
                onClick={() =>
                  trackOutboundClick({
                    channel: "shopee",
                    placement: "featured_monster",
                    item: selectedMonster?.name ?? monsterProduct.title,
                  })
                }
                className="inline-grid min-h-14 grid-cols-[auto_1fr] items-center gap-3 rounded-full bg-[#ee4d2d] px-5 text-left font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#d83f22] sm:min-w-[180px]"
              >
                <img src="/assets/shopee-icone-4.png" alt="" className="h-8 w-8 rounded-full bg-white p-1 object-contain" />
                <span className="leading-tight">
                  <span className="block text-xs font-bold">Comprar na</span>
                  <span className="block text-base">Shopee</span>
                </span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-pine/20 bg-white px-6 font-extrabold text-pine disabled:cursor-default disabled:opacity-75"
              >
                <img src="/assets/shopee-icone-4.png" alt="" className="h-7 w-7 object-contain opacity-80" />
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`${className} group/card overflow-hidden rounded-2xl border-2 border-snow/80 bg-white text-left shadow-lift transition duration-300 hover:z-30 hover:-translate-y-2 hover:rotate-0`}
      aria-label={`Ampliar ${label}`}
    >
      <video
        src={src}
        className={`aspect-[9/16] w-full object-cover ${enhance ? "brightness-125 contrast-125 saturate-150" : ""}`}
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        controls={shouldReduceMotion}
        aria-label={label}
      />
      <div className="absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-berry shadow-sm">
        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
      </div>
      <MediaOverlay />
    </button>
  );
}

function MediaOverlay() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-pine/70 via-transparent to-transparent p-3 opacity-0 transition duration-200 group-hover/card:opacity-100">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-extrabold text-pine shadow-sm">
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
    <div
      className="on-dark fixed inset-0 z-50 grid place-items-center bg-pine-deep/90 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={preview.label}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-pine shadow-card transition hover:bg-gold-soft"
        aria-label="Fechar visualização"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border-4 border-gold bg-white shadow-2xl">
        {preview.type === "video" ? (
          <video src={preview.src} className="max-h-[86vh] w-full object-contain" autoPlay muted loop playsInline controls />
        ) : (
          <img src={preview.src} alt={preview.label} className="max-h-[86vh] w-full object-contain" />
        )}
      </div>
    </div>
  );
}
