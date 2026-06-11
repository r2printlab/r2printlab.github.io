import { BadgeCheck, Box, MessageSquareText, Star } from "lucide-react";

type BrandIntroProps = {
  onOpenReviews: () => void;
};

export function BrandIntro({ onOpenReviews }: BrandIntroProps) {
  return (
    <section id="top" className="mx-auto w-full max-w-3xl px-5 pb-4 pt-6 text-center sm:px-6">
      <img
        src="/assets/logo-r2.png"
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
        Produtos criativos, colecionaveis e presentes com acabamento caprichado para o dia a dia.
      </p>
      <div className="mt-4 flex items-center justify-center gap-1 text-[#f2b705]" aria-label="5 estrelas de avaliacao">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-5 w-5 fill-current drop-shadow-sm" aria-hidden="true" />
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <InfoPill icon={Box} label="Colecoes" />
        <InfoPill icon={MessageSquareText} label="Avaliações" onClick={onOpenReviews} />
        <InfoPill icon={BadgeCheck} label="Loja oficial" />
      </div>
    </section>
  );
}

type InfoPillProps = {
  icon: typeof Box;
  label: string;
  onClick?: () => void;
};

function InfoPill({ icon: Icon, label, onClick }: InfoPillProps) {
  const className =
    "flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-mist bg-white/80 px-4 text-sm font-black text-brand shadow-sm transition hover:-translate-y-0.5 hover:bg-mist hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCard/80 dark:text-darkAccent";
  const content = (
    <>
      <Icon className="h-5 w-5" aria-hidden="true" />
      {label}
    </>
  );

  return onClick ? (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  ) : (
    <div className={className}>{content}</div>
  );
}
