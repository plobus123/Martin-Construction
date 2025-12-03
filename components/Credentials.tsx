import React from 'react';
import { Award, ShieldCheck, HardHat, Droplets } from 'lucide-react';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Our Qualifications</span>
          <h2 className="font-serif text-4xl mt-4 text-stone-900">Verified Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 border border-stone-200">
              <Award className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="font-serif text-2xl mb-3">A-Class Licensed</h3>
            <p className="text-stone-500 text-sm max-w-xs mx-auto">
              Fully licensed and authorized for major commercial and residential structural projects. We operate at the highest level of regulation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 border border-stone-200">
              <Droplets className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="font-serif text-2xl mb-3">Restoration Experts</h3>
            <p className="text-stone-500 text-sm max-w-xs mx-auto">
              Specialized certification in Fire & Flood restoration. We don't just repair; we restore your property to its pre-loss glory.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 border border-stone-200">
              <ShieldCheck className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="font-serif text-2xl mb-3">Fully Insured</h3>
            <p className="text-stone-500 text-sm max-w-xs mx-auto">
              Comprehensive liability coverage for your peace of mind. Your property and our team are protected at every step.
            </p>
          </div>

        </div>

        {/* Decorative divider */}
        <div className="w-full h-px bg-stone-200 mt-24"></div>
      </div>
    </section>
  );
};

export default Credentials;