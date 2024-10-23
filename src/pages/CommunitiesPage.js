import React from 'react';
import HeroSection from '../components/CommunitiesHero/HeroSection';
import CommunitiesList from '../components/CommunitiesList/CommunitiesList';
import CreateCommunity from '../components/CreateCommunity/CreateCommunity';

const CommunitiesPage = () => {
  return (
    <main className="flex-grow">
      <HeroSection/>
      <section id="communities" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Communities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <CommunitiesList />
          <CreateCommunity />
        </div>
      </section>
    </main>
  );
};

export default CommunitiesPage;
