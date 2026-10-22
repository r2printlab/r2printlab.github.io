import { ArrowRight, Gift, MessageCircle, Sparkles } from "lucide-react";
import type { Campaign } from "../config/campaigns";
import { links } from "../data/links";
import { trackOutboundClick } from "../lib/analytics";

type SeasonalHeroProps = {
  campaign: Campaign;
  onOpenMonsters: () => void;
};

export function SeasonalHero({ campaign, onOpenMonsters }: SeasonalHeroProps) {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 pb-8 pt-5 sm:px-6 lg:px-8 lg:pb-12">
      <div className="christmas-hero relative overflow-hidden rounded-[2rem] border border-white/10 px-5 py-8 shadow-lift sm:px-8 sm:py-11 lg:px-12">
        <div className="christmas-garland pointer-events-none absolute inset-x-0 top-0 h-14 opacity-95" />
        <div className="relative z-10 grid items-center gap-8 pt-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7ad52]/35 bg-[#071018]/55 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#f6d98f] backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {campaign.label}
            </span>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#f6d98f]">{campaign.eyebrow}</p>
            <h1 className="mt-3 text-balance text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              {campaign.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/78 lg:mx-0 lg:text-lg">
              {campaign.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={onOpenMonsters}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#f6d98f] px-5 font-black text-[#071018] shadow-lg transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#071018]"
              >
                Ver presentes R2
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <a
                href={links.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick({ channel: "whatsapp", placement: "christmas_hero" })}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#071018]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar com a R2
              </a>
            </div>
          </div>

          <div className="relative mx-auto min-h-[330px] w-full max-w-[430px] sm:min-h-[390px]">
            <span className="absolute inset-8 rounded-full bg-[#d7ad52]/15 blur-3xl" />
            <div className="absolute left-1/2 top-0 z-20 grid h-24 w-24 -translate-x-1/2 place-items-center overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl sm:h-28 sm:w-28">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/assets/campaigns/natal-2026/logo-natal-128.avif 128w, /assets/campaigns/natal-2026/logo-natal-256.avif 256w"
                  sizes="(min-width: 640px) 112px, 96px"
                />
                <img
                  src={campaign.logo}
                  alt="R2 Print Lab em clima de Natal"
                  className="h-full w-full object-cover"
                  width="112"
                  height="112"
                />
              </picture>
            </div>
            <div className="absolute inset-x-3 bottom-0 top-14 overflow-hidden rounded-[2rem] border border-white/15 bg-white/95 p-4 shadow-2xl sm:inset-x-5 sm:p-5">
              <div className="product-grid flex h-full items-center justify-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-white via-[#f8f4e9] to-[#e8f0f6] p-3">
                <picture className="contents">
                  <source
                    type="image/avif"
                    srcSet="/assets/monsters-320.avif 320w, /assets/monsters-640.avif 640w"
                    sizes="(min-width: 1024px) 190px, (min-width: 640px) 175px, 128px"
                  />
                  <img
                    src="/assets/monsters-640.webp"
                    srcSet="/assets/monsters-320.webp 320w, /assets/monsters-640.webp 640w"
                    sizes="(min-width: 1024px) 190px, (min-width: 640px) 175px, 128px"
                    alt="Coleção de porta-latas Monster da R2 Print Lab"
                    className="h-full w-full object-contain drop-shadow-2xl"
                    width="360"
                    height="640"
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </div>
            <span className="absolute bottom-4 left-0 z-30 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-[#a51d2d] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-xl sm:left-2">
              <Gift className="h-4 w-4" aria-hidden="true" />
              Presente com personalidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
