import { links, type LinkStatus } from "../data/links";
import { trackOutboundClick } from "../lib/analytics";

type FooterLink = {
  label: string;
  url: string;
  status: LinkStatus;
};

const footerLinks: FooterLink[] = [
  links.instagram,
  links.tiktok,
  links.whatsapp,
  links.mercadoLivre,
  { label: "r2printlab3d@gmail.com", url: "mailto:r2printlab3d@gmail.com", status: "active" },
];

export function Footer() {
  return (
    <footer className="on-dark layer-lines mt-10 bg-pine px-5 py-12 text-snow">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-white">
            <img src="/assets/logo-r2.webp" alt="" className="h-full w-full scale-[1.16] object-cover" width="56" height="56" loading="lazy" />
          </span>
          <div>
            <p className="font-display text-2xl">R2 Print Lab</p>
            <p className="mt-1 text-sm text-snow/75">Produtos criativos, colecionáveis e presentes. Boas festas!</p>
          </div>
        </div>
        <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold">
          {footerLinks.map((link) =>
            link.status === "active" && link.url !== "#" ? (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                onClick={() =>
                  trackOutboundClick({
                    channel: link.url.startsWith("mailto:") ? "email" : link.label.toLowerCase().replace(" ", "_"),
                    placement: "footer",
                  })
                }
                className="text-snow/85 underline decoration-gold/60 decoration-2 underline-offset-4 transition hover:text-gold-soft"
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="text-snow/50">
                {link.label} em breve
              </span>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}
