import { useState } from "react";
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
  const [selectedMonster, setSelectedMonster] = useState<MonsterShortcut | null>(null);

  function handleSelectMonster(monster: MonsterShortcut) {
    setSelectedMonster(monster);
    window.requestAnimationFrame(() => {
      document.getElementById("monster-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="min-h-screen overflow-hidden bg-paper text-textMain transition-colors dark:bg-darkBg dark:text-darkText">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(232,240,246,0.92),transparent_34%),radial-gradient(circle_at_top_right,rgba(31,69,100,0.10),transparent_30%),linear-gradient(180deg,#f7f9fb_0%,#ffffff_52%,#f7f9fb_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(127,176,214,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(31,69,100,0.25),transparent_30%),linear-gradient(180deg,#071018_0%,#0b1722_52%,#071018_100%)]" />
      <Header />
      <main>
        <QuickShop onSelectMonster={handleSelectMonster} selectedMonsterName={selectedMonster?.name} />
        <OfficialChannels />
        {selectedMonster ? <FeaturedMonster selectedMonster={selectedMonster} /> : null}
        <MonsterColors />
        <MonsterGallery />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
