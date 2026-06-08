import { CupSoda, Instagram, MessageCircle, Shield, ShoppingBag, Sparkles, Sun } from "lucide-react";
import type { MainLink } from "../data/links";

const icons = {
  shoppingBag: ShoppingBag,
  messageCircle: MessageCircle,
  instagram: Instagram,
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
  const variant = link.highlight
    ? "border-transparent bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift"
    : "border-ink/10 bg-white/82 text-ink shadow-sm hover:-translate-y-0.5 hover:border-clay/35 hover:shadow-soft";

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 ${variant}`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${link.highlight ? "bg-white/12" : "bg-orange-50 text-clay"}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="leading-snug">{link.label}</span>
      </span>
      <span aria-hidden="true" className="text-lg opacity-45 transition group-hover:translate-x-1 group-hover:opacity-80">
        &rarr;
      </span>
    </a>
  );
}
