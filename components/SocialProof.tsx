import React, { useState } from 'react';
import { Star, ZoomIn, X } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner, Denver",
      text: "Martin Construction transformed our flood-damaged basement into a luxury living space. Dealing with insurance was a nightmare until they stepped in.",
      rating: 5
    },
    {
      name: "Michael Ross",
      role: "Commercial Developer",
      text: "On time and under budget. Their transparency throughout the structural repair process was refreshing. Highly recommended for complex jobs.",
      rating: 5
    },
    {
      name: "Elena V.",
      role: "Interior Renovation",
      text: "The attention to detail is unmatched. They maximized our small layout in ways we didn't think possible. Truly an A-class team.",
      rating: 5
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="projects" className="py-24 bg-stone-900 text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Reviews Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Clients Speak</h2>
          <div className="w-20 h-1 bg-bronze-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-stone-800 p-8 md:p-10 border border-stone-700 relative">
              <div className="flex gap-1 mb-6 text-bronze-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif text-xl italic text-stone-300 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-white">{review.name}</p>
                <p className="text-xs text-stone-500 mt-1">{review.role}</p>
              </div>
              {/* Quotation mark decoration */}
              <div className="absolute top-4 right-6 text-8xl font-serif text-stone-700 opacity-20 pointer-events-none">"</div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="text-center mb-12">
            <span className="text-bronze-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Portfolio</span>
            <h3 className="font-serif text-3xl md:text-4xl">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
           {galleryImages.map((src, idx) => (
             <div 
               key={idx} 
               className="group relative h-72 md:h-80 overflow-hidden cursor-pointer bg-stone-800"
               onClick={() => setSelectedImage(src)}
             >
               <img 
                 src={src} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                 alt={`Project Showcase ${idx + 1}`} 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="text-white" size={24} />
                 </div>
               </div>
             </div>
           ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="#contact" className="inline-block border-b border-stone-600 pb-1 text-sm uppercase tracking-widest text-stone-400 hover:text-white hover:border-white transition-colors">
                View All Projects
            </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors p-2 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Project Detail" 
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default SocialProof;