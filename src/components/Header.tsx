import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  onHome: () => void;
  logo: string;
  campaignLabel?: string;
};

export function Header({ onHome, logo, campaignLabel }: HeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onHome}
        className="flex items-center gap-3 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
        aria-label="R2 Print Lab"
      >
        <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-mist bg-white shadow-soft dark:border-darkAccent/20 dark:bg-darkCard">
          <img src={logo} alt="R2 Print Lab" className="h-full w-full object-cover" />
        </span>
        <span className="text-sm font-semibold tracking-wide text-textMuted dark:text-darkMuted">
          R2 Print Lab
        </span>
        {campaignLabel ? (
          <span className="hidden rounded-full bg-[#a51d2d] px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white shadow-sm sm:inline-flex">
            {campaignLabel}
          </span>
        ) : null}
      </button>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
