import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out h-25 flex items-center ${
        scrolled 
          ? 'bg-brand-900/90 backdrop-blur-xl shadow-sm h-20! ' 
          : 'bg-transparent md:pt-20'
      }`}
    >
      {/* 3-Column Grid Container */}
      <div className="w-full max-w-[1800px] mx-auto px-10 grid grid-cols-3 items-center">
        
        {/* Left Column: Placeholder/Empty when not scrolled */}
        <div className="flex justify-start">
          {scrolled && (
            <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-primary hover:opacity-60 transition-opacity">
              {/* Menu */}
            </button>
          )}
        </div>

        {/* Center Column: The Estate */}
        <div className="flex justify-center">
          <span className={`transition-all duration-700 font-serif italic tracking-[0.1em] text-surface font-bold ${
            scrolled ? 'text-xl opacity-100' : 'text-2xl opacity-80'
          }`}>
            The Estate
          </span>
        </div>

        {/* Right Column: NavLinks (place-content-end) */}
        <div className="flex justify-end items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {['Rooms', 'Experience'].map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-border md:text-[14px]t text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-surface-muted transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/30 transition-all hover:scale-105">
            Book Now
          </button>

          {/* Mobile Trigger */}
          <button
            className="md:hidden text-text-primary ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-0 bg-surface/98 backdrop-blur-2xl z-[90] md:hidden flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
         <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-text-primary uppercase tracking-widest text-xs">Close</button>
        {['Rooms', 'Dining', 'Spa', 'Experience'].map((item) => (
          <a key={item} href="#" className="text-3xl font-serif italic text-text-primary">{item}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;