export type LinkIcon =
  | "shoppingBag"
  | "shoppingCart"
  | "messageCircle"
  | "instagram"
  | "music"
  | "store"
  | "package"
  | "externalLink"
  | "sparkles"
  | "cupSoda"
  | "shield"
  | "sun";

export type LinkStatus = "active" | "soon";

export type LinkKey =
  | "monsters"
  | "instagram"
  | "whatsapp"
  | "mercadoLivre"
  | "shopee"
  | "tiktok"
  | "temu";

export const mercadoLivreStoreUrl =
  "https://lista.mercadolivre.com.br/_CustId_3134698851?item_id=MLB4656052071&category_id=MLB271427&seller_id=3134698851&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic";

export const shopeeStoreUrl =
  "https://shopee.com.br/r2printlab3d?uls_trackid=54prus1000um&utm_content=2UZZYw4xmEcpS84EyAtD5X1Fxnb1";

export type OfficialLink = {
  key: LinkKey;
  label: string;
  url: string;
  status: LinkStatus;
  icon: LinkIcon;
  badge?: string;
  metric?: string;
  note?: string;
};

export type MainLink = {
  label: string;
  url: string;
  status: LinkStatus;
  icon: LinkIcon;
  highlight?: boolean;
};

export const links: Record<LinkKey, OfficialLink> = {
  monsters: {
    key: "monsters",
    label: "Colecao Monsters",
    url: "#top",
    status: "active",
    icon: "package",
    badge: "Em destaque",
    metric: "+100 vendas",
    note: "Porta lata 3D com tampa e abridor",
  },
  instagram: {
    key: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/r2printlab/",
    status: "active",
    icon: "instagram",
  },
  whatsapp: {
    key: "whatsapp",
    label: "WhatsApp",
    url: "#",
    status: "soon",
    icon: "messageCircle",
  },
  mercadoLivre: {
    key: "mercadoLivre",
    label: "Mercado Livre",
    url: mercadoLivreStoreUrl,
    status: "active",
    icon: "shoppingBag",
  },
  shopee: {
    key: "shopee",
    label: "Shopee",
    url: shopeeStoreUrl,
    status: "active",
    icon: "store",
  },
  tiktok: {
    key: "tiktok",
    label: "TikTok",
    url: "#",
    status: "soon",
    icon: "music",
  },
  temu: {
    key: "temu",
    label: "Temu",
    url: "#",
    status: "soon",
    icon: "shoppingCart",
  },
};

export const officialChannels: OfficialLink[] = [
  links.monsters,
  links.mercadoLivre,
  links.shopee,
  links.tiktok,
  links.temu,
  links.instagram,
  links.whatsapp,
];

export const mainLinks: MainLink[] = [
  {
    label: links.instagram.label,
    url: links.instagram.url,
    status: links.instagram.status,
    icon: links.instagram.icon,
    highlight: true,
  },
  {
    label: links.mercadoLivre.label,
    url: links.mercadoLivre.url,
    status: links.mercadoLivre.status,
    icon: links.mercadoLivre.icon,
    highlight: true,
  },
  {
    label: links.whatsapp.label,
    url: links.whatsapp.url,
    status: links.whatsapp.status,
    icon: links.whatsapp.icon,
  },
];
