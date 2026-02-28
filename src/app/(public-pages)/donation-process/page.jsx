// === METADATA ===
const metadata = {
  title: "Donate Blood in Dehradun | Blood Donation Process & Benefits | UK Blood Centre",
  description: "Learn how to donate blood in Dehradun. Discover the blood donation process, benefits, voluntary camps, and donor registration at UK Blood Centre, Uttarakhand.",
  keywords: [
    "Donate Blood in Dehradun",
    "Blood Donation Process",
    "Voluntary Blood Donation Dehradun",
    "Blood Donation Benefits",
    "Voluntary Blood Donation Camp Dehradun",
    "Blood Donor Registration Dehradun",
    "Safe Blood Donation Centre Uttarakhand",
    "Blood Donation Centre Dehradun",
    "Blood Donation Centre near me"
  ],
  canonical: "https://www.ukbloodcentre.com/donation-process",
  openGraph: {
    title: "Donate Blood in Dehradun | Blood Donation Process & Benefits | UK Blood Centre",
    description: "Learn how to donate blood in Dehradun. Discover the blood donation process, benefits, voluntary camps, and donor registration at UK Blood Centre, Uttarakhand.",
    url: "https://www.ukbloodcentre.com/donation-process",
    images: [
      {
        url: "/ukbloodcentreLogo.jpg",
        width: 800,
        height: 600,
        alt: "Blood Donation Process Dehradun"
      }
    ]
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Dehradun, Uttarakhand, India"
  }
};

// === STRUCTURED DATA ===
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "UK Blood Centre",
  "description": "Blood donation centre in Dehradun offering voluntary blood donation camps and safe donation processes.",
  "url": "https://www.ukbloodcentre.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@ukbloodcentre.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dehradun",
    "addressRegion": "Uttarakhand",
    "addressCountry": "India"
  }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the benefits of donating blood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blood donation benefits include saving lives, improving heart health, reducing cancer risk, and free health check-ups."
      }
    },
    {
      "@type": "Question",
      "name": "How to register as a blood donor in Dehradun?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Register as a blood donor in Dehradun by visiting UK Blood Centre or joining our voluntary blood donation camps."
      }
    }
  ]
};

import { useState, useEffect } from 'react';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Head>
      {/* Rest of the page content */}
    </div>
  );
}

