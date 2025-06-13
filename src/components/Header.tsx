import { useEffect, useState } from 'react';

function Header() {
    const [activeSection, setActiveSection] = useState('#');
  
    useEffect(() => {
      const updateActiveSection = () => {
        setActiveSection(window.location.hash || '#');
      };
  
      window.addEventListener('hashchange', updateActiveSection);
      updateActiveSection(); // initialize on load
  
      return () => {
        window.removeEventListener('hashchange', updateActiveSection);
      };
    }, []);
  
    const linkClass = (hash: string) =>
      `transition-colors ${
        activeSection === hash
          ? 'text-pink-100 underline underline-offset-4 decoration-pink-300 decoration-2 font-mono'
          : 'hover:text-pink-400'
      }`;
  
    return (
      <header className="w-full bg-[#0c0423] text-purple-300 shadow-[0_2px_4px_rgba(0,0,0,0.3)] pb-4 z-10 relative">
        <div className="max-w-5xl w-full mx-auto flex justify-between items-center py-3 px-4 text-sm md:text-base">
          {/* <div className="font-mono tracking-wide">
            Amanda Longhenry
          </div> */}
          <nav className="ml-auto space-x-4">
            <a href="#" className={linkClass('#')}>home</a>
            <a href="#about" className={linkClass('#about')}>about</a>
            <a href="#portfolio" className={linkClass('#portfolio')}>portfolio</a>
            <a href="#timeline" className={linkClass('#timeline')}>timeline</a>
            <a href="#contact" className={linkClass('#contact')}>contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;