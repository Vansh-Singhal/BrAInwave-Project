import React from "react";
import Carousel from "../components/FeaturesCarousel/Carousel";
import FeaturesGrid from "../components/FeaturesGrid/FeaturesGrid";

function FeaturesPage() {
  return (
    <div className="bg-gray-100 font-sans">
      <Carousel />
      <FeaturesGrid />
    </div>
  );
}

export default FeaturesPage;
