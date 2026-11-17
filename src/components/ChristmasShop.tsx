import { ArrowLeft, MessageCircle, ShieldCheck, Store } from "lucide-react";
import { useMemo, useState } from "react";
import {
  christmasCategories,
  christmasProducts,
  christmasWhatsappUrl,
  type ChristmasCategory,
  type ChristmasProduct,
} from "../data/christmas";
import { links } from "../data/links";
import { trackOutboundClick } from "../lib/analytics";

type ChristmasShopProps = {
  /** Na página própria da coleção o título vira h1 e aparece o botão de voltar. */
  standalone?: boolean;
  onBackToHome?: () => void;
};

export function ChristmasShop({ standalone = false, onBackToHome }: ChristmasShopProps) {
  const [filter, setFilter] = useState<ChristmasCategory | "todos">("todos");
  const visible = useMemo(
    () => (filter === "todos" ? christmasProducts : christmasProducts.filter((item) => item.category === filter)),
    [filter],
  );
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="presentes-natal" className="mx-auto w-full max-w-6xl scroll-mt-4 px-4 py-10 sm:px-6 lg:px-8">
      {standalone && onBackToHome ? (
        <button
          type="button"
          onClick={onBackToHome}
          className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper px-4 text-sm font-extrabold text-pine shadow-card transition hover:border-pine/30"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar ao início
        </button>
      ) : null}

      <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
        <span className="h-0.5 w-8 bg-berry" aria-hidden="true" />
        Vitrine de Natal
      </p>
      <Heading className="mt-3 font-display text-4xl leading-tight text-pine sm:text-5xl">Presentes de Natal</Heading>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted">
        Toque no produto para comprar no Mercado Livre ou chame a R2 no WhatsApp.
      </p>

      <div
        className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        role="group"
        aria-label="Filtrar presentes"
      >
        {christmasCategories.map((category) => {
          const active = filter === category.key;
          return (
            <button
              key={category.key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category.key)}
              className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-extrabold transition ${
                active
                  ? "border-pine bg-pine text-gold-soft"
                  : "border-line bg-paper text-pine hover:border-pine/40"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4" aria-live="polite">
        {visible.map((item) => (
          <li key={item.id}>
            <ChristmasCard item={item} />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-paper p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-3 text-sm leading-6 text-muted">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
          <span>
            Compra protegida pelo Mercado Livre. Os preços seguem as promoções do anúncio e podem mudar.
          </span>
        </p>
        <a
          href={links.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOutboundClick({ channel: "whatsapp", placement: "christmas_shop_footer" })}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-berry px-6 text-sm font-extrabold text-white transition hover:bg-berry-dark"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Não achou? Fale com a R2
        </a>
      </div>
    </section>
  );
}

function ChristmasCard({ item }: { item: ChristmasProduct }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <a
        href={item.mercadoLivreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackOutboundClick({ channel: "mercado_livre", placement: "christmas_photo", item: item.id })}
        className="relative block aspect-square overflow-hidden bg-pine"
        aria-label={`Ver ${item.name} no Mercado Livre`}
      >
        <img
          src={item.image}
          alt={item.name}
          width={720}
          height={720}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {item.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-berry px-2.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-white shadow-sm">
            {item.badge}
          </span>
        ) : null}
        <span className="absolute bottom-2 left-2 rounded-full bg-gold px-2.5 py-1 text-xs font-extrabold text-pine-deep shadow-sm sm:text-sm">
          {item.fromPrice ? <span className="font-bold">a partir de </span> : null}R$ {item.price}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-[0.95rem] font-extrabold leading-tight text-ink sm:text-base">{item.name}</h3>
        <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">{item.detail}</p>

        <div className="mt-auto flex gap-2 pt-3">
          <a
            href={item.mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundClick({ channel: "mercado_livre", placement: "christmas_card", item: item.id })
            }
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-berry px-3 text-sm font-extrabold text-white transition hover:bg-berry-dark"
          >
            Comprar
          </a>
          {item.shopeeUrl ? (
            <a
              href={item.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick({ channel: "shopee", placement: "christmas_card", item: item.id })}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-pine/20 bg-white text-pine transition hover:border-pine hover:bg-pine hover:text-white"
              aria-label={`Ver ${item.name} na Shopee`}
            >
              <Store className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : null}
          <a
            href={christmasWhatsappUrl(item)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick({ channel: "whatsapp", placement: "christmas_card", item: item.id })}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-pine/20 bg-white text-pine transition hover:border-pine hover:bg-pine hover:text-white"
            aria-label={`Pedir ${item.name} pelo WhatsApp`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
