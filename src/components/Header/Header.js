// src/components/Header/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-500">ExamAssist</a>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-500">Community</a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">Blog</a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">About</a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">Features</a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">Contact</a>
          <a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-800">Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
