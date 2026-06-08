import { Handshake, MessageCircle, PackageCheck, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    title: "Compra segura pelo Mercado Livre",
    icon: ShieldCheck,
  },
  {
    title: "Atendimento direto pelo WhatsApp",
    icon: MessageCircle,
  },
  {
    title: "Produtos feitos sob demanda",
    icon: PackageCheck,
  },
  {
    title: "Personalizacao para presentes e empresas",
    icon: Handshake,
  },
];

export function TrustSection() {
  return (
    <section className="bg-white/58 py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-3xl border border-ink/8 bg-white p-5 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-clay">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 text-base font-black leading-snug text-ink">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
