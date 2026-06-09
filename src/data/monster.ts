export type MonsterShortcut = {
  name: string;
  tag: string;
  color: string;
  image: string;
  mercadoLivreUrl: string;
  shopeeUrl: string;
};

export type MonsterColor = {
  name: string;
  value: string;
  mercadoLivreUrl: string;
  shopeeUrl: string;
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
  video: "/assets/video-monster.mp4",
  mercadoLivreUrl: "#",
  shopeeUrl: "#",
};

export const monsterShortcuts: MonsterShortcut[] = [
  {
    name: "Monster Preto",
    tag: "Preto",
    color: "#111111",
    image: "/assets/monster-preto.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Branco",
    tag: "Branco",
    color: "#ffffff",
    image: "/assets/monster-branco.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Azul",
    tag: "Azul",
    color: "#1664c0",
    image: "/assets/monster-azul.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Vermelho",
    tag: "Vermelho",
    color: "#df1f2d",
    image: "/assets/monster-vermelho.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Roxo",
    tag: "Roxo",
    color: "#6d35b8",
    image: "/assets/monster-roxo.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Rosa",
    tag: "Rosa",
    color: "#ef6fa6",
    image: "/assets/monster-rosa.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Verde",
    tag: "Verde",
    color: "#22a842",
    image: "/assets/monster-verde.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Monster Laranja",
    tag: "Laranja",
    color: "#f07921",
    image: "/assets/monster-laranja.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Colecao Monsters",
    tag: "Colecao",
    color: "#1f4564",
    image: "/assets/monster-colecao.png",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
];

export const monsterColors: MonsterColor[] = [
  { name: "Preto", value: "#111111", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Branco", value: "#ffffff", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Azul", value: "#1664c0", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Vermelho", value: "#df1f2d", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Roxo", value: "#6d35b8", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Rosa", value: "#ef6fa6", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Verde", value: "#22a842", mercadoLivreUrl: "#", shopeeUrl: "#" },
  { name: "Laranja", value: "#f07921", mercadoLivreUrl: "#", shopeeUrl: "#" },
];

export const monsterGallery: GalleryImage[] = [
  { title: "Colecao Monsters", image: "/assets/monster-colecao.png" },
  { title: "Monster destaque", image: "/assets/monster-destaque.png" },
  { title: "Monster preto", image: "/assets/monster-preto.png" },
  { title: "Detalhe do produto", image: "/assets/monster-detalhe.png" },
];
