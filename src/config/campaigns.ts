export type Campaign = {
  id: "default" | "natal-2026";
  label: string;
  active: boolean;
  startsAt?: string;
  endsAt?: string;
  logo: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

const defaultCampaign: Campaign = {
  id: "default",
  label: "R2 Print Lab",
  active: true,
  logo: "/assets/logo-r2.webp",
};

const christmasCampaign: Campaign = {
  id: "natal-2026",
  label: "Especial de Natal 2026",
  active: true,
  startsAt: "2026-10-22T00:00:00-03:00",
  endsAt: "2027-01-06T23:59:59-03:00",
  logo: "/assets/campaigns/natal-2026/logo-natal-128.webp",
  eyebrow: "Presentes criativos para um Natal com personalidade",
  title: "Natal em 3D, do jeito da R2.",
  description:
    "Colecionáveis, itens para torcedores e presentes produzidos com acabamento caprichado para surpreender.",
};

export function resolveCampaign(now = new Date(), search = window.location.search): Campaign {
  const previewCampaign = new URLSearchParams(search).get("campaign");

  if (previewCampaign === christmasCampaign.id) {
    return christmasCampaign;
  }

  if (!christmasCampaign.active || !christmasCampaign.startsAt || !christmasCampaign.endsAt) {
    return defaultCampaign;
  }

  const startsAt = new Date(christmasCampaign.startsAt).getTime();
  const endsAt = new Date(christmasCampaign.endsAt).getTime();
  const currentTime = now.getTime();

  return currentTime >= startsAt && currentTime <= endsAt ? christmasCampaign : defaultCampaign;
}
