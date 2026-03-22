import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const PRBCComponent = () => {
    const service = {
        title: "Packed Red Blood Cells (PRBC)",
        seoTitle: "PRBC Blood Services Dehradun | Concentrated Red Blood Cells",
        seoDesc: "High-quality PRBC in Dehradun for anemia and surgery patients. Concentrated red cells for maximum oxygen carrying capacity. Available 24/7.",
        keywords: "PRBC Blood Services Dehradun, Red Blood Cells Dehradun, Blood Bank for Anemia",
        image: "/prbc.webp",
        desc: "Packed Red Blood Cells (PRBC) are vital for treating symptomatic anemia or acute blood loss. By separating red cells from plasma, we provide a concentrated dose of hemoglobin, increasing oxygen-carrying capacity without fluid overload.",
        howItWorks: "Using advanced centrifuge technology, we separate red cells from whole blood. Each unit is cross-matched for ABO and Rh compatibility to ensure safe administration.",
        usedFor: ["Chronic Anemia patients", "Pre and Post-surgery support", "Accident trauma recovery", "Cancer therapy support in Dehradun"],
        benefits: ["Improves hemoglobin levels", "Targeted treatment for blood loss", "Reduces risk of circulatory overload", "Essential for tissue oxygenation"]
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

export default PRBCComponent;
