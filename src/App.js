// src/App.js
import React from 'react';
import { LandingPage } from './pages/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CommunitiesPage from './pages/CommunitiesPage';
import CommunityChat from './pages/CommunityChat';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const App = () => {
  const router = createBrowserRouter([
    {path:"/",
      element : <LandingPage/>
    },
    {path:"/community",
      element : <CommunitiesPage/>
    }
    // ,
    // {Path:"/blog",
    //   element : <blog/>
    // },
    // {Path:"/about",
    //   element : <about/>
    // },
    // {Path:"/features",
    //   element : <features/>
    // },
    // {Path:"/contact",
    //   element : <contact/>
    // },
    // {Path:"/signup",
    //   element : <signup/>
    // }
  ])
  return (
    <div className="App">
      <Header/>
      <RouterProvider router = {router}/>
      {/* <LandingPage/> */}
      {/* <CommunityChat/> */}
      {/* <CommunitiesPage/>/ */}
      <Footer/>
    </div>
  );
};

export default App;
