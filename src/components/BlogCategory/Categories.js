import React from 'react';

const Categories = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-indigo-500 mb-4">Categories</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Assistive Technology</a></li>
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Education</a></li>
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Employment</a></li>
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Accessibility</a></li>
        <li><a href="#" className="text-gray-700 hover:text-indigo-500">Personal Stories</a></li>
      </ul>
    </div>
  );
};

export default Categories;
