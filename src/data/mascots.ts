export type MascotUniform = {
  label: string;
  image: string;
  mercadoLivreUrl: string;
  shopeeUrl: string;
  status: "soon" | "active";
};

export type MascotItem = {
  name: string;
  team: string;
  color: string;
  uniforms: MascotUniform[];
};

const soonLinks = {
  mercadoLivreUrl: "#",
  shopeeUrl: "#",
  status: "soon" as const,
};

export const mascotItems: MascotItem[] = [
  {
    name: "Baleia",
    team: "Santos",
    color: "#111111",
    uniforms: [
      {
        label: "Uniforme 1",
        image: "/assets/Mascotes/BALEIA%20SANTOS%20UNIFORME%201.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Cachorrao",
    team: "Botafogo",
    color: "#111111",
    uniforms: [
      {
        label: "Modelo principal",
        image: "/assets/Mascotes/CACHORRAO%20BOTAFOGO.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Galo Doido",
    team: "Atletico",
    color: "#111111",
    uniforms: [
      {
        label: "Modelo principal",
        image: "/assets/Mascotes/GALO%20DOIDO%20ATLETICO.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Gaviao",
    team: "Corinthians",
    color: "#111111",
    uniforms: [
      {
        label: "Modelo principal",
        image: "/assets/Mascotes/GAVIAO%20CORINTHIANS%20.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Pirata",
    team: "Vasco da Gama",
    color: "#111111",
    uniforms: [
      {
        label: "Modelo principal",
        image: "/assets/Mascotes/PIRATA%20VASCO%20DA%20GAMA.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Porco Gigante",
    team: "Palmeiras",
    color: "#14783f",
    uniforms: [
      {
        label: "Uniforme 1",
        image: "/assets/Mascotes/PORCO%20GIGANTE%20UNIFORME%201.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Porco Medio",
    team: "Palmeiras C/Base",
    color: "#14783f",
    uniforms: [
      {
        label: "Uniforme 1",
        image: "/assets/Mascotes/PORCO%20M%C3%89DIO%20C-BASE%20UNIFORME%201.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Raposao",
    team: "Cruzeiro",
    color: "#1d5fbf",
    uniforms: [
      {
        label: "Modelo principal",
        image: "/assets/Mascotes/RAPOSAO%20CRUZEIRO.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Saci",
    team: "Internacional",
    color: "#d71920",
    uniforms: [
      {
        label: "Modelo principal",
        image: "/assets/Mascotes/SACI%20INTERNACIONAL.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Santo",
    team: "Sao Paulo",
    color: "#d71920",
    uniforms: [
      {
        label: "Uniforme 1",
        image: "/assets/Mascotes/SANTO%20SP%20UNIFORME%201.jpeg",
        ...soonLinks,
      },
    ],
  },
  {
    name: "Urubu",
    team: "Flamengo",
    color: "#d71920",
    uniforms: [
      {
        label: "Uniforme 1",
        image: "/assets/Mascotes/URUBU%20FLAMENGO%20UNIFORME%201.jpeg",
        ...soonLinks,
      },
    ],
  },
];
