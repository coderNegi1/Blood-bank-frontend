"use client"
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Clock, Droplets, ShieldCheck, HeartPulse, Info } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Which is the best blood bank in Dehradun?",
    answer:
      "Uttarakhand Blood Centre is a trusted blood bank in Dehradun providing safe blood and blood components with 24×7 emergency service.",
  },
  {
    question: "Is blood available 24 hours in Dehradun?",
    answer:
      "Yes, Uttarakhand Blood Centre provides 24×7 emergency blood supply in Dehradun for patients in need.",
  },
  {
    question: "Where can I donate blood in Dehradun?",
    answer:
      "You can donate blood at Uttarakhand Blood Centre, a voluntary blood donation centre in Dehradun that welcomes healthy donors.",
  },
  {
    question: "Is platelet donation available in Dehradun?",
    answer:
      "Yes, Uttarakhand Blood Centre provides plateletpheresis (SDP platelet donation) facility in Dehradun.",
  },
  {
    question: "Which blood groups are available at the blood bank?",
    answer:
      "All major blood groups including A, B, AB and O positive and negative are available at Uttarakhand Blood Centre depending on stock availability.",
  },
  {
    question: "Is plasma available in Dehradun blood bank?",
    answer:
      "Yes, Uttarakhand Blood Centre provides plasma components including Fresh Frozen Plasma (FFP).",
  },
  {
    question: "Can I get emergency blood near Rispana Bridge Dehradun?",
    answer:
      "Yes, Uttarakhand Blood Centre near Rispana Bridge provides 24x7 emergency blood supply.",
  },
  {
    question: "What blood components are available in Dehradun?",
    answer:
      "Uttarakhand Blood Centre provides blood components like PRBC, Platelets, Plasma and SDP platelets.",
  },
  {
    question: "Is voluntary blood donation accepted in Dehradun?",
    answer:
      "Yes, healthy individuals can donate blood voluntarily at Uttarakhand Blood Centre.",
  },
  {
    question: "How can I contact a blood bank in Dehradun?",
    answer:
      "You can contact Uttarakhand Blood Centre for blood availability and donation information.",
  },
  {
    question: "Is blood donation safe?",
    answer:
      "Yes, blood donation at Uttarakhand Blood Centre is completely safe and done using sterile and disposable equipment.",
  },
  {
    question: "Can hospitals in Dehradun get blood from this centre?",
    answer:
      "Yes, hospitals and patients can obtain blood and blood components from Uttarakhand Blood Centre as per medical requirements.",
  },
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