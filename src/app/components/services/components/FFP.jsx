import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const FFPComponent = () => {
    const service = {
        title: "Fresh Frozen Plasma (FFP)",
        seoTitle: "Fresh Frozen Plasma Dehradun | FFP Blood Bank Uttarakhand",
        seoDesc: "Get Fresh Frozen Plasma (FFP) in Dehradun for clotting factor deficiencies and liver diseases. Rapidly frozen to preserve vital proteins.",
        keywords: "Fresh Frozen Plasma Dehradun, FFP Blood Bank Dehradun, Plasma Transfusion",
        image: "/ffp.webp",
        desc: "Fresh Frozen Plasma (FFP) contains essential clotting factors and proteins. We separate and freeze it within 8 hours to preserve its life-saving properties for liver diseases and severe bleeding.",
        howItWorks: "Plasma is separated and stored at -18°C. Before use, it is thawed in a specialized 37°C water bath to reactivate the clotting factors.",
        usedFor: ["Liver disease patients", "Severe bleeding and trauma", "Burn patients in Dehradun", "Reversing anticoagulant effects"],
        benefits: ["Restores essential clotting factors", "Stops severe internal bleeding", "Critical for liver disorder management", "Ensures proper blood coagulation"]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="relative h-[350px]">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>

            <div className="max-w-5xl mx-auto p-10">
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                <h1 className="text-4xl font-bold mb-6 text-slate-900">{service.title}</h1>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">{service.desc}</p>

                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800">How It Works</h2>
                        <p className="text-gray-600">{service.howItWorks}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800">When It Is Used</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            {service.usedFor.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800">Benefits</h2>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {service.benefits.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-600">
                                <span className="h-2 w-2 bg-red-500 rounded-full" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mt-10 text-sm text-gray-400 italic">
                    Serving emergency blood and platelet needs across Dehradun, Uttarakhand with 24/7 support across the city.
                </p>

                <a
                    href="tel:+919084311316"
                    className="mt-8 inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                >
                    <Phone size={18} /> +91 90843 11316
                </a>
            </div>
        </div>
    );
};

export default FFPComponent;