// === EMBEDDED DATA START ===
const donationTypes = [
  {
    id: 'whole-blood',
    name: "Whole Blood Donation",
    shortName: "Whole Blood",
    description: "Whole blood is the traditional form of donation, where approximately 450ml of blood containing all components (Red Cells, Plasma, and Platelets) is collected. It is the most flexible form of donation, as the collected unit can be transfused whole or separated into its components for different patients.",
    steps: [
      { title: "Registration & History", desc: "Complete a confidential medical history questionnaire and review with a staff member." },
      { title: "Screening & Vitals", desc: "Check vital signs (blood pressure, pulse, temperature) and a finger prick test to ensure hemoglobin levels meet the minimum requirement." },
      { title: "Donation Procedure", desc: "The blood is drawn from a single arm into a sterile collection bag. The process usually takes 8-15 minutes." },
      { title: "Duration of Process", desc: "Total time from arrival to departure is typically 45 minutes to 1 hour." },
      { title: "Post Donation Care", desc: "Rest for 10-15 minutes, have light refreshments (juice, cookies), and rehydrate." },
    ],
    eligibility: [
      "✅ Age: 18–65 years (as per national guidelines)",
      "✅ Weight: Minimum 45-50 kg",
      "✅ Interval: Every 3 months (men) / Every 4 months (women)",
      "❌ Restrictions: No recent fever, cold, flu, infection, or antibiotics (wait 72 hours to 1 month depending on condition).",
    ],
    usedFor: [
      "Emergency transfusions (where rapid resuscitation is critical)",
      "Patients undergoing major surgery or suffering from severe trauma (accident victims)",
      "Massive blood loss scenarios (e.g., obstetric hemorrhage)",
    ],
    fact: "A single whole blood donation can be separated into three components—RBCs, Platelets, and Plasma—potentially saving up to three lives.",
  },
  {
    id: 'rbcs',
    name: "Red Blood Cells (RBC) Product",
    shortName: "RBCs",
    description: "Packed Red Blood Cells are typically separated from a whole blood donation. They carry oxygen from the lungs to the rest of the body. They are the most commonly transfused component.",
    steps: [
      { title: "Source Donation", desc: "Obtained primarily from a Whole Blood Donation, which is processed in the lab." },
      { title: "Apheresis Option", desc: "Sometimes, a Double Red Cell Donation (Apheresis) is performed where a machine collects two units of RBCs while returning plasma and platelets to the donor." },
      { title: "Screening", desc: "For double red cell donation, the donor must meet higher height/weight and hemoglobin criteria." },
      { title: "Storage", desc: "Stored under refrigeration at 2°C to 6°C." },
    ],
    eligibility: [
      "✅ Age: 18+ years",
      "✅ Weight: Minimum 45-50 kg (higher for double red cell)",
      "✅ Interval: Every 3-4 months (whole blood source) or every 6 months (double red cell apheresis).",
      "❌ Restrictions: Hemoglobin must be verified high enough to safely donate (higher requirement for double red cell).",
    ],
    usedFor: [
      "Patients with severe anemia or chronic blood loss",
      "Surgical patients who lose blood during the procedure",
      "Sickle cell patients and those with other blood disorders requiring frequent transfusions.",
    ],
    fact: "RBCs must be carefully cross-matched with the recipient's blood type to prevent a life-threatening reaction.",
  },
  {
    id: 'platelets-sdp',
    name: "Platelets (SDP/Apheresis) Donation",
    shortName: "Platelets (SDP)",
    description: "Single Donor Platelets (SDP), collected via the Apheresis process, provide a higher, more concentrated dose of platelets from one donor. This reduces the patient's exposure to multiple donors, which is crucial for certain patients.",
    steps: [
      { title: "Registration & History", desc: "Same as whole blood, plus additional assessment for vein quality." },
      { title: "Screening & Vitals", desc: "Hemoglobin check, platelet count is assessed to ensure the donor can safely give platelets." },
      { title: "Apheresis Procedure", desc: "Blood is drawn from one arm, passed through a machine that spins and separates only the platelets, and the remaining blood components are returned to the donor in a continuous cycle (often through the same arm or the other arm)." },
      { title: "Duration of Process", desc: "The actual collection takes significantly longer than whole blood, typically 60 to 120 minutes." },
      { title: "Post Donation Care", desc: "Rest, rehydrate, and monitor the access site. Avoid heavy lifting for the rest of the day." },
    ],
    eligibility: [
      "✅ Age: 18–60 years",
      "✅ Weight: Minimum 50 kg (often higher due to extended procedure)",
      "✅ Interval: Can be donated more frequently—typically every 15 days, up to 24 times a year.",
      "❌ Restrictions: Must not have taken Aspirin or Aspirin-containing medications in the last 48-72 hours, as it impairs platelet function.",
    ],
    usedFor: [
      "Cancer patients undergoing chemotherapy (who suffer from thrombocytopenia)",
      "Patients with bone marrow failure or receiving transplants",
      "Trauma patients with active bleeding",
    ],
    fact: "Apheresis uses a centrifuge to separate and collect only the needed component (platelets), returning the rest of the blood safely to the donor.",
  },
  {
    id: 'platelets-rdp',
    name: "Platelets (RDP) Donation",
    shortName: "Platelets (RDP)",
    description: "Random Donor Platelets (RDP) are prepared from whole blood donations. Platelets from multiple donors are pooled together to provide the required dose for patients. It is the most common and widely available form of platelet support.",
    steps: [
      { title: "Registration & History", desc: "Donor registration and basic medical history are recorded to ensure eligibility." },
      { title: "Screening & Vitals", desc: "Hemoglobin level, blood pressure, temperature, and pulse are checked before donation." },
      { title: "Whole Blood Donation", desc: "Whole blood is collected from the donor, and later platelets are separated from it in the laboratory." },
      { title: "Duration of Process", desc: "The blood donation process usually takes 8 to 10 minutes, while the total visit may take around 30 minutes." },
      { title: "Post Donation Care", desc: "Donor is advised to rest, drink fluids, and avoid heavy physical activity for the rest of the day." },
    ],
    eligibility: [
      "✅ Age: 18–65 years",
      "✅ Weight: Minimum 50 kg",
      "✅ Interval: Whole blood donation interval is typically 3 months for males and 4 months for females.",
      "❌ Restrictions: Donor must be healthy and free from infections or major illnesses.",
    ],
    usedFor: [
      "Dengue patients with low platelet count",
      "Cancer patients undergoing chemotherapy",
      "Patients with bleeding disorders or severe infections",
    ],
    fact: "RDP platelets are obtained from whole blood and usually pooled from multiple donors to make one therapeutic dose.",
  },
  {
    id: 'plasma-donation',
    name: "Plasma Donation",
    shortName: "Plasma",
    description: "Plasma is the liquid portion of the blood, mainly composed of water, proteins, clotting factors, and antibodies. It can be collected either as part of a whole blood donation or selectively through an Apheresis procedure (Plasmapheresis).",
    steps: [
      { title: "Registration & History", desc: "Standard donor checks." },
      { title: "Screening & Vitals", desc: "Assessment of overall health; blood protein and IgG levels may be checked for repeat donors." },
      { title: "Plasmapheresis Procedure", desc: "Similar to platelet donation, the machine collects only the plasma, and the red blood cells are returned to the donor." },
      { title: "Duration of Process", desc: "Usually takes about 45 minutes to 1 hour." },
      { title: "Post Donation Care", desc: "Because only plasma is taken, donors can usually return to normal activities quickly. Maintain hydration." },
    ],
    eligibility: [
      "✅ Age: 18–60 years",
      "✅ Weight: Minimum 50 kg",
      "✅ Interval: Can be donated every 2 to 7 days, depending on the volume collected and local guidelines (often weekly).",
      "❌ Restrictions: Must be well-hydrated. Donor site will check for adequate protein levels.",
    ],
    usedFor: [
      "Burn victims (to replace lost fluid and protein)",
      "Patients with severe liver disease or clotting factor deficiencies",
      "Treatment of immune deficiencies and conditions (when fractionated into specific therapies)",
    ],
    fact: "Plasma is yellowish in color and can be stored frozen (Fresh Frozen Plasma or FFP) for up to one year.",
  },

  {
    id: 'cryoprecipitate',
    name: "Cryoprecipitate (Cryo) Product",
    shortName: "Cryoprecipitate",
    description: "Cryoprecipitate is a fraction of plasma that precipitates when Fresh Frozen Plasma (FFP) is thawed slowly at a temperature between 1°C and 6°C. It is rich in Fibrinogen (Factor I), Factor VIII, Factor XIII, and von Willebrand Factor.",
    steps: [
      { title: "Source Donation", desc: "Derived from Fresh Frozen Plasma (FFP), which comes from Whole Blood Donation." },
      { title: "Lab Processing Step 1", desc: "Fresh Frozen Plasma is stored below -18°C." },
      { title: "Lab Processing Step 2", desc: "It is slowly thawed to 1-6°C, causing the desired proteins (Cryoprecipitate) to form a 'slush' at the bottom of the bag." },
      { title: "Collection", desc: "The liquid (cryo-poor plasma) is removed, and the remaining precipitate is re-frozen." },
    ],
    eligibility: [
      "✅ Donor Eligibility: Same as Whole Blood or Plasma donor.",
      "✅ Storage: Must be stored frozen; shelf life is 1 year.",
      "❌ Restrictions: Since it is a product, it requires no special restrictions on the donor beyond standard blood donation rules.",
    ],
    usedFor: [
      "Patients with life-threatening bleeding and very low levels of Fibrinogen (e.g., in Disseminated Intravascular Coagulation - DIC).",
      "Some types of Hemophilia (though Factor VIII concentrates are now more common).",
      "Massive transfusion protocols.",
    ],
    fact: "The primary purpose of Cryoprecipitate is to rapidly replace Fibrinogen, a critical clotting protein.",
  },
  // {
  //   id: 'granulocytes',
  //   name: "Granulocytes Donation",
  //   shortName: "Granulocytes",
  //   description: "Granulocytes (a type of White Blood Cell - WBC) are specialized immune cells collected via Apheresis, similar to platelets. They are used to treat severe, life-threatening bacterial infections in immunocompromised patients who cannot produce enough of their own.",
  //   steps: [
  //     { title: "Pre-Donation Treatment", desc: "The donor receives medication (e.g., G-CSF) to temporarily increase the number of granulocytes circulating in the blood, maximizing the collection." },
  //     { title: "Apheresis Procedure", desc: "Blood is drawn, and the Apheresis machine selectively collects the granulocytes (and some red cells and plasma). A sedimenting agent is often added to improve separation." },
  //     { title: "Duration of Process", desc: "Can take up to 2-3 hours due to the complexity of collection." },
  //     { title: "Shelf Life", desc: "Must be used immediately—ideally within 24 hours—as they have an extremely short shelf life." },
  //   ],
  //   eligibility: [
  //     "✅ Age: Typically 18-60 years, excellent health.",
  //     "✅ Interval: Up to 6 times a year (must wait at least 48 hours between donations).",
  //     "❌ Restrictions: Donors must be screened and willing to receive the mobilization drug (G-CSF). Must not be pregnant.",
  //   ],
  //   usedFor: [
  //     "Severely neutropenic patients (low WBC count) with life-threatening bacterial or fungal infections that are not responding to antibiotics.",
  //     "Neonatal sepsis (in rare cases).",
  //   ],
  //   fact: "Due to the short shelf life and special pre-donation medicine, Granulocyte donations are almost always scheduled specifically for a known, critically ill patient.",
  // },
];
// === EMBEDDED DATA END ===

