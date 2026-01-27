
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-32 px-6 relative overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] select-none">
        <Logo className="w-[120vw] max-w-[2000px] text-black" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            Zithulele <br /> 
            Development <br /> 
            Collective.
          </h1>
          <div className="flex items-center justify-center border-[3px] border-black rounded-full p-6 md:p-10 shrink-0 aspect-square">
            <Logo className="h-16 md:h-24 lg:h-32 text-black" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed max-w-xl">
            Designing Integrated Solutions for Human and Ecological Flourishing.
          </p>
          <div className="space-y-6">
            <p className="text-neutral-500 text-sm leading-relaxed">
              Advancing community-centred development across education, youth and women empowerment, creative learning, environmental stewardship, and social wellbeing in South Africa, translating knowledge into practical, locally grounded programmes.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl shadow-black/5">
                Work with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
