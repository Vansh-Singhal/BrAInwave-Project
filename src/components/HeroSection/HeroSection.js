// src/components/HeroSection/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative hero-background">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Accessible Exam Assistance for the Visually Impaired</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Connecting certified exam writers with visually impaired students for a more inclusive education system.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-800">I'm a Student</a>
          <a href="#" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-indigo-500">I'm an Exam Writer</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
