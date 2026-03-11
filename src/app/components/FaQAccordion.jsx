"use client"
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Clock, Droplets, ShieldCheck, HeartPulse, Info } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Is the blood bank open 24/7 for emergencies?",
    answer: "Yes, our blood bank and emergency dispatch services operate 24 hours a day, 7 days a week, 365 days a year to ensure life-saving blood is always available."
  },
  {
    question: "Who can donate blood?",
    answer: "Any healthy adult between 18-65 years of age, weighing at least 45kg, with a hemoglobin level of 12.5g/dL or higher can generally donate blood."
  },
  {
    question: "How often can I donate blood?",
    answer: "Healthy males can donate every 3 months (90 days), and healthy females can donate every 4 months (120 days)."
  },
  {
    question: "Is blood donation safe?",
    answer: "Absolutely. We use sterile, disposable equipment for every donor, ensuring there is no risk of contracting any diseases during the process."
  },
  {
    question: "How long does the donation process take?",
    answer: "The actual blood withdrawal takes only 8-10 minutes. However, the entire process—including registration, medical check-up, and refreshment—takes about 45-60 minutes."
  },
  {
    question: "Can I donate if I have a tattoo or piercing?",
    answer: "You must wait for at least 6 to 12 months after getting a tattoo or body piercing before you are eligible to donate blood."
  },
  {
    question: "Do I need to fast before donating blood?",
    answer: "No, you should never donate on an empty stomach. Have a light meal and drink plenty of water or non-alcoholic fluids before donation."
  },
  {
    question: "What should I do after donating blood?",
    answer: "Rest for 10-15 minutes, have refreshments, drink plenty of fluids for the next 24 hours, and avoid strenuous physical activity or lifting heavy weights for the rest of the day."
  },
  {
    question: "Can I donate blood if I am taking medication?",
    answer: "It depends on the medication. While common medicines like vitamins or birth control are fine, antibiotics or blood thinners require a waiting period. Please consult our medical officer during screening."
  },
  {
    question: "How is my blood used after donation?",
    answer: "Your blood is tested, processed into components (Red Cells, Plasma, Platelets), and stored. One single donation can save up to three lives."
  },
  {
    question: "What are the common side effects of donation?",
    answer: "Most people feel fine. Some may experience slight dizziness or bruising at the needle site, which usually disappears quickly with rest and fluids."
  },
  {
    question: "Can I donate if I recently had a cold or flu?",
    answer: "You should be completely symptom-free for at least 7 days before donating blood."
  },
  {
    question: "Is my personal and medical information kept confidential?",
    answer: "Yes, we use a high-security digital documentation system. All donor records and test results are strictly confidential."
  },
  {
    question: "What tests are performed on the donated blood?",
    answer: "Every unit is tested for Blood Group (ABO/Rh) and screened for infections like HIV, Hepatitis B & C, Syphilis, and Malaria."
  },
  {
    question: "Can I donate if I have high blood pressure?",
    answer: "Yes, provided your blood pressure is under control and within the acceptable range at the time of donation."
  },
  {
    question: "Do I get any benefits or certificates for donating?",
    answer: "Yes, donors receive a donor card/certificate, a basic health check-up report, and the immense satisfaction of saving lives."
  },
  {
    question: "Can a pregnant or breastfeeding woman donate blood?",
    answer: "No. Pregnant women and breastfeeding mothers are deferred from donation for the health and safety of both mother and child."
  },
  {
    question: "How do I request blood in an emergency?",
    answer: "Contact our 24/7 helpline or visit our reception with a valid doctor's requisition form and a blood sample of the patient for cross-matching."
  },
  {
    question: "How can I organize a blood donation camp in my community?",
    answer: "You can reach out to our 'Camp Outreach' team via our website or 24/7 helpline. We provide the medical team, equipment, and logistics."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-red-100 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-5 px-2 flex items-center justify-between text-left hover:bg-red-50 transition-colors duration-200"
      >
        <span className={`font-medium text-lg ${isOpen ? 'text-red-600' : 'text-gray-800'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-red-600 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed bg-white">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
            <Droplets className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Blood Bank Support & FAQs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about blood donation and our 24/7 services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search your question here..."
            className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Accordion Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))
          ) : (
            <div className="p-12 text-center">
              <Info className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-red-600 font-semibold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
}