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
  | "mascots"
  | "instagram"
  | "whatsapp"
  | "mercadoLivre"
  | "shopee"
  | "tiktok";

export const mercadoLivreStoreUrl =
  "https://lista.mercadolivre.com.br/_CustId_3134698851?item_id=MLB4656052071&category_id=MLB271427&seller_id=3134698851&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic";

export const shopeeStoreUrl =
  "https://shopee.com.br/r2printlab3d?uls_trackid=54prus1000um&utm_content=2UZZYw4xmEcpS84EyAtD5X1Fxnb1";

export const shopeeMonsterProductUrl =
  "https://shopee.com.br/Porta-Lata-Monster-Com-Tampa-e-Abridor-Exclusivo-para-Energeticos-i.223269576.22794964126?extraParams=%7B%22display_model_id%22%3A209189605306%2C%22model_selection_logic%22%3A3%7D";

export const whatsappUrl =
  "https://wa.me/5511989753419?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20R2%20Print%20Lab%20e%20quero%20conhecer%20os%20produtos.";

export const tiktokUrl = "https://www.tiktok.com/@r2printlab";

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

export const links: Record<LinkKey, OfficialLink> = {
  monsters: {
    key: "monsters",
    label: "Coleção Monsters",
    url: "#top",
    status: "active",
    icon: "package",
    badge: "Em destaque",
    note: "Porta-lata com tampa e abridor",
  },
  mascots: {
    key: "mascots",
    label: "Mascotes ⚽",
    url: "#mascots",
    status: "active",
    icon: "shield",
    badge: "Em destaque",
    note: "Novos mascotes em preparação",
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
    url: whatsappUrl,
    status: "active",
    icon: "messageCircle",
    note: "Fale diretamente com a R2",
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
    url: tiktokUrl,
    status: "active",
    icon: "music",
    note: "Vídeos, bastidores e novidades",
  },
};

export const officialChannels: OfficialLink[] = [
  links.monsters,
  links.mascots,
  links.mercadoLivre,
  links.shopee,
  links.tiktok,
  links.instagram,
  links.whatsapp,
];
