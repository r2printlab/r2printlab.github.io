import { motion } from "framer-motion";
import { monsterShortcuts } from "../data/monster";
import { ProductQuickCard } from "./ProductQuickCard";

export function QuickShop() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 text-center sm:items-center">
        <img
          src="/assets/logo-r2.png"
          alt="R2 Print Lab"
          className="mx-auto h-20 w-20 rounded-full border border-mist bg-white object-cover p-1 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard"
        />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Quick Shop Monsters</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-textMain dark:text-darkText sm:text-5xl">Escolha seu Monster</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-textMuted dark:text-darkMuted">
            Encontre rapido a cor ou modelo que voce viu no Instagram.
          </p>
        </div>
      </div>

      <motion.div
        className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.045 } },
        }}
      >
        {monsterShortcuts.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <ProductQuickCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
