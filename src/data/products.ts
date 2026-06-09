export type Product = {
  title: string;
  description: string;
  tag: string;
  href: string;
  image?: string;
};

export const products: Product[] = [
  {
    title: "Porta Monster 3D",
    description: "Suporte robusto e estiloso para latas, feito sob demanda em impressao 3D.",
    tag: "Porta lata",
    href: "#",
    image: "/assets/monsters.png",
  },
  {
    title: "Monster Neon que brilha no escuro",
    description: "Peca decorativa com acabamento especial para destacar setup, prateleira ou presente.",
    tag: "Glow",
    href: "#",
  },
  {
    title: "Mascotes de Times",
    description: "Mascotes personalizados para torcedores, colecionadores e ambientes tematicos.",
    tag: "Geek",
    href: "#",
  },
  {
    title: "Presentes personalizados em 3D",
    description: "Ideias criativas para datas especiais, empresas, lembrancas e decoracao.",
    tag: "Personalizado",
    href: "#",
  },
];
