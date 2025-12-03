import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 border-2 border-stone-900 rounded-full flex items-center justify-center mb-6">
            <span className="font-serif text-2xl font-bold">1</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Our Ironclad Guarantee</h2>
        <p className="text-stone-600 max-w-2xl text-lg font-light leading-relaxed">
            We stand behind our craftsmanship. Every Martin Construction project comes with a comprehensive <strong className="text-stone-900 font-medium">1-Year Warranty</strong> and a Money Back Satisfaction Guarantee. If it's not right, we make it right.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;