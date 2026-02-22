"use client"
import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  Zap,
  Droplet,
  Microscope,
  FileCheck
} from 'lucide-react';

const complianceData = [
  { 
    id: 1, 
    name: "Blood Bank Registration", 
    desc: "Officially registered and licensed under State FDA and Drug Control Authority.", 
    icon: <FileCheck />, 
    color: "bg-blue-50 text-blue-600" 
  },
  { 
    id: 2, 
    name: "Fire NOC", 
    desc: "Approved by Fire Department ensuring fire safety compliance and emergency preparedness.", 
    icon: <ShieldCheck />, 
    color: "bg-orange-50 text-orange-600" 
  },
  { 
    id: 3, 
    name: "Biomedical Waste Authorization", 
    desc: "Authorized for safe disposal of biomedical waste as per Biomedical Waste Management Rules.", 
    icon: <Microscope />, 
    color: "bg-purple-50 text-purple-600" 
  },
  { 
    id: 4, 
    name: "Pollution Control NOC", 
    desc: "Certified by State Pollution Control Board ensuring environmental safety standards.", 
    icon: <Globe />, 
    color: "bg-cyan-50 text-cyan-600" 
  },
  { 
    id: 5, 
    name: "ETP Plant & Water NOC", 
    desc: "Equipped with Effluent Treatment Plant and approved water safety certification.", 
    icon: <Droplet />, 
    color: "bg-indigo-50 text-indigo-600" 
  },
  { 
    id: 6, 
    name: "Electric Safety NOC", 
    desc: "Electrical systems approved for safety, backup, and uninterrupted power supply.", 
    icon: <Zap />, 
    color: "bg-yellow-50 text-yellow-600" 
  }
];

const InfoBox = ({ item }) => (
  <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col items-center text-center">
    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {React.cloneElement(item.icon, { size: 32 })}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.name}</h3>
    <p className="text-sm text-gray-500 leading-relaxed font-medium">
      {item.desc}
    </p>
    <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="text-[10px] font-black uppercase tracking-widest text-red-500 flex items-center gap-1 justify-center">
        Verified Compliance <CheckCircle2 size={12} />
      </div>
    </div>
  </div>
);

const DonationProcessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <ShieldCheck size={14} /> Official Registrations
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
            Trust & <span className="text-red-600">Compliance</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Amari sanstha darek sarkari ane swasthya vibhag na niyamavalo nu chustpane palan kare chhe, jethi tamne hamesha surakshit seva mali rahe.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {complianceData.map((item) => (
            <InfoBox key={item.id} item={item} />
          ))}
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white px-10 py-8 rounded-[3rem] border border-gray-100 shadow-xl flex flex-wrap items-center justify-center gap-8 md:gap-20">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">100%</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Legally Licensed</span>
            </div>
            <div className="h-12 w-px bg-gray-100 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">24/7</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Safety Protocols</span>
            </div>
            <div className="h-12 w-px bg-gray-100 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">ISO</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Quality Standards</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">
            Official Regulatory Framework
          </p>
          <div className="mt-6 flex justify-center gap-3">
             <div className="w-2 h-2 rounded-full bg-red-100" />
             <div className="w-2 h-2 rounded-full bg-red-300" />
             <div className="w-2 h-2 rounded-full bg-red-600" />
          </div>
        </footer>

      </div>
    </div>
  );
};

export default DonationProcessPage;