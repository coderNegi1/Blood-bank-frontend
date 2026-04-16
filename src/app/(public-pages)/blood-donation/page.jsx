"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// === METADATA UPDATED WITH NEW CONTENT ===
const metadata = {
  title: "Blood Donation in Dehradun | Donate Blood at Uttarakhand Blood Centre",
  description: "Learn how to donate blood in Dehradun. Discover the blood donation process, benefits, and voluntary camps at UK Blood Centre, Uttarakhand. Safe and professional blood donation facility.",
  keywords: [
    "Donate Blood in Dehradun",
    "Blood Donation in Dehradun",
    "Blood Donation Process Dehradun",
    "Voluntary Blood Donation Dehradun",
    "Blood Bank Dehradun",
    "Uttarakhand Blood Centre",
    "Blood Donor Registration Dehradun",
    "Organize Blood Donation Camp Dehradun",
    "Blood bank near me",
    "Blood donation benefits"
  ],
  canonical: "https://www.ukbloodcentre.com/donation-process",
  openGraph: {
    title: "Blood Donation in Dehradun | Donate Blood at Uttarakhand Blood Centre",
    description: "Safe, professional, and medically supervised blood donation facility in Dehradun. Help save lives today.",
    url: "https://www.ukbloodcentre.com/donation-process",
    images: [{ url: "/ukbloodcentreLogo.jpg", width: 800, height: 600, alt: "Blood Donation Dehradun" }]
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Uttarakhand Blood Centre",
  "description": "Blood donation centre in Dehradun offering voluntary blood donation camps and safe donation processes.",
  "url": "https://www.ukbloodcentre.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dehradun",
    "addressRegion": "Uttarakhand",
    "addressCountry": "India"
  }
};

// === DATA ARRAY ===
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

];

