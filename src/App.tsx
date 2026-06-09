import { useState } from "react";
import { BrandIntro } from "./components/BrandIntro";
import { FeaturedMonster } from "./components/FeaturedMonster";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MonsterColors } from "./components/MonsterColors";
import { MonsterGallery } from "./components/MonsterGallery";
import { OfficialChannels } from "./components/OfficialChannels";
import { QuickShop } from "./components/QuickShop";
import type { MonsterShortcut } from "./data/monster";

export default function App() {
  const [page, setPage] = useState<"home" | "monsters">("home");
  const [selectedMonster, setSelectedMonster] = useState<MonsterShortcut | null>(null);

  function scrollTop() {
    window.requestAnimationFrame(() => {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleHome() {
    setPage("home");
    setSelectedMonster(null);
    scrollTop();
  }

  function handleOpenMonsters() {
    setPage("monsters");
    setSelectedMonster(null);
    window.requestAnimationFrame(() => {
      document.getElementById("monster-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleSelectMonster(monster: MonsterShortcut) {
    setSelectedMonster(monster);
    window.requestAnimationFrame(() => {
      document.getElementById("monster-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleBackToCollection() {
    setSelectedMonster(null);
    window.requestAnimationFrame(() => {
      document.getElementById("monster-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="min-h-screen overflow-hidden bg-paper text-textMain transition-colors dark:bg-darkBg dark:text-darkText">
      <div className="site-background pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">
        <Header onHome={handleHome} />
        <main>
          {page === "home" ? (
            <>
              <BrandIntro />
              <OfficialChannels onOpenMonsters={handleOpenMonsters} />
              <FeaturesSection />
            </>
          ) : (
            <>
              <FeaturedMonster
                selectedMonster={selectedMonster ?? undefined}
                onBackToCollection={handleBackToCollection}
                onBackToHome={handleHome}
              />
              <QuickShop onSelectMonster={handleSelectMonster} selectedMonsterName={selectedMonster?.name} />
              <MonsterColors />
              {selectedMonster ? <MonsterGallery /> : null}
              <FeaturesSection />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
