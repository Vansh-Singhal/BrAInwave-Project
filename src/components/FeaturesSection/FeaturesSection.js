// src/components/FeaturesSection/FeaturesSection.js
import React from "react";
import { features } from "./data";

const FeaturesSection = () => {
  let items = features.map((val, i) => {
    return (
      <FeatureCard
        icon={val.icon}
        title={val.title}
        description={val.description}
        key={i}
      />
    );
  });

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Each feature card */}
          {items}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-indigo-500 mx-auto mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
    </svg>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

export default FeaturesSection;
