"use client"
import { useState, useEffect, useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight, HeartHandshake, Syringe, MapPin, TrendingUp } from 'lucide-react';

// Define the data for all slides
const slidesData = [
  {
    title: (
      <>
        The Gift of Life: Your <span className="text-white font-black">Blood Donation</span>
      </>
    ),
    subtitle: 'Every drop is a new life. Join our mission to keep Uttarakhand safe and healthy.',
    buttonText: 'Donate Now',
    image: 'blood-drop.png',
    icon: HeartHandshake,
  },
  {
    title: (
      <>
        <span className="text-black font-black">Ready</span> for Emergencies
      </>
    ),
    subtitle: 'We ensure safe and timely blood availability for every critical and emergency situation.',
    buttonText: 'Request Blood',
    image: 'ready-for-Emergencies.jpg',
    icon: Syringe,
  },
  {
    title: (
      <>
        Be a <span className="text-black font-black">Hero</span>: Find a Camp
      </>
    ),
    subtitle: 'Locate your nearest blood donation camp and help save a life in your community today.',
    buttonText: 'Find Nearest Camp',
    image: 'donate-blood.jpg',
    icon: MapPin,
  },
  {
    title: (
      <>
        Uttarakhand's <span className="text-black font-black">Lifeline</span>
      </>
    ),
    subtitle: 'See the big difference your generosity makes in surgery, treatment, and patient recovery.',
    buttonText: 'View Our Impact',
    image: 'give-blood.jpg',
    icon: TrendingUp,
  },
];

// Configuration for the carousel
const AUTO_SLIDE_INTERVAL = 3000; 

// Slide Component with Entrance Animation
const Slide = memo(({ slide, isActive }) => {
  const Icon = slide.icon;

  // Smooth animation for content entrance
  const contentClasses = isActive
    ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out delay-300'
    : 'opacity-0 -translate-y-8 transition-none';

  return (
    // Main container for the slide
    <div
      className="absolute inset-0 w-full h-full flex transition-opacity duration-1000"
    >

      {/* MOBILE BACKGROUND IMAGE (Visible only below 'md') */}
      <div className="md:hidden absolute inset-0">
        <img
          src={slide.image}
          alt={`Background Image for ${slide.buttonText}`}
          className="w-full h-full object-cover opacity-30" // Reduced opacity
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x800/cccccc/333333?text=Image+Missing'; }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 1. Content Area (W-full on mobile, 60% on desktop) */}
      {/* bg-transparent on mobile, bg-white on desktop for split view */}
      <div className="w-full md:w-[60%] flex items-center justify-center bg-transparent md:bg-white p-1 relative z-10">
        <div className={`max-w-xl ${contentClasses} p-2 md:p-0 rounded-lg md:rounded-none `}>

          {/* Icon and Title: White on mobile, Red-900 on desktop */}
          <div className="flex items-center mb-4 text-white md:text-red-900">
            
            {/* Title with increased size and font weight for dramatic effect */}
            <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">
              {slide.title}
            </h2>
          </div>

          {/* Subtitle: White on mobile, Red-900 on desktop */}
          <p className="text-lg md:text-xl font-light mb-10 mt-6 text-white md:text-red-900">
            {slide.subtitle}
          </p>

          <button
            className="bg-red-600  text-white px-10 py-4 text-lg font-bold rounded-full 
                       transition duration-300 transform  
                       shadow-xl shadow-black/40 active:scale-[0.98]"
          >
            {slide.buttonText}
          </button>
        </div>
      </div>

      {/* 2. Image Area for Desktop (40% Width on Large Screens, Hidden on Mobile) */}
      <div className="hidden md:block md:w-[40%] bg-white relative">
        <img
          src={slide.image}
          alt={`Slide Image for ${slide.buttonText}`}
          className="w-full h-full object-cover"
          // Placeholder Fallback
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x800/cccccc/333333?text=Image+Missing'; }}
        />
      </div>
    </div>
  );
});

// Main Carousel Component
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1));
  };

  // Auto-slide effect using useEffect
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);

    // Cleanup interval on component unmount
    return () => clearInterval(slideTimer);
  }, []);

  // Memoize slide elements for performance (keeping the previous rendering logic)
  const slides = useMemo(() =>
    slidesData.map((slide, index) => (
      <Slide
        key={index}
        slide={slide}
        isActive={index === currentIndex}
      />
    )), [currentIndex]
  );


  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-white">

      {/* All Slides Container with opacity transition */}
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Render the memoized Slide component */}
          {slides[index]}
        </div>
      ))}

      {/* 3. Navigation Arrows (Tir) */}
      <div className="absolute inset-0 flex items-center justify-between z-20  pointer-events-none">

        {/* Left Arrow - positioned over the dark content section for contrast */}
        <button
          onClick={prevSlide}
          className="p-3 m-4 rounded-full bg-red-300 hover:bg-red-500 transition duration-300 text-white pointer-events-auto shadow-lg ml-8"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow - positioned over the image section (or right side of content) */}
        <button
          onClick={nextSlide}
          className="p-3 m-4 rounded-full bg-red-300 hover:bg-red-500 transition duration-300 text-white pointer-events-auto shadow-lg mr-8"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 4. Indicator Dots (Bindu) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 pointer-events-auto ${index === currentIndex
              ? 'bg-red-400 scale-125 shadow-lg shadow-black/50'
              : 'bg-red-300 hover:bg-white/90'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


export default HeroCarousel;