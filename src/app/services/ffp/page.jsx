import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Fresh Frozen Plasma Dehradun | FFP Blood Transfusion Near Me",
    description: "Get Fresh Frozen Plasma (FFP) in Dehradun for clotting factor replacement and bleeding disorders. Emergency plasma transfusions 24/7 at Uttarakhand Blood Centre.",
    keywords: "Fresh Frozen Plasma Dehradun, FFP Dehradun, Plasma Transfusion Dehradun, Clotting Factors Uttarakhand",
    openGraph: {
        title: "Fresh Frozen Plasma Dehradun | FFP Blood Transfusion Near Me",
        description: "Get Fresh Frozen Plasma (FFP) in Dehradun for clotting factor replacement and bleeding disorders. Emergency plasma transfusions 24/7 at Uttarakhand Blood Centre.",
        images: ["/FFP.webp"],
    },
};

export default function FFPServicePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="relative h-[350px]">
                <Image src="/FFP.webp" alt="Fresh Frozen Plasma FFP Dehradun" fill className="object-cover" />
            </div>

            <div className="max-w-5xl mx-auto p-10">
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                <a href="https://www.ukbloodcentre.com/contact" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 transition-all duration-300 group-hover:text-red-600 group-hover:underline">
                        Fresh Frozen Plasma (FFP)
                    </h1>
                </a>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Uttarakhand Blood Centre, Dehradun, we provide Fresh Frozen Plasma (FFP) for patients requiring plasma transfusions. FFP contains all clotting factors and proteins essential for blood coagulation and maintaining plasma volume.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">What is Fresh Frozen Plasma?</h2>
                <p className="text-gray-600 mb-6">
                    Fresh Frozen Plasma (FFP) is the liquid portion of blood that has been frozen within 8 hours of collection. It contains all coagulation factors, albumin, immunoglobulins, and other plasma proteins necessary for normal blood function.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">FFP Processing and Storage</h2>
                <p className="text-gray-600 mb-4">
                    FFP is prepared through the following process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Whole blood is collected and centrifuged to separate plasma</li>
                    <li>Plasma is frozen at -18°C or colder within 8 hours</li>
                    <li>Units contain approximately 200-250 mL of plasma</li>
                    <li>Thawed FFP can be stored at 1-6°C for up to 5 days</li>
                    <li>Frozen FFP has a shelf life of 1 year when stored properly</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Clotting Factors in FFP</h2>
                <p className="text-gray-600 mb-4">
                    FFP contains essential clotting factors including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Fibrinogen (Factor I)</li>
                    <li>Prothrombin (Factor II)</li>
                    <li>Tissue Thromboplastin (Factor III)</li>
                    <li>Calcium (Factor IV)</li>
                    <li>Proaccelerin (Factor V)</li>
                    <li>Proconvertin (Factor VII)</li>
                    <li>Antihemophilic Factor (Factor VIII)</li>
                    <li>Christmas Factor (Factor IX)</li>
                    <li>Stuart-Prower Factor (Factor X)</li>
                    <li>Plasma Thromboplastin Antecedent (Factor XI)</li>
                    <li>Hageman Factor (Factor XII)</li>
                    <li>Fibrin Stabilizing Factor (Factor XIII)</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Medical Uses of FFP</h2>
                <p className="text-gray-600 mb-4">
                    FFP transfusions are indicated for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Coagulation factor deficiencies (multiple factor deficiencies)</li>
                    <li>Liver disease with coagulopathy</li>
                    <li>Disseminated intravascular coagulation (DIC)</li>
                    <li>Massive transfusion with dilutional coagulopathy</li>
                    <li>Warfarin reversal when prothrombin complex concentrates unavailable</li>
                    <li>Thrombotic thrombocytopenic purpura (TTP)</li>
                    <li>Replacement of isolated factor deficiencies when specific concentrates unavailable</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Benefits of FFP Transfusion</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Provides all coagulation factors simultaneously</li>
                    <li>Corrects multiple clotting factor deficiencies</li>
                    <li>Essential for liver disease patients</li>
                    <li>Supports massive transfusion protocols</li>
                    <li>Improves hemostasis in bleeding patients</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">FFP vs Other Plasma Products</h2>
                <p className="text-gray-600 mb-4">
                    Comparison with other plasma derivatives:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Fresh Frozen Plasma (FFP)</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• All coagulation factors</li>
                            <li>• Frozen within 8 hours</li>
                            <li>• Universal donor (AB)</li>
                            <li>• Requires thawing</li>
                            <li>• 1-year shelf life when frozen</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Frozen Plasma (FP)</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• All coagulation factors</li>
                            <li>• Frozen within 24 hours</li>
                            <li>• Same as FFP but older</li>
                            <li>• Reduced factor levels</li>
                            <li>• 1-year shelf life</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Cryoprecipitate</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fibrinogen, Factor VIII, vWF</li>
                            <li>• Concentrated clotting factors</li>
                            <li>• Smaller volume</li>
                            <li>• Faster thawing</li>
                            <li>• 1-year shelf life</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Emergency FFP Availability in Dehradun</h2>
                <p className="text-gray-600 mb-6">
                    Uttarakhand Blood Centre maintains frozen FFP inventory for emergency transfusions in Dehradun. We ensure rapid thawing and delivery to hospitals for critical cases including trauma, liver failure, and massive bleeding.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Quality Control and Safety</h2>
                <p className="text-gray-600 mb-6">
                    All FFP units undergo comprehensive testing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>ABO and Rh typing verification</li>
                    <li>Infectious disease screening (HIV, HBV, HCV, Syphilis)</li>
                    <li>Visual inspection for clots or discoloration</li>
                    <li>Storage temperature monitoring</li>
                    <li>Expiry date verification</li>
                </ul>

                <p className="text-gray-600 mb-8">
                    For urgent FFP requirements or plasma transfusion services in Dehradun, contact Uttarakhand Blood Centre immediately. We provide 24/7 emergency plasma support to local hospitals.
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