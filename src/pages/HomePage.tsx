import { HeroSection } from "../components/sections/HeroSection";
import { ModernApproachSection } from "../components/sections/ModernApproachSection";
import { PortfolioGridSection } from "../components/sections/PortfolioGridSection";
import { SoftCinemaSection } from "../components/sections/SoftCinemaSection";
import { ContactCTASection } from "../components/sections/ContactCTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ModernApproachSection />
      <PortfolioGridSection />
      <SoftCinemaSection />
      <ContactCTASection />
    </>
  );
}
