import { motion } from "framer-motion";
import {
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
    <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">Canais oficiais</p>
        <h2 className="mt-3 text-3xl font-black text-textMain sm:text-4xl">Onde encontrar a R2</h2>
        <p className="mt-3 text-sm leading-6 text-textMuted">
          Acompanhe a marca e veja os canais de venda que estao sendo preparados.
        </p>
      </div>

      <motion.div
        className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
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
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35 }}
          >
            <ChannelCard channel={channel} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

type ChannelCardProps = {
  channel: OfficialLink;
};

function ChannelCard({ channel }: ChannelCardProps) {
  const Icon = icons[channel.icon];
  const isActive = channel.status === "active" && channel.url !== "#";
  const className = `group flex min-h-[82px] w-full items-center justify-between gap-4 rounded-3xl border px-4 py-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 ${
    isActive
      ? "border-brand/15 bg-white text-textMain shadow-sm hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-soft"
      : "border-mist bg-white/70 text-textMuted"
  }`;
  const content = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mist text-brand">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block font-black">{channel.label}</span>
          <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] ${isActive ? "bg-brand text-white" : "bg-mist text-brand"}`}>
            {isActive ? "ativo" : "em breve"}
          </span>
        </span>
      </span>
      {isActive ? (
        <ExternalLink className="h-5 w-5 shrink-0 text-brand opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
    <a href={channel.url} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
}