const AccordionItem = ({ component, isOpen, toggleAccordion }) => {
  const RedAccent = "text-[#BC003D]";
  const LightRedBG = "bg-red-50 border-l-4 border-[#BC003D]";

  const DonationProcess = ({ steps }) => (
    <div className="space-y-6 relative border-l border-gray-200 ml-3 py-4">
      <h3 className={`text-xl font-semibold mb-6 ${RedAccent}`}>Donation Process (Step-by-Step)</h3>
      {steps.map((step, index) => (
        <div key={index} className="relative pl-8">
          <div className={`absolute -left-3 top-1 w-6 h-6 rounded-full ${RedAccent} bg-white border-2 border-[#BC003D] flex items-center justify-center text-white text-xs font-bold`}>
            {index + 1}
          </div>
          <div className="ml-2">
            <h4 className="text-lg font-medium text-gray-800">{step.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const DonorEligibility = ({ eligibility }) => (
    <div className="mt-8">
      <h3 className={`text-xl font-semibold mb-4 ${RedAccent}`}>Donor Eligibility & Frequency</h3>
      <ul className="space-y-2 text-gray-700">
        {eligibility.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 mr-2 mt-1">
              {item.startsWith('❌') ? '🚫' : '✅'}
            </span>
            <span className="flex-1">{item.replace('✅ ', '').replace('❌ ', '')}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const UsedFor = ({ usedFor }) => (
    <div className="mt-8">
      <h3 className={`text-xl font-semibold mb-4 ${RedAccent}`}>Kahan Use Hota Hai (Recipients)</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        {usedFor.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const KeyFacts = ({ fact }) => (
    <div className={`mt-8 ${LightRedBG} p-4 rounded-lg shadow-inner`}>
      <p className="font-bold text-[#BC003D] flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Key Fact
      </p>
      <p className="text-sm text-gray-700 mt-1">{fact}</p>
    </div>
  );

  return (
    <div id={component.id} className="scroll-mt-10 border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-red-50 focus:outline-none transition duration-150"
      >
        <div>
          <h2 className={`font-extrabold text-2xl md:text-3xl ${RedAccent}`}>
            <span className="mr-2">🩸</span> {component.name}
          </h2>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            {component.description.substring(0, 100)}... (Tap to see full details)
          </p>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} ${RedAccent}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="p-6 pt-0 bg-white border-t border-gray-200">
          <p className="text-gray-800 mb-6 mt-4">{component.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <DonationProcess steps={component.steps} />
            </div>
            <div className="md:col-span-1">
              <DonorEligibility eligibility={component.eligibility} />
              <UsedFor usedFor={component.usedFor} />
              <KeyFacts fact={component.fact} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DonationProcessPage = () => {
  const [openId, setOpenId] = useState(null);

  // Logic to handle hash and open correct accordion on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setOpenId(hash);
      // Optional: Smooth scroll to the element
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6 lg:p-10">
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#BC003D] mb-4 tracking-tight">
            Comprehensive Guide to Blood Donation Components
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the different ways you can donate blood and the specific life-saving components that help patients in need.
          </p>
        </header>

        <div className="space-y-8">
          {donationTypes.map((component) => (
            <AccordionItem
              key={component.id}
              component={component}
              isOpen={openId === component.id}
              toggleAccordion={() => toggleAccordion(component.id)}
            />
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500 p-4 border-t border-gray-200">
          <p>💡 All eligibility and frequency guidelines are general; always confirm specific requirements with your local blood bank or donation center.</p>
        </footer>
      </div>
    </div>
  );
};

export default DonationProcessPage;