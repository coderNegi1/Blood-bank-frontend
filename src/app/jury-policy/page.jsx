"use client";

import React from "react";
import Link from "next/link";

export default function JuryPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-[#BC003D] mb-6">Jury Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Purpose</h2>
            <p>
              The Jury Policy of Uttarakhand Blood Centre establishes guidelines for the 
              evaluation and selection process of blood donors, volunteers, and service providers 
              to ensure the highest standards of safety and quality in blood donation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Jury Composition</h2>
            <p>
              The jury consists of:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Medical professionals and healthcare experts</li>
              <li>Blood bank administrators</li>
              <li>Government health department representatives</li>
              <li>Community representatives</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Donor Eligibility Criteria</h2>
            <p>
              The jury evaluates donor eligibility based on:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Age: 18-65 years</li>
              <li>Weight: Minimum 50 kg</li>
              <li>Hemoglobin levels: Minimum 12.5 g/dL</li>
              <li>General health and medical history</li>
              <li>Absence of infectious diseases</li>
              <li>Compliance with donation frequency guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Decision-Making Process</h2>
            <p>
              All decisions made by the jury are:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Based on medical and scientific evidence</li>
              <li>Made in the best interest of donor and recipient safety</li>
              <li>Documented and maintained for record-keeping</li>
              <li>Subject to review and appeal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Confidentiality</h2>
            <p>
              All jury members are bound by strict confidentiality agreements. Donor information 
              and medical records discussed during jury proceedings are kept confidential and 
              used solely for evaluation purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Appeals Process</h2>
            <p>
              Donors who are deferred or rejected have the right to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Request a detailed explanation of the decision</li>
              <li>Submit additional medical documentation</li>
              <li>Appeal the decision within 30 days</li>
              <li>Request re-evaluation after addressing concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Quality Assurance</h2>
            <p>
              The jury regularly reviews and updates policies to align with:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>National blood transfusion guidelines</li>
              <li>International best practices</li>
              <li>Latest medical research and standards</li>
              <li>Feedback from donors and healthcare providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Contact Information</h2>
            <p>
              For questions or concerns regarding jury decisions, please contact us through our{" "}
              <Link href="/contact" className="text-[#BC003D] hover:underline font-semibold">
                Contact Page
              </Link>.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: November 2025
          </p>
        </div>

        <div className="mt-8">
          <Link 
            href="/" 
            className="inline-block bg-[#BC003D] text-white px-6 py-3 rounded-lg hover:bg-[#9a0032] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
