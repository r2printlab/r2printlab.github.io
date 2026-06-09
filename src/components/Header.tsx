import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
      <motion.a
        href="#top"
        className="flex items-center gap-3 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        aria-label="R2 Print Lab"
      >
        <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-mist bg-white shadow-soft dark:border-darkAccent/20 dark:bg-darkCard">
          <img src="/assets/logo-r2.png" alt="R2 Print Lab" className="h-full w-full object-cover" />
        </span>
        <span className="text-sm font-semibold tracking-wide text-textMuted dark:text-darkMuted">
          R2 Print Lab
        </span>
      </motion.a>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <ThemeToggle />
      </motion.div>
    </header>
  );
}
