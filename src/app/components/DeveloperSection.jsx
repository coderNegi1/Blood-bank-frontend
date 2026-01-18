import React, { useState } from 'react';
import { Terminal, X, Mail, Phone, Github, Linkedin } from 'lucide-react';

const devData = {
  name: "PRASHANT NEGI",
  role: "Full Stack Dev",
  email: "prashantnegi123331@gmail.com",
  phone: "+91-9105851039",
  github: "https://github.com/coderNegi1",
  linkedin: "https://www.linkedin.com/in/prashant-negi-a090ba275/",
  portfolio: "prashantnegi", 
  bio: "Building easy-to-use and reliable websites that grow smoothly with your business.",
  avatar: "/prashant-negi.jpg"
};

const DeveloperSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 'relative' aur 'inline-block' add kiya taaki modal iske upar sahi se baithe
    <div className="relative z-[9999] font-mono inline-block">
      
      {/* TERMINAL WINDOW - Ismein 'absolute bottom-full mb-2' add kiya hai */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 md:right-0 right-[-65px]     w-80 bg-[#0a0a0a] border border-white/10 rounded-md shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase font-bold">sys.admin_info</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          <div className="p-5 text-[12px] leading-tight space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-blue-400">const <span className="text-yellow-400">developer</span> = {'{'}</p>
                <div className="pl-4 space-y-1 mt-1">
                  <p><span className="text-gray-500">name:</span> <span className="text-green-400">"{devData.name}"</span>,</p>
                  <p><span className="text-gray-500">role:</span> <span className="text-green-400">"{devData.role}"</span>,</p>
                  <p><span className="text-gray-500">bio:</span> <span className="text-gray-400">"{devData.bio}"</span></p>
                </div>
                <p className="text-blue-400 mt-1">{'}'};</p>
              </div>
              <div className="w-12 h-12 rounded border border-white/10 p-1 bg-[#1a1a1a] flex-shrink-0">
                <img src={devData.avatar} alt="profile" className="w-full h-full object-cover rounded-sm opacity-90" />
              </div>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-white/5">
              <a href={`mailto:${devData.email}`} className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                <Mail size={14} className="text-blue-500/70" />
                <span className="truncate">{devData.email}</span>
              </a>
              <a href={`tel:${devData.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group">
                <Phone size={14} className="text-green-500/70" />
                <span>{devData.phone}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
              <a href={devData.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white flex items-center gap-2.5 transition-colors py-1">
                <Github size={14} /> <span className="text-[11px]">Github</span>
              </a>
              <a href={devData.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 flex items-center gap-2.5 transition-colors py-1">
                <Linkedin size={14} /> <span className="text-[11px]">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TRIGGER BUTTON - Isko hamesha visible rakha hai taaki band bhi kiya ja sake */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 px-5 hover:border-blue-500 transition-all group shadow-xl hover:scale-105 active:scale-95 duration-200"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 group-hover:ring-2 ring-blue-500/20 transition-all">
          <img
            src={devData.avatar}
            alt="dev"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
          />
        </div>
        <div className="flex items-center gap-2.5">
          <Terminal size={14} className="text-gray-200 animate-pulse" />
          <span className="text-[13px] font-medium text-gray-800 tracking-wide">
            {isOpen ? "./close-Dev" : "./Devloper"}
          </span>
        </div>
      </button>
    </div>
  );
};

export default DeveloperSection;