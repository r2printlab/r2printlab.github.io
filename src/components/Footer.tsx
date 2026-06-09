import { links, type LinkStatus } from "../data/links";

type FooterLink = {
  label: string;
  url: string;
  status: LinkStatus;
};

const footerLinks: FooterLink[] = [
  links.instagram,
  links.whatsapp,
  links.mercadoLivre,
  { label: "r2printlab3d@gmail.com", url: "mailto:r2printlab3d@gmail.com", status: "active" },
];

export function Footer() {
  return (
    <footer className="border-t border-mist bg-white/80 px-5 py-8 dark:border-darkAccent/20 dark:bg-darkCard/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-black text-textMain dark:text-darkText">R2 Print Lab</p>
          <p className="mt-1 text-sm text-textMuted dark:text-darkMuted">Impressao 3D criativa e personalizada.</p>
        </div>
        <nav aria-label="Links do rodape" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-textMuted dark:text-darkMuted">
          {footerLinks.map((link) => (
            link.status === "active" && link.url !== "#" ? (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 dark:hover:text-darkAccent"
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="text-textMuted/70 dark:text-darkMuted/70">
                {link.label} em breve
              </span>
            )
          ))}
        </nav>
      </div>
    </footer>
  );
}
