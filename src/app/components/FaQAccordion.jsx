"use client"
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Clock, Droplets, ShieldCheck, HeartPulse, Info } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Which is the best blood bank in Dehradun?",
    answer: "Uttarakhand Blood Centre is a trusted blood bank in Dehradun providing safe blood and blood components with 24×7 emergency service."
  },
  {
    question: "What services does Uttarakhand Blood Bank Dehradun provide?",
    answer: "We provide safe and tested blood units, blood components (PRBC, Platelets, Plasma), Apheresis (SDP), emergency blood support, and organize voluntary blood donation camps."
  },
  {
    question: "Is blood available 24 hours in Dehradun?",
    answer: "Yes, Uttarakhand Blood Centre provides 24×7 emergency blood supply in Dehradun and nearby areas, including near Rispana Bridge."
  },
  {
    question: "What is blood donation?",
    answer: "Blood donation is a voluntary process where a healthy person donates blood to help patients in need during surgeries, emergencies, or medical treatments."
  },
  {
    question: "Who can donate blood?",
    answer: "Any healthy individual aged 18–65 years, weighing at least 45–50 kg, and in good health can donate blood."
  },
  {
    question: "Is blood donation safe?",
    answer: "Absolutely. Blood donation is a completely safe and sterile process. we use single-use disposable kits for every donor, eliminating any risk of infection."
  },
  {
    question: "What is Apheresis Donation?",
    answer: "Apheresis donation is a special type of blood donation where a machine collects only specific components (platelets or plasma) and returns the rest to the donor. It is vital for cancer and dengue patients."
  },
  {
    question: "Who can donate through apheresis?",
    answer: "Apheresis donors must meet stricter criteria: higher platelet count, good vein condition, minimum weight of 50–60 kg, and doctor’s eligibility approval."
  },
  {
    question: "How often can I donate?",
    answer: "Whole blood: Every 3 months (men) / 4 months (women). Apheresis (platelets): Every 2 weeks (as per medical advice)."
  },
  {
    question: "How long does the donation process take?",
    answer: "Whole blood donation takes 30–45 minutes total, while the Apheresis process takes about 60–90 minutes."
  },
  {
    question: "Does blood donation hurt?",
    answer: "You may feel a slight pinch when the needle is inserted, but the process is generally comfortable."
  },
  {
    question: "What should I do before and after donating blood?",
    answer: "Before: Eat a healthy meal, stay hydrated, avoid alcohol/smoking, and carry a valid ID. After: Rest for 10–15 minutes, drink fluids, and avoid heavy exercise for the day."
  },
  {
    question: "Do you provide free blood services?",
    answer: "Yes, we offer free blood support to Thalassemia patients, cancer patients, and voluntary blood donation camp organizers."
  },
  {
    question: "Which blood groups and components are available?",
    answer: "All major groups (A, B, AB, O +/-) and components like PRBC, Platelets, Plasma (FFP), and SDP platelets are available depending on stock."
  },
  {
    question: "How can I find the nearest blood bank or contact you?",
    answer: "Search 'blood bank near me' or visit Uttarakhand Blood Bank Dehradun near Rispana Bridge. You can contact us directly for availability or to organize a donation camp."
  },
  {
    question: "Who benefits from blood & apheresis donation?",
    answer: "Accident and surgery patients, cancer patients (platelets), Thalassemia patients, and Dengue patients needing platelets."
  },
  {
    question: "Can hospitals in Dehradun get blood from this centre?",
    answer: "Yes, hospitals and patients can obtain blood and blood components from Uttarakhand Blood Centre as per medical requirements."
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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