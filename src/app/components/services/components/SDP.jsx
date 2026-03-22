"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "SDP Platelet Donation in Dehradun | Plateletpheresis Service  |  Plateletpheresis SDP Page –SDP Platelet Donation in Dehradun",
    description:
        "Get Single Donor Platelets (SDP) in Dehradun through Plateletpheresis at Uttarakhand Blood Centre. Safe, high-quality platelet donation.Donate blood in Dehradun at Uttarakhand Blood Centre. Safe, voluntary blood donation, emergency support, and platelet donation (SDP)",
};

const SDPPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* IMAGE */}
            <div className="relative h-[350px]">
                <Image
                    src="/SDP.webp"
                    alt="Plateletpheresis SDP Dehradun"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-5xl mx-auto p-10">

                {/* BACK */}
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                {/* TITLE */}
                <a
                    href="https://www.ukbloodcentre.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                >
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 transition-all duration-300 group-hover:text-red-600 group-hover:underline">
                        Plateletpheresis (Single Donor Platelets – SDP)
                    </h1>
                </a>
                {/* INTRO */}
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Uttarakhand Blood Centre, Dehradun, we provide advanced Plateletpheresis
                    (Single Donor Platelets – SDP) services to support patients who require a
                    high-quality platelet transfusion. Plateletpheresis is a specialized blood
                    donation procedure in which platelets are collected from a single donor
                    using an automated machine, while the remaining blood components are safely
                    returned to the donor.
                </p>

                {/* WHAT IS */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    What is Plateletpheresis?
                </h2>
                <p className="text-gray-600 mb-6">
                    Plateletpheresis is a medical process that separates and collects platelets
                    directly from the donor’s blood through an automated apheresis machine.
                    Unlike random donor platelets collected from multiple donors, Single Donor
                    Platelets (SDP) come from one healthy donor, reducing the risk of infections
                    and immune reactions while providing a higher concentration of platelets.
                </p>

                {/* WHY NEEDED */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Why are Single Donor Platelets Needed?
                </h2>
                <p className="text-gray-600 mb-4">
                    SDP transfusions are commonly required for patients with very low platelet
                    counts or conditions such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Dengue fever with severe thrombocytopenia</li>
                    <li>Cancer patients undergoing chemotherapy</li>
                    <li>Bone marrow disorders</li>
                    <li>Patients undergoing major surgeries</li>
                    <li>Certain blood disorders requiring platelet support</li>
                </ul>

                <p className="text-gray-600 mb-6">
                    A single unit of SDP is often equivalent to 6–8 units of random donor
                    platelets, making it more effective and safer for critically ill patients.
                </p>

                {/* BENEFITS */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Benefits of Plateletpheresis
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Higher platelet yield from a single donor</li>
                    <li>Reduced exposure to multiple donors</li>
                    <li>Lower risk of transfusion reactions</li>
                    <li>Better compatibility for patients requiring repeated transfusions</li>
                    <li>Safer and more efficient treatment for critical cases</li>
                </ul>

                {/* DONOR */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Donor Eligibility
                </h2>
                <p className="text-gray-600 mb-4">
                    Healthy individuals who meet standard blood donation criteria may be
                    eligible for platelet donation. Generally, donors should:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Be between 18–60 years of age</li>
                    <li>Weigh at least 55 kg</li>
                    <li>Have a good platelet count</li>
                    <li>Not have taken certain medications (like aspirin) in the past 48 hours</li>
                </ul>

                <p className="text-gray-600 mb-6">
                    Our trained medical team conducts proper screening to ensure the safety
                    of both the donor and the patient.
                </p>

                {/* MACHINE */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Advanced Equipment – Amicus® Separator (Fresenius Kabi / Fenwal)
                </h2>
                <p className="text-gray-600 mb-6">
                    At Uttarakhand Blood Centre, Dehradun, plateletpheresis procedures are
                    performed using the advanced Amicus® Separator, developed by Fresenius
                    Kabi (Fenwal). This state-of-the-art apheresis system is designed to ensure
                    high-quality Single Donor Platelets (SDP) collection, maximum donor safety,
                    and efficient blood component separation.
                </p>

                {/* WHAT IS MACHINE */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    What is the Amicus® Separator?
                </h2>
                <p className="text-gray-600 mb-6">
                    The Amicus® Separator is an automated blood component collection system
                    used for plateletpheresis and plasma collection. The machine separates
                    platelets from the donor’s blood while safely returning red blood cells
                    and other components back to the donor during the procedure.
                </p>

                <p className="text-gray-600 mb-6">
                    This advanced technology allows blood centres to collect high-yield SDP
                    platelet units from a single donor, which are essential for patients
                    requiring urgent platelet transfusion.
                </p>

                {/* FEATURES */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Key Features of the Amicus® Separator
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>High-yield platelet collection for Single Donor Platelets (SDP)</li>
                    <li>Advanced automated apheresis technology for accurate blood component separation</li>
                    <li>Improved donor comfort and safety during platelet donation</li>
                    <li>Closed sterile disposable kits to minimize infection risk</li>
                    <li>Efficient platelet collection with shorter procedure time</li>
                    <li>Consistent high-quality platelet products for patient transfusion</li>
                </ul>

                {/* PATIENT BENEFITS */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Benefits for Patients
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>High-quality SDP platelet units</li>
                    <li>Reduced donor exposure for patients</li>
                    <li>Better transfusion outcomes</li>
                    <li>Safe platelet support for dengue, cancer, and critical care patients</li>
                </ul>

                {/* SAFETY */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Procedure and Safety
                </h2>
                <p className="text-gray-600 mb-6">
                    The Plateletpheresis procedure usually takes 45–60 minutes and is performed
                    using sterile, single-use disposable kits. The process is safe, comfortable,
                    and conducted under the supervision of trained professionals at Uttarakhand
                    Blood Centre.
                </p>

                {/* CTA */}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800">
                    Be a Life-Saving Platelet Donor
                </h2>
                <p className="text-gray-600 mb-6">
                    Platelet donation can make a critical difference in saving lives, especially
                    for patients battling severe infections and blood disorders. We encourage
                    voluntary donors to support this vital cause and help provide life-saving
                    platelet support to those in need.
                </p>

                <p className="text-gray-600 mb-8">
                    Visit Uttarakhand Blood Centre, Dehradun to donate platelets or learn more
                    about Plateletpheresis services.
                </p>

                {/* CONTACT */}
                <a
                    href="tel:+919084311316"
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                >
                    <Phone size={18} /> +91 90843 11316
                </a>

            </div>
        </div>
    );
};

export default SDPPage;