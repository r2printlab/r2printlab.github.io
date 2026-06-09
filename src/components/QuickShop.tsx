import { motion } from "framer-motion";
import { monsterShortcuts, type MonsterShortcut } from "../data/monster";
import { ProductQuickCard } from "./ProductQuickCard";

type QuickShopProps = {
  onSelectMonster: (monster: MonsterShortcut) => void;
  selectedMonsterName?: string;
};

export function QuickShop({ onSelectMonster, selectedMonsterName }: QuickShopProps) {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-mist bg-white/80 px-5 py-6 text-center shadow-sm dark:border-darkAccent/20 dark:bg-darkCard/70 sm:px-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-mist/80 blur-3xl dark:bg-darkAccent/10" />
        <div className="relative flex flex-col gap-5 sm:items-center">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <img
              src="/assets/logo-r2.png"
              alt="R2 Print Lab"
              className="h-16 w-16 rounded-full border border-mist bg-white object-cover p-1 shadow-soft dark:border-darkAccent/20 dark:bg-darkCard"
            />
            <div className="hidden h-12 w-px bg-mist dark:bg-darkAccent/20 sm:block" />
            <div className="inline-flex items-center gap-3 rounded-3xl border border-mist bg-white px-4 py-3 shadow-soft dark:border-darkAccent/20 dark:bg-darkCardAlt">
              <img
                src="/assets/logo%20monster.png"
                alt="Monster"
                className="h-12 w-14 object-contain drop-shadow-md"
              />
              <div className="text-left">
                <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-brand dark:text-darkAccent">
                  Colecao original
                </p>
                <p className="text-sm font-black text-textMain dark:text-darkText">R2 Monsters</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Quick Shop Monsters</p>
            <h1 className="mt-2 text-4xl font-black leading-tight text-textMain dark:text-darkText sm:text-5xl">Escolha seu Monster</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-textMuted dark:text-darkMuted">
              Encontre rapido a cor ou modelo que voce viu no Instagram.
            </p>
          </div>
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
            <ProductQuickCard
              item={item}
              isSelected={selectedMonsterName === item.name}
              onSelect={() => onSelectMonster(item)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
