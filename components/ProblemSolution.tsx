import React from 'react';
import { Home, ShieldAlert, Ruler, Building2, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-bronze-600" />,
      title: "Insurance Restoration",
      description: "Navigating complex claims for fire, flood, or storm damage requires expertise that most don't have."
    },
    {
      icon: <Ruler className="w-8 h-8 text-bronze-600" />,
      title: "Structural Repairs",
      description: "Foundational issues and load-bearing modifications demand absolute precision and safety."
    },
    {
      icon: <Home className="w-8 h-8 text-bronze-600" />,
      title: "General Remodeling",
      description: "Maximizing space without moving is an art. Don't settle for cookie-cutter renovations."
    },
    {
      icon: <Building2 className="w-8 h-8 text-bronze-600" />,
      title: "Commercial Construction",
      description: "Delays in commercial projects cost more than just money—they cost reputation."
    }
  ];

  return (
    <section id="problem" className="py-24 lg:py-32 bg-stone-50 text-stone-900">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="lg:w-1/2">
            <span className="block text-xs font-bold uppercase tracking-widest text-bronze-600 mb-4">The Challenge</span>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight">
              Complex Projects <br />
              <span className="italic text-stone-500">Require</span> Expert Hands
            </h2>
          </div>
          <div className="lg:w-1/3 text-stone-600 leading-relaxed font-light">
            <p>
              Whether you are facing an insurance nightmare or seeking to transform your property, the stakes are high. You need more than a builder—you need a partner who understands the intricacies of restoration and luxury design.
            </p>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-32">
          {problems.map((item, index) => (
            <div key={index} className="bg-white p-10 lg:p-12 hover:bg-stone-50 transition-colors duration-300 group">
              <div className="mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-xl mb-4">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Solution */}
        <div className="relative bg-stone-900 text-white p-8 md:p-16 lg:p-24 overflow-hidden">
          {/* Decorative image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1600&q=80" 
              alt="Construction Detail" 
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="relative z-10 lg:w-1/2">
            <span className="block text-xs font-bold uppercase tracking-widest text-bronze-500 mb-6">The Solution</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Martin Construction</h2>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              We are the answer to your property's most demanding needs. As your dedicated general contractors, we blend technical mastery with aesthetic vision to deliver results that endure.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Comprehensive Project Management', 'Seamless Insurance Coordination', 'Uncompromising Quality Control'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-bronze-500" />
                  <span className="text-sm uppercase tracking-wide font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-bronze-500 hover:border-bronze-500 transition-colors">
              Start Your Project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;