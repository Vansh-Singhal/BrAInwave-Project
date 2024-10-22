// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import ImpactSection from './components/ImpactSection/ImpactSection';
import GetStartedSection from './components/GetStartedSection/GetStartedSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ImpactSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default App;
