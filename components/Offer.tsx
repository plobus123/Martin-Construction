import React from 'react';
import { Timer } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-20 bg-bronze-600 text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
        
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-2 rounded-full mb-8 bg-white/10 backdrop-blur-sm">
          <Timer size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Limited Time Offer</span>
        </div>

        <h2 className="font-serif text-5xl md:text-7xl mb-6">
          20% OFF
        </h2>
        <p className="font-sans text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          All projects booked through the end of the year receive an exclusive 20% discount. 
        </p>
        
        <p className="text-sm uppercase tracking-widest opacity-90 mb-10">
          Act Now — Offer Expires Soon
        </p>

        <a 
          href="#contact" 
          className="inline-block bg-white text-stone-900 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Secure Your Rate
        </a>
      </div>
    </section>
  );
};

export default Offer;