import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Random Donor Platelets Dehradun | RDP Blood Transfusion Near Me",
    description: "Get Random Donor Platelets (RDP) in Dehradun for thrombocytopenia treatment. Emergency platelet transfusions 24/7 at Uttarakhand Blood Centre.",
    keywords: "Random Donor Platelets Dehradun, RDP Dehradun, Platelet Transfusion Dehradun, Thrombocytopenia Treatment Uttarakhand",
    openGraph: {
        title: "Random Donor Platelets Dehradun | RDP Blood Transfusion Near Me",
        description: "Get Random Donor Platelets (RDP) in Dehradun for thrombocytopenia treatment. Emergency platelet transfusions 24/7 at Uttarakhand Blood Centre.",
        images: ["/RDP.webp"],
    },
};

export default function RDPServicePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="relative h-[350px]">
                <Image src="/RDP.webp" alt="Random Donor Platelets RDP Dehradun" fill className="object-cover" />
            </div>

            <div className="max-w-5xl mx-auto p-10">
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                <a href="https://www.ukbloodcentre.com/contact" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 transition-all duration-300 group-hover:text-red-600 group-hover:underline">
                        Random Donor Platelets (RDP)
                    </h1>
                </a>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Uttarakhand Blood Centre, Dehradun, we provide Random Donor Platelets (RDP) for patients with low platelet counts. RDP is prepared from whole blood donations and serves as a vital component for treating thrombocytopenia and bleeding disorders.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">What are Random Donor Platelets?</h2>
                <p className="text-gray-600 mb-6">
                    Random Donor Platelets (RDP) are platelet concentrates prepared from a single unit of whole blood donation. Unlike Single Donor Platelets (SDP), RDP comes from individual blood donations and typically contains 5.5-10 x 10^10 platelets per unit.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">RDP Collection and Processing</h2>
                <p className="text-gray-600 mb-4">
                    RDP units are prepared through the following process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Whole blood (450 mL) is collected from healthy donors</li>
                    <li>Blood is centrifuged to separate into components (red cells, plasma, platelets)</li>
                    <li>Platelet-rich plasma is extracted and further centrifuged</li>
                    <li>Platelets are concentrated and resuspended in plasma</li>
                    <li>Units are stored at 20-24°C with continuous agitation for up to 5 days</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Medical Uses of RDP</h2>
                <p className="text-gray-600 mb-4">
                    RDP transfusions are essential for patients with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Thrombocytopenia (platelet count &lt; 50,000/μL)</li>
                    <li>Chemotherapy-induced platelet deficiency</li>
                    <li>Bone marrow failure or aplastic anemia</li>
                    <li>Disseminated intravascular coagulation (DIC)</li>
                    <li>Massive transfusion requirements</li>
                    <li>Liver disease with platelet dysfunction</li>
                    <li>Surgical procedures requiring platelet support</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Benefits of RDP Transfusion</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Stops or prevents bleeding episodes</li>
                    <li>Supports platelet function in surgical patients</li>
                    <li>Essential for cancer patients undergoing treatment</li>
                    <li>Improves coagulation in bleeding disorders</li>
                    <li>Critical support for bone marrow transplant patients</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">RDP vs SDP Comparison</h2>
                <p className="text-gray-600 mb-4">
                    Key differences between Random Donor Platelets and Single Donor Platelets:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Random Donor Platelets (RDP)</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• From single whole blood donation</li>
                            <li>• Lower platelet concentration</li>
                            <li>• May require multiple units</li>
                            <li>• More cost-effective</li>
                            <li>• Readily available</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-2">Single Donor Platelets (SDP)</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• From single donor via apheresis</li>
                            <li>• Higher platelet concentration</li>
                            <li>• Equivalent to 6-8 RDP units</li>
                            <li>• Reduced donor exposure</li>
                            <li>• Preferred for repeated transfusions</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Storage and Shelf Life</h2>
                <p className="text-gray-600 mb-6">
                    RDP units must be stored at 20-24°C with continuous gentle agitation to maintain platelet viability. The shelf life is limited to 5 days from collection date, after which platelets lose their effectiveness and increase infection risk.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Emergency RDP Availability in Dehradun</h2>
                <p className="text-gray-600 mb-6">
                    Uttarakhand Blood Centre maintains adequate RDP inventory for emergency situations in Dehradun. We coordinate with local hospitals for urgent platelet requirements, especially during dengue season and for oncology patients.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Quality Control Measures</h2>
                <p className="text-gray-600 mb-6">
                    All RDP units undergo strict quality testing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Bacterial contamination screening</li>
                    <li>pH and platelet count verification</li>
                    <li>Sterility testing</li>
                    <li>ABO and Rh compatibility checking</li>
                    <li>Storage temperature monitoring</li>
                </ul>

                <p className="text-gray-600 mb-8">
                    For urgent RDP requirements or platelet transfusion services in Dehradun, contact Uttarakhand Blood Centre immediately. We ensure timely delivery to hospitals across the city.
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