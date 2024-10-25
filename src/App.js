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
      element : <><Header/><about/></>
    },
    {path:"/features",
      element : <><Header/><FeaturesPage/></>
    }
    // ,
    // {path:"/contact",
    //   element : <contact/>
    // },
    // {path:"/signup",
    //   element : <signup/>
    // }
  ])
  return (
    <div className="App">
      
      <RouterProvider router = {router}/>
      {/* <CommunityChat/> */}
      <Footer/>
    </div>
  );
};

export default App;
