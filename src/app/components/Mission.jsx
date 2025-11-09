
"use client";
import React, { useState } from "react";
import Image from "next/image";

/**
 * MissionSection Component (Next.js + Tailwind CSS Version)
 * A modern, responsive section for a Blood Bank website — includes mission text,
 * smooth accordion animation, and visuals (ideal for Pinterest images).
 */
export default function MissionSection() {
  const [showValues, setShowValues] = useState(false);
  const toggleValues = () => setShowValues(!showValues);

  const valuesData = [
    {
      title: "Compassion",
      description:
        "We treat every individual—donor or patient—with empathy, dignity, and respect. Each drop collected reflects our commitment to humanity.",
      image: "/images/values/compassion.jpg",
    },
    {
      title: "Safety & Quality",
      description:
        "We follow world-class safety and quality protocols — from donor screening to laboratory testing and final delivery.",
      image: "/images/values/safety.jpg",
    },
    {
      title: "Community Engagement",
      description:
        "We engage communities through education, donation drives, and awareness programs to inspire regular voluntary blood donation.",
      image: "/images/values/community.jpg",
    },
    {
      title: "Preparedness",
      description:
        "With real-time inventory systems and 24/7 readiness, we ensure reliable blood supply even in emergencies and disasters.",
      image: "/images/values/preparedness.jpg",
    },
    {
      title: "Innovation & Technology",
      description:
        "We leverage digital tools and smart logistics to enhance donor experience, efficiency, and transparency.",
      image: "/images/values/innovation.jpg",
    },
    {
      title: "Integrity & Transparency",
      description:
        "We operate with full honesty, accountability, and ethical conduct — ensuring trust at every level.",
      image: "/images/values/integrity.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-900 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#BC003D]  mb-6">
            Our Mission
          </h2>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            We serve as the lifeline of our community, ensuring a safe, reliable, and compassionate supply of blood for every patient in need. Our mission extends beyond collection — it’s about connecting humanity, promoting awareness, and saving lives through integrity and dedication.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={toggleValues}
            aria-expanded={showValues}
            aria-controls="values-accordion"
            className="inline-flex items-center px-8 py-3 rounded-full bg-[#BC003D] hover:bg-[#8C002B] text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Our Core Values
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 ml-3 transition-transform duration-300 ${showValues ? 'rotate-90' : 'rotate-0'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Accordion Section */}
        <div
          id="values-accordion"
          className={`transition-all duration-700 ease-in-out overflow-hidden ${showValues ? 'max-h-[4000px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-[#BC003D] dark:border-[#8C002B] transition duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-[#BC003D] dark:text-red-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
