import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const WHBComponent = () => {
    const service = {
        title: "Whole Human Blood (WHB)",
        seoTitle: "Whole Human Blood Dehradun | 24/7 Blood Bank near Indresh Hospital",
        seoDesc: "Get freshly collected Whole Human Blood in Dehradun. 24x7 emergency blood transfusion services for trauma and major surgeries. Safety screened units.",
        keywords: "Whole Human Blood Dehradun, Blood Bank Dehradun, Emergency Blood Transfusion Uttarakhand",
        image: "/wbc.webp",
        desc: "Whole Human Blood is a complete, unseparated blood unit containing red cells, white cells, platelets, and plasma. As a leading blood centre in Dehradun, we provide 24/7 availability for patients who have suffered massive blood loss or trauma. Our units are strictly screened and stored between 1°C and 6°C to preserve integrity.",
        howItWorks: "Blood is collected from healthy voluntary donors at our Dehradun centre. It undergoes rigorous screening for HIV, Hepatitis, and other diseases before being stored under controlled temperatures for emergency supply.",
        usedFor: ["Major accident or trauma cases in Dehradun", "Severe blood loss during surgery", "Emergency transfusions near Indresh Hospital", "Massive bleeding during childbirth"],
        benefits: ["Comprehensive solution for massive blood loss", "Quick replacement of all components", "Supports oxygen delivery to vital organs", "Stabilizes critically ill patients quickly"]
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

export default WHBComponent;
