import { ArrowRight, MessageCircle, Star } from "lucide-react";
import type { Campaign } from "../config/campaigns";
import { links } from "../data/links";
import { trackOutboundClick } from "../lib/analytics";
import { ChristmasTree } from "./ChristmasTree";

type SeasonalHeroProps = {
  campaign: Campaign;
  onOpenMonsters: () => void;
};

export function SeasonalHero({ campaign, onOpenMonsters }: SeasonalHeroProps) {
  const [lead, ...rest] = (campaign.title ?? "").split(", ");
  const tail = rest.join(", ");

  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 pb-6 pt-2 sm:px-6 lg:px-8">
      <div className="on-dark layer-lines stars-bg relative overflow-hidden rounded-[2rem] bg-pine px-6 py-10 text-snow shadow-lift sm:px-10 sm:py-14 lg:px-14">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-soft">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
              {campaign.label}
            </span>
            <h1 className="mt-6 font-display text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              {lead}
              {tail ? (
                <>
                  ,<br />
                  <span className="text-gold">{tail}</span>
                </>
              ) : null}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-snow/80 lg:mx-0">{campaign.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={onOpenMonsters}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-7 text-base font-extrabold text-pine-deep transition hover:-translate-y-0.5 hover:bg-gold-soft"
              >
                Ver presentes R2
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <a
                href={links.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick({ channel: "whatsapp", placement: "christmas_hero" })}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-snow/40 px-7 text-base font-extrabold text-snow transition hover:-translate-y-0.5 hover:border-snow hover:bg-snow/10"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar com a R2
              </a>
            </div>
            <p className="mt-6 text-sm text-snow/65">
              Compre pelo Mercado Livre ou pela Shopee. Tire dúvidas direto no WhatsApp.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[340px] lg:max-w-[400px]">
            <ChristmasTree />
            <p className="mt-1 text-center text-xs font-bold uppercase tracking-[0.2em] text-gold-soft/80">
              Impresso camada por camada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
