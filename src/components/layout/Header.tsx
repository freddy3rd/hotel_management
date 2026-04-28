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
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out h-25 flex items-center ${
          scrolled 
            ? 'bg-brand-900/90 backdrop-blur-xl shadow-sm h-20!' 
            : 'bg-transparent md:pt-20'
        }`}
      >
        <div className="w-full max-w-450 mx-auto md:px-10 px-4 grid grid-cols-3 items-center">
          {/* Left Column */}
          <div className="flex justify-start">
            {scrolled && (
              <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-primary hover:opacity-60 transition-opacity">
                Menu
              </button>
            )}
          </div>

          {/* Center Column */}
          <div className="flex justify-center">
            <span className={`transition-all duration-700 font-serif italic tracking-widest text-surface font-bold ${
              scrolled ? 'text-md md:text-xl opacity-100' : 'text-xl md:text-2xl opacity-80 text-text-primary md:text-surface' 
            }`}>
              The Estate
            </span>
          </div>

          {/* Right Column */}
          <div className="flex justify-end items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {['Rooms', 'Experience'].map((item) => (
                <a key={item} href="#" className="group relative text-border text-[14px] font-bold uppercase tracking-[0.2em]">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-surface-muted transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-2 md:px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/30 transition-all hover:scale-105 whitespace-nowrap">
              Book Now
            </button>

            <button
              className="md:hidden text-surface ml-4"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU: Moved outside of <nav> */}
      <div className={`fixed inset-0 bg-brand-900 backdrop-blur-2xl z-[200] md:hidden flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
         <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-10 right-10 text-white uppercase tracking-widest text-xs"
          >
            Close
          </button>
        {['Rooms', 'Dining', 'Spa', 'Experience'].map((item) => (
          <a 
            key={item} 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-serif italic text-white"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;