
import React from 'react';
import Logo from './Logo';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  showBackgroundLogo?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = "", 
  showBackgroundLogo = true 
}) => {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 relative overflow-hidden ${className}`}>
      {showBackgroundLogo && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.03] select-none">
          <Logo className="w-[80vw] max-w-[1200px] text-black" />
        </div>
      )}
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
          <div className="md:w-1/4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 sticky top-24">
              {title}
            </h2>
          </div>
          <div className="md:w-3/4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
