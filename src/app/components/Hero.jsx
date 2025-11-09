import React from 'react';
import { useMemo } from 'react';

// The HeroSection component provides a striking, two-part layout
// with a custom-designed SVG curve on the left and content on the right.
const HeroSection = () => {

  // Configuration for the appearance
  const accentColor = '#8C002B'; // Gehra Maroon/Lal rang (Deep Burgundy/Maroon)
  const lightAccentColor = '#BC003D'; // Halka Maroon/Lal rang (Lighter Red/Maroon)

  // Memoize the SVG content since it is static
  const CurvedBackground = useMemo(() => (
    // Responsive container for the curved SVG shape
    <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[65%]">
      {/* SVG ka upyog ek jatil (complex) 'blood drop' jaisa curve banane ke liye. */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient jo gehre se halke rang mein jaata hai */}
          <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: accentColor, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: lightAccentColor, stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Naya 'path' jo ek khoon ki boond (blood drop) jaisa aakaar banata hai.
          Control points ko zyada golaai (bulbous) aur tez (sharp) curve ke liye badla gaya hai.
          
          M 0 0: Shuruat (Start) top-left se
          L 0 1000: Line left edge ke neeche tak
          C 500 950, 800 600, 400 0: Cubic Bezier curve, jo neeche golaai aur upar nukila aakaar deta hai.
          Z: Path ko band karta hai.
        */}
        <path
          d="M 0 0 L 0 1000 C 500 950, 800 600, 400 0 Z"
          fill="url(#bloodGradient)"
        />
      </svg>
    </div>
  ), [accentColor, lightAccentColor]);


  return (
    <section className="relative h-screen bg-white overflow-hidden flex items-center font-inter">
      
      {/* 1. Sajaawati (Decorative) Blood Drop Aakaar (Left) */}
      {CurvedBackground}

      {/* 2. Content Container (Right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex justify-end">
          
          {/* Content block: takes up half the width on medium screens and less on large screens */}
          <div className="w-full md:w-1/2 lg:w-5/12 ml-auto ">
            
            {/* Main Heading (Mukhya Sheershak) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Save Life <br /> Donate <span className={`text-[${accentColor}]`}>Blood</span>
            </h1>

            {/* Body Text (Mukhya Vichaar) */}
            <p className="text-base text-gray-600 mb-10 max-w-md text-justify   ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              
            </p>

            {/* CTA Button */}
            <button 
              className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl 
                         transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] 
                         shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50"
            >
              Get Blood Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
