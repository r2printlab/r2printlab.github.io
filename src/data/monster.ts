import { mercadoLivreStoreUrl, shopeeStoreUrl } from "./links";

const monsterLinks = {
  preto:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU3949425546?pdp_filters=seller_id%3A3134698851#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=7&type=product&tracking_id=b37076da-4f0e-4f25-a40d-7df6d3bb8fbd&wid=MLB4656052071&sid=search",
  vermelho:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU3987483526?product_trigger_id=MLBU3987483522&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  azul:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU3984474672?product_trigger_id=MLBU3949425546&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  rosa:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU4071017754?product_trigger_id=MLBU4011060723&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  roxo:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU3990041336?product_trigger_id=MLBU4071017754&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  bege:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU4040938236?product_trigger_id=MLBU3984474672&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  brancoNeon:
    "https://www.mercadolivre.com.br/porta-latas-monster-com-tampa-e-abridor-brilha-no-escuro/up/MLBU4025350483?pdp_filters=seller_id%3A3134698851#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=1&type=product&float_highlight=price_dropped&tracking_id=44d3b5e7-98a7-4554-8a7a-b8164187eb92&wid=MLB6868403826&sid=search",
  branco:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU3971831437?product_trigger_id=MLBU4040938236&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  laranja:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU4011060723?product_trigger_id=MLBU3971831437&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
  verde:
    "https://www.mercadolivre.com.br/porta-lata-monster-com-tampa-e-abridor-exclusivo-energetico/up/MLBU3987483522?product_trigger_id=MLBU3990041336&pdp_filters=seller_id%3A3134698851&applied_product_filters=MLBU3949425546&picker=true&quantity=1",
};

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
  sideVideo: "/assets/monster-branco-neon.mp4",
  mercadoLivreUrl: mercadoLivreStoreUrl,
  shopeeUrl: shopeeStoreUrl,
};

export const monsterShortcuts: MonsterShortcut[] = [
  {
    name: "Monster Preto",
    tag: "Preto",
    color: "#111111",
    image: "/assets/monster-preto.png",
    mercadoLivreUrl: monsterLinks.preto,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Branco Neon",
    tag: "Brilha no escuro",
    color: "linear-gradient(135deg, #ffffff 0 48%, #42d66b 52% 100%)",
    image: "/assets/branco-neon.png",
    mercadoLivreUrl: monsterLinks.brancoNeon,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Branco",
    tag: "Branco",
    color: "#ffffff",
    image: "/assets/monster-branco.png",
    mercadoLivreUrl: monsterLinks.branco,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Azul",
    tag: "Azul",
    color: "#1664c0",
    image: "/assets/monster-azul.png",
    mercadoLivreUrl: monsterLinks.azul,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Vermelho",
    tag: "Vermelho",
    color: "#df1f2d",
    image: "/assets/monster-vermelho.png",
    mercadoLivreUrl: monsterLinks.vermelho,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Roxo",
    tag: "Roxo",
    color: "#6d35b8",
    image: "/assets/monster-roxo.png",
    mercadoLivreUrl: monsterLinks.roxo,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Rosa Chiclete",
    tag: "Rosa chiclete",
    color: "#ef6fa6",
    image: "/assets/monster-rosa-chiclete.png",
    mercadoLivreUrl: monsterLinks.rosa,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Bege",
    tag: "Bege",
    color: "#d7c2a3",
    image: "/assets/monster-bege.png",
    mercadoLivreUrl: monsterLinks.bege,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Laranja",
    tag: "Laranja",
    color: "#f07921",
    image: "/assets/monster-laranja.png",
    mercadoLivreUrl: monsterLinks.laranja,
    shopeeUrl: shopeeStoreUrl,
  },
  {
    name: "Monster Verde",
    tag: "Verde",
    color: "#20a84a",
    image: "/assets/monster-verde.png",
    mercadoLivreUrl: monsterLinks.verde,
    shopeeUrl: shopeeStoreUrl,
  },
];

export const monsterColors: MonsterColor[] = [
  { name: "Preto", value: "#111111", mercadoLivreUrl: monsterLinks.preto, shopeeUrl: shopeeStoreUrl },
  {
    name: "Branco Neon",
    value: "linear-gradient(135deg, #ffffff 0 48%, #42d66b 52% 100%)",
    mercadoLivreUrl: monsterLinks.brancoNeon,
    shopeeUrl: shopeeStoreUrl,
  },
  { name: "Branco", value: "#ffffff", mercadoLivreUrl: monsterLinks.branco, shopeeUrl: shopeeStoreUrl },
  { name: "Azul", value: "#1664c0", mercadoLivreUrl: monsterLinks.azul, shopeeUrl: shopeeStoreUrl },
  { name: "Vermelho", value: "#df1f2d", mercadoLivreUrl: monsterLinks.vermelho, shopeeUrl: shopeeStoreUrl },
  { name: "Roxo", value: "#6d35b8", mercadoLivreUrl: monsterLinks.roxo, shopeeUrl: shopeeStoreUrl },
  { name: "Rosa Chiclete", value: "#ef6fa6", mercadoLivreUrl: monsterLinks.rosa, shopeeUrl: shopeeStoreUrl },
  { name: "Bege", value: "#d7c2a3", mercadoLivreUrl: monsterLinks.bege, shopeeUrl: shopeeStoreUrl },
  { name: "Laranja", value: "#f07921", mercadoLivreUrl: monsterLinks.laranja, shopeeUrl: shopeeStoreUrl },
  { name: "Verde", value: "#20a84a", mercadoLivreUrl: monsterLinks.verde, shopeeUrl: shopeeStoreUrl },
];

export const monsterGallery: GalleryImage[] = [
  { title: "Colecao Monsters", image: "/assets/monsters.png" },
  { title: "Branco Neon", image: "/assets/branco-neon.png" },
  { title: "Monster preto", image: "/assets/monster-preto.png" },
  { title: "Monster rosa chiclete", image: "/assets/monster-rosa-chiclete.png" },
];
