  export const metadata = {
    title:
      "Blood Bank Near Rispana Bridge, ISBT & Haridwar Road Dehradun | PRBC & Platelets Available",
    description:
      "Looking for a blood bank near Rispana Bridge, ISBT, Ballupur Chowk, Doon Hospital or Graphic Era Hospital in Dehradun? We provide PRBC Blood, SDP Platelets, Random Donor Platelets, Fresh Frozen Plasma and Pediatric Red Cells with 24/7 emergency support.",
  };
  import React from 'react';
  import {
    MapPin,
    Phone,
    Mail,
    Smartphone,
    ExternalLink,
    ShieldCheck,
    Clock,
    Heart,
    AlertCircle,
    Activity
  } from 'lucide-react';

  const ContactUs = () => {
    // Using the exact coordinates provided: 30.296681, 78.054880
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3445.346387877232!2d78.0526913!3d30.296681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE3JzQ4LjEiTiA3OMKwMDMnMTcuNiJF!5e0!3m2!1sen!2sin!4v1705581335000!5m2!1sen!2sin";

    return (
      <div className="min-h-screen bg-[#fcfcfd] flex flex-col items-center justify-center p-4 md:p-8 mt-28 md:mt-8">
        {/* Top Banner for Urgent Requirements */}

        <div className="max-w-7xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

          {/* Contact Information Panel */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 space-y-10">




            {/* Details Grid */}
            <div className="grid gap-8">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">Visit Our Facility</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    First Floor, Uttarakhand Blood Centre,<br />
                    100, Haridwar Road, Near Rispana Bridge,<br />
                    Dehradun, Uttarakhand, India - 248001
                  </p>
                </div>
              </div>

              {/* Mobile & Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
                  <Smartphone size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">Contact Helplines</h3>
                  <div className="flex flex-col gap-1 text-slate-700 font-bold">
                    <a href="tel:+919084311316" className="hover:text-red-600 transition-colors flex items-center gap-2">
                      <span className="text-slate-400 text-xs font-normal uppercase tracking-widest w-12">Mobile</span> +91-9084311316
                    </a>
                    <a href="tel:+917456909619" className="hover:text-red-600 transition-colors flex items-center gap-2">
                      <span className="text-slate-400 text-xs font-normal uppercase tracking-widest w-12">Mobile</span> +91-7456909619
                    </a>
                    <a href="tel:01352974312" className="hover:text-red-600 transition-colors flex items-center gap-2">
                      <span className="text-slate-400 text-xs font-normal uppercase tracking-widest w-12">Office</span> 0135-2974312
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">Email Correspondence</h3>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:ukbloodcentre@gmail.com" className="text-slate-700 font-bold hover:text-red-600 transition-colors break-all">
                      ukbloodcentre@gmail.com
                    </a>
                    <p className="text-[11px] text-slate-400 break-all leading-tight">
                      Society: parvatiyamanavutthansamiti@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Info */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Clock className="text-green-600" size={24} />
                  {/* Chhota green dot jo hamesha active hone ka signal deta hai */}
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    Donation Hours:
                  </p>
                  <p className="text-[11px] font-black text-yellow-400 tracking-wider uppercase mt-0.5">
                    24/7 Available
                  </p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-200"></div>
              <div className="text-right">
                <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Open Now</p>
              </div>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="lg:w-1/2 min-h-[500px] bg-slate-100 relative group/map">
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] brightness-[1.05] group-hover/map:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay info */}
            <div className="absolute top-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-2xl inline-block max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Live Location</p>
                </div>
                <p className="text-sm font-bold text-slate-800 leading-snug">
                  Located near Rispana Bridge, accessible via main Haridwar Road.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-mono font-bold text-slate-400">GPS: 30.296681, 78.054880</p>
                </div>
              </div>
            </div>

            {/* Directions Link Overlay */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=30.296681,78.054880"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-red-600 transition-all shadow-xl shadow-black/20"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </div>
        </div>


      </div>
    );
  };

  export default ContactUs;