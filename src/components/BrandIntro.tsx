import { Box, MessageCircle, Music2 } from "lucide-react";
import { trackOutboundClick } from "../lib/analytics";

type BrandIntroProps = {
  onOpenCollections: () => void;
  logo: string;
  tiktokUrl: string;
  whatsappUrl: string;
};

export function BrandIntro({ onOpenCollections, logo, tiktokUrl, whatsappUrl }: BrandIntroProps) {
  return (
    <section id="top" className="mx-auto w-full max-w-3xl px-5 pb-4 pt-6 text-center sm:px-6">
      <img
        src={logo}
        alt="R2 Print Lab"
        className="mx-auto h-24 w-24 rounded-full border border-mist bg-white object-cover p-1 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard"
      />
      <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">
        Bio oficial
      </p>
      <h1 className="mt-2 text-4xl font-black leading-tight text-textMain dark:text-darkText sm:text-5xl">
        R2 Print Lab
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-textMuted dark:text-darkMuted">
        Produtos criativos, colecionáveis e presentes com acabamento caprichado para o dia a dia.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <InfoPill icon={Box} label="Coleções" onClick={onOpenCollections} />
        <InfoPill icon={Music2} label="TikTok" href={tiktokUrl} channel="tiktok" />
        <InfoPill icon={MessageCircle} label="WhatsApp" href={whatsappUrl} channel="whatsapp" />
      </div>
    </section>
  );
}

type InfoPillProps = {
  icon: typeof Box;
  label: string;
  href?: string;
  onClick?: () => void;
  channel?: string;
};

function InfoPill({ icon: Icon, label, href, onClick, channel }: InfoPillProps) {
  const className =
    "flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-mist bg-white/80 px-4 text-sm font-black text-brand shadow-sm transition hover:-translate-y-0.5 hover:bg-mist hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCard/80 dark:text-darkAccent";
  const content = (
    <>
      <Icon className="h-5 w-5" aria-hidden="true" />
      {label}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={() => channel && trackOutboundClick({ channel, placement: "brand_intro" })}
      >
        {content}
      </a>
    );
  }

  return onClick ? (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  ) : (
    <div className={className}>{content}</div>
  );
}
