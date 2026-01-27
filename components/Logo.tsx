
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <svg 
      viewBox="0 0 240 80" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Z */}
      <path d="M20 20H70L20 65H70" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter"/>
      
      {/* Mirror D (The curve) */}
      <path d="M100 20C125 20 145 30 145 42.5C145 55 125 65 100 65" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/>
      <path d="M100 20H95M100 65H95" stroke="currentColor" strokeWidth="6"/>

      {/* C */}
      <path d="M220 20C195 20 175 30 175 42.5C175 55 195 65 220 65" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/>
      <path d="M220 20H225M220 65H225" stroke="currentColor" strokeWidth="6"/>
    </svg>
  );
};

export default Logo;
