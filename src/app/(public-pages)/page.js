import HeroSection from "@/app/components/Hero";
import Collaborators from "@/app/components/Collaborators";
import BloodWorkflowPage from "@/app/components/BloodWorkflow";
import MissionSection from "@/app/components/Mission";
import WelcomePopup from "../components/popup";

export const metadata = {
  title: "Best Blood Bank in Dehradun | 24x7 Emergency Blood Centre Uttarakhand",
  description: "Leading blood bank in Dehradun, Uttarakhand offering PRBC, Platelets, FFP, and 24x7 emergency services. Donate blood, save lives near Rispana Bridge, Haridwar Road.",
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
        url: "/ukbloodcentreLogo.jpg",
        width: 800,
        height: 600,
        alt: "UK Blood Centre Dehradun"
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
        <WelcomePopup />
        <section id="hero" className="mt-16">
          <HeroSection />
        </section>

        <section id="mission" className="mt-16">
          <MissionSection />
        </section>

        <section id="workflow" className="mt-16">
          <BloodWorkflowPage />
        </section>

        <section id="collaborators" className="mt-16">
          <Collaborators />
        </section>

        {/* New SEO Optimized Sections */}
        <section className="mt-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#BC003D] mb-8">Blood Components We Provide in Dehradun</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">PRBC Blood</h3>
                <p className="text-gray-600">Packed Red Blood Cells for oxygen transport, available at our blood bank in Dehradun.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Platelets Availability</h3>
                <p className="text-gray-600">Random Donor Platelets and SDP Platelets for patients with low platelet counts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Fresh Frozen Plasma</h3>
                <p className="text-gray-600">FFP for clotting factors and volume expansion in emergencies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Pediatric Red Cells</h3>
                <p className="text-gray-600">Specialized red cells for pediatric patients in Uttarakhand hospitals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Plasmapheresis</h3>
                <p className="text-gray-600">Advanced plasma collection and PRP Preparation Centre near Haridwar Road.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blood Components Centre</h3>
                <p className="text-gray-600">Our Advanced Blood Component Lab ensures safe, quality components.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-[#BC003D] text-white py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">24x7 Emergency Blood Bank in Dehradun</h2>
            <p className="text-lg mb-6">
              As the best blood bank in Dehradun, we operate round-the-clock to ensure blood availability for emergencies. Whether near Rispana Bridge or ISBT, our services are always ready to save lives in Uttarakhand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donation-process" className="bg-white text-[#BC003D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Donate Blood in Dehradun
              </a>
              <a href="/contact" className="bg-white text-[#BC003D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Blood Bank
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 md:px-8 lg:px-16">
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
        </section>
      </main>
    </>
  );
}
