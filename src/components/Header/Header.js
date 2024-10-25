// src/components/Header/Header.js
import React from 'react';
import { LandingPage } from '../../pages/LandingPage';
import CommunitiesPage from '../../pages/CommunitiesPage';
import { Link } from 'react-router-dom';
// import { Image } from '@material-ui/core';

const Header = () => {
  
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-500 flex">
          <div className="logodiv"></div> EXAM ASSIST
        </Link>
        <div className="space-x-4">
          <Link to="/community" className="text-gray-600 hover:text-indigo-500">Community</Link>
          <Link to="/blog" className="text-gray-600 hover:text-indigo-500">Blog</Link>
          <Link to="/about" className="text-gray-600 hover:text-indigo-500">About</Link>
          <Link to="/features" className="text-gray-600 hover:text-indigo-500">Features</Link>
          <Link to="/signup" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-800">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
