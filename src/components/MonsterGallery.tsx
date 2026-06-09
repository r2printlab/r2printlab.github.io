import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { monsterGallery } from "../data/monster";

export function MonsterGallery() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand dark:text-darkAccent">Galeria Monsters</p>
        <h2 className="mt-2 text-3xl font-black text-textMain dark:text-darkText">Veja a colecao de perto</h2>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {monsterGallery.map((item) => (
          <GalleryCard key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
}

type GalleryCardProps = {
  title: string;
  image: string;
};

function GalleryCard({ title, image }: GalleryCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-3xl border border-mist bg-white shadow-sm dark:border-darkAccent/20 dark:bg-darkCard">
      <div className="product-grid flex aspect-[1.35] items-center justify-center overflow-hidden bg-mist dark:bg-darkCardAlt">
        {!imageFailed ? (
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white text-brand shadow-soft dark:bg-darkCard dark:text-darkAccent">
            <ImageIcon className="h-10 w-10" aria-hidden="true" />
          </div>
        )}
      </div>
      <figcaption className="px-5 py-4 text-sm font-black text-textMain dark:text-darkText">{title}</figcaption>
    </figure>
  );
}
