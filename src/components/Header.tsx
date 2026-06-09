import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
      <motion.a
        href="#top"
        className="flex items-center gap-3 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        aria-label="R2 Print Lab"
      >
        <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-mist bg-white shadow-soft">
          <img src="/assets/logo-r2.png" alt="R2 Print Lab" className="h-full w-full object-cover" />
        </span>
        <span className="hidden text-sm font-semibold tracking-wide text-textMuted sm:block">
          R2 Print Lab
        </span>
      </motion.a>
      <motion.a
        href="mailto:r2printlab3d@gmail.com"
        className="rounded-full border border-mist bg-white/80 px-4 py-2 text-sm font-semibold text-textMuted shadow-sm backdrop-blur transition hover:border-brand/30 hover:text-brandDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        Contato
      </motion.a>
    </header>
  );
}
