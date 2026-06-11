import { ArrowLeft, Shield, ShoppingBag } from "lucide-react";
import { mascotItems } from "../data/mascots";

type MascotsPageProps = {
  onBackToHome: () => void;
};

export function MascotsPage({ onBackToHome }: MascotsPageProps) {
  return (
    <section id="mascots" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-mist bg-gradient-to-br from-white via-paper to-mist/70 p-5 shadow-lift dark:border-darkAccent/20 dark:from-darkCard dark:via-darkCard dark:to-darkCardAlt sm:p-8">
        <span className="pointer-events-none absolute -right-24 top-8 h-24 w-80 rotate-12 rounded-[2rem] bg-brand/10 dark:bg-darkAccent/10" />
        <span className="pointer-events-none absolute -left-24 bottom-20 h-28 w-96 -rotate-12 rounded-[2rem] bg-white/70 dark:bg-darkCardAlt/50" />
        <div className="relative z-10">
          <button
            type="button"
            onClick={onBackToHome}
            className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-2xl border border-mist bg-white px-3 text-sm font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para links
          </button>

          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <MascotsMediaDeck />
            <div>
              <div className="mb-5 inline-flex items-center gap-4 rounded-[1.7rem] border border-mist bg-white/80 p-4 shadow-sm dark:border-darkAccent/20 dark:bg-darkCardAlt">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-sm dark:bg-darkAccent dark:text-darkBg">
                  <Shield className="h-7 w-7" aria-hidden="true" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-black text-textMain dark:text-darkText">Mascotes R2 Print Lab</p>
                </div>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Linha de mascotes</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-textMain dark:text-darkText sm:text-5xl">Escolha seu Mascote</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-textMuted dark:text-darkMuted">
                Mascotes para torcedores, colecionadores e presentes personalizados.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-mist pt-6 dark:border-darkAccent/20 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Mascotes disponiveis</p>
              <h2 className="mt-2 text-3xl font-black text-textMain dark:text-darkText">Escolha pelo time</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-textMuted dark:text-darkMuted">
              Toque em Ver produto para abrir o mascote correspondente no Mercado Livre.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {mascotItems.map((item) => (
              <MascotCard key={`${item.team}-${item.name}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MascotsMediaDeck() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[1.7rem] border border-white/80 bg-gradient-to-br from-brand/10 via-white to-mist shadow-soft dark:border-darkAccent/20 dark:from-darkCardAlt dark:via-darkCard dark:to-darkCardAlt">
      <div className="absolute inset-x-8 top-9 h-[76%] rounded-[2rem] border border-white/80 bg-white/70 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard/60" />
      <MascotVideo
        src="/assets/Mascotes/sp2.mp4"
        label="Video mascote Sao Paulo"
        className="absolute left-3 top-10 w-[31%] -rotate-1 sm:left-4 sm:w-[34%]"
      />
      <MascotVideo
        src="/assets/Mascotes/mascotes.mp4"
        label="Video central dos mascotes"
        className="absolute inset-x-0 bottom-3 z-10 mx-auto w-[54%] min-w-[190px] max-w-[280px]"
        featured
      />
      <MascotVideo
        src="/assets/Mascotes/urubuzao.mp4"
        label="Video mascote Urubu"
        className="absolute right-4 top-24 z-20 w-[31%] rotate-1 sm:top-24"
      />
    </div>
  );
}

type MascotVideoProps = {
  src: string;
  label: string;
  className: string;
  featured?: boolean;
};

function MascotVideo({ src, label, className, featured }: MascotVideoProps) {
  return (
    <div
      className={`${className} overflow-hidden rounded-3xl border border-white/80 bg-white text-left shadow-soft transition duration-300 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-[1.05] hover:shadow-2xl dark:border-darkAccent/20 dark:bg-darkCard ${
        featured ? "shadow-lift" : ""
      }`}
    >
      <video
        src={src}
        className="aspect-[9/16] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
    <article className="relative overflow-hidden rounded-3xl border border-mist bg-white/95 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-darkAccent/20 dark:bg-darkCard">
      <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: item.color }} />
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-white via-paper to-mist p-2 dark:from-darkCard dark:via-darkCardAlt dark:to-darkCard">
        <img
          src={primaryUniform.image}
          alt={`${item.name} ${item.team}`}
          className="h-full w-full object-contain drop-shadow-xl transition duration-300 hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-black leading-tight text-textMain dark:text-darkText">{item.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-textMuted dark:text-darkMuted">{item.team}</p>
          </div>
          <span className="h-6 w-6 shrink-0 rounded-full border border-mist shadow-sm dark:border-darkAccent/30" style={{ background: item.color }} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.uniforms.map((uniform) => (
            <span
              key={uniform.label}
              className="rounded-full bg-mist px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.1em] text-brand dark:bg-darkCardAlt dark:text-darkAccent"
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
            className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-3 text-sm font-black text-white transition hover:bg-brandDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:bg-darkAccent dark:text-darkBg"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Ver produto
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-2xl bg-mist px-3 text-sm font-black uppercase tracking-[0.1em] text-brand disabled:cursor-default dark:bg-darkCardAlt dark:text-darkAccent"
          >
            Em breve
          </button>
        )}
      </div>
    </article>
  );
}
