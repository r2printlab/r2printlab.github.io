import { MessageCircle, PackageCheck, Palette, ShieldCheck } from "lucide-react";

const features = [
  { title: "Produtos sob encomenda", icon: PackageCheck },
  { title: "Varias cores disponiveis", icon: Palette },
  { title: "Compra segura pelo Mercado Livre", icon: ShieldCheck },
  { title: "Atendimento rapido pelo WhatsApp", icon: MessageCircle },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-3xl border border-mist bg-white p-5 shadow-sm dark:border-darkAccent/20 dark:bg-darkCard">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-brand dark:bg-darkCardAlt dark:text-darkAccent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 text-base font-black leading-snug text-textMain dark:text-darkText">{feature.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
