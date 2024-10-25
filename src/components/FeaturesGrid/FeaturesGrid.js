// src/components/FeaturesGrid.js
import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { Features } from "../../data/Features";

const features = Features;

function FeaturesGrid() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </main>
  );
}

export default FeaturesGrid;
