
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase">
          Zithulele<span className="font-light">DC</span>
        </a>
        <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest">
          <a href="#who-we-are" className="hover:text-neutral-500 transition-colors">Who We Are</a>
          <a href="#what-we-do" className="hover:text-neutral-500 transition-colors">What We Do</a>
          <a href="#how-we-work" className="hover:text-neutral-500 transition-colors">How We Work</a>
          <a href="#vision" className="hover:text-neutral-500 transition-colors">Vision</a>
          <a href="#founder" className="hover:text-neutral-500 transition-colors">Founder</a>
          <a href="#contact" className="hover:text-neutral-500 transition-colors">Contact</a>
        </div>
        <div className="md:hidden flex space-x-4">
          <a href="#what-we-do" className="text-[10px] font-bold uppercase tracking-widest underline">What We Do</a>
          <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
