import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Cryoprecipitate Dehradun | Cryo Blood Transfusion Near Me",
    description: "Get Cryoprecipitate (Cryo) in Dehradun for fibrinogen and Factor VIII replacement therapy. Emergency cryoprecipitate transfusions 24/7 at Uttarakhand Blood Centre.",
    keywords: "Cryoprecipitate Dehradun, Cryo Dehradun, Fibrinogen Replacement Dehradun, Hemophilia Treatment Uttarakhand",
    openGraph: {
        title: "Cryoprecipitate Dehradun | Cryo Blood Transfusion Near Me",
        description: "Get Cryoprecipitate (Cryo) in Dehradun for fibrinogen and Factor VIII replacement therapy. Emergency cryoprecipitate transfusions 24/7 at Uttarakhand Blood Centre.",
        images: ["/Cryoprecipitate.webp"],
    },
};

export default function CryoServicePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="relative h-[350px]">
                <Image src="/Cryoprecipitate.webp" alt="Cryoprecipitate Cryo Dehradun" fill className="object-cover" />
            </div>

            <div className="max-w-5xl mx-auto p-10">
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                <a href="https://www.ukbloodcentre.com/contact" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 transition-all duration-300 group-hover:text-red-600 group-hover:underline">
                        Cryoprecipitate (Cryo)
                    </h1>
                </a>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Uttarakhand Blood Centre, Dehradun, we provide Cryoprecipitate (Cryo) for patients requiring concentrated clotting factors. Cryo is a specialized blood component rich in fibrinogen, Factor VIII, and von Willebrand factor, essential for treating bleeding disorders.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">What is Cryoprecipitate?</h2>
                <p className="text-gray-600 mb-6">
                    Cryoprecipitate (Cryo) is a concentrated blood component prepared by thawing frozen plasma and collecting the precipitated proteins. It contains high concentrations of fibrinogen, Factor VIII, Factor XIII, and von Willebrand factor (vWF).
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Cryo Processing and Preparation</h2>
                <p className="text-gray-600 mb-4">
                    Cryoprecipitate is prepared through the following process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Fresh Frozen Plasma (FFP) is thawed at 1-6°C</li>
                    <li>Cold-insoluble proteins precipitate out</li>
                    <li>Supernatant plasma is removed, leaving concentrated cryoprecipitate</li>
                    <li>Refrozen at -18°C or colder for storage</li>
                    <li>Each unit contains 10-20 mL of concentrated clotting factors</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Key Components in Cryoprecipitate</h2>
                <p className="text-gray-600 mb-4">
                    Cryo is rich in essential clotting proteins:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Fibrinogen (Factor I):</strong> 150-250 mg per unit</li>
                    <li><strong>Factor VIII:</strong> 80-150 IU per unit</li>
                    <li><strong>Factor XIII:</strong> 20-30 IU per unit</li>
                    <li><strong>von Willebrand Factor (vWF):</strong> High concentration</li>
                    <li><strong>Fibronectin:</strong> Structural protein</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Medical Uses of Cryoprecipitate</h2>
                <p className="text-gray-600 mb-4">
                    Cryo transfusions are indicated for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Hemophilia A (Factor VIII deficiency)</li>
                    <li>Von Willebrand disease</li>
                    <li>Hypofibrinogenemia (fibrinogen deficiency)</li>
                    <li>Dysfibrinogenemia</li>
                    <li>Factor XIII deficiency</li>
                    <li>Uremic bleeding</li>
                    <li>Massive transfusion with dilutional coagulopathy</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Benefits of Cryo Transfusion</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Provides concentrated clotting factors in small volume</li>
                    <li>Effective for fibrinogen replacement</li>
                    <li>Essential for hemophilia treatment</li>
                    <li>Rapid correction of bleeding disorders</li>
                    <li>Reduces transfusion volume in critically ill patients</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Cryo vs Other Blood Components</h2>
                <p className="text-gray-600 mb-4">
                    Comparison with related blood products:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Cryoprecipitate</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fibrinogen, FVIII, vWF</li>
                            <li>• Small volume (10-20 mL)</li>
                            <li>• Concentrated factors</li>
                            <li>• Fast thawing (30-60 min)</li>
                            <li>• 1-year shelf life frozen</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Fresh Frozen Plasma</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• All coagulation factors</li>
                            <li>• Large volume (200-250 mL)</li>
                            <li>• Dilute factor concentration</li>
                            <li>• Slow thawing (30-45 min)</li>
                            <li>• 1-year shelf life frozen</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Factor Concentrates</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Specific factor replacement</li>
                            <li>• Very small volume</li>
                            <li>• Highly concentrated</li>
                            <li>• Ready to use</li>
                            <li>• Long shelf life</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Storage and Shelf Life</h2>
                <p className="text-gray-600 mb-6">
                    Cryoprecipitate is stored frozen at -18°C or colder with a shelf life of 1 year. Once thawed, it should be used within 6 hours if stored at room temperature or 24 hours if refrigerated at 1-6°C. Pooling multiple units is common for adequate dosing.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Emergency Cryo Availability in Dehradun</h2>
                <p className="text-gray-600 mb-6">
                    Uttarakhand Blood Centre maintains cryoprecipitate inventory for emergency situations in Dehradun. We provide immediate access for bleeding disorders, surgical bleeding, and trauma cases requiring rapid fibrinogen or Factor VIII replacement.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Quality Assurance</h2>
                <p className="text-gray-600 mb-6">
                    All cryoprecipitate units undergo rigorous quality control:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Factor VIII and fibrinogen content verification</li>
                    <li>Infectious disease screening</li>
                    <li>Visual inspection for clots or contamination</li>
                    <li>Proper labeling and traceability</li>
                    <li>Temperature monitoring throughout storage</li>
                </ul>

                <p className="text-gray-600 mb-8">
                    For urgent cryoprecipitate requirements or treatment of bleeding disorders in Dehradun, contact Uttarakhand Blood Centre immediately. We ensure timely delivery for hemophilia and other clotting factor deficiencies.
                </p>

                <a
                    href="tel:+919084311316"
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                >
                    <Phone size={18} /> +91 90843 11316
                </a>
            </div>
        </div>
    );
}