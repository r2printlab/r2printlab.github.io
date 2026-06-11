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

const mascotLinks = {
  baleia:
    "https://www.mercadolivre.com.br/mascote-baleia-santos-estatua-decorativa-do-peixao-sfc/up/MLBU3926298037?picker=true&quantity=1",
  cachorrao:
    "https://www.mercadolivre.com.br/mascote-do-botafogo-pitbull-enraivado-estatua-27cm/up/MLBU4039568326?pdp_filters=item_id:MLB4725326073",
  galoDoido:
    "https://www.mercadolivre.com.br/mascote-galo-doido-atletico-mineiro-estatua-decorativa-cam/up/MLBU3888702606?pdp_filters=item_id:MLB6573053234",
  pirata:
    "https://www.mercadolivre.com.br/mascote-do-vasco-da-gama-pirata-estatua-decorativa-com-base/up/MLBU3955666782?pdp_filters=item_id:MLB4662673145",
  porcoGigante:
    "https://www.mercadolivre.com.br/mascote-do-palmeiras-porco-27cm-gigante-estatua-decorativa/up/MLBU4023362009?pdp_filters=item_id:MLB6865144734",
  porcoMedio:
    "https://www.mercadolivre.com.br/mascote-palmeiras-porco-loko-estatua-decorativa-torcedor/up/MLBU3890911942?pdp_filters=item_id:MLB6577112444",
  raposao:
    "https://www.mercadolivre.com.br/mascote-raposa-cruzeiro-estatua-decorativa-torcedor-com-base/up/MLBU3946321932?pdp_filters=item_id:MLB6713679106",
  saci:
    "https://www.mercadolivre.com.br/mascote-internacional-saci-estatua-decorativa-torcedor-inter/up/MLBU4039609104?pdp_filters=item_id:MLB4725317773",
  santo:
    "https://www.mercadolivre.com.br/mascote-sao-paulo-estatua-decorativa-torcedor-anjo-spfc/up/MLBU3877589083?pdp_filters=item_id:MLB6572612846",
  urubu:
    "https://www.mercadolivre.com.br/boneco-mascote-urubu-do-flamengo-estatueta-decorativa/p/MLB2076127507?pdp_filters=item_id:MLB4585780731",
};

function activeMercadoLivre(url: string) {
  return {
    mercadoLivreUrl: url,
    shopeeUrl: "#",
    status: "active" as const,
  };
}

export const mascotItems: MascotItem[] = [
  {
    name: "Baleia",
    team: "Santos",
    color: "#111111",
    uniforms: [
      {
        label: "Uniforme 1",
        image: "/assets/Mascotes/BALEIA%20SANTOS%20UNIFORME%201.jpeg",
        ...activeMercadoLivre(mascotLinks.baleia),
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
        ...activeMercadoLivre(mascotLinks.cachorrao),
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
        ...activeMercadoLivre(mascotLinks.galoDoido),
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
        ...activeMercadoLivre(mascotLinks.pirata),
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
        ...activeMercadoLivre(mascotLinks.porcoGigante),
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
        ...activeMercadoLivre(mascotLinks.porcoMedio),
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
        ...activeMercadoLivre(mascotLinks.raposao),
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
        ...activeMercadoLivre(mascotLinks.saci),
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
        ...activeMercadoLivre(mascotLinks.santo),
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
        ...activeMercadoLivre(mascotLinks.urubu),
      },
    ],
  },
];
