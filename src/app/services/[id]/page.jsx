import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

// Import service components
import WHBComponent from '../../components/services/components/WHB';
import PRBCComponent from '../../components/services/components/PRBC';
import SDPComponent from '../../components/services/components/SDP';
import RDPComponent from '../../components/services/components/RDP';
import FFPComponent from '../../components/services/components/FFP';
import CRYOComponent from '../../components/services/components/CRYO';

// 1. SEO Optimized Services Data
const services = {
    whb: {
        title: "Whole Human Blood (WHB)",
        seoTitle: "Whole Human Blood Dehradun | 24/7 Blood Bank near Indresh Hospital",
        seoDesc: "Get freshly collected Whole Human Blood in Dehradun. 24x7 emergency blood transfusion services for trauma and major surgeries. Safety screened units.",
        keywords: "Whole Human Blood Dehradun, Blood Bank Dehradun, Emergency Blood Transfusion Uttarakhand",
        image: "/wbc.webp",
        desc: "Whole Human Blood is a complete, unseparated blood unit containing red cells, white cells, platelets, and plasma. As a leading blood centre in Dehradun, we provide 24/7 availability for patients who have suffered massive blood loss or trauma. Our units are strictly screened and stored between 1°C and 6°C to preserve integrity.",
        howItWorks: "Blood is collected from healthy voluntary donors at our Dehradun centre. It undergoes rigorous screening for HIV, Hepatitis, and other diseases before being stored under controlled temperatures for emergency supply.",
        usedFor: ["Major accident or trauma cases in Dehradun", "Severe blood loss during surgery", "Emergency transfusions near Indresh Hospital", "Massive bleeding during childbirth"],
        benefits: ["Comprehensive solution for massive blood loss", "Quick replacement of all components", "Supports oxygen delivery to vital organs", "Stabilizes critically ill patients quickly"]
    },
    prbc: {
        title: "Packed Red Blood Cells (PRBC)",
        seoTitle: "PRBC Blood Services Dehradun | Concentrated Red Blood Cells",
        seoDesc: "High-quality PRBC in Dehradun for anemia and surgery patients. Concentrated red cells for maximum oxygen carrying capacity. Available 24/7.",
        keywords: "PRBC Blood Services Dehradun, Red Blood Cells Dehradun, Blood Bank for Anemia",
        image: "/prbc.webp",
        desc: "Packed Red Blood Cells (PRBC) are vital for treating symptomatic anemia or acute blood loss. By separating red cells from plasma, we provide a concentrated dose of hemoglobin, increasing oxygen-carrying capacity without fluid overload.",
        howItWorks: "Using advanced centrifuge technology, we separate red cells from whole blood. Each unit is cross-matched for ABO and Rh compatibility to ensure safe administration.",
        usedFor: ["Chronic Anemia patients", "Pre and Post-surgery support", "Accident trauma recovery", "Cancer therapy support in Dehradun"],
        benefits: ["Improves hemoglobin levels", "Targeted treatment for blood loss", "Reduces risk of circulatory overload", "Essential for tissue oxygenation"]
    },
    sdp: {
        title: "Plateletpheresis (Single Donor Platelets – SDP)",
        seoTitle: "SDP Platelets Dehradun | Single Donor Platelets Near Me | SDP Blood Centre",
        seoDesc: "Best SDP Blood Centre in Dehradun providing Single Donor Platelets (SDP) 24/7. Emergency platelet transfusion & apheresis services near Indresh Hospital.",
        keywords: "SDP Blood Centre Dehradun, Single Donor Platelets Dehradun, Platelet Apheresis Dehradun, SDP Platelets near me",
        image: "/SDP.webp",
        desc: "Single Donor Platelets (SDP) are collected using advanced apheresis machines. This is the gold standard for dengue patients and cancer therapy in Dehradun. One unit of SDP is equivalent to 6-8 units of regular platelets.",
        howItWorks: "Through plateletpheresis, platelets are extracted while other components are returned to the donor. This ensures a high-yield, pure concentration of platelets from a single screened donor.",
        usedFor: ["Dengue patients with critical platelet counts", "Cancer chemotherapy in Dehradun", "Emergency platelet transfusion", "Major surgeries requiring high-yield platelets"],
        benefits: ["Highest platelet concentration available", "Reduced risk of reaction", "Single donor source is safer", "Most effective for rapid recovery"]
    },
    rdp: {
        title: "Random Donor Platelets (RDP)",
        seoTitle: "Random Donor Platelets Dehradun | Platelet Donation & Supply",
        seoDesc: "Get Random Donor Platelets (RDP) in Dehradun. Reliable platelet blood bank services for dengue and bleeding disorders. 24x7 emergency supply.",
        keywords: "Platelet Donation Dehradun, RDP Platelets Dehradun, Platelet Blood Bank Dehradun",
        image: "/RDP.webp",
        desc: "Random Donor Platelets (RDP) are separated from regular blood donations. They are essential for managing platelet levels during dengue outbreaks in the Dehradun region.",
        howItWorks: "Platelets are extracted from whole blood units via centrifugation and stored in a specialized incubator with constant agitation to ensure they remain active.",
        usedFor: ["Dengue fever treatment in Dehradun", "General bleeding disorders", "Routine surgical support", "Maintaining platelet counts"],
        benefits: ["Immediate help for bleeding control", "Increases platelet levels effectively", "Crucial for emergency care", "Cost-effective platelet support"]
    },
    ffp: {
        title: "Fresh Frozen Plasma (FFP)",
        seoTitle: "Fresh Frozen Plasma Dehradun | FFP Blood Bank Uttarakhand",
        seoDesc: "Get Fresh Frozen Plasma (FFP) in Dehradun for clotting factor deficiencies and liver diseases. Rapidly frozen to preserve vital proteins.",
        keywords: "Fresh Frozen Plasma Dehradun, FFP Blood Bank Dehradun, Plasma Transfusion",
        image: "/ffp.webp",
        desc: "Fresh Frozen Plasma (FFP) contains essential clotting factors and proteins. We separate and freeze it within 8 hours to preserve its life-saving properties for liver diseases and severe bleeding.",
        howItWorks: "Plasma is separated and stored at -18°C. Before use, it is thawed in a specialized 37°C water bath to reactivate the clotting factors.",
        usedFor: ["Liver disease patients", "Severe bleeding and trauma", "Burn patients in Dehradun", "Reversing anticoagulant effects"],
        benefits: ["Restores essential clotting factors", "Stops severe internal bleeding", "Critical for liver disorder management", "Ensures proper blood coagulation"]
    },
    cryo: {
        title: "Cryoprecipitate",
        seoTitle: "Cryoprecipitate Dehradun | Concentrated Clotting Factors",
        seoDesc: "Leading supplier of Cryoprecipitate in Dehradun. Highly concentrated clotting factors for Hemophilia and massive trauma.",
        keywords: "Cryoprecipitate Dehradun, Hemophilia Treatment Dehradun, Clotting Factor Blood Bank",
        image: "/Cryoprecipitate.webp",
        desc: "Cryoprecipitate is a specialized blood component rich in Fibrinogen and Factor VIII. It is the most concentrated way to treat hemophilia and severe bleeding disorders.",
        howItWorks: "FFP is thawed slowly at controlled temperatures, creating a concentrated precipitate rich in clotting factors, which is then re-frozen for emergency use.",
        usedFor: ["Hemophilia treatment in Uttarakhand", "Fibrinogen deficiency", "Massive trauma bleeding", "Severe coagulation deficiencies"],
        benefits: ["Ultra-high concentration of factors", "Superior for bleeding control", "Life-saving for hemophilia", "Targeted therapy for trauma"]
    }
};

// 2. Metadata Generator for SEO (Ye Google ko info bhejta hai)
export async function generateMetadata({ params }) {
    const { id } = await params;
    const service = services[id];

    if (!service) return { title: "Service Not Found" };

    return {
        title: service.seoTitle,
        description: service.seoDesc,
        keywords: service.keywords,
        openGraph: {
            title: service.seoTitle,
            description: service.seoDesc,
            images: [service.image],
        },
    };
}

// 3. Static Params for faster indexing
export async function generateStaticParams() {
    return Object.keys(services).map((id) => ({ id }));
}

// 4. The Component
export default async function ServiceDetail({ params }) {
    const { id } = await params;
    const service = services[id];

    if (!service) {
        return <div className="text-center py-40 text-xl">Service Not Found</div>;
    }

    // Render appropriate component based on id
    switch (id) {
        case 'whb':
            return <WHBComponent />;
        case 'prbc':
            return <PRBCComponent />;
        case 'sdp':
            return <SDPComponent />;
        case 'rdp':
            return <RDPComponent />;
        case 'ffp':
            return <FFPComponent />;
        case 'cryo':
            return <CRYOComponent />;
        default:
            return <div className="text-center py-40 text-xl">Service Not Found</div>;
    }
}