import Navbar from '@/components/layout/Header'
import Hero from './components/Hero'
import Room from './components/Room'

import Commodities from './components/Commodities'
import About from './components/About'
import Service from './components/Service'



function Index() {
  return (
    <div className="font-sans text-brand-900 overflow-x-hidden">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 2s infinite; }
        
        @keyframes kenBurns {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.02); }
        }
        .animate-ken-burns { animation: kenBurns 20s ease-in-out infinite; }
        
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23735848' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.5rem center;
          background-size: 1.5em;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <About/>
      {/* <FeaturesSection */}
      <Commodities/>
      <Room />
      <Service/>
    </div>
  )
}

export default Index
