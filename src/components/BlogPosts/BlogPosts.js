import React from 'react';

const BlogPosts = () => {
  return (
    <>
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/placeholder.svg?height=200&width=400" alt="A person using a computer with a screen reader" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">New AI-Powered Screen Reader Revolutionizes Web Accessibility</h2>
          <p className="mb-4">A groundbreaking AI-powered screen reader has been developed, promising to significantly improve web accessibility for visually impaired users...</p>
          <a href="#" className="text-indigo-500 hover:underline" aria-label="Read more about the new AI-powered screen reader">Read More</a>
        </div>
      </article>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/placeholder.svg?height=200&width=400" alt="A close-up of a braille smartwatch on a person's wrist" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">Innovative Braille Smartwatch Hits the Market</h2>
          <p className="mb-4">A new braille smartwatch has been released, offering visually impaired individuals a tactile way to access digital information...</p>
          <a href="#" className="text-indigo-500 hover:underline" aria-label="Read more about the innovative braille smartwatch">Read More</a>
        </div>
      </article>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/placeholder.svg?height=200&width=400" alt="A person in a wheelchair working on a laptop" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">Remote Work Opens New Opportunities for Disabled Writers</h2>
          <p className="mb-4">The shift towards remote work has created new opportunities for disabled writers...</p>
          <a href="#" className="text-indigo-500 hover:underline" aria-label="Read more about remote work opportunities for disabled writers">Read More</a>
        </div>
      </article>
    </>
  );
};

export default BlogPosts;
