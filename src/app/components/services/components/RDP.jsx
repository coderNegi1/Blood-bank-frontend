import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const RDPComponent = () => {
    const service = {
        title: "Random Donor Platelets (RDP)",
        seoTitle: "Random Donor Platelets Dehradun | Platelet Donation & Supply",
        seoDesc: "Get Random Donor Platelets (RDP) in Dehradun. Reliable platelet blood bank services for dengue and bleeding disorders. 24x7 emergency supply.",
        keywords: "Platelet Donation Dehradun, RDP Platelets Dehradun, Platelet Blood Bank Dehradun",
        image: "/RDP.webp",
        desc: "Random Donor Platelets (RDP) are separated from regular blood donations. They are essential for managing platelet levels during dengue outbreaks in the Dehradun region.",
        howItWorks: "Platelets are extracted from whole blood units via centrifugation and stored in a specialized incubator with constant agitation to ensure they remain active.",
        usedFor: ["Dengue fever treatment in Dehradun", "General bleeding disorders", "Routine surgical support", "Maintaining platelet counts"],
        benefits: ["Immediate help for bleeding control", "Increases platelet levels effectively", "Crucial for emergency care", "Cost-effective platelet support"]
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

export default RDPComponent;
