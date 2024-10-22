// src/components/GetStartedSection/GetStartedSection.js
import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="bg-indigo-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our platform to make a difference in the lives of visually impaired students or find reliable exam assistance.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-white text-indigo-500 px-6 py-3 rounded-md hover:bg-gray-100">Register as a Student</a>
          <a href="#" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-indigo-500">Apply as an Exam Writer</a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
