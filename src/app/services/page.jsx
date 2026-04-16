import React from 'react';

import Link from 'next/link';
import {
  Droplet,
  ShieldCheck,
  Clock,
  Award,
  Heart,
  Zap,
  MapPin,
  Phone,
  Mail,
  Activity,
  ArrowRight,
  Stethoscope
} from 'lucide-react';


export const metadata = {
  title: "Blood Components Services in Dehradun | PRBC, SDP, FFP | Uttarakhand Blood Centre",
  description:
    "Uttarakhand Blood Centre Dehradun provides 24/7 blood components including Whole Blood (WHB), Packed Red Blood Cells (PRBC), Single Donor Platelets (SDP), Random Donor Platelets (RDP), Fresh Frozen Plasma (FFP) and Cryoprecipitate with advanced safety screening.",
  keywords: [
    "Blood Components Dehradun",
    "PRBC Blood Dehradun",
    "SDP Platelets Dehradun",
    "Random Donor Platelets Dehradun",
    "Fresh Frozen Plasma Dehradun",
    "Cryoprecipitate Blood Dehradun",
    "Whole Blood Services Dehradun",
    "Emergency Blood Bank Dehradun",
    "Plateletpheresis Dehradun",
    "Best Blood Bank in Dehradun"
  ],
};

const App = () => {
  // Service categories based on user request
  const services = [
    {
      id: "whole-human-blood-dehradun",
      title: "Whole Human Blood",
      shortTitle: "WHB",
      desc: "Freshly collected whole blood containing all components. Vital for massive blood loss and exchange transfusions.",
      image: "./wbc.webp",
    },
    {
      id: "prbc",
      title: "PRBC Blood Services",
      shortTitle: "PRBC",
      desc: "Packed Red Blood Cells processed with high-end technology for maximum efficacy. Available 24x7 for surgeries and trauma cases.",
      image: "../prbc.webp",
    },
    {
      id: "single-donor-platelets-sdp-dehradun",
      title: "Plateletpheresis (SDP) – 24×7",
      shortTitle: "SDP - 24X7",
      desc: "Available around the clock, Single Donor Platelet (SDP) collection helps patients fighting cancer, dengue, or undergoing major surgeries.",
      image: "../SDP.webp",
    },
    {
      id: "rdp",
      title: "Random Donor Platelets",
      shortTitle: "RDP",
      desc: "Platelets separated from individual whole blood units. Essential for maintaining platelet counts in various medical conditions.",
      image: "../RDP.webp",
    },
    {
      id: "ffp",
      title: "Fresh Frozen Plasma",
      shortTitle: "FFP",
      desc: "Rapidly frozen plasma to preserve clotting factors. Essential for liver diseases and severe bleeding management.",
      image: "../ffp.webp",
    },
    // {
    //   id: "plasmapheresis",
    //   title: "Plasmapheresis",
    //   shortTitle: "PLASMA",
    //   desc: "Advanced procedure to separate and remove plasma from blood, helping in the treatment of various autoimmune disorders.",
    //   image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    // },
    {
      id: "cryo",
      title: "Cryoprecipitate",
      shortTitle: "CRYO",
      desc: "Concentrated clotting factors derived from plasma. Crucial for treating hemophilia and specific coagulation deficiencies.",
      image: "../Cryoprecipitate.webp",
    }
  ];

  const locations = [
    "Near Rispana Bridge", "ISBT Area", "Ballupur Chowk",
    "Doon Hospital Area", "Graphic Era Hospital", "Indresh Hospital"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header / Hero */}
      <header className="relative py-16 md:py-24 bg-[#BC003D] text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Certified & Trusted Blood Centre
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Blood Components Services in Dehradun – PRBC, SDP, Platelets & Plasma
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              UK Blood Centre is Uttarakhand's leading facility for life-saving blood components.
              We operate 24x7 with state-of-the-art technology to ensure safety and quality.
            </p>
          </div>
        </div>
      </header>

      {/* Main Services Grid with the Screenshot Design */}
      <main className="   max-w-7xl mx-auto px-6 py-20 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 uppercase tracking-tight">Our Blood Components</h2>
          <div className="w-20 h-1.5 bg-[#BC003D] mx-auto"></div>
        </div>

        <div className=" relative grid md:grid-cols-2 lg:grid-cols-3 gap-10 group:">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">

              {/* 1. Image Section - SEO Optimized Alt Tags */}
              <Link href={`/services/${service.id}`} className="relative h-64 overflow-hidden block">
                <img
                  src={service.image}
                  // Updated Alt Tag for SEO & Geotagging
                  alt={`${service.title} in Dehradun - Uttarakhand Blood Centre ${service.shortTitle} Services`}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-110 transition-transform duration-500"
                />
                {/* Red Overlay */}
                <div className="absolute inset-0 bg-red-600/60 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>

                {/* Vertical Text */}
                <div className="absolute left-4 bottom-4 top-4 flex items-end">
                  <span className="text-white text-2xl font-bold uppercase tracking-[0.2em] transform -rotate-180 [writing-mode:vertical-lr] opacity-90 drop-shadow-md">
                    {service.shortTitle.split(' ')[0]}
                  </span>
                </div>
              </Link>
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">

                {/* 2. Heading - Now Clickable */}
                <Link href={`/services/${service.id}`}>
                  <h3 className="text-2xl font-bold text-[#1e1b4b] mb-4 leading-tight hover:text-[#BC003D] transition-colors cursor-pointer">
                    {service.title}
                  </h3>
                </Link>

                <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* 3. Footer Action (Read More) */}
                <Link href={`/services/${service.id}`}>
                  <div className="flex items-center gap-4 cursor-pointer group/btn">
                    <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center text-white group-hover/btn:bg-[#BC003D] transition-colors">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <span className="text-slate-500 font-bold underline underline-offset-4 decoration-slate-300 group-hover/btn:text-[#BC003D] group-hover/btn:decoration-[#BC003D] transition-all">
                      Read More
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Info Bar */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Clock className="w-8 h-8 text-[#BC003D]" />, title: "24/7 Availability", sub: "Emergency Response" },
              { icon: <Award className="w-8 h-8 text-[#BC003D]" />, title: "Quality Certified", sub: "National Policy Standards" },
              { icon: <ShieldCheck className="w-8 h-8 text-[#BC003D]" />, title: "Safe Screening", sub: "Advanced Testing Lab" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="p-4 bg-red-50 rounded-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">{item.title}</h4>
                  <p className="text-slate-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact   Uttarakhand Blood Centre</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <span className="text-xl">+91-9084311316, +91-7456909619</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-500" />
                  <span className="text-xl text-slate-300">ukbloodcentre@gmail.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 mt-1" />
                  <span className="text-lg text-slate-300">Serving Rispana, ISBT, Ballupur & all major Dehradun areas.</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 w-full">
              <p className="text-[14px] text-white/80 italic">
                "We ensure timely availability of high-quality blood components to save lives when it's most critical."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;