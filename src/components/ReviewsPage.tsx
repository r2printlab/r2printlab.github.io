import { ArrowLeft, Instagram, ShoppingBag, Star, Store } from "lucide-react";

type ReviewsPageProps = {
  onBackToHome: () => void;
};

const reviews = [
  {
    name: "Cliente Mercado Livre",
    source: "Mercado Livre",
    text: "Produto muito bonito, bem acabado e chegou certinho. Ficou perfeito para presente.",
    icon: ShoppingBag,
  },
  {
    name: "Cliente Instagram",
    source: "Instagram",
    text: "Vi no Instagram e pedi o meu. As cores chamam muito a atencao e o atendimento foi rapido.",
    icon: Instagram,
  },
  {
    name: "Cliente Shopee",
    source: "Shopee",
    text: "Compra tranquila, embalagem caprichada e o item ficou igual ao anunciado.",
    icon: Store,
  },
  {
    name: "Cliente Mercado Livre",
    source: "Mercado Livre",
    text: "Gostei bastante do acabamento. Da para ver o cuidado nos detalhes.",
    icon: ShoppingBag,
  },
  {
    name: "Cliente Instagram",
    source: "Instagram",
    text: "Comprei depois de ver os videos. Ao vivo ficou ainda mais bonito na mesa.",
    icon: Instagram,
  },
  {
    name: "Cliente Mercado Livre",
    source: "Mercado Livre",
    text: "Chegou bem embalado e antes do esperado. Recomendo a loja.",
    icon: ShoppingBag,
  },
  {
    name: "Cliente Shopee",
    source: "Shopee",
    text: "O produto tem presença, bom peso visual e combinou muito com meu setup.",
    icon: Store,
  },
  {
    name: "Cliente Instagram",
    source: "Instagram",
    text: "Atendimento atencioso e deu para escolher a cor certinha que eu queria.",
    icon: Instagram,
  },
  {
    name: "Cliente Mercado Livre",
    source: "Mercado Livre",
    text: "Material bonito, detalhes bem feitos e a tampa encaixou direitinho.",
    icon: ShoppingBag,
  },
];

export function ReviewsPage({ onBackToHome }: ReviewsPageProps) {
  return (
    <section id="reviews" className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-mist bg-gradient-to-br from-white via-paper to-mist/70 p-5 shadow-lift dark:border-darkAccent/20 dark:from-darkCard dark:via-darkCard dark:to-darkCardAlt sm:p-8">
        <span className="pointer-events-none absolute -right-20 top-10 h-24 w-80 rotate-12 rounded-[2rem] bg-[#f2b705]/20 dark:bg-darkAccent/10" />
        <span className="pointer-events-none absolute -left-28 bottom-16 h-28 w-96 -rotate-12 rounded-[2rem] bg-white/70 dark:bg-darkCardAlt/50" />
        <div className="relative z-10">
          <button
            type="button"
            onClick={onBackToHome}
            className="mb-7 inline-flex min-h-10 items-center gap-2 rounded-2xl border border-mist bg-white px-3 text-sm font-black text-brand transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:border-darkAccent/20 dark:bg-darkCardAlt dark:text-darkAccent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para links
          </button>

          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-1 text-[#f2b705]" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-7 w-7 fill-current drop-shadow-sm" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Avaliações</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-textMain dark:text-darkText sm:text-5xl">O que os clientes dizem</h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-textMuted dark:text-darkMuted">
              Comentarios reunidos dos canais oficiais para mostrar um pouco da experiencia de quem ja comprou.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {reviews.map((review, index) => {
              const Icon = review.icon;
              return (
                <article
                  key={`${review.source}-${index}`}
                  className="relative rounded-[1.75rem] border border-mist bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-darkAccent/20 dark:bg-darkCard"
                >
                  <span className="absolute -bottom-2 left-8 h-5 w-5 rotate-45 border-b border-r border-mist bg-white/90 dark:border-darkAccent/20 dark:bg-darkCard" />
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-brand dark:bg-darkCardAlt dark:text-darkAccent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-black text-textMain dark:text-darkText">{review.name}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-textMuted dark:text-darkMuted">{review.source}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-1 text-[#f2b705]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-textMuted dark:text-darkMuted">{review.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
