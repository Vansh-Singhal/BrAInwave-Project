// src/components/ImpactSection/ImpactSection.js
import React from 'react';

const ImpactSection = () => {
  return (
    <section className="bg-gray-100 container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ImpactCard number="5M+" label="Visually impaired individuals in India" />
        <ImpactCard number="250K+" label="Visually impaired students" />
        <ImpactCard number="100%" label="Certified exam writers" />
      </div>
    </section>
  );
};

const ImpactCard = ({ number, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-4xl font-bold text-indigo-500 mb-2">{number}</h3>
    <p className="text-lg">{label}</p>
  </div>
);

export default ImpactSection;
