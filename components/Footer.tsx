import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white py-16 border-t border-stone-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <div className="text-center md:text-left">
             <div className="flex flex-col items-center md:items-start leading-none mb-6">
                <span className="font-serif text-2xl font-bold tracking-tight">MARTIN</span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-stone-400 mt-1">Construction</span>
              </div>
              <p className="text-stone-500 text-sm max-w-xs">
                A Class Licensed Contractors specializing in high-end restoration and remodeling.
              </p>
          </div>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-400">
            <a href="#problem" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right">
             <p className="text-stone-500 text-xs mb-2">© {new Date().getFullYear()} Martin Construction.</p>
             <p className="text-stone-600 text-[10px]">Designed for Excellence.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;