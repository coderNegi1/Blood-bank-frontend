"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-[#BC003D] mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information Collection</h2>
            <p>
              Uttarakhand Blood Centre collects personal information from blood donors and users 
              to facilitate blood donation services. This includes name, contact details, blood group, 
              medical history, and other relevant information necessary for safe blood donation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Use of Information</h2>
            <p>
              The information collected is used solely for:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Managing blood donation records</li>
              <li>Contacting donors for blood donation drives</li>
              <li>Ensuring safe blood transfusion practices</li>
              <li>Maintaining donor health and safety</li>
              <li>Improving our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              from unauthorized access, alteration, disclosure, or destruction. All donor information 
              is stored securely and accessed only by authorized personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Information Sharing</h2>
            <p>
              Your personal information will not be shared with third parties except:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>When required by law or legal authorities</li>
              <li>With healthcare facilities for blood transfusion purposes</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies to enhance user experience and analyze website traffic. 
              You can disable cookies in your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
            <p>
              For any privacy-related concerns or questions, please contact us through our{" "}
              <Link href="/contact" className="text-[#BC003D] hover:underline font-semibold">
                Contact Page
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Policy Updates</h2>
            <p>
              This privacy policy may be updated periodically. We will notify users of any 
              significant changes through our website or via email.
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
