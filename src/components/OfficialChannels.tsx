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

export function OfficialChannels() {
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
              <ChannelCard channel={channel} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type ChannelCardProps = {
  channel: OfficialLink;
};

function ChannelCard({ channel }: ChannelCardProps) {
  const Icon = icons[channel.icon];
  const isActive = channel.status === "active" && channel.url !== "#";
  const isInternalLink = channel.url.startsWith("#");
  const className = `group flex min-h-[82px] w-full items-center justify-between gap-4 rounded-3xl border px-4 py-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 ${
    isActive
      ? "border-brand/15 bg-brand text-white shadow-sm hover:-translate-y-0.5 hover:bg-brandDark hover:shadow-soft dark:border-darkAccent/25 dark:bg-darkAccent dark:text-darkBg"
      : "border-mist bg-white/70 text-textMuted dark:border-darkAccent/20 dark:bg-darkCardAlt/70 dark:text-darkMuted"
  }`;
  const content = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${isActive ? "bg-white/15 text-white dark:bg-darkBg/10 dark:text-darkBg" : "bg-mist text-brand dark:bg-darkCard dark:text-darkAccent"}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block font-black">{channel.label}</span>
          <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] ${isActive ? "bg-white/15 text-white dark:bg-darkBg/10 dark:text-darkBg" : "bg-mist text-brand dark:bg-darkCard dark:text-darkAccent"}`}>
            {isActive ? "acessar" : "em atualizacao"}
          </span>
        </span>
      </span>
      {isActive ? (
        isInternalLink ? (
          <ChevronRight className="h-5 w-5 shrink-0 opacity-80 transition group-hover:translate-x-1" aria-hidden="true" />
        ) : (
          <ExternalLink className="h-5 w-5 shrink-0 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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

  return (
    <a href={channel.url} target={isInternalLink ? undefined : "_blank"} rel={isInternalLink ? undefined : "noopener noreferrer"} className={className}>
      {content}
    </a>
  );
}
