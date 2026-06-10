export type MascotItem = {
  name: string;
  tag: string;
  color: string;
  status: "soon" | "active";
  image?: string;
  mercadoLivreUrl: string;
  shopeeUrl: string;
};

export const mascotItems: MascotItem[] = [
  {
    name: "Mascote 01",
    tag: "Futebol",
    color: "#1f4564",
    status: "soon",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Mascote 02",
    tag: "Torcida",
    color: "#20a84a",
    status: "soon",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
  {
    name: "Mascote 03",
    tag: "Colecao",
    color: "#ffd600",
    status: "soon",
    mercadoLivreUrl: "#",
    shopeeUrl: "#",
  },
];
