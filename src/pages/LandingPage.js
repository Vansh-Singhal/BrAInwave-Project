import React from "react";
import Header from '../components/Header/Header.js';
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ImpactSection from "../components/ImpactSection/ImpactSection";
import GetStartedSection from "../components/GetStartedSection/GetStartedSection";
import Footer from "../components/Footer/Footer";

export function LandingPage() {
  return (
    <div className="LandingPage">
      <Header/>
      <HeroSection />
      <FeaturesSection />
      <ImpactSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}
