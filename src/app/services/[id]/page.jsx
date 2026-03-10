import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

// const services = {
//         whb: {
//             title: "Whole Human Blood",
//             image: "https://images.unsplash.com/photo-1615461066841-6116ecaaba7c",
//             desc: "Freshly collected whole blood containing all components. Vital for massive blood loss and exchange transfusions."
//         },

//         prbc: {
//             title: "PRBC Blood Services",
//             image: "https://images.unsplash.com/photo-1579152276506-444c0177ce9e",
//             desc: "Packed Red Blood Cells processed with high-end technology for maximum efficacy. Available 24x7 for surgeries and trauma cases."
//         },

//         sdp: {
//             title: "Plateletpheresis (SDP) – 24×7",
//             image: "https://images.unsplash.com/photo-1536856789559-1ce4996d9a16",
//             desc: "Single Donor Platelet (SDP) collection helps patients fighting cancer, dengue, or undergoing major surgeries."
//         },

//         rdp: {
//             title: "Random Donor Platelets",
//             image: "https://images.unsplash.com/photo-1581594632702-fbd83bc3983a",
//             desc: "Platelets separated from individual whole blood units to maintain platelet counts."
//         },

//         ffp: {
//             title: "Fresh Frozen Plasma",
//             image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50",
//             desc: "Rapidly frozen plasma preserving clotting factors for liver diseases and severe bleeding."
//         },

//         plasmapheresis: {
//             title: "Plasmapheresis",
//             image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
//             desc: "Advanced plasma separation procedure used for autoimmune disorders treatment."
//         },

//         cryo: {
//             title: "Cryoprecipitate",
//             image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
//             desc: "Concentrated clotting factors used for hemophilia and coagulation deficiencies."
//         }
// };


