import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ImpactSection from "../components/ImpactSection/ImpactSection";
import GetStartedSection from "../components/GetStartedSection/GetStartedSection";

export function LandingPage() {
  return (
    <div className="LandingPage">
      <HeroSection />
      <FeaturesSection />
      <ImpactSection />
      <GetStartedSection />
    </div>
  );
}
