function Header() {
    return (
        <header className="w-full bg-[#0c0423] text-purple-300 shadow-[0_2px_4px_rgba(0,0,0,0.3)] pb-4 z-10 relative">
            <div className="max-w-5xl w-full mx-auto flex justify-between items-center py-3 px-4 text-sm md:text-base">
                <div className="font-mono font-bold tracking-wide">
                    Amanda Longhenry
                </div>
            <nav className="space-x-4">
                <a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a>
                <a href="#timeline" className="hover:text-pink-400 transition-colors">Timeline</a>
                <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
            </nav>
            </div>
        </header>
    );
  }
  
  export default Header;