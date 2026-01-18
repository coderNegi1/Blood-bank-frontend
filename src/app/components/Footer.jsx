import React from "react";
import DeveloperSection from './DeveloperSection';

// Mocking Lucide icons since we are in a single-file environment
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const API_CONFIG = {
  MY_BLOOD_BANK_NAME: 'Uttarakhand Blood Centre',
};

export default function App() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Identity & Motto */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
                {/* Fallback for the logo provided in the request */}
                <img 
                  src="/ukbloodcentreLogo.jpg" 
                  alt="UBC Logo" 
                  className="object-contain"
                  onError={(e) => { e.target.src = "https://placehold.co/100x100/e11d48/white?text=UBC"; }}
                />
             </div>
             <div>
               <h3 className="text-white font-bold text-lg leading-tight">Uttarakhand<br/>Blood Centre</h3>
             </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Dedicated to providing safe and accessible blood supply across Uttarakhand. 
            A unit of Parvatiya Manav Utthan Samiti.
          </p>
          <div className="flex gap-4">
            {/* Social Media placeholders */}
            {['facebook', 'twitter', 'instagram'].map((social) => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-600 transition-colors text-white">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current opacity-50 rounded-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-6 border-b border-rose-600/30 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {['Home', 'About Us', 'Blood Availability', 'Donation Process', 'Events', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-rose-500 transition-colors flex items-center gap-2">
                  <span className="text-rose-600">›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-6 border-b border-rose-600/30 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-rose-500 mt-1"><MapPinIcon /></span>
                <span>
                  Ground & First Floor, 100, Haridwar Road, 
                  Near Rispana Bridge, Dehradun, <br/>
                  Uttarakhand, India - 248001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-rose-500"><PhoneIcon /></span>
                <div>
                  <a href="tel:+919084311316" className="hover:text-white block">+91 90843 11316</a>
                  <a href="tel:01352974312" className="hover:text-white block text-xs opacity-70">0135-2974312</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 mt-1"><MailIcon /></span>
                <div className="break-all">
                  <a href="mailto:ukbloodcentre@gmail.com" className="hover:text-white block">ukbloodcentre@gmail.com</a>
                  <p className="text-[11px] mt-1 text-slate-500 italic">Society: parvatiyamanavutthansamiti@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Preview Area */}
          <div className="w-full h-48 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 group relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-rose-500 mb-2 opacity-50 group-hover:opacity-100 transition-opacity"><MapPinIcon /></span>
              <p className="text-xs font-medium mb-2">Location Coordinates</p>
              <code className="text-[10px] bg-slate-900 px-2 py-1 rounded text-rose-400">30.296681, 78.054880</code>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=30.296681,78.054880" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 text-xs bg-rose-600 text-white px-3 py-1.5 rounded hover:bg-rose-700 transition-all"
              >
                Open in Maps
              </a>
            </div>
            {/* Visual background pattern representing a map */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-400">{API_CONFIG.MY_BLOOD_BANK_NAME}</span>. All rights reserved.
          </p>
          <div className="flex items-center ">
            <span className="hidden md:inline text-rose-900">•</span>
            <DeveloperSection />
          </div>
        </div>
      </div>
    </footer>
  );
}