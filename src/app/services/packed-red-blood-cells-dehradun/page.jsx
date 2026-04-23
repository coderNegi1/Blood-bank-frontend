import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Packed Red Blood Cells (PRBC) in Dehradun | PRBC Transfusion Near Me",
    description: "Get Packed Red Blood Cells (PRBC) in Dehradun at Uttarakhand Blood Centre. 24/7 availability for anemia treatment, surgery, and trauma recovery.",
    keywords: "Packed Red Blood Cells Dehradun, PRBC Dehradun, Blood Transfusion Dehradun, Anemia Treatment Uttarakhand, Blood bank Rispana Bridge",
    openGraph: {
        title: "Packed Red Blood Cells (PRBC) in Dehradun | Uttarakhand Blood Centre",
        description: "Get Packed Red Blood Cells (PRBC) in Dehradun for anemia treatment and blood loss recovery. 24/7 emergency PRBC transfusions.",
        images: ["/PRBC.webp"],
    },
};

const PRBCServicePage = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO IMAGE */}
            <div className="relative h-[350px]">
                <Image
                    src="/PRBC.webp" 
                    alt="Packed Red Blood Cells PRBC Dehradun"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
                        Packed Red Blood Cells (PRBC)
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
                        Reliable PRBC Blood Component Supply in Dehradun
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Looking for PRBC units near you? <Link href="/">
                            <strong className="text-[#BC003D] hover:underline cursor-pointer">
                                Uttarakhand Blood Centre
                            </strong>
                        </Link> provides high-quality Packed Red Blood Cells (PRBC), essential for patients with severe anemia, surgical blood loss, and chronic medical conditions. We ensure rapid cross-matching and 24/7 availability to support life-saving transfusions.
                    </p>
                </div>

                {/* WHAT IS PRBC & QUALITY SECTION */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                        Advanced Processing & Storage
                    </h2>
                    <p className="text-gray-600 mb-6">
                        PRBC is prepared by removing plasma from whole blood, providing a concentrated source of oxygen-carrying red cells. All units at our centre undergo rigorous quality checks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Leukodepleted to reduce reactions",
                            "Stored at strictly monitored 2-6°C",
                            "Screened for HIV, HBV, HCV & Syphilis",
                            "Processed with additive solutions (SAGM)",
                            "Precise cross-matching technology",
                            "Shelf life maintained up to 42 days"
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
                    When is PRBC Transfusion Needed?
                </h2>
                <p className="text-gray-600 mb-6">
                    PRBC is primarily used to increase hemoglobin levels and tissue oxygenation in patients with:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-10">
                    {[
                        "Severe Symptomatic Anemia",
                        "Acute Trauma & Blood Loss",
                        "Major Surgical Procedures",
                        "Cancer & Chemotherapy Support",
                        "Thalassemia & Sickle Cell Disease",
                        "Chronic Kidney Disease"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-red-500" /> {item}
                        </li>
                    ))}
                </ul>

                {/* BLOOD GROUPS SECTION */}
                <div className="bg-red-50 rounded-2xl p-8 mb-10 border border-red-100">
                    <h2 className="text-2xl font-semibold mb-4 text-red-900">PRBC Group Availability</h2>
                    <p className="text-red-800 mb-6">We maintain a ready stock of PRBC for all major blood groups:</p>
                    <div className="flex flex-wrap gap-4">
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                            <div key={group} className="bg-white border-2 border-red-200 text-red-600 font-bold px-6 py-3 rounded-xl shadow-sm">
                                {group}
                            </div>
                        ))}
                    </div>
                </div>

                {/* EMERGENCY AVAILABILITY */}
                <h2 className="text-2xl font-semibold mb-6 text-slate-800">Emergency Support in Dehradun</h2>
                <div className="grid gap-4 mb-10">
                    {[
                        "24/7 emergency PRBC issuance",
                        "Trusted by Indresh, Max, and Himalayan Hospitals",
                        "Fastest cross-matching service in Uttarakhand",
                        "Affordable and high-standard blood components",
                        "Professional medical responsive team"
                    ].map((point, index) => (
                        <p key={index} className="flex items-center gap-3 text-gray-600 border-b border-slate-100 pb-2">
                            <span className="text-red-500 font-bold">✓</span> {point}
                        </p>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Urgent PRBC Requirement?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get fast, safe, and reliable Packed Red Blood Cells in Dehradun today. 
                        Contact Uttarakhand Blood Centre for instant stock status.
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

export default PRBCServicePage;