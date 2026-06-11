import { motion } from "framer-motion";
import { BadgeCheck, Box, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pb-10 pt-3 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-16 lg:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center lg:text-left"
      >
        <img
          src="/assets/logo-r2.png"
          alt="R2 Print Lab"
          className="mx-auto mb-5 h-24 w-24 rounded-full border border-mist bg-white object-cover p-1 shadow-soft sm:h-28 sm:w-28 lg:mx-0"
        />
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand shadow-sm backdrop-blur lg:mx-0">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Colecoes sob encomenda
        </div>
        <h1 className="text-balance text-4xl font-black leading-[1.02] text-textMain sm:text-5xl lg:text-6xl">
          R2 Print Lab
        </h1>
        <p className="mt-4 text-balance text-xl font-semibold text-brandDark sm:text-2xl">
          Produtos criativos, presentes e colecionaveis
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-textMuted lg:mx-0">
          Cores, modelos e itens especiais em um so lugar.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto aspect-[1.04] w-full max-w-[430px]"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        aria-label="Vitrine visual de produtos"
      >
        <div className="absolute inset-4 rounded-[2rem] bg-white shadow-lift" />
        <div className="product-grid absolute inset-0 rounded-[2.25rem] border border-mist bg-gradient-to-br from-white via-mist to-white p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-3xl border border-mist bg-white shadow-soft">
              <img src="/assets/logo-r2.png" alt="R2 Print Lab" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-textMuted shadow-sm">
              R2 Lab
            </div>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4">
            <ProductPreview icon={<Box className="h-8 w-8" />} label="Decor" />
            <ProductPreview icon={<Sparkles className="h-8 w-8" />} label="Glow" />
            <ProductPreview icon={<BadgeCheck className="h-8 w-8" />} label="Geek" wide />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

type ProductPreviewProps = {
  icon: ReactNode;
  label: string;
  wide?: boolean;
};

function ProductPreview({ icon, label, wide }: ProductPreviewProps) {
  return (
    <div className={`rounded-[1.35rem] bg-white/90 p-4 shadow-soft ${wide ? "col-span-2" : ""}`}>
      <div className="mb-5 grid h-16 place-items-center rounded-2xl bg-brand text-white">
        {icon}
      </div>
      <p className="text-sm font-black text-textMain">{label}</p>
      <div className="mt-2 h-2 w-20 rounded-full bg-mist" />
    </div>
  );
}
