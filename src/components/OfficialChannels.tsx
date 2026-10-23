import { ArrowUpRight, ChevronRight, Instagram, MessageCircle, Music2 } from "lucide-react";
import { links, officialChannels, type OfficialLink } from "../data/links";
import { trackCollectionOpen, trackOutboundClick } from "../lib/analytics";

type OfficialChannelsProps = {
  onOpenMonsters: () => void;
  onOpenMascots: () => void;
};

const collectionKeys = ["monsters", "mascots"];
const storeKeys = ["mercadoLivre", "shopee", "instagram", "tiktok"];

const monsterPhoto = "/assets/monsters-640.webp";
const mascotPhotos = [
  "/assets/Mascotes/URUBU%20FLAMENGO%20UNIFORME%201.jpeg",
  "/assets/Mascotes/SANTO%20SP%20UNIFORME%201.jpeg",
  "/assets/Mascotes/GAVIAO%20CORINTHIANS%20.jpeg",
];

export function OfficialChannels({ onOpenMonsters, onOpenMascots }: OfficialChannelsProps) {
  const collections = officialChannels.filter((channel) => collectionKeys.includes(channel.key));
  const stores = officialChannels.filter((channel) => storeKeys.includes(channel.key));

  return (
    <div id="official-channels" className="scroll-mt-6">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Coleções" title="Escolha seu presente" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {collections.map((channel) => (
            <CollectionCard
              key={channel.key}
              channel={channel}
              onOpen={() => {
                const isMascots = channel.key === "mascots";
                trackCollectionOpen(isMascots ? "mascots" : "monsters", "official_channels");
                (isMascots ? onOpenMascots : onOpenMonsters)();
              }}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Canais oficiais" title="Onde comprar e acompanhar" />
        <p className="mt-3 text-base text-muted">Acesse os canais da R2 Print Lab em um só lugar.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {stores.map((channel) => (
            <StoreLink key={channel.key} channel={channel} />
          ))}
        </div>
        <WhatsappBanner />
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
        <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-pine sm:text-5xl">{title}</h2>
    </div>
  );
}

function CollectionCard({ channel, onOpen }: { channel: OfficialLink; onOpen: () => void }) {
  const isMonsters = channel.key === "monsters";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-paper text-left shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative h-60 overflow-hidden bg-white sm:h-72">
        {isMonsters ? (
          <img
            src={monsterPhoto}
            alt="Porta-latas Monster em várias cores, produzidos em 3D pela R2 Print Lab"
            className="h-full w-full object-cover object-[50%_62%] transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full grid-cols-3 items-end bg-[#f1ede4]">
            {mascotPhotos.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt=""
                className={`h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105 ${index === 1 ? "scale-110" : ""}`}
                loading="lazy"
              />
            ))}
          </div>
        )}
        {channel.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-berry px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-sm">
            {channel.badge}
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-2xl text-pine">{channel.label}</h3>
          {channel.note ? <p className="mt-1 text-sm text-muted">{channel.note}</p> : null}
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pine text-gold transition group-hover:bg-berry group-hover:text-white">
          <ChevronRight className="h-6 w-6 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

function StoreIcon({ channelKey }: { channelKey: string }) {
  if (channelKey === "mercadoLivre") {
    return <img src="/assets/mercado-livre-icone.png" alt="" className="h-full w-full object-cover" />;
  }

  if (channelKey === "shopee") {
    return <img src="/assets/shopee-icone-4.png" alt="" className="h-7 w-7 object-contain" />;
  }

  if (channelKey === "instagram") {
    return <Instagram className="h-6 w-6 text-white" aria-hidden="true" />;
  }

  return <Music2 className="h-6 w-6 text-white" aria-hidden="true" />;
}

const tileStyles: Record<string, string> = {
  mercadoLivre: "bg-[#ffe600]",
  shopee: "bg-white border border-line",
  instagram: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
  tiktok: "bg-ink",
};

function StoreLink({ channel }: { channel: OfficialLink }) {
  return (
    <a
      href={channel.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOutboundClick({ channel: channel.key, placement: "official_channels" })}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-lift"
    >
      <span className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl ${tileStyles[channel.key]}`}>
        <StoreIcon channelKey={channel.key} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-extrabold text-ink">{channel.label}</span>
        {channel.note ? <span className="mt-0.5 block text-sm text-muted">{channel.note}</span> : null}
      </span>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-berry" aria-hidden="true" />
    </a>
  );
}

function WhatsappBanner() {
  return (
    <a
      href={links.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOutboundClick({ channel: "whatsapp", placement: "official_channels" })}
      className="on-dark layer-lines group mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl bg-berry p-5 text-white shadow-lift transition hover:bg-berry-dark sm:flex-row sm:items-center sm:p-6"
    >
      <span className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-display text-2xl leading-tight">Fale direto com a R2</span>
          <span className="mt-0.5 block text-sm text-white/85">Tire dúvidas e combine seu pedido pelo WhatsApp.</span>
        </span>
      </span>
      <span className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-berry transition group-hover:bg-gold-soft group-hover:text-berry-dark">
        Chamar no WhatsApp
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}
