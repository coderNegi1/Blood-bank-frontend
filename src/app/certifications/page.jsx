import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Globe, 
  Activity, 
  CheckCircle2, 
  Lock,
  Scale,
  Building2,
  Trash2,
  Medal
} from 'lucide-react';

const complianceData = [
  { 
    id: 1, 
    name: "NBTC Guidelines", 
    authority: "Central Govt (MoHFW)",
    desc: "National Blood Transfusion Council standards for safe blood collection.", 
    icon: <ShieldCheck />, 
    color: "bg-red-50 text-red-600" 
  },
  { 
    id: 2, 
    name: "FDA License", 
    authority: "Central & State FDA",
    desc: "Drug Controller General of India (DCGI) & FDA approved facility.", 
    icon: <Building2 />, 
    color: "bg-blue-50 text-blue-600" 
  },
  { 
    id: 3, 
    name: "e-RaktKosh", 
    authority: "National Portal",
    desc: "Real-time stock reporting and digital transparency portal.", 
    icon: <Globe />, 
    color: "bg-emerald-50 text-emerald-600" 
  },
  { 
    id: 4, 
    name: "NACO Standards", 
    authority: "Central Authority",
    desc: "Mandatory screening for HIV, Hepatitis, and other infections.", 
    icon: <Activity />, 
    color: "bg-orange-50 text-orange-600" 
  },
  { 
    id: 5, 
    name: "SBTC Registration", 
    authority: "State Government",
    desc: "State level compliance for blood bank operations.", 
    icon: <Medal />, 
    color: "bg-purple-50 text-purple-600" 
  },
  { 
    id: 6, 
    name: "Clinical Act", 
    authority: "State Health Dept.",
    desc: "Registered under Clinical Establishment (Registration & Regulation) Act.", 
    icon: <FileText />, 
    color: "bg-cyan-50 text-cyan-600" 
  },
  { 
    id: 7, 
    name: "Rules & Regulation", 
    authority: "Central Act 1940",
    desc: "Governed by Drugs and Cosmetics Act 1940 & Rules 1945.", 
    icon: <Scale />, 
    color: "bg-indigo-50 text-indigo-600" 
  },
  { 
    id: 8, 
    name: "Waste Management", 
    authority: "Central Rules",
    desc: "Eco-friendly and safe biomedical waste disposal protocols.", 
    icon: <Trash2 />, 
    color: "bg-rose-50 text-rose-600" 
  },
  { 
    id: 9, 
    name: "Quality Control", 
    authority: "Internal & External",
    desc: "Internal and external quality audits for accurate testing.", 
    icon: <Lock />, 
    color: "bg-amber-50 text-amber-600" 
  },
];

const InfoBox = ({ item }) => (
  <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
    {/* Authority Badge */}
    <div className="mb-6 px-4 py-1.5 rounded-full bg-gray-50 text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors duration-300">
      {item.authority}
    </div>

    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {React.cloneElement(item.icon, { size: 32 })}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.name}</h3>
    
    <p className="text-sm text-gray-500 leading-relaxed font-medium">
      {item.desc}
    </p>

    <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="text-[10px] font-black uppercase tracking-widest text-red-500 flex items-center gap-1 justify-center">
        Verified Compliance <CheckCircle2 size={12} />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <ShieldCheck size={14} /> Official Compliance
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
            Our <span className="text-red-600">Certifications</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Our organization strictly follows all national and state-level regulations to ensure that you and your loved ones receive safe blood.
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
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Safe Blood</span>
            </div>
            <div className="h-12 w-px bg-gray-100 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">24/7</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Compliance</span>
            </div>
            <div className="h-12 w-px bg-gray-100 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-gray-900">Live</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Inventory</span>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <footer className="mt-24 text-center">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">
            Trust through transparency
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

export default App;