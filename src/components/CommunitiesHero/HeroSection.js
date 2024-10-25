import React from 'react';

const HeroSection = () => {
  const handleExploreClick = () => {
    document.getElementById('communities').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="background-community-hero text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover and Create Communities</h1>
        <p className="text-xl mb-8">Join existing communities or start your own to connect with like-minded learners</p>
        <button
          onClick={handleExploreClick}
          className="bg-transparent border border-white text-white-100 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 hover:text-indigo-500 transition duration-300"
        >
          Explore Communities
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
