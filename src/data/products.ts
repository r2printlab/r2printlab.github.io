export type Product = {
  title: string;
  description: string;
  tag: string;
  href: string;
  accent: "orange" | "blue" | "purple" | "yellow";
};

export const products: Product[] = [
  {
    title: "Porta Monster 3D",
    description: "Suporte robusto e estiloso para latas, feito sob demanda em impressao 3D.",
    tag: "Porta lata",
    href: "#",
    accent: "orange",
  },
  {
    title: "Monster Neon que brilha no escuro",
    description: "Peca decorativa com acabamento especial para destacar setup, prateleira ou presente.",
    tag: "Glow",
    href: "#",
    accent: "blue",
  },
  {
    title: "Mascotes de Times",
    description: "Mascotes personalizados para torcedores, colecionadores e ambientes tematicos.",
    tag: "Geek",
    href: "#",
    accent: "purple",
  },
  {
    title: "Presentes personalizados em 3D",
    description: "Ideias criativas para datas especiais, empresas, lembrancas e decoracao.",
    tag: "Personalizado",
    href: "#",
    accent: "yellow",
  },
];
