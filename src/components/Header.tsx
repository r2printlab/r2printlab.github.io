import { MessageCircle } from "lucide-react";
import { links } from "../data/links";
import { trackOutboundClick } from "../lib/analytics";

type HeaderProps = {
  onHome: () => void;
  logo: string;
};

export function Header({ onHome, logo }: HeaderProps) {
  return (
    <>
      <div className="candy-stripe h-2" aria-hidden="true" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-3 rounded-full pr-2"
          aria-label="R2 Print Lab, ir para o início"
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-white shadow-card">
            <img src={logo} alt="" className="h-full w-full scale-[1.16] object-cover" width="48" height="48" />
          </span>
          <span className="font-display text-xl leading-none text-pine">R2 Print Lab</span>
        </button>
        <a
          href={links.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOutboundClick({ channel: "whatsapp", placement: "header" })}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-berry px-4 text-sm font-extrabold text-white transition hover:bg-berry-dark sm:px-5"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </header>
    </>
  );
}
