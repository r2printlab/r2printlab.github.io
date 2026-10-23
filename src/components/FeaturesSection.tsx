import { MessageCircle, PackageCheck, Palette, ShieldCheck } from "lucide-react";

const features = [
  { title: "Produtos sob encomenda", icon: PackageCheck },
  { title: "Várias cores disponíveis", icon: Palette },
  { title: "Compra segura pelo Mercado Livre", icon: ShieldCheck },
  { title: "Atendimento direto pelo WhatsApp", icon: MessageCircle },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ul className="grid gap-x-6 gap-y-5 rounded-[1.75rem] border border-line bg-paper p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <li key={feature.title} className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pine text-gold">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-bold leading-snug text-ink">{feature.title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
