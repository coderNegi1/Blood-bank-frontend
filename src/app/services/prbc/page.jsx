import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Packed Red Blood Cells Dehradun | PRBC Blood Transfusion Near Me",
    description: "Get Packed Red Blood Cells (PRBC) in Dehradun for anemia treatment and blood loss recovery. 24/7 emergency PRBC transfusions at Uttarakhand Blood Centre.",
    keywords: "Packed Red Blood Cells Dehradun, PRBC Dehradun, Blood Transfusion Dehradun, Anemia Treatment Uttarakhand",
    openGraph: {
        title: "Packed Red Blood Cells Dehradun | PRBC Blood Transfusion Near Me",
        description: "Get Packed Red Blood Cells (PRBC) in Dehradun for anemia treatment and blood loss recovery. 24/7 emergency PRBC transfusions at Uttarakhand Blood Centre.",
        images: ["/PRBC.webp"],
    },
};

export default function PRBCServicePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="relative h-[350px]">
                <Image src="/PRBC.webp" alt="Packed Red Blood Cells PRBC Dehradun" fill className="object-cover" />
            </div>

            <div className="max-w-5xl mx-auto p-10">
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                <a href="https://www.ukbloodcentre.com/contact" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 transition-all duration-300 group-hover:text-red-600 group-hover:underline">
                        Packed Red Blood Cells (PRBC)
                    </h1>
                </a>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Uttarakhand Blood Centre, Dehradun, we provide Packed Red Blood Cells (PRBC) to patients requiring red cell transfusions. PRBC is the most commonly transfused blood component, essential for treating anemia, blood loss, and various medical conditions.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">What are Packed Red Blood Cells?</h2>
                <p className="text-gray-600 mb-6">
                    Packed Red Blood Cells (PRBC) are the concentrated red blood cell component obtained after separating plasma and other components from whole blood. One unit of PRBC contains approximately 200-250 mL of red cells and provides the oxygen-carrying capacity needed by the body.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">PRBC Processing and Storage</h2>
                <p className="text-gray-600 mb-4">
                    PRBC units are prepared using advanced blood separation techniques:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Whole blood is collected and centrifuged to separate components</li>
                    <li>Plasma is removed, leaving concentrated red blood cells</li>
                    <li>Additive solutions like SAGM (Saline Adenine Glucose Mannitol) are added to preserve red cells</li>
                    <li>Units are leukodepleted to reduce transfusion reactions</li>
                    <li>Stored at 2-6°C for up to 42 days</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Medical Uses of PRBC</h2>
                <p className="text-gray-600 mb-4">
                    PRBC transfusions are indicated for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Symptomatic anemia (hemoglobin &lt; 7 g/dL or hematocrit &lt; 21%)</li>
                    <li>Acute blood loss requiring volume and oxygen-carrying capacity</li>
                    <li>Chronic anemia due to kidney disease, cancer treatment, or nutritional deficiencies</li>
                    <li>Sickle cell disease and thalassemia requiring regular transfusions</li>
                    <li>Surgical patients with anticipated blood loss</li>
                    <li>Trauma patients with significant bleeding</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Benefits of PRBC Transfusion</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Increases oxygen-carrying capacity of blood</li>
                    <li>Improves tissue oxygenation and organ function</li>
                    <li>Reduces symptoms of anemia (fatigue, shortness of breath, weakness)</li>
                    <li>Supports recovery from surgery and trauma</li>
                    <li>Essential for patients undergoing chemotherapy or radiation</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Donor Eligibility and Safety</h2>
                <p className="text-gray-600 mb-6">
                    PRBC units come from healthy voluntary donors who meet strict eligibility criteria. All donations undergo comprehensive screening for infectious diseases including HIV, Hepatitis B/C, Syphilis, and other pathogens. Cross-matching ensures compatibility between donor and recipient.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Emergency PRBC Availability in Dehradun</h2>
                <p className="text-gray-600 mb-6">
                    Uttarakhand Blood Centre maintains 24/7 emergency PRBC availability for critical cases in Dehradun and surrounding areas. We serve major hospitals including Indresh Hospital, Max Hospital, and Himalayan Hospital with immediate blood component support.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Quality Assurance</h2>
                <p className="text-gray-600 mb-6">
                    All PRBC units undergo rigorous quality control testing including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Blood group typing and cross-matching</li>
                    <li>Infectious disease screening</li>
                    <li>Hemoglobin S screening</li>
                    <li>Storage temperature monitoring</li>
                    <li>Expiry date verification</li>
                </ul>

                <p className="text-gray-600 mb-8">
                    For emergency PRBC requirements or to learn more about blood transfusion services in Dehradun, contact Uttarakhand Blood Centre immediately.
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