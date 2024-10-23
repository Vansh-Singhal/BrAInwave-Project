// src/App.js
import React from 'react';
import { LandingPage } from './pages/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CommunitiesPage from './pages/CommunitiesPage';
import CommunityChat from './pages/CommunityChat';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      {/* <CommunityChat/>
      <CommunitiesPage/> */}
      <Footer/>
    </div>
  );
};

export default App;
