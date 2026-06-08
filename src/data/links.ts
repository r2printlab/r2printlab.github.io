export type LinkIcon =
  | "shoppingBag"
  | "messageCircle"
  | "instagram"
  | "sparkles"
  | "cupSoda"
  | "shield"
  | "sun";

export type MainLink = {
  label: string;
  href: string;
  icon: LinkIcon;
  highlight?: boolean;
};

export const mainLinks: MainLink[] = [
  {
    label: "Comprar no Mercado Livre",
    href: "#",
    icon: "shoppingBag",
    highlight: true,
  },
  {
    label: "Falar no WhatsApp",
    href: "#",
    icon: "messageCircle",
    highlight: true,
  },
  {
    label: "Ver Instagram",
    href: "#",
    icon: "instagram",
  },
  {
    label: "Produtos personalizados",
    href: "#",
    icon: "sparkles",
  },
  {
    label: "Porta Monster / Porta Lata 3D",
    href: "#",
    icon: "cupSoda",
  },
  {
    label: "Mascotes de Times",
    href: "#",
    icon: "shield",
  },
  {
    label: "Produtos que brilham no escuro",
    href: "#",
    icon: "sun",
  },
];

export const contactLinks = {
  instagram: "#",
  whatsapp: "#",
  mercadoLivre: "#",
  email: "mailto:r2printlab3d@gmail.com",
};
