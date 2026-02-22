"use client"
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const DonationProcessPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center p-6">
      <div className="text-center">
        {/* Maximum simplicity: Just the requested message */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
          This Page Available Soon
        </h1>
        
        {/* Professional sub-message in English */}
        <p className="mt-4 text-slate-500 font-medium text-sm md:text-base">
          Our team is working diligently to update this section. It will be live shortly.
        </p>
        
        {/* Minimal accent line */}
        <div className="mt-8 flex justify-center gap-1">
          <div className="w-12 h-1 bg-red-600 rounded-full" />
          <div className="w-3 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Simple Go Back Link */}
        <div className="mt-12">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-red-600 transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationProcessPage;