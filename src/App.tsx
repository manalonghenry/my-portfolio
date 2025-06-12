// import Test from "./components/testComponent";
import Intro from './components/Intro'
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React, {useEffect, useState} from 'react';

function App() {
  
  return (
    <div className="bg-[#100c1c] text-white min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
    </div>
    
  );
}

export default App
