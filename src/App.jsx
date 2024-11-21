import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar";
import Paste from "./components/paste";

import ViewPaste from "./components/ViewPaste";
import Home from "./components/Home";
import { useState } from "react";
import EntrySlide from "./components/EntrySlide";



function App() {
  const [showMain,setShowMain]=useState(true);
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home/>
      </div>,
    },
    {
      path: '/pastes',
      element: <div>
        <Navbar />
        <Paste />
      </div>,
    },
    {
      path: '/view/:id',
      element: <div>
        <Navbar />
        <ViewPaste />
      </div>,
    }
  ]);
  function handleSlideComplete(){
      setShowMain(false);
  }
  return (
    <div>
      {showMain && <EntrySlide onComplete={handleSlideComplete}/>}
      {!showMain && <RouterProvider router={router} />}
     
    </div>
  )
}

export default App
