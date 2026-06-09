import { FinalCta } from "./components/FinalCta";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MainLinks } from "./components/MainLinks";
import { OfficialChannels } from "./components/OfficialChannels";
import { TrustSection } from "./components/TrustSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-textMain">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(232,240,246,0.92),transparent_34%),radial-gradient(circle_at_top_right,rgba(31,69,100,0.10),transparent_30%),linear-gradient(180deg,#f7f9fb_0%,#ffffff_52%,#f7f9fb_100%)]" />
      <Header />
      <main>
        <Hero />
        <MainLinks />
        <FeaturedProducts />
        <OfficialChannels />
        <TrustSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
