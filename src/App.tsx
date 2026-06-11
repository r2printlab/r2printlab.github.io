import { useState } from "react";
import { BrandIntro } from "./components/BrandIntro";
import { FeaturedMonster } from "./components/FeaturedMonster";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MascotsPage } from "./components/MascotsPage";
import { MonsterColors } from "./components/MonsterColors";
import { OfficialChannels } from "./components/OfficialChannels";
import { QuickShop } from "./components/QuickShop";
import { ReviewsPage } from "./components/ReviewsPage";

export default function App() {
  const [page, setPage] = useState<"home" | "monsters" | "mascots" | "reviews">("home");

  function scrollTop() {
    window.requestAnimationFrame(() => {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleHome() {
    setPage("home");
    scrollTop();
  }

  function handleOpenMonsters() {
    setPage("monsters");
    window.requestAnimationFrame(() => {
      document.getElementById("monster-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleOpenMascots() {
    setPage("mascots");
    window.requestAnimationFrame(() => {
      document.getElementById("mascots")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleOpenReviews() {
    setPage("reviews");
    window.requestAnimationFrame(() => {
      document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleBackToCollection() {
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
              <BrandIntro onOpenReviews={handleOpenReviews} />
              <OfficialChannels onOpenMonsters={handleOpenMonsters} onOpenMascots={handleOpenMascots} />
              <FeaturesSection />
            </>
          ) : page === "monsters" ? (
            <>
              <FeaturedMonster
                onBackToCollection={handleBackToCollection}
                onBackToHome={handleHome}
              />
              <QuickShop />
              <MonsterColors />
              <FeaturesSection />
            </>
          ) : page === "reviews" ? (
            <>
              <ReviewsPage onBackToHome={handleHome} />
              <FeaturesSection />
            </>
          ) : (
            <>
              <MascotsPage onBackToHome={handleHome} />
              <FeaturesSection />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
