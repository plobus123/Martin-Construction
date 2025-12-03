import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556912173-3db9963f6fec?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Kitchen Renovation" 
          className="w-full h-full object-cover opacity-100 scale-105 animate-[fadeIn_2s_ease-out]"
        />
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {/* Darker Gradient fade for readability on bright kitchen image */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white">
        <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-6 text-stone-300 animate-fade-in-up">
          Refined General Contracting
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Reimagine <br />
          <span className="italic text-bronze-500">Your Space</span>
        </h1>
        
        <p className="max-w-xl mx-auto font-sans text-stone-200 text-lg md:text-xl font-light mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          From complex structural repairs to luxury remodeling, we execute your vision with precision, transparency, and master craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#offer" 
            className="px-8 py-4 bg-white text-stone-950 font-sans text-xs uppercase tracking-widest font-bold hover:bg-bronze-500 hover:text-white transition-all duration-300 w-full sm:w-auto min-w-[200px]"
          >
            Claim 20% Offer
          </a>
          <a 
            href="#problem" 
            className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-sans text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-stone-950 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
          >
            Our Expertise
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;