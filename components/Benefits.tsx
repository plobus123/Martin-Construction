import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/5] bg-stone-300 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1581094794329-cd1096a78432?auto=format&fit=crop&w=1600&q=80" 
                alt="Construction Planning and Blueprints" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 shadow-xl max-w-xs border-l-4 border-bronze-500">
              <p className="font-serif text-xl italic text-stone-800">"Precision is the difference between good and exceptional."</p>
            </div>
          </div>

          <div className="pl-0 lg:pl-12">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600 mb-4 block">Why Choose Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight text-stone-900">
              The Martin Standard
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-stone-300">01</span>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Transparency & Budget</h4>
                  <p className="text-stone-600 font-light">
                    No hidden fees. No surprise costs. We provide detailed estimates and stick to the budget we agree upon, respecting your investment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="font-serif text-4xl text-stone-300">02</span>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Insurance Advocacy</h4>
                  <p className="text-stone-600 font-light">
                    We speak the language of adjusters. We handle the paperwork and negotiations to ensure you get the coverage you deserve.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="font-serif text-4xl text-stone-300">03</span>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Financing Options</h4>
                  <p className="text-stone-600 font-light">
                    Quality shouldn't be out of reach. We offer flexible financing plans to help you achieve your vision immediately.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;