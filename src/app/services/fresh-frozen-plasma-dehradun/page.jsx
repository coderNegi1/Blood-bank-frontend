import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Fresh Frozen Plasma (FFP) in Dehradun | Plasma Transfusion Services",
    description: "Get high-quality Fresh Frozen Plasma (FFP) in Dehradun at Uttarakhand Blood Centre. 24/7 emergency supply for clotting factor deficiencies and liver disease.",
    keywords: "Fresh Frozen Plasma Dehradun, FFP Dehradun, Plasma Transfusion Dehradun, Clotting Factors Uttarakhand, Blood bank near me",
    openGraph: {
        title: "Fresh Frozen Plasma (FFP) in Dehradun | Uttarakhand Blood Centre",
        description: "Get Fresh Frozen Plasma (FFP) in Dehradun for clotting factor replacement. 24/7 emergency plasma transfusions.",
        images: ["/FFP.webp"],
    },
};

const FFPServicePage = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO IMAGE */}
            <div className="relative h-[350px]">
                <Image
                    src="/FFP.webp" 
                    alt="Fresh Frozen Plasma FFP Dehradun"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
                        Fresh Frozen Plasma (FFP)
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
                        Essential Clotting Factor Support in Dehradun
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Need FFP for an emergency? <Link href="/">
                            <strong className="text-[#BC003D] hover:underline cursor-pointer">
                                Uttarakhand Blood Centre
                            </strong>
                        </Link> provides **Fresh Frozen Plasma (FFP)** containing all essential coagulation factors. It is vital for patients with liver disease, massive bleeding, or clotting deficiencies, ensuring effective hemostasis and recovery.
                    </p>
                </div>

                {/* PROCESSING & STORAGE SECTION */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                        Rigorous Storage & Safety Standards
                    </h2>
                    <p className="text-gray-600 mb-6">
                        FFP is the liquid portion of blood frozen within 8 hours of collection to preserve all clotting proteins. We maintain the highest quality through:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Stored at -18°C or colder for up to 1 year",
                            "Thawed in controlled 37°C water bath",
                            "Screened for HIV, Hepatitis B/C & Syphilis",
                            "Contains all stable & labile clotting factors",
                            "Rapid thawing & delivery for trauma cases",
                            "Strict ABO & Rh typing verification"
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
                    When is FFP Transfusion Required?
                </h2>
                <p className="text-gray-600 mb-6">
                    Fresh Frozen Plasma is indicated for multiple clinical conditions requiring rapid factor replacement:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-10">
                    {[
                        "Liver Disease with Coagulopathy",
                        "Massive Transfusion (Trauma/Surgery)",
                        "Disseminated Intravascular Coagulation (DIC)",
                        "Warfarin Reversal in Emergencies",
                        "Multiple Clotting Factor Deficiencies",
                        "TTP (Thrombotic Thrombocytopenic Purpura)"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-red-500" /> {item}
                        </li>
                    ))}
                </ul>

                {/* PLASMA PRODUCTS COMPARISON */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-10 shadow-sm">
                    <div className="bg-slate-900 p-4 text-white text-center font-bold text-xl">
                        Plasma Product Comparison
                    </div>
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        <div className="p-6">
                            <h3 className="font-bold text-red-600 text-lg mb-2 text-center">FFP</h3>
                            <p className="text-xs text-gray-500 mb-3 text-center">(Fresh Frozen Plasma)</p>
                            <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• All clotting factors preserved</li>
                                <li>• Frozen within 8 hours</li>
                                <li>• Ideal for liver disease</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-slate-50">
                            <h3 className="font-bold text-slate-800 text-lg mb-2 text-center">FP</h3>
                            <p className="text-xs text-gray-500 mb-3 text-center">(Frozen Plasma)</p>
                            <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Frozen within 24 hours</li>
                                <li>• Reduced factor V and VIII</li>
                                <li>• Good for volume replacement</li>
                            </ul>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-slate-800 text-lg mb-2 text-center">Cryo</h3>
                            <p className="text-xs text-gray-500 mb-3 text-center">(Cryoprecipitate)</p>
                            <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Fibrinogen & Factor VIII rich</li>
                                <li>• Concentrated (Low volume)</li>
                                <li>• For Hemophilia & Bleeding</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BLOOD GROUPS SECTION */}
                <div className="bg-red-50 rounded-2xl p-8 mb-10 border border-red-100">
                    <h2 className="text-2xl font-semibold mb-4 text-red-900">Plasma Compatibility</h2>
                    <p className="text-red-800 mb-6">We maintain inventory for all major blood groups. (Note: AB is the universal donor for Plasma):</p>
                    <div className="flex flex-wrap gap-4">
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                            <div key={group} className="bg-white border-2 border-red-200 text-red-600 font-bold px-6 py-3 rounded-xl shadow-sm">
                                {group}
                            </div>
                        ))}
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <h2 className="text-2xl font-semibold mb-6 text-slate-800">Why Uttarakhand Blood Centre?</h2>
                <div className="grid gap-4 mb-10">
                    {[
                        "State-of-the-art freezing & thawing technology",
                        "24/7 emergency plasma issuance in Dehradun",
                        "Strict infectious disease screening (NAAT/ELISA)",
                        "Support for trauma and maternity emergencies",
                        "Professional medical coordination with ICU teams"
                    ].map((point, index) => (
                        <p key={index} className="flex items-center gap-3 text-gray-600 border-b border-slate-100 pb-2">
                            <span className="text-red-500 font-bold">✓</span> {point}
                        </p>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Urgent FFP Required?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Don't wait for plasma in critical moments. We ensure rapid delivery to all hospitals in Dehradun. 
                        Contact us now for availability.
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

export default FFPServicePage;