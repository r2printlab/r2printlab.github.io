import { contactLinks } from "../data/links";

const footerLinks = [
  { label: "Instagram", href: contactLinks.instagram },
  { label: "WhatsApp", href: contactLinks.whatsapp },
  { label: "Mercado Livre", href: contactLinks.mercadoLivre },
  { label: "r2printlab3d@gmail.com", href: contactLinks.email },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white/72 px-5 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-black text-ink">R2 Print Lab</p>
          <p className="mt-1 text-sm text-ink/55">Impressao 3D criativa e personalizada.</p>
        </div>
        <nav aria-label="Links do rodape" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-ink/68">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="transition hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