const AccordionItem = ({ component, isOpen, toggleAccordion }) => {
  const RedAccent = "text-[#BC003D]";
  const LightRedBG = "bg-red-50 border-l-4 border-[#BC003D]";

  return (
    <div id={component.id} className="scroll-mt-10 border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white mb-6 transition-all duration-300">
      <button onClick={toggleAccordion} className="w-full text-left p-6 flex justify-between items-center hover:bg-red-50 transition duration-150">
        <div>
          <h2 className={`font-extrabold text-2xl ${RedAccent}`}>🩸 {component.name}</h2>
          <p className="text-gray-500 mt-1 text-sm">Tap to see full process and eligibility</p>
        </div>
        <span className={`transform transition-transform text-2xl ${RedAccent} ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="p-6 pt-0 border-t border-gray-100 animate-fadeIn">
          <p className="text-gray-800 mb-6 mt-4 leading-relaxed">{component.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${RedAccent}`}>Donation Process</h3>
              {component.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full ${RedAccent} bg-white border-2 border-[#BC003D] flex items-center justify-center text-xs font-bold`}>{i + 1}</div>
                  <div><h4 className="font-semibold text-gray-800">{step.title}</h4><p className="text-sm text-gray-600">{step.desc}</p></div>
                </div>
              ))}
            </div>
            <div>
              <h3 className={`text-xl font-bold ${RedAccent} mb-4`}>Eligibility & Frequency</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {component.eligibility.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <h3 className={`text-xl font-bold ${RedAccent} mb-4`}>Kahan Use Hota Hai</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 mb-6">
                {component.usedFor.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className={`${LightRedBG} p-4 rounded-lg`}><p className="text-sm italic"><strong>Fact:</strong> {component.fact}</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DonationPage = () => {
  const [openId, setOpenId] = useState(null);
  const RedText = "text-[#BC003D]";

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      {/* --- HERO SECTION: BLOOD DONATION IN DEHRADUN --- */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto p-6 lg:p-10 pt-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#BC003D] mb-6 leading-tight">
            Blood Donation in Dehradun 
          </h1>
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed max-w-4xl">
            <p>
              If you are looking for <strong>blood donation in Dehradun</strong>, donate blood near you, or want to register as a voluntary blood donor,
              <strong> Uttarakhand Blood Centre, Dehradun</strong> provides a safe, professional, and medically supervised blood donation facility.
            </p>
            <p>
              Our centre supports hospitals across Uttarakhand by providing safe blood collection and emergency availability. By choosing to
              <strong> donate blood in Dehradun</strong>, you directly help patients who urgently need life-saving transfusions.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#BC003D] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition">Book Appointment</Link>
            <Link href="/contact" className="border-2 border-[#BC003D] text-[#BC003D] px-8 py-4 rounded-full font-bold hover:bg-red-50 transition">Organize a Camp</Link>
          </div>
        </div>
      </div>

      {/* --- CONTENT BLOCKS --- */}
      <div className="max-w-6xl mx-auto p-6 lg:p-10">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className={`text-3xl font-bold ${RedText} mb-6`}>Donate Blood in Dehradun – Save Lives</h2>
            <p className="text-gray-700 mb-4">People commonly donate blood at our centre to support patients suffering from:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <li>📍 Accident and trauma cases</li>
              <li>📍 Major surgeries</li>
              <li>📍 Cancer treatment</li>
              <li>📍 Severe anemia</li>
              <li>📍 Dengue deficiency</li>
              <li>📍 Pregnancy complications</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border">
            <h2 className={`text-2xl font-bold ${RedText} mb-6`}>Why Choose Uttarakhand Blood Centre?</h2>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex gap-2">✅ Safe and hygienic blood donation facility</li>
              <li className="flex gap-2">✅ Experienced medical staff & phlebotomists</li>
              <li className="flex gap-2">✅ Modern blood collection equipment</li>
              <li className="flex gap-2">✅ Organized voluntary donation drives</li>
            </ul>
          </section>
        </div>

        {/* --- ELIGIBILITY SECTION --- */}
        <section className="bg-slate-900 text-white p-10 rounded-[40px] mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Who Can Donate Blood in Dehradun?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div><p className="text-4xl mb-2">🎂</p><p className="font-bold">18 to 65 Years Old</p></div>
            <div><p className="text-4xl mb-2">⚖️</p><p className="font-bold">Min 45–50 kg Weight</p></div>
            <div><p className="text-4xl mb-2">🩸</p><p className="font-bold">Normal Hemoglobin</p></div>


            <div>
              <p className="text-4xl mb-2">🧑‍🦱</p>
              <p className="font-bold">Male</p>
              <p>Every 3 Months</p>
            </div>

            <div>
              <p className="text-4xl mb-2">👩</p>
              <p className="font-bold">Female</p>
              <p>Every 4 Months</p>
            </div>


          </div>
        </section>

        {/* --- DONATION PROCESS ACCORDIONS --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Donation Process & Components</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The process in Dehradun at our centre is simple and safe. The actual blood donation procedure takes only 8–10 minutes.</p>
          </div>

          <div className="space-y-4">
            {donationTypes.map((component) => (
              <AccordionItem
                key={component.id}
                component={component}
                isOpen={openId === component.id}
                toggleAccordion={() => setOpenId(openId === component.id ? null : component.id)}
              />
            ))}
          </div>
        </div>

        {/* --- CAMP & FOOTER SECTION --- */}
        <section className="text-center bg-red-50 p-12 rounded-3xl border-2 border-dashed border-red-200">
          <h2 className={`text-3xl font-bold ${RedText} mb-4`}>Organize a Blood Donation Camp</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Organizations, colleges, and corporate offices can organize camps in Dehradun with our support. We provide medical staff, equipment, and donor screening.
          </p>
          <Link href="/contact">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold">
              Register Your Organization
            </button>
          </Link>
        </section>

        <footer className="mt-20 text-center border-t pt-10 text-gray-500">
          <p className="font-bold text-gray-800">Uttarakhand Blood Centre – Blood Bank in Dehradun</p>
          <p className="mt-2">💡 Your single donation can save up to 3 lives through component separation.</p>
        </footer>
      </div>
    </div>
  );
};

export default DonationPage;



