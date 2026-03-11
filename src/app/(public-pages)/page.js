import HeroSection from "@/app/components/Hero";
import BloodWorkflowPage from "@/app/components/BloodWorkflow";
import MissionSection from "@/app/components/Mission";
// import WelcomePopup from "../components/popup";
import FaQAccordian from "../components/FaQAccordion";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blood Bank in Dehradun | Uttarakhand Blood Centre ",
  description: "Uttarakhand Blood Centre in Dehradun provides PRBC, Platelets, FFP, and emergency blood services 24x7. Donate blood and save lives near Rispana Bridge, Haridwar Road, serving hospitals across Dehradun.",
  keywords: [
    "Best blood bank in Dehradun",
    "24x7 Blood Bank in Dehradun",
    "Emergency Blood Bank Dehradun",
    "Blood Centre in Dehradun",
    "Blood Bank Uttarakhand",
    "Blood Bank near me",
    "Blood Donation Centre Dehradun",
    "Voluntary Blood Donation Dehradun",
    "Donate Blood in Dehradun",
    "Blood Donor Registration Dehradun",
    "Safe Blood Donation Centre Uttarakhand"
  ],
  canonical: "https://www.ukbloodcentre.com",
  openGraph: {
    title: "Best Blood Bank in Dehradun | 24x7 Emergency Blood Centre Uttarakhand",
    description: "Leading blood bank in Dehradun, Uttarakhand offering PRBC, Platelets, FFP, and 24x7 emergency services. Donate blood, save lives near Rispana Bridge, Haridwar Road.",
    url: "https://www.ukbloodcentre.com",
    images: [
      {
        url: "https://www.ukbloodcentre.com/uttarakhand-blood-centre-logo.jpg",
        width: 800,
        height: 600,
        alt: "Uttarakhand Blood Centre Dehradun"
      }
    ]
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Dehradun, Uttarakhand, India"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "UK Blood Centre",
  "description": "Best blood bank in Dehradun offering 24x7 emergency services, PRBC, Platelets, FFP, and voluntary blood donation.",
  "url": "https://www.ukbloodcentre.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@ukbloodcentre.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dehradun",
    "addressRegion": "Uttarakhand",
    "addressCountry": "India"
  },
  "service": [
    {
      "@type": "Service",
      "name": "PRBC Blood Services",
      "description": "Packed Red Blood Cells available 24x7 in Dehradun."
    },
    {
      "@type": "Service",
      "name": "Platelets Availability",
      "description": "Random Donor Platelets and SDP Platelets for emergencies."
    },
    {
      "@type": "Service",
      "name": "Fresh Frozen Plasma",
      "description": "FFP for clotting and medical needs in Uttarakhand."
    }
  ]
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UK Blood Centre",
  "description": "24x7 blood bank near Rispana Bridge, Haridwar Road, ISBT, Ballupur Chowk, Doon Hospital.",
  "url": "https://www.ukbloodcentre.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@ukbloodcentre.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dehradun",
    "addressRegion": "Uttarakhand",
    "addressCountry": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3165", // placeholder
    "longitude": "78.0322"
  },
  "areaServed": "Dehradun, Uttarakhand"
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <main className="bg-gray-50 text-gray-900">

        <section id="hero" className="mt-16">
          <HeroSection />
        </section>

        <section id="mission" className="mt-16">
          <MissionSection />
        </section>

        <section id="workflow" className="mt-16">
          <BloodWorkflowPage />
        </section>


        {/* New SEO Optimized Sections */}
        <section className=" px-4 md:px-8 6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl py-2 font-bold text-center text-[#BC003D] mb-12">
              Blood Components We Provide in Dehradun
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { id: "prbc", title: "PRBC Blood", img: "/prbc.png", desc: "Packed Red Blood Cells for oxygen transport, available at our blood bank in Dehradun." },
                { id: "sdp", title: "SDP Platelets", img: "/SDP.png", desc: "Single Donor Platelets (SDP) for critical patients with low platelet counts in Uttarakhand." },
                { id: "rdp", title: "Random Platelets", img: "/RDP.png", desc: "Random Donor Platelets (RDP) essential for maintaining platelet counts in various conditions." },
                { id: "ffp", title: "Fresh Frozen Plasma", img: "/ffp.png", desc: "FFP for clotting factors and volume expansion in emergencies near Indresh Hospital." },
                { id: "cryo", title: "Cryoprecipitate", img: "/Cryoprecipitate.png", desc: "Concentrated clotting factors for treating hemophilia and coagulation deficiencies." },
                { id: "whb", title: "Whole Human Blood", img: "/wbc.png", desc: "Freshly collected whole blood containing all essential components for massive blood loss." }
              ].map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
                  {/* Service Image Section */}
                  <Link href={`/services/${item.id}`} className="block relative h-40 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </Link>

                  {/* Text Content */}
                  <div className="p-6">
                    <Link href={`/services/${item.id}`}>
                      <h3 className="text-xl font-bold mb-3 text-slate-800 hover:text-[#BC003D] transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Link with Arrow */}
                    <Link
                      href={`/services/${item.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#BC003D] hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="FaQAccordian" className="mt-16">
          <FaQAccordian />
        </section>


        {/* <section id="collaborators" className="mt-16">
          <Collaborators />
        </section> */}




        {/* <section className="mt-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#BC003D] mb-8">Our Locations Near You in Dehradun</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Bank near Rispana Bridge</h3>
                <p className="text-gray-600">Conveniently located for residents and visitors near Rispana Bridge, Dehradun.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Bank on Haridwar Road</h3>
                <p className="text-gray-600">Easy access from Haridwar Road for blood donation and emergency services.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Bank near ISBT</h3>
                <p className="text-gray-600">Close to ISBT for travelers needing blood bank services in Uttarakhand.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Bank near Ballupur Chowk</h3>
                <p className="text-gray-600">Serving the Ballupur Chowk area with reliable blood components.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Bank near Doon Hospital</h3>
                <p className="text-gray-600">Partnering with Doon Hospital for timely blood supplies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Bank near Graphic Era Hospital</h3>
                <p className="text-gray-600">Supporting Graphic Era Hospital with emergency blood bank services.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/about-us" className="text-[#BC003D] hover:underline text-lg font-semibold">
                Learn more about our blood bank in Uttarakhand
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
