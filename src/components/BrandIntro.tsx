import { BadgeCheck, Box, Sparkles } from "lucide-react";

export function BrandIntro() {
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
        Impressao 3D criativa para produtos decorativos, geeks, personalizados e presentes sob demanda.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <InfoPill icon={Box} label="Produtos 3D" />
        <InfoPill icon={Sparkles} label="Personalizados" />
        <InfoPill icon={BadgeCheck} label="Loja oficial" />
      </div>
    </section>
  );
}

type InfoPillProps = {
  icon: typeof Box;
  label: string;
};

function InfoPill({ icon: Icon, label }: InfoPillProps) {
  return (
    <div className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-mist bg-white/80 px-4 text-sm font-black text-brand shadow-sm dark:border-darkAccent/20 dark:bg-darkCard/80 dark:text-darkAccent">
      <Icon className="h-5 w-5" aria-hidden="true" />
      {label}
    </div>
  );
}
