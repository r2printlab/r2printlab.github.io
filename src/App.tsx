import { useEffect, useMemo, useState } from "react";
import { BrandIntro } from "./components/BrandIntro";
import { ChristmasShop } from "./components/ChristmasShop";
import { FeaturedMonster } from "./components/FeaturedMonster";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MascotsPage } from "./components/MascotsPage";
import { MonsterColors } from "./components/MonsterColors";
import { OfficialChannels } from "./components/OfficialChannels";
import { QuickShop } from "./components/QuickShop";
import { SeasonalHero } from "./components/SeasonalHero";
import { resolveCampaign } from "./config/campaigns";
import { links } from "./data/links";
import { trackPageView } from "./lib/analytics";

type Page = "home" | "monsters" | "mascots" | "natal";

const paths: Record<Page, string> = {
  home: "/",
  monsters: "/colecoes/monsters",
  mascots: "/colecoes/mascotes",
  natal: "/colecoes/natal",
};

function pageFromPath(pathname: string): Page {
  if (pathname.startsWith(paths.monsters)) {
    return "monsters";
  }

  if (pathname.startsWith(paths.mascots)) {
    return "mascots";
  }

  if (pathname.startsWith(paths.natal)) {
    return "natal";
  }

  return "home";
}
export default function App() {
  const campaign = useMemo(() => resolveCampaign(), []);
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname));
  const isChristmas = campaign.id === "natal-2026";

  useEffect(() => {
    const handlePopState = () => {
      setPage(pageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: isChristmas ? "Natal em 3D | R2 Print Lab" : "R2 Print Lab | Produtos criativos em 3D",
      monsters: "Coleção Monsters | R2 Print Lab",
      mascots: "Mascotes de Times | R2 Print Lab",
      natal: "Presentes de Natal | R2 Print Lab",
    };

    const title = titles[page];
    document.title = title;
    trackPageView(paths[page], title);
  }, [isChristmas, page]);

  function navigate(nextPage: Page) {
    if (window.location.pathname !== paths[nextPage]) {
      window.history.pushState({}, "", paths[nextPage]);
    }
    setPage(nextPage);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-snow font-sans text-ink">
      <div>
        <Header onHome={() => navigate("home")} logo={campaign.logo} />
        <main>
          {page === "home" ? (
            <>
              {isChristmas ? (
                <SeasonalHero
                  campaign={campaign}
                  onOpenGifts={() =>
                    document.getElementById("presentes-natal")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                />
              ) : (
                <BrandIntro
                  onOpenCollections={() =>
                    document.getElementById("official-channels")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  logo={campaign.logo}
                  tiktokUrl={links.tiktok.url}
                  whatsappUrl={links.whatsapp.url}
                />
              )}
              {isChristmas ? <ChristmasShop /> : null}
              <OfficialChannels
                onOpenMonsters={() => navigate("monsters")}
                onOpenMascots={() => navigate("mascots")}
              />
              <FeaturesSection />
            </>
          ) : page === "monsters" ? (
            <>
              <FeaturedMonster
                onBackToCollection={() =>
                  document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                onBackToHome={() => navigate("home")}
              />
              <QuickShop />
              <MonsterColors />
              <FeaturesSection />
            </>
          ) : page === "natal" ? (
            <>
              <ChristmasShop standalone onBackToHome={() => navigate("home")} />
              <FeaturesSection />
            </>
          ) : (
            <>
              <MascotsPage onBackToHome={() => navigate("home")} />
              <FeaturesSection />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
