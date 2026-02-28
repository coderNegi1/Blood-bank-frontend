import React from 'react';
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
  ChevronRight,
  Stethoscope
} from 'lucide-react';

const App = () => {
  // SEO Metadata Simulation
  const meta = {
    title: "Blood Bank Services in Dehradun | UK Blood Centre",
    description: "24x7 advanced blood bank in Dehradun providing PRBC, SDP Platelets, FFP, and Pediatric Red Cells. High-quality blood component laboratory services.",
  };

  const services = [
    {
      title: "PRBC Blood Services",
      desc: "Packed Red Blood Cells processed with high-end technology for maximum efficacy. Available 24x7 for surgeries and trauma cases.",
      icon: <Droplet className="w-8 h-8 text-red-600" />,
      color: "bg-red-50"
    },
    {
      title: "Pediatric Red Cells",
      desc: "Specialized small-volume red cell units specifically prepared for neonatal and pediatric transfusions to prevent waste.",
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      color: "bg-pink-50"
    },
    {
      title: "SDP & RDP Platelets",
      desc: "Single Donor Platelets (SDP) and Random Donor Platelets (RDP) available for Dengue and Cancer patients with critical counts.",
      icon: <Activity className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50"
    },
    {
      title: "Fresh Frozen Plasma",
      desc: "Rapidly frozen plasma to preserve clotting factors. Essential for liver diseases and severe bleeding management.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Plasmapheresis",
      desc: "Advanced procedure to separate and remove plasma from blood, helping in the treatment of various autoimmune disorders.",
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "PRP Preparation",
      desc: "Platelet-Rich Plasma preparation for therapeutic and aesthetic use, processed in our certified sterile laboratory.",
      icon: <Stethoscope className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50"
    }
  ];

  const locations = [
    "Near Rispana Bridge", "ISBT Area", "Ballupur Chowk", 
    "Doon Hospital Area", "Graphic Era Hospital", "Indresh Hospital"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Header / Hero */}
      <header className="relative py-16 md:py-24 bg-[#BC003D] text-white overflow-hidden mt-16 md_mt-1">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Certified & Trusted Blood centre
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Professional Blood centre <br /> Services in Dehradun
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              UK Blood Centre is Uttarakhand's leading facility for life-saving blood components. 
              We operate 24x7 with state-of-the-art technology to ensure safety, 
              quality, and rapid availability when every second counts.
            </p>
           
          </div>
        </div>
      </header>

      {/* Stats/Features Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", sub: "Emergency Response" },
            { icon: <Award className="w-6 h-6" />, title: "Quality Certified", sub: "National Policy Standards" },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "Safe Screening", sub: "Advanced Testing Lab" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="p-3 bg-red-50 text-[#BC003D] rounded-xl font-bold uppercase tracking-wider">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Services Grid */}
      <main className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Specialized Components</h2>
          <div className="w-20 h-1 bg-[#BC003D] mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From critical care platelets to specialized pediatric units, our advanced lab 
            is equipped to handle all your blood component requirements in Dehradun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-red-500 bg-white hover:border-red-200 hover:shadow-2xl transition-all duration-300">
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              {/* <button className="inline-flex items-center text-[#BC003D] font-semibold text-sm hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </button> */}
            </div>
          ))}
        </div>
      </main>

      {/* Advanced Lab Section */}
      <section className="bg-slate-50 py-4 px-6 mb-4 hidden md:block">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Advanced Blood Component Centre</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our Dehradun facility houses a high-tech Blood Component Lab. We utilize automated 
              separation techniques to ensure purity and high yield for every unit of PRBC, 
              FFP, and Platelets produced.
            </p>
            <div className="space-y-4">
              {["Automated Component Separation", "Cold Chain Logistics Management", "Immunohematology Screening"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#BC003D] rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#BC003D] w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden flex items-center justify-center text-white text-3xl font-bold p-10 text-center border-8 border-white shadow-2xl">
              <div className="flex flex-col items-center">
                <Activity className="w-16 h-16 mb-4 opacity-50" />
                <span>Modern Laboratory</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-[200px]">
              <p className="text-3xl font-bold text-[#BC003D]">100%</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">Safety Protocol Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="max-w-7xl mx-auto px-6 mb-2">
        <div className="bg-red-100 rounded-[3rem] p-10 md:p-16 text-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Serving All Major Areas in Dehradun</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc, i) => (
              <span key={i} className="px-6 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" /> {loc}
              </span>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-10">
            <div className="flex items-center md:gap-4  md:justify-end">
              <Phone className="w-8 h-8 hidden md:block text-red-500" />
              <div className="">
                <p className="text-sm  text-slate-400 text-center">Emergency Helpline</p>
                <p className="text-[5vw] md:text-xl  font-bold">+91-9084311316</p>
                <p className="text-[5vw] md:text-xl  font-bold">+91-7456909619</p>
                <p className="text-[5vw] md:text-xl  font-bold">0135-2974312</p>
              </div>
            </div>
            <div className="flex items-center md:gap-4  md:justify-end">
              <Mail className="w-8 h-8 hidden md:block text-red-500" />
              <div className="">
                <p className="text-sm text-slate-400">Email Support</p>
                <p className="text-[4vw] md:text-xl font-bold">ukbloodcentre@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;