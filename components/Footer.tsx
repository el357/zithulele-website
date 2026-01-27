
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 text-white py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Contact Us.</h2>
            <div className="space-y-4">
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                For partnerships or program enquiries:
              </p>
              <div className="pt-4">
                <a href="mailto:admin@iksdigitalcommons.com" className="group flex items-center gap-3 transition-colors">
                  <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 002 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-neutral-500 pb-1">
                    admin@iksdigitalcommons.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end md:text-right md:pt-28 h-full justify-between">
             <div className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 space-y-3 mb-12">
                <p>Based in South Africa</p>
                <p>Community-Led Impact</p>
             </div>
             <div className="mt-auto">
               <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-[0.2em] leading-relaxed">
                 &copy; {new Date().getFullYear()} Zithulele Development Collective. <br /> 
                 <span className="font-light">Advancing Community-Centred Flourishing</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
