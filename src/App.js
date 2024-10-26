// src/App.js
import React from 'react';
import { LandingPage } from './pages/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CommunitiesPage from './pages/CommunitiesPage';
import CommunityChat from './pages/CommunityChat';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';


const App = () => {
  const router = createBrowserRouter([
    {path:"/",
      element : <><Header/><LandingPage/></>
    },
    {path:"/community",
      element : <><Header/><CommunitiesPage/></>
    },
    {path:"/blog",
      element : <><Header/><BlogPage/></>
    }
    ,
    {path:"/about",
      element : <><Header/><AboutPage/></>
    },
    {path:"/features",
      element : <><Header/><FeaturesPage/></>
    }
    ,
    {path:"/signup",
      element : <><Header/><SignUpPage/></>
    },
    {
      path:"/chat",
      element : <><Header/><CommunityChat/></>
    }

  ])
  return (
    <div className="App">
      
      <RouterProvider router = {router}/>
      <Footer/>
    </div>
  );
};

export default App;
