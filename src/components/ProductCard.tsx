import { ArrowUpRight } from "lucide-react";
import type { Product } from "../data/products";

const accentMap = {
  orange: "from-orange-100 to-amber-50 text-clay",
  blue: "from-sky-100 to-cyan-50 text-sky-600",
  purple: "from-violet-100 to-fuchsia-50 text-grape",
  yellow: "from-yellow-100 to-orange-50 text-yellow-700",
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className={`product-grid flex aspect-[1.45] items-center justify-center bg-gradient-to-br ${accentMap[product.accent]}`}>
        <div className="grid h-24 w-24 place-items-center rounded-[1.75rem] bg-white/80 shadow-soft backdrop-blur">
          <span className="text-3xl font-black">3D</span>
        </div>
      </div>
      <div className="p-5">
        <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-clay">
          {product.tag}
        </span>
        <h3 className="mt-4 text-xl font-black text-ink">{product.title}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-6 text-ink/62">{product.description}</p>
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
        >
          Ver produto
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