const services = {

whb: {
title: "Whole Human Blood",
image: "/wbc.png",

desc:
"Whole Human Blood is freshly collected blood that contains all major components including red blood cells, white blood cells, platelets, and plasma. It is mainly used when a patient has lost a large amount of blood due to trauma, surgery, or severe medical conditions. Gemini said Whole Human Blood is a complete, unseparated blood unit that contains all essential components including red cells, white cells, platelets, and plasma, making it a comprehensive solution for treating patients who have suffered massive blood loss or trauma. While modern hospitals often prefer using specific blood components to avoid fluid overload, whole blood remains invaluable in emergency situations because it simultaneously restores oxygen-carrying capacity and maintains circulating volume. A standard unit contains approximately 450 mL of blood mixed with an anticoagulant solution and is strictly stored under refrigeration between 1°C and 6°C to preserve its integrity for up to 35 days. For a successful transfusion, the unit must be an identical ABO and Rh match to the recipient to ensure safety and prevent adverse immune reactions",

howItWorks:
"Whole blood is collected from healthy donors at the blood centre. The donated blood is screened for infections such as HIV, Hepatitis B, Hepatitis C, and other diseases. After testing, it is stored under controlled temperature conditions and supplied to hospitals for transfusion.",

usedFor: [
"Major accident or trauma cases",
"Severe blood loss during surgery",
"Emergency transfusions",
"Massive bleeding during childbirth"
],

benefits: [
"Provides all blood components together",
"Quick replacement for blood loss",
"Supports oxygen delivery to organs",
"Helps stabilize critically ill patients"
]
},

prbc: {
title: "Packed Red Blood Cells (PRBC)",
image: "/prbc.png",

desc:
"Packed Red Blood Cells are concentrated red cells separated from whole blood. PRBC transfusions are mainly used to increase oxygen carrying capacity in patients with anemia or severe blood loss.Gemini said Packed Red Blood Cells (PRBC) are a vital blood component prepared by separating red cells from whole blood using a centrifuge, effectively removing most of the plasma and reducing the overall volume. This concentration process ensures that patients receive the maximum oxygen-carrying capacity without the risk of fluid overload, which is particularly critical for those with cardiac or renal sensitivities. A single unit of PRBC typically has a volume of 250–350 mL and is stored under strictly controlled refrigeration between 1°C and 6°C. The primary clinical indication for PRBC transfusion is the treatment of symptomatic anemia or acute blood loss resulting from trauma or major surgery. By delivering a concentrated dose of hemoglobin, one unit of PRBC can increase an adult's hemoglobin level by approximately 1 g/dL and their hematocrit by about 3%. Before administration, rigorous ABO and Rh typing, along with cross-matching, are mandatory to ensure compatibility and prevent life-threatening hemolytic reactions. In modern medicine, PRBCs are often modified further through leukoreduction to minimize febrile reactions or irradiation to prevent Graft-versus-Host Disease in immunocompromised patients. The infusion is typically completed within two to four hours, making it an efficient and life-saving intervention for restoring tissue oxygenation.",

howItWorks:
"After whole blood donation, the blood is processed using centrifuge machines to separate red blood cells from plasma and platelets. The packed cells are stored safely and used when a patient requires improved hemoglobin levels.",

usedFor: [
"Anemia patients",
"Surgery patients",
"Accident trauma patients",
"Cancer therapy patients"
],

benefits: [
"Improves hemoglobin levels",
"Increases oxygen supply to body tissues",
"Safer and more targeted than whole blood",
"Reduces risk of fluid overload"
]
},

sdp: {
title: "Plateletpheresis (Single Donor Platelets – SDP)",
image: "/SDP.png",

desc:
"Single Donor Platelets are collected from a single donor using an advanced machine called an apheresis machine. SDP platelets are highly effective and commonly used for dengue patients, cancer therapy, and bone marrow transplant patients.",

howItWorks:
"During plateletpheresis, blood is drawn from the donor and passed through a machine that separates platelets. The remaining blood components are returned back to the donor. This process collects a large number of platelets from a single donor.",

usedFor: [
"Dengue patients with low platelet count",
"Cancer chemotherapy patients",
"Bone marrow transplant patients",
"Major surgeries requiring platelet support"
],

benefits: [
"Higher platelet concentration",
"Reduced risk of infection",
"Single donor reduces complications",
"More effective for critical patients"
]
},

rdp: {
title: "Random Donor Platelets (RDP)",
image: "f/RDP.png",

desc:
"Random Donor Platelets are platelets extracted from whole blood donations. Multiple platelet units from different donors are combined to provide platelet support to patients. Random Donor Platelets (RDP), often referred to as 'recovered platelets,' are a blood component prepared by separating platelets from a single unit of whole blood through centrifugation. Because the quantity of platelets from one whole blood donation is small, multiple units—typically four to six—must be pooled together to create a single adult dose. RDPs are stored at room temperature (20°C to 24°C) under constant agitation in a platelet incubator to maintain their functionality, and they have a short shelf life of only 5 to 7 days.",

howItWorks:
"After whole blood donation, platelets are separated using laboratory equipment. These platelets are stored for a short duration and are supplied to hospitals when patients need platelet transfusion.",

usedFor: [
"Dengue fever treatment",
"Patients with low platelet count",
"Bleeding disorders",
"Support during surgeries"
],

benefits: [
"Helps control bleeding",
"Increases platelet levels quickly",
"Supports clotting process",
"Essential for critical care treatment"
]
},

ffp: {
title: "Fresh Frozen Plasma (FFP)",
image: "/ffp.png",

desc:
"Fresh Frozen Plasma is the liquid portion of blood that contains clotting factors and proteins. It is frozen quickly after collection to preserve these important components. Gemini saiD. Fresh Frozen Plasma (FFP) is the liquid portion of whole blood that is separated and frozen within eight hours of collection to preserve essential clotting factors and proteins. Typically stored at -18°C or colder for up to one year, FFP is primarily used to manage bleeding disorders, treat multiple coagulation factor deficiencies, and reverse the effects of anticoagulant medications like warfarin. Before administration, the unit is thawed in a specialized water bath at 37°C, after which it must be transfused as soon as possible to ensure the clotting factors remain active. Because it contains antibodies, FFP must be ABO-compatible with the recipient's red cells, though Rh matching is generally not required as it contains no red blood cells.",

howItWorks:
"Plasma is separated from donated blood and frozen at very low temperatures. When required, it is thawed and transfused into patients to help treat clotting disorders or severe bleeding.",

usedFor: [
"Liver disease patients",
"Severe bleeding cases",
"Burn patients",
"Clotting factor deficiencies"
],

benefits: [
"Restores clotting factors",
"Helps stop bleeding",
"Supports treatment of liver disorders",
"Improves blood coagulation"
]
},

// plasmapheresis: {
// title: "Plasmapheresis",
// image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",

// desc:
// "Plasmapheresis is a specialized medical procedure in which plasma is separated from blood and either removed or replaced with other fluids. It is used in the treatment of autoimmune and neurological diseases. Plasmapheresis is a specialized medical procedure that uses an automated machine to separate and remove the plasma from a patient's or donor's blood while returning the cellular components, such as red blood cells and platelets, back into their circulation. In a clinical setting, it is often referred to as Therapeutic Plasma Exchange (TPE), where the patient's 'unhealthy' plasma containing harmful antibodies or toxins is replaced with a substitute like albumin or Fresh Frozen Plasma (FFP). This process is vital for treating autoimmune disorders such as Guillain-Barré syndrome, Myasthenia Gravis, and certain kidney or blood diseases. During the procedure, anticoagulants are used to prevent the blood from clotting inside the machine, and the entire process typically takes about two to four hours depending on the volume being exchanged.",

// howItWorks:
// "Blood is taken from the patient and passed through a machine that separates plasma from other blood components. The remaining blood cells are returned to the patient while the plasma is replaced with donor plasma or special solutions.",

// usedFor: [
// "Autoimmune diseases",
// "Neurological disorders",
// "Certain blood disorders",
// "Therapeutic plasma exchange"
// ],

// benefits: [
// "Removes harmful antibodies",
// "Improves immune system response",
// "Helps treat rare diseases",
// "Supports advanced medical therapy"
// ]
// },

cryo: {
title: "Cryoprecipitate",
image: "/Cryoprecipitate.png",

desc:
"Cryoprecipitate is a blood component derived from plasma that contains concentrated clotting factors such as fibrinogen, factor VIII, and von Willebrand factor.",

howItWorks:
"Fresh frozen plasma is slowly thawed at controlled temperatures which produces a concentrated precipitate rich in clotting factors. This cryoprecipitate is then collected and stored for transfusion.",

usedFor: [
"Hemophilia treatment",
"Severe bleeding disorders",
"Fibrinogen deficiency",
"Massive trauma bleeding"
],

benefits: [
"High concentration of clotting factors",
"Effective for bleeding control",
"Essential for hemophilia treatment",
"Supports emergency transfusion therapy"
]
}

};

export default async function ServiceDetail({ params }) {

    const { id } = await params; 

    const service = services[id];

    if (!service) {
        return (
            <div className="text-center py-40 text-xl">
                Service Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Banner Image */}
            <div className="relative h-[350px]">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-5xl mx-auto p-10">

                {/* Back Button */}
                <Link href="/services" className="flex items-center gap-2 text-red-600 mb-8">
                    <ArrowLeft size={18} /> Back
                </Link>

                {/* Title */}
                <h1 className="text-4xl font-bold mb-6">
                    {service.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-10">
                    {service.desc}
                </p>

                {/* How It Works */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-600">
                        {service.howItWorks}
                    </p>
                </div>

                {/* When It Is Used */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        When It Is Used
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {service.usedFor.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Benefits */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        Benefits
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {service.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Call Button */}
                <a
                    href="tel:+919084311316"
                    className="mt-6 inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
                >
                    <Phone size={18} />
                    Call Now
                </a>

            </div>
        </div>
    );
}