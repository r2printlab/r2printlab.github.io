import { FinalCta } from "./components/FinalCta";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MainLinks } from "./components/MainLinks";
import { TrustSection } from "./components/TrustSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_32%),linear-gradient(180deg,#fffaf3_0%,#fff7ed_58%,#ffffff_100%)]" />
      <Header />
      <main>
        <Hero />
        <MainLinks />
        <FeaturedProducts />
        <TrustSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
