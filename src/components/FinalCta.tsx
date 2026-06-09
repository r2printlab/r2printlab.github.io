import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactLinks } from "../data/links";

export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-6">
      <motion.div
        className="overflow-hidden rounded-[2rem] bg-brandDark px-6 py-10 text-center text-white shadow-lift sm:px-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-3xl font-black sm:text-4xl">Quer um produto personalizado?</p>
        <a
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-black text-brandDark shadow-soft transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brandDark"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Chamar no WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
