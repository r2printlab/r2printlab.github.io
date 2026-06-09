import {
  CupSoda,
  ExternalLink,
  Instagram,
  MessageCircle,
  Music2,
  Package,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Sun,
} from "lucide-react";
import type { MainLink } from "../data/links";

const icons = {
  shoppingBag: ShoppingBag,
  shoppingCart: ShoppingCart,
  messageCircle: MessageCircle,
  instagram: Instagram,
  music: Music2,
  store: Store,
  package: Package,
  externalLink: ExternalLink,
  sparkles: Sparkles,
  cupSoda: CupSoda,
  shield: Shield,
  sun: Sun,
};

type LinkButtonProps = {
  link: MainLink;
};

export function LinkButton({ link }: LinkButtonProps) {
  const Icon = icons[link.icon];
  const isActive = link.status === "active" && link.url !== "#";
  const variant = link.highlight
    ? "border-transparent bg-brand text-white shadow-soft hover:-translate-y-0.5 hover:bg-brandDark hover:shadow-lift"
    : "border-mist bg-white/90 text-textMain shadow-sm hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft";
  const inactiveVariant = "border-mist bg-white/80 text-textMuted shadow-sm";
  const className = `group flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 ${
    isActive ? variant : inactiveVariant
  }`;
  const content = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${link.highlight && isActive ? "bg-white/15" : "bg-mist text-brand"}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="flex min-w-0 flex-col gap-1 leading-snug">
          <span>{link.label}</span>
          {!isActive ? <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">em breve</span> : null}
        </span>
      </span>
      <span aria-hidden="true" className="text-lg opacity-45 transition group-hover:translate-x-1 group-hover:opacity-80">
        {isActive ? <ExternalLink className="h-5 w-5" /> : "..." }
      </span>
    </>
  );

  if (!isActive) {
    return (
      <button type="button" className={`${className} cursor-default`} aria-disabled="true">
        {content}
      </button>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}
