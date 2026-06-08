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
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-clay/20 bg-white/75 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-clay shadow-sm backdrop-blur lg:mx-0">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Feito sob demanda em impressao 3D
        </div>
        <h1 className="text-balance text-4xl font-black leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
          R2 Print Lab
        </h1>
        <p className="mt-4 text-balance text-xl font-semibold text-ink/80 sm:text-2xl">
          Impressao 3D criativa, personalizada e sob medida
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-ink/62 lg:mx-0">
          Produtos decorativos, geeks, personalizados e presentes feitos em impressao 3D.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto aspect-[1.04] w-full max-w-[430px]"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        aria-label="Vitrine visual de produtos 3D"
      >
        <div className="absolute inset-4 rounded-[2rem] bg-white shadow-lift" />
        <div className="product-grid absolute inset-0 rounded-[2.25rem] border border-white bg-gradient-to-br from-white via-orange-50 to-sky-50 p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-ink text-xl font-black text-white shadow-soft">
              R2
            </div>
            <div className="rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-ink/65 shadow-sm">
              3D Lab
            </div>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4">
            <ProductPreview icon={<Box className="h-8 w-8" />} label="Decor" tone="bg-clay" />
            <ProductPreview icon={<Sparkles className="h-8 w-8" />} label="Glow" tone="bg-skyshop" />
            <ProductPreview icon={<BadgeCheck className="h-8 w-8" />} label="Geek" tone="bg-grape" wide />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

type ProductPreviewProps = {
  icon: ReactNode;
  label: string;
  tone: string;
  wide?: boolean;
};

function ProductPreview({ icon, label, tone, wide }: ProductPreviewProps) {
  return (
    <div className={`rounded-[1.35rem] bg-white/86 p-4 shadow-soft ${wide ? "col-span-2" : ""}`}>
      <div className={`mb-5 grid h-16 place-items-center rounded-2xl text-white ${tone}`}>
        {icon}
      </div>
      <p className="text-sm font-black text-ink">{label}</p>
      <div className="mt-2 h-2 w-20 rounded-full bg-ink/10" />
    </div>
  );
}
