import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#problem' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Projects', href: '#projects' }, // Maps to social proof/gallery
    { name: 'Offer', href: '#offer' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-stone-200 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo Area */}
        <a href="#" className="group relative z-50">
          <div className="flex flex-col items-start leading-none">
            <span className={`font-serif text-2xl lg:text-3xl font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-stone-900 lg:text-white'}`}>
              MARTIN
            </span>
            <span className={`text-[10px] tracking-[0.25em] uppercase font-sans font-medium mt-1 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-bronze-600' : 'text-stone-800 lg:text-stone-200'}`}>
              Construction
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium relative group py-2 ${
                isScrolled ? 'text-stone-800' : 'text-stone-200 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-bronze-600' : 'bg-white'}`}></span>
            </a>
          ))}
          
          <a 
            href="#contact" 
            className={`px-6 py-3 text-xs uppercase tracking-widest font-bold border transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-stone-900 lg:text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-stone-900 hover:text-bronze-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-bronze-600 transition-colors"
          >
            Book Appointment
          </a>
          <a href="tel:7205840716" className="flex items-center gap-2 text-stone-500 mt-8">
            <Phone size={16} />
            <span className="text-sm tracking-wide">720-584-0716</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;