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
      <span className="mx-auto block h-28 w-28 overflow-hidden rounded-full border-2 border-gold bg-white shadow-card">
        <img src={logo} alt="R2 Print Lab" className="h-full w-full scale-[1.16] object-cover" />
      </span>
      <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">Bio oficial</p>
      <h1 className="mt-2 font-display text-5xl leading-tight text-pine">R2 Print Lab</h1>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
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
    "flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-pine/15 bg-paper px-4 text-sm font-extrabold text-pine shadow-card transition hover:-translate-y-0.5 hover:border-pine/40";
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
