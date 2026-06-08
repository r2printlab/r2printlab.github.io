import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
      <motion.a
        href="#top"
        className="flex items-center gap-3 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        aria-label="R2 Print Lab"
      >
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-sm font-black text-white shadow-soft">
          R2
        </span>
        <span className="hidden text-sm font-semibold tracking-wide text-ink/75 sm:block">
          R2 Print Lab
        </span>
      </motion.a>
      <motion.a
        href="mailto:r2printlab3d@gmail.com"
        className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-semibold text-ink/75 shadow-sm backdrop-blur transition hover:border-clay/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        Contato
      </motion.a>
    </header>
  );
}
