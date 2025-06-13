// import Test from "./components/testComponent";
import Header from './components/Header';
import Intro from './components/Intro'
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React, {useEffect, useState} from 'react';

function App() {
  
  return (
    <div className="bg-[#0f0529] text-white min-h-screen font-inter">
      <Header />
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
