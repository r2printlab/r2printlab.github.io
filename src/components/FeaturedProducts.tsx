import { motion } from "framer-motion";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-clay">Produtos em destaque</p>
        <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Uma mini vitrine para escolher rapido</h2>
      </div>
      <motion.div
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07 } },
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.38 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
