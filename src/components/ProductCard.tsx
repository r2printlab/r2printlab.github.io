import { ArrowUpRight, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = imageFailed ? undefined : product.image;

  useEffect(() => {
    setImageFailed(false);
  }, [product.image]);

  return (
    <article className="group overflow-hidden rounded-3xl border border-mist bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="product-grid relative flex aspect-[1.05] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-mist to-white sm:aspect-[1.18]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="grid h-24 w-24 place-items-center rounded-[1.75rem] border border-white bg-white/85 text-brand shadow-soft backdrop-blur">
            <ImageIcon className="h-10 w-10" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="p-5">
        <span className="inline-flex rounded-full bg-mist px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-brand">
          {product.tag}
        </span>
        <h3 className="mt-4 text-xl font-black text-textMain">{product.title}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-6 text-textMuted">{product.description}</p>
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-brandDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
        >
          Ver produto
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
