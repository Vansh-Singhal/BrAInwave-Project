// src/components/FeatureCard.js
import React from "react";

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default FeatureCard;
  