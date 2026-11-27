
import { DevelopersSection } from "./components/landing/developers-section";
import { EvaSection } from "./components/landing/eva-section";
import { EcosystemSection } from "./components/landing/ecosystem-section";
import { FeaturesSection } from "./components/landing/features-section";
import { LaserHero } from "./components/landing/laser-hero";
import { ProductStrip } from "./components/landing/product-strip";
import { SiteFooter } from "./components/landing/site-footer";
import { SiteHeader } from "./components/landing/site-header";

export default function App() {
  return (
    <div className="min-h-full bg-canvas font-sans text-ink antialiased">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido-principal" tabIndex={-1}>
        <LaserHero />
        <ProductStrip />
        <EcosystemSection />
        <FeaturesSection />
        <EvaSection />
        <DevelopersSection />
      </main>
      <SiteFooter />
    </div>
  );
}
