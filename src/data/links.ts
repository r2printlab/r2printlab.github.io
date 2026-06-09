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

export type OfficialLink = {
  label: string;
  url: string;
  status: LinkStatus;
  icon: LinkIcon;
};

export type LinkKey =
  | "monsters"
  | "instagram"
  | "whatsapp"
  | "mercadoLivre"
  | "shopee"
  | "tiktok"
  | "magalu"
  | "amazon";

export type MainLink = {
  label: string;
  url: string;
  status: LinkStatus;
  icon: LinkIcon;
  highlight?: boolean;
};

export const links: Record<LinkKey, OfficialLink> = {
  monsters: {
    label: "Colecao Monsters",
    url: "#top",
    status: "active",
    icon: "package",
  },
  instagram: {
    label: "Instagram",
    url: "https://www.instagram.com/r2printlab/",
    status: "active",
    icon: "instagram",
  },
  whatsapp: {
    label: "WhatsApp",
    url: "#",
    status: "soon",
    icon: "messageCircle",
  },
  mercadoLivre: {
    label: "Mercado Livre",
    url: "#",
    status: "soon",
    icon: "shoppingBag",
  },
  shopee: {
    label: "Shopee",
    url: "#",
    status: "soon",
    icon: "store",
  },
  tiktok: {
    label: "TikTok",
    url: "#",
    status: "soon",
    icon: "music",
  },
  magalu: {
    label: "Magalu",
    url: "#",
    status: "soon",
    icon: "package",
  },
  amazon: {
    label: "Amazon",
    url: "#",
    status: "soon",
    icon: "shoppingCart",
  },
};

export const officialChannels: OfficialLink[] = Object.values(links);

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
