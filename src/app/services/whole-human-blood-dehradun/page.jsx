import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Whole Human Blood in Dehradun | Uttarakhand Blood Centre",
    description:
        "Get fast, safe, and reliable whole human blood services in Dehradun at Uttarakhand Blood Centre. 24/7 emergency blood bank support and tested blood units.",
};

const WholeBloodPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO IMAGE */}
            <div className="relative h-[350px]">
                <Image
                    src="/whole-blood-banner.webp" // Is image path ko apne assets ke hisaab se change karein
                    alt="Whole Human Blood Services Dehradun"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
                        Whole Human Blood Services
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
                        Fast & Reliable Whole Blood Availability in Dehradun
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Looking for whole blood near you in Dehradun? <Link href="/">
                            <strong className="text-[#BC003D] hover:underline cursor-pointer">
                                Uttarakhand Blood Centre
                            </strong>
                        </Link> maintains a ready stock of
                        multiple blood groups, ensuring instant blood supply for surgeries, trauma care, and critical treatments.
                        We specialize in emergency blood requests, helping patients get life-saving transfusions without delay.
                    </p>
                </div>

                {/* 100% TESTED SECTION */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 flex items-center gap-2">
                        100% Tested & Safe Blood Units
                    </h2>
                    <p className="text-gray-600 mb-6">
                        All whole human blood units are thoroughly screened and certified following strict medical guidelines.
                        We ensure the highest safety standards for every unit we provide.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Infection-free blood supply",
                            "High-quality storage & handling",
                            "Safe transfusion standards"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 24/7 EMERGENCY SECTION */}
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                    24/7 Emergency Blood Bank in Dehradun
                </h2>
                <p className="text-gray-600 mb-6">
                    Need urgent blood in Dehradun today? Our centre operates with round-the-clock support to fulfill emergency requirements, including:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-10">
                    {["Accident & Trauma Cases", "Surgical Procedures", "Critical Care Patients", "Maternity Emergencies"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-red-500" /> {item}
                        </li>
                    ))}
                </ul>

                {/* BLOOD GROUPS TABLE/LIST */}
                <div className="bg-red-50 rounded-2xl p-8 mb-10 border border-red-100">
                    <h2 className="text-2xl font-semibold mb-4 text-red-900">Wide Blood Group Availability</h2>
                    <p className="text-red-800 mb-6">We provide all major blood groups instantly:</p>
                    <div className="flex flex-wrap gap-4">
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                            <div key={group} className="bg-white border-2 border-red-200 text-red-600 font-bold px-6 py-3 rounded-xl shadow-sm">
                                {group}
                            </div>
                        ))}
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <h2 className="text-2xl font-semibold mb-6 text-slate-800">Why Choose Uttarakhand Blood Centre?</h2>
                <div className="grid gap-4 mb-10">
                    {[
                        "Best blood bank in Dehradun for emergency needs",
                        "Quick blood availability near you",
                        "Affordable blood transfusion services",
                        "Trusted by hospitals and healthcare providers",
                        "Professional and responsive support team"
                    ].map((point, index) => (
                        <p key={index} className="flex items-center gap-3 text-gray-600 border-b border-slate-100 pb-2">
                            <span className="text-red-500 font-bold">✓</span> {point}
                        </p>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Book Whole Human Blood Today</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Don’t wait in critical moments. Get fast, safe, and affordable whole blood services in Uttarakhand.
                        Contact us now for instant availability.
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

export default WholeBloodPage;