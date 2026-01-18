"use client"
import { useState, useEffect, useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight, HeartHandshake, Syringe, MapPin, TrendingUp } from 'lucide-react';
import Link from 'next/link'; // Next.js Link use kiya hai

const slidesData = [
  {
    title: (<>The Gift of Life: Your <span className="text-red-600 font-black">Blood Donation</span></>),
    subtitle: 'Every drop is a new life. Join our mission to keep Uttarakhand safe and healthy.',
    buttonText: 'Donate Now',
    image: 'blood-drop.png',
    icon: HeartHandshake,
  },
  {
    title: (<><span className="text-red-600 font-black">Ready</span> for Emergencies</>),
    subtitle: 'We ensure safe and timely blood availability for every critical and emergency situation.',
    buttonText: 'Request Blood',
    image: 'ready-for-Emergencies.jpg',
    icon: Syringe,
  },
  {
    title: (<>Be a <span className="text-red-600 font-black">Hero</span>: Find a Camp</>),
    subtitle: 'Locate your nearest blood donation camp and help save a life in your community today.',
    buttonText: 'Find Nearest Camp',
    image: 'donate-blood.jpg',
    icon: MapPin,
  },
  {
    title: (<>Uttarakhand's <span className="text-red-600 font-black">Lifeline</span></>),
    subtitle: 'See the big difference your generosity makes in surgery, treatment, and patient recovery.',
    buttonText: 'View Our Impact',
    image: 'give-blood.jpg',
    icon: TrendingUp,
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const Slide = memo(({ slide, isActive }) => {
  // Desktop animations
  const contentClasses = isActive
    ? 'opacity-100 translate-y-0 md:translate-x-0 transition-all duration-1000 ease-out delay-300'
    : 'opacity-0 translate-y-10 md:-translate-x-20 transition-all duration-1000';

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row overflow-hidden">

      {/* MOBILE & DESKTOP BACKGROUND IMAGE 
         Mobile pe ye pura background cover karegi. 
         Desktop pe sirf right side (45%) cover karegi.
      */}
      <div className="absolute inset-0 md:relative md:w-[45%] md:order-2 overflow-hidden">
        <img
          src={slide.image}
          alt="hero-bg"
          className={`w-full h-full object-cover transition-transform duration-[5000ms] ${isActive ? 'scale-110' : 'scale-100'
            }`}
          onError={(e) => { e.target.src = 'https://placehold.co/1200x800?text=Blood+Donation'; }}
        />
        {/* Mobile Overlay: Text readability ke liye black gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent md:hidden" />
      </div>

      {/* CONTENT AREA
         Mobile: Absolute positioned, text white for contrast.
         Desktop: Relative, white/gray background.
      */}
      <div className="relative z-20 w-full h-full md:h-auto md:w-[55%] flex items-center justify-center md:justify-start bg-transparent md:bg-gradient-to-r md:from-white md:to-gray-50 p-6 md:p-20 md:order-1">
        <div className={`max-w-2xl text-center md:text-left ${contentClasses}`}>
          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-red-600 md:bg-red-100 text-white md:text-red-600 text-xs md:text-sm font-bold mb-6 tracking-widest uppercase">
            Emergency Response
          </div>

          {/* Title - Mobile pe text white kiya hai taaki image pe dikhe */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white md:text-gray-900 mb-6">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-2xl font-medium mb-10 text-gray-200 md:text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            {slide.subtitle}
          </p>

          {/* Button */}
          <Link href="/contact" className="inline-block">
            <button className="group relative bg-red-600 text-white px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold rounded-xl overflow-hidden transition-all hover:bg-red-700 hover:shadow-2xl active:scale-95">
              <span className="relative z-10">{slide.buttonText}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
});

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100vh] md:h-[90vh] overflow-hidden bg-white">
      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
        >
          <Slide slide={slide} isActive={index === currentIndex} />
        </div>
      ))}



      {/* Modern Dashed Indicators */}
      <div className="absolute bottom-14 left-12 flex items-end gap-3 z-30">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group flex flex-col items-center gap-2"
          >
            <span className={`text-xs font-bold transition-all ${index === currentIndex ? 'text-red-600 opacity-100' : 'opacity-0'}`}>
              0{index + 1}
            </span>
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                  ? 'w-16 bg-red-600'
                  : 'w-8 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;