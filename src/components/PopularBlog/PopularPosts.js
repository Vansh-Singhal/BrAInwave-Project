import React from 'react';

const PopularPosts = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-indigo-500 mb-4">Popular Posts</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Top 10 Screen Readers for 2023</a></li>
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">How to Make Your Website More Accessible</a></li>
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Success Stories: Visually Impaired Entrepreneurs</a></li>
      </ul>
    </div>
  );
};

export default PopularPosts;
