import { motion } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Instagram,
  MessageCircle,
  Music2,
  Package,
  ShoppingBag,
  ShoppingCart,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { officialChannels, type LinkIcon, type OfficialLink } from "../data/links";

const icons: Record<LinkIcon, LucideIcon> = {
  shoppingBag: ShoppingBag,
  shoppingCart: ShoppingCart,
  messageCircle: MessageCircle,
  instagram: Instagram,
  music: Music2,
  store: Store,
  package: Package,
  externalLink: ExternalLink,
  sparkles: ExternalLink,
  cupSoda: Store,
  shield: Package,
  sun: ExternalLink,
};

type OfficialChannelsProps = {
  onOpenMonsters: () => void;
};

export function OfficialChannels({ onOpenMonsters }: OfficialChannelsProps) {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-6">
      <div className="rounded-[2rem] border border-mist bg-white/90 p-5 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard/90 sm:p-6">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand dark:text-darkAccent">Links oficiais</p>
          <h2 className="mt-2 text-3xl font-black text-textMain dark:text-darkText">Onde comprar e acompanhar</h2>
          <p className="mt-2 text-sm leading-6 text-textMuted dark:text-darkMuted">
            Acesse os canais da R2 Print Lab em um so lugar.
          </p>
        </div>

        <motion.div
          className="mt-6 grid gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.055 } },
          }}
        >
          {officialChannels.map((channel) => (
            <motion.div
              key={channel.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <ChannelCard channel={channel} onOpenMonsters={onOpenMonsters} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type ChannelCardProps = {
  channel: OfficialLink;
  onOpenMonsters: () => void;
};

function ChannelCard({ channel, onOpenMonsters }: ChannelCardProps) {
  const Icon = icons[channel.icon];
  const isActive = channel.status === "active" && channel.url !== "#";
  const isMonsterChannel = channel.key === "monsters";
  const isInternalLink = channel.url.startsWith("#");
  const className = `group flex min-h-[82px] w-full items-center justify-between gap-4 rounded-3xl border px-4 py-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 ${
    isMonsterChannel
      ? "relative overflow-hidden border-brand/20 bg-gradient-to-br from-brand via-brand to-brandDark text-white shadow-lift hover:-translate-y-0.5 hover:shadow-soft dark:border-darkAccent/30 dark:from-darkAccent dark:via-darkAccent dark:to-brand dark:text-darkBg"
      : isActive
      ? "border-brand/15 bg-brand text-white shadow-sm hover:-translate-y-0.5 hover:bg-brandDark hover:shadow-soft dark:border-darkAccent/25 dark:bg-darkAccent dark:text-darkBg"
      : "border-mist bg-white/70 text-textMuted dark:border-darkAccent/20 dark:bg-darkCardAlt/70 dark:text-darkMuted"
  }`;
  const content = (
    <>
      {isMonsterChannel ? (
        <span className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10 blur-xl" />
      ) : null}
      <span className="relative flex min-w-0 items-center gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${isActive ? "bg-white/15 text-white dark:bg-darkBg/10 dark:text-darkBg" : "bg-mist text-brand dark:bg-darkCard dark:text-darkAccent"}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          {channel.badge ? (
            <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white shadow-sm">
              <span aria-hidden="true">🔥</span>
              {channel.badge}
            </span>
          ) : null}
          <span className="block font-black">{channel.label}</span>
          <span className="mt-1 flex flex-wrap items-center gap-2">
            <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] ${isActive ? "bg-white/15 text-white dark:bg-darkBg/10 dark:text-darkBg" : "bg-mist text-brand dark:bg-darkCard dark:text-darkAccent"}`}>
              {isActive ? "acessar" : "em atualizacao"}
            </span>
            {channel.metric ? (
              <span className="inline-flex rounded-full bg-white/95 px-2.5 py-1 text-xs font-black text-brand dark:bg-darkBg/90 dark:text-darkAccent">
                {channel.metric}
              </span>
            ) : null}
          </span>
          {channel.note ? <span className="mt-2 hidden text-xs font-semibold text-white/80 sm:block dark:text-darkBg/75">{channel.note}</span> : null}
        </span>
      </span>
      {isActive ? (
        isInternalLink ? (
          <ChevronRight className="relative h-5 w-5 shrink-0 opacity-80 transition group-hover:translate-x-1" aria-hidden="true" />
        ) : (
          <ExternalLink className="relative h-5 w-5 shrink-0 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        )
      ) : null}
    </>
  );

  if (!isActive) {
    return (
      <button type="button" className={`${className} cursor-default`} disabled>
        {content}
      </button>
    );
  }

  if (isMonsterChannel) {
    return (
      <button type="button" onClick={onOpenMonsters} className={className}>
        {content}
      </button>
    );
  }

  return (
    <a href={channel.url} target={isInternalLink ? undefined : "_blank"} rel={isInternalLink ? undefined : "noopener noreferrer"} className={className}>
      {content}
    </a>
  );
}
