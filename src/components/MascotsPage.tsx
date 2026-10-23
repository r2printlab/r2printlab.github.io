import { ArrowLeft, ShoppingBag } from "lucide-react";
import { mascotItems } from "../data/mascots";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { trackOutboundClick } from "../lib/analytics";

type MascotsPageProps = {
  onBackToHome: () => void;
};

export function MascotsPage({ onBackToHome }: MascotsPageProps) {
  return (
    <section id="mascots" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onBackToHome}
        className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-pine/20 bg-paper px-4 text-sm font-extrabold text-pine transition hover:border-pine hover:bg-pine hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar para links
      </button>

      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <MascotsMediaDeck />
        <div>
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
            <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
            Linha de mascotes
          </p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-pine sm:text-6xl">Escolha seu Mascote</h1>
          <p className="mt-4 max-w-xl text-lg leading-7 text-muted">
            Mascotes para torcedores, colecionadores e presentes personalizados.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-3 border-t-2 border-line pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
            <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
            Mascotes disponíveis
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-pine">Escolha pelo time</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted">
          Toque em Ver produto para abrir o mascote correspondente no Mercado Livre.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {mascotItems.map((item) => (
          <MascotCard key={`${item.team}-${item.name}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function MascotsMediaDeck() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="on-dark layer-lines relative mx-auto min-h-[340px] w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-pine shadow-lift sm:min-h-[420px] lg:max-w-none">
      <MascotVideo
        src="/assets/Mascotes/sp2.mp4"
        label="Vídeo mascote São Paulo"
        className="absolute left-3 top-12 w-[29%] -rotate-2 sm:left-5 sm:top-10 sm:w-[31%]"
        reduceMotion={shouldReduceMotion}
      />
      <MascotVideo
        src="/assets/Mascotes/mascotes.mp4"
        label="Vídeo central dos mascotes"
        className="absolute inset-x-0 bottom-4 z-10 mx-auto w-[50%] min-w-[150px] max-w-[230px] border-gold sm:w-[48%] sm:max-w-[280px]"
        featured
        reduceMotion={shouldReduceMotion}
      />
      <MascotVideo
        src="/assets/Mascotes/urubuzao.mp4"
        label="Vídeo mascote Urubu"
        className="absolute right-3 top-24 z-20 w-[29%] rotate-2 sm:right-5 sm:w-[31%]"
        reduceMotion={shouldReduceMotion}
      />
    </div>
  );
}

type MascotVideoProps = {
  src: string;
  label: string;
  className: string;
  featured?: boolean;
  reduceMotion: boolean;
};

function MascotVideo({ src, label, className, featured, reduceMotion }: MascotVideoProps) {
  return (
    <div
      className={`${className} overflow-hidden rounded-2xl bg-white shadow-lift transition duration-300 hover:z-30 hover:-translate-y-2 hover:rotate-0 ${
        featured ? "border-4" : "border-2 border-snow/80"
      }`}
    >
      <video
        src={src}
        className="aspect-[9/16] w-full object-cover"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        controls={reduceMotion}
        aria-label={label}
      />
    </div>
  );
}

type MascotCardProps = {
  item: (typeof mascotItems)[number];
};

function MascotCard({ item }: MascotCardProps) {
  const primaryUniform = item.uniforms[0];
  const mercadoLivreIsActive = primaryUniform.mercadoLivreUrl !== "#";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <span className="absolute inset-x-0 top-0 z-10 h-1.5" style={{ background: item.color }} />
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-[#f1ede4] p-2">
        <img
          src={primaryUniform.image}
          alt={`${item.name} ${item.team}`}
          className="h-full w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-extrabold leading-tight text-ink">{item.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">{item.team}</p>
          </div>
          <span
            className="h-6 w-6 shrink-0 rounded-full border border-black/10 shadow-sm"
            style={{ background: item.color }}
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.uniforms.map((uniform) => (
            <span
              key={uniform.label}
              className="rounded-full bg-snow px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-pine"
            >
              {uniform.label}
            </span>
          ))}
        </div>
        {mercadoLivreIsActive ? (
          <a
            href={primaryUniform.mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundClick({
                channel: "mercado_livre",
                placement: "mascot_card",
                item: `${item.name} ${item.team}`,
              })
            }
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-berry px-3 text-sm font-extrabold text-white transition hover:bg-berry-dark"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Ver produto
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-snow px-3 text-sm font-extrabold uppercase tracking-[0.08em] text-pine disabled:cursor-default"
          >
            Em breve
          </button>
        )}
      </div>
    </article>
  );
}
