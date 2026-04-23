import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Random Donor Platelets (RDP) in Dehradun | Platelet Transfusion Support",
    description: "Get high-quality Random Donor Platelets (RDP) in Dehradun at Uttarakhand Blood Centre. 24/7 availability for Dengue and platelet deficiency patients.",
    keywords: "Random Donor Platelets Dehradun, RDP Dehradun, Platelet Transfusion Dehradun, Thrombocytopenia Treatment Uttarakhand, Dengue platelets Dehradun",
    openGraph: {
        title: "Random Donor Platelets (RDP) in Dehradun | Uttarakhand Blood Centre",
        description: "Get Random Donor Platelets (RDP) in Dehradun for thrombocytopenia and Dengue treatment. 24/7 emergency platelet transfusions.",
        images: ["/RDP.webp"],
    },
};

const RDPServicePage = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO IMAGE */}
            <div className="relative h-[350px]">
                <Image
                    src="/RDP.webp" 
                    alt="Random Donor Platelets RDP Dehradun"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
                        Random Donor Platelets (RDP)
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-6 md:p-10">

                {/* BACK BUTTON */}
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8 hover:font-semibold transition-all">
                    <ArrowLeft size={18} /> Back to Services
                </Link>

                {/* MAIN TITLE SECTION */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                        High-Quality Platelet Support for Critical Recovery
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Looking for quick platelet availability in Dehradun? <Link href="/">
                            <strong className="text-[#BC003D] hover:underline cursor-pointer">
                                Uttarakhand Blood Centre
                            </strong>
                        </Link> provides Random Donor Platelets (RDP) prepared from fresh whole blood donations. It is a vital component for treating thrombocytopenia, bleeding disorders, and supports patients during the Dengue season.
                    </p>
                </div>

                {/* COLLECTION & QUALITY SECTION */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                        Safe Collection & Storage Protocols
                    </h2>
                    <p className="text-gray-600 mb-6">
                        RDP is prepared by separating platelet-rich plasma from a single unit of blood. Because platelets have a short life, we follow strict storage guidelines:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Stored at 20-24°C with continuous agitation",
                            "Strict 5-day shelf life for maximum efficacy",
                            "Screened for bacterial contamination",
                            "ABO and Rh compatibility verified",
                            "Leukodepleted to minimize transfusion fever",
                            "Available 24/7 for emergency Dengue cases"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MEDICAL USES */}
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                    Who Benefits from RDP?
                </h2>
                <p className="text-gray-600 mb-6">
                    Platelet transfusions are critical life-saving measures for patients suffering from:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-10">
                    {[
                        "Dengue & Viral Fevers",
                        "Chemotherapy-induced Platelet Drop",
                        "Aplastic Anemia & Bone Marrow Failure",
                        "Major Surgical Procedures",
                        "Severe Bleeding Disorders",
                        "Liver Diseases with Platelet Dysfunction"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-red-500" /> {item}
                        </li>
                    ))}
                </ul>

                {/* RDP vs SDP COMPARISON */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-10 shadow-sm">
                    <div className="bg-slate-900 p-4 text-white text-center font-bold text-xl">
                        RDP vs SDP Comparison
                    </div>
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        <div className="p-8">
                            <h3 className="font-bold text-red-600 text-lg mb-3">Random Donor Platelets (RDP)</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Prepared from single whole blood unit</li>
                                <li>• Standard platelet concentration</li>
                                <li>• May require multiple units for treatment</li>
                                <li>• Cost-effective & readily available</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-slate-50">
                            <h3 className="font-bold text-slate-800 text-lg mb-3">Single Donor Platelets (SDP)</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Collected via Apheresis machine</li>
                                <li>• Highly concentrated (6-8x more than RDP)</li>
                                <li>• Single unit usually sufficient</li>
                                <li>• Reduced donor exposure risk</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BLOOD GROUPS SECTION */}
                <div className="bg-red-50 rounded-2xl p-8 mb-10 border border-red-100">
                    <h2 className="text-2xl font-semibold mb-4 text-red-900">Immediate Availability</h2>
                    <p className="text-red-800 mb-6">We provide platelets for all major blood groups on demand:</p>
                    <div className="flex flex-wrap gap-4">
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                            <div key={group} className="bg-white border-2 border-red-200 text-red-600 font-bold px-6 py-3 rounded-xl shadow-sm">
                                {group}
                            </div>
                        ))}
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <h2 className="text-2xl font-semibold mb-6 text-slate-800">Why Get Platelets from Us?</h2>
                <div className="grid gap-4 mb-10">
                    {[
                        "Continuous agitation storage for better platelet viability",
                        "Emergency supply during Dengue outbreaks in Dehradun",
                        "Strict sterility and quality control measures",
                        "Affordable transfusion support for oncology patients",
                        "Serving major hospitals across Uttarakhand 24/7"
                    ].map((point, index) => (
                        <p key={index} className="flex items-center gap-3 text-gray-600 border-b border-slate-100 pb-2">
                            <span className="text-red-500 font-bold">✓</span> {point}
                        </p>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Urgent Platelet Requirement?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Don't delay treatment for Dengue or thrombocytopenia. 
                        Call Uttarakhand Blood Centre now for 24/7 platelet availability.
                    </p>
                    <a
                        href="tel:+919084311316"
                        className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all transform hover:scale-105"
                    >
                        <Phone size={24} fill="currentColor" /> +91 90843 11316
                    </a>
                </div>

            </div>
        </div>
    );
};

export default RDPServicePage;