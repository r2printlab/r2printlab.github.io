import { motion } from "framer-motion";
import { mainLinks } from "../data/links";
import { LinkButton } from "./LinkButton";

export function MainLinks() {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-5 sm:px-6">
      <motion.div
        className="grid gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.055 } },
        }}
      >
        {mainLinks.map((link) => (
          <motion.div
            key={link.label}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35 }}
          >
            <LinkButton link={link} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
