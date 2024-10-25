// src/components/Carousel.js
import React, { useState } from "react";
import { Features } from "../../data/Features";

const carouselItems = Features;

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section id="hero-carousel" className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="carousel relative text-center">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : "hidden"}`}>
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl mb-8">{item.description}</p>
              {/* <button className="bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-800 transition duration-300">
                Discover Features
              </button> */}
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <button onClick={prevSlide} className="mx-2 px-4 py-2 bg-gray-300 rounded-full" aria-label="Previous slide">
              &lt;
            </button>
            <button onClick={nextSlide} className="mx-2 px-4 py-2 bg-gray-300 rounded-full" aria-label="Next slide">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
