export type MonsterShortcut = {
  name: string;
  tag: string;
  color: string;
  image: string;
  productUrl: string;
  whatsappUrl: string;
};

export type MonsterColor = {
  name: string;
  value: string;
};

export type GalleryImage = {
  title: string;
  image: string;
};

export const monsterProduct = {
  title: "Porta Lata Monster com Tampa e Abridor",
  subtitle: "Colecao Monsters",
  description:
    "Porta lata em impressao 3D com visual marcante, tampa e abridor para deixar setup, presente ou colecao com mais personalidade.",
  image: "/assets/monster-destaque.png",
  fallbackImage: "/assets/monsters.png",
  productUrl: "#",
  whatsappUrl: "#",
};

export const monsterShortcuts: MonsterShortcut[] = [
  {
    name: "Monster Preto",
    tag: "Preto",
    color: "#111111",
    image: "/assets/monster-preto.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Branco",
    tag: "Branco",
    color: "#ffffff",
    image: "/assets/monster-branco.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Azul",
    tag: "Azul",
    color: "#1664c0",
    image: "/assets/monster-azul.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Vermelho",
    tag: "Vermelho",
    color: "#df1f2d",
    image: "/assets/monster-vermelho.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Roxo",
    tag: "Roxo",
    color: "#6d35b8",
    image: "/assets/monster-roxo.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Rosa",
    tag: "Rosa",
    color: "#ef6fa6",
    image: "/assets/monster-rosa.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Verde",
    tag: "Verde",
    color: "#22a842",
    image: "/assets/monster-verde.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Monster Laranja",
    tag: "Laranja",
    color: "#f07921",
    image: "/assets/monster-laranja.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
  {
    name: "Colecao Monsters",
    tag: "Colecao",
    color: "#1f4564",
    image: "/assets/monster-colecao.png",
    productUrl: "#",
    whatsappUrl: "#",
  },
];

export const monsterColors: MonsterColor[] = [
  { name: "Preto", value: "#111111" },
  { name: "Branco", value: "#ffffff" },
  { name: "Azul", value: "#1664c0" },
  { name: "Vermelho", value: "#df1f2d" },
  { name: "Roxo", value: "#6d35b8" },
  { name: "Rosa", value: "#ef6fa6" },
  { name: "Verde", value: "#22a842" },
  { name: "Laranja", value: "#f07921" },
];

export const monsterGallery: GalleryImage[] = [
  { title: "Colecao Monsters", image: "/assets/monster-colecao.png" },
  { title: "Monster destaque", image: "/assets/monster-destaque.png" },
  { title: "Monster preto", image: "/assets/monster-preto.png" },
  { title: "Detalhe do produto", image: "/assets/monster-detalhe.png" },
];
