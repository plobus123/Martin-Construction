import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600 mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-stone-900">
              Ready to build?
            </h2>
            <p className="text-stone-600 mb-8 font-light text-lg">
              Don't wait. Your property's value depends on timely action. The 20% discount availability is filling up fast.
            </p>

            <div className="space-y-6 mt-12">
              <a href="tel:7205840716" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm group-hover:bg-bronze-600 transition-colors duration-300">
                  <Phone size={20} className="text-stone-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400">Call Us Now</p>
                  <p className="font-serif text-xl text-stone-900 group-hover:text-bronze-600 transition-colors">720-584-0716</p>
                </div>
              </a>

              <a href="mailto:info@martinconstructors.org" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm group-hover:bg-bronze-600 transition-colors duration-300">
                  <Mail size={20} className="text-stone-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400">Email Us</p>
                  <p className="font-serif text-xl text-stone-900 group-hover:text-bronze-600 transition-colors">info@martinconstructors.org</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl shadow-stone-200/50 relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-20 h-20 bg-bronze-50 rounded-bl-full -mr-10 -mt-10"></div>

            <h3 className="font-serif text-2xl mb-8">Book Your Appointment</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Name</label>
                  <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-bronze-600 transition-colors bg-transparent" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Phone</label>
                  <input type="tel" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-bronze-600 transition-colors bg-transparent" placeholder="(555) 555-5555" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Service Needed</label>
                <select className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-bronze-600 transition-colors bg-transparent text-stone-600">
                  <option>Insurance Restoration</option>
                  <option>General Remodeling</option>
                  <option>Structural Repairs</option>
                  <option>Commercial Construction</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
                <textarea rows={3} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-bronze-600 transition-colors bg-transparent resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full bg-stone-900 text-white py-4 mt-4 uppercase tracking-widest text-xs font-bold hover:bg-bronze-600 transition-colors duration-300 flex items-center justify-center gap-2 group">
                Submit Request
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-stone-400 text-center mt-4">
                By submitting, you agree to be contacted by Martin Construction regarding your project inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;