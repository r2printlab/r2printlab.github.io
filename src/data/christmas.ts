// Vitrine de Natal 2026.
// Links, preços e fotos tirados dos anúncios ativos da R2 no Mercado Livre em 17/11/2026.
// Para trocar um preço ou link, edite só este arquivo. Para colocar a Shopee de um produto,
// preencha `shopeeUrl` com o link do anúncio; o botão aparece sozinho.

export type ChristmasCategory = "personagens" | "luz" | "mesa" | "porta";

export type ChristmasProduct = {
  id: string;
  name: string;
  detail: string;
  category: ChristmasCategory;
  image: string;
  price: string;
  fromPrice?: boolean;
  badge?: string;
  mercadoLivreUrl: string;
  shopeeUrl?: string;
};

export const christmasCategories: { key: ChristmasCategory | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "personagens", label: "Personagens" },
  { key: "luz", label: "Com luz LED" },
  { key: "mesa", label: "Mesa e ceia" },
  { key: "porta", label: "Porta e parede" },
];

const photo = (file: string) => `/assets/campaigns/natal-2026/produtos/${file}.webp`;
const ml = (id: string) => `https://www.mercadolivre.com.br/up/${id}`;

export const christmasProducts: ChristmasProduct[] = [
  // As três mãos são opções do mesmo anúncio; cada link abre a opção certa.
  {
    id: "mao-grinch",
    name: "Mão do Grinch",
    detail: "Porta-bolinhas grande para parede",
    category: "porta",
    image: photo("mao-grinch"),
    price: "113,90",
    badge: "Mais vendido",
    mercadoLivreUrl: ml("MLBU4637641859"),
  },
  {
    id: "mao-papai-noel",
    name: "Mão do Papai Noel",
    detail: "Porta-bolinhas grande para parede",
    category: "porta",
    image: photo("mao-papai-noel"),
    price: "119,90",
    mercadoLivreUrl: ml("MLBU5703076547"),
  },
  {
    id: "kit-maos",
    name: "Kit Mãos Grinch e Noel",
    detail: "As duas mãos, uma de cada",
    category: "porta",
    image: photo("kit-maos"),
    price: "193,75",
    mercadoLivreUrl: ml("MLBU5703408825"),
  },
  {
    id: "papai-noel-grande",
    name: "Papai Noel Grande",
    detail: "Boneco decorativo de 26 cm",
    category: "personagens",
    image: photo("papai-noel-grande"),
    price: "159,90",
    mercadoLivreUrl: ml("MLBU4865556837"),
  },
  {
    id: "grinch-boneco",
    name: "Boneco Grinch",
    detail: "Estátua decorativa de 23 cm",
    category: "personagens",
    image: photo("grinch-boneco"),
    price: "64,90",
    mercadoLivreUrl: ml("MLBU4899764420"),
  },
  {
    id: "mini-noel-deitado",
    name: "Mini Papai Noel Deitado",
    detail: "Enfeite fofo para estante e mesa",
    category: "personagens",
    image: photo("mini-noel-deitado"),
    price: "29,90",
    mercadoLivreUrl: ml("MLBU5595787805"),
  },
  {
    id: "mini-noel-sentado",
    name: "Mini Papai Noel Sentado",
    detail: "Senta na beirada da prateleira",
    category: "personagens",
    image: photo("mini-noel-sentado"),
    price: "24,90",
    mercadoLivreUrl: ml("MLBU5607951518"),
  },
  {
    id: "quebra-nozes",
    name: "Quebra-Nozes Soldado",
    detail: "Enfeite texturizado de 17 cm",
    category: "personagens",
    image: photo("quebra-nozes"),
    price: "29,90",
    mercadoLivreUrl: ml("MLBU4634344137"),
  },
  {
    id: "arvore-lanterna-vermelha",
    name: "Árvore Lanterna Vermelha",
    detail: "Luz de LED aconchegante, vela inclusa",
    category: "luz",
    image: photo("arvore-lanterna-vermelha"),
    price: "23,90",
    mercadoLivreUrl: ml("MLBU4668106276"),
  },
  {
    id: "arvore-lanterna-verde",
    name: "Árvore Lanterna Verde",
    detail: "Luz de LED aconchegante, vela inclusa",
    category: "luz",
    image: photo("arvore-lanterna-verde"),
    price: "24,90",
    mercadoLivreUrl: ml("MLBU4668083430"),
  },
  {
    id: "pinha-led",
    name: "Casinha Pinha com LED",
    detail: "Enfeite de pinha com vela inclusa",
    category: "luz",
    image: photo("pinha-led"),
    price: "34,90",
    mercadoLivreUrl: ml("MLBU5595093619"),
  },
  {
    id: "presepio-led",
    name: "Presépio com Vela LED",
    detail: "Nascimento de Jesus em ovo vazado",
    category: "luz",
    image: photo("presepio-led"),
    price: "43,90",
    mercadoLivreUrl: ml("MLBU4637205699"),
  },
  {
    id: "tigela-papai-noel",
    name: "Tigela Papai Noel",
    detail: "Para cookies e doces da ceia",
    category: "mesa",
    image: photo("tigela-papai-noel"),
    price: "34,90",
    mercadoLivreUrl: ml("MLBU4638924273"),
  },
  {
    id: "tigela-boneco-de-neve",
    name: "Tigela Boneco de Neve",
    detail: "Bowl decorativo de 500 ml",
    category: "mesa",
    image: photo("tigela-boneco-de-neve"),
    price: "53,90",
    mercadoLivreUrl: ml("MLBU4638732427"),
  },
  {
    id: "letreiro-feliz-natal",
    name: "Letreiro Feliz Natal",
    detail: "Decoração de mesa, 18 cm",
    category: "mesa",
    image: photo("letreiro-feliz-natal"),
    price: "29,90",
    mercadoLivreUrl: ml("MLBU5380897770"),
  },
  {
    id: "guirlanda",
    name: "Guirlanda de Porta",
    detail: "Biscoitos e laço vermelho, 25 cm",
    category: "porta",
    image: photo("guirlanda"),
    price: "64,90",
    mercadoLivreUrl: ml("MLBU4661979360"),
  },
];

const whatsappNumber = "5511989753419";

export function christmasWhatsappUrl(product: ChristmasProduct) {
  const text = `Olá! Vim pelo site da R2 Print Lab e tenho interesse neste presente de Natal: ${product.name}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
