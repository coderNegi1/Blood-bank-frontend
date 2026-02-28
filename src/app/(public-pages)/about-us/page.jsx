"use server"
import React from 'react';
import { MapPin, Thermometer, Truck, Wifi, Armchair, ShieldCheck, HeartHandshake, Target, Users, BookOpen, UserCheck, Droplet, CheckCircle, Clock, Zap, Award, Globe, Microscope, TrendingUp, Handshake, CalendarCheck, Map, CornerRightDown } from 'lucide-react';
import {
    FileCheck,
    Database,
    Shield,
    Scale,
    Trash2,
} from "lucide-react";

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UK Blood Bank",
    "url": "https://ukbloodbank.org",
    "logo": "https://ukbloodbank.org/logo.png",
    "sameAs": [
        "https://www.facebook.com/ukbloodbank",
        "https://twitter.com/ukbloodbank",
        "https://www.instagram.com/ukbloodbank"
    ]
};

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why choose UK Blood Centre in Dehradun?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As the best blood bank in Dehradun, we offer advanced lab services, strict compliance, and 24x7 availability for emergency needs."
            }
        },
        {
            "@type": "Question",
            "name": "What services does UK Blood Centre provide in Uttarakhand?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide PRBC, Platelets, FFP, Pediatric Red Cells, Plasmapheresis, and operate an Advanced Blood Component Lab."
            }
        }
    ]
};

// =======================================================================
// DATA: Content
// =======================================================================
const aboutContent = {
    title: "About Uttarakhand blood centre",

    description:
        "As the best blood bank in Dehradun, Uttarakhand, UK Blood Centre is inspired by the e-Raktkosh initiative and committed to ensuring a safe, sufficient, and timely supply of blood and blood components across Uttarakhand. We strictly follow national blood policy standards, maintain compliance with advanced lab technologies, and focus on quality, safety, and service to save lives. Serving areas near Rispana Bridge, Haridwar Road, ISBT, Ballupur Chowk, Doon Hospital, Graphic Era Hospital, and Indresh Hospital.",

    vision: [
        "Ensure safe, adequate, and accessible blood for all, anytime and anywhere.",
        "Achieve 100% voluntary, non-remunerated blood donation.",
        "Create a strong and reliable voluntary donor community.",
        "Promote awareness about regular blood donation and its life-saving importance.",
        "Maintain the highest standards of safety and quality in blood services."
    ],

    mission: [
        "Support the national and international vision of 'Blood for All'.",
        "Promote 100% voluntary, non-remunerated blood donation.",
        "Motivate and encourage youth aged 18+ to become regular blood donors.",
        "Conduct awareness and motivation programs in colleges, schools, and communities.",
        "Ensure safe collection, testing, processing, and distribution of blood.",
        "Provide safe, reliable, and quality blood to every patient in need.",
        "Maintain ethical practices, transparency, and quality standards in all services."
    ],

    objectives: [
        "Ensure blood availability to every patient without delay.",
        "Provide safe, high-quality, and properly tested blood and components.",
        "Maintain strict quality control and safety standards.",
        "Promote voluntary blood donation through camps and awareness programs.",
        "Reach underserved patients who face difficulty in getting blood.",
        "Maintain accuracy, safety, and efficiency in blood collection and storage.",
        "Encourage youth participation in blood donation programs.",
        "Ensure proper management and utilization of blood inventory."
    ]
};

const teamMembers = [
    {
        name: '-----',
        designation: 'MD Pathologist',
        imageUrl: 'https://placehold.co/128x128/C70039/ffffff?text=MD',
        bio: 'Specialist in Pathology and Transfusion Medicine, ensuring accurate testing and blood safety.'
    },
    {
        name: '-----',
        designation: 'Technical Supervisor',
        imageUrl: 'https://placehold.co/128x128/900C3F/ffffff?text=TS',
        bio: 'Supervises all technical procedures, equipment maintenance, and lab operations.'
    },
    {
        name: '-----',
        designation: 'Blood Bank Technician',
        imageUrl: 'https://placehold.co/128x128/581845/ffffff?text=BT',
        bio: 'Handles blood collection, testing, component preparation, and storage.'
    },
    {
        name: '-----',
        designation: 'Blood Bank Counselor',
        imageUrl: 'https://placehold.co/128x128/FFC300/800000?text=BC',
        bio: 'Provides donor counseling, awareness, and ensures donor comfort and safety.'
    },
    {
        name: '-----',
        designation: 'Public Relations Officer (PRO)',
        imageUrl: 'https://placehold.co/128x128/FF5733/ffffff?text=PRO',
        bio: 'Manages public relations, donation camps, and community engagement programs.'
    },
    {
        name: '-----',
        designation: 'GNM Nurse',
        imageUrl: 'https://placehold.co/128x128/33A1FF/ffffff?text=GNM',
        bio: 'Assists in donor care, blood collection, and maintains medical support services.'
    }
];

// =======================================================================
// REUSABLE COMPONENTS
// =======================================================================

// Donation Step Card
const DonationStepCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg  transition duration-300 hover:shadow-2xl hover:border-red-700 h-full">
        <Icon className="w-8 h-8 text-red-600 mb-4 animate-pulse-hover" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

// Section Header
const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">{subtitle}</h2>
        <p className="text-4xl font-extrabold text-gray-900 md:text-5xl">{title}</p>
    </div>
);

// =======================================================================
// NEW COMPONENT: Our Team Section
// =======================================================================
const OurTeamSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="Meet Our Dedicated Team"
                    subtitle="Leadership in Blood Safety"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-xl transition transform hover:scale-[1.02] duration-300">
                            <img
                                className="w-28 h-28 object-cover rounded-full mb-4 ring-4 ring-red-200"
                                src={member.imageUrl}
                                alt={member.name}
                            />
                            <h3 className="text-xl font-bold text-red-800 mb-1">{member.name}</h3>
                            <p className="text-sm font-medium text-gray-600 mb-3">{member.designation}</p>
                            <p className="text-xs italic text-gray-500">{member.bio}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-gray-500 text-sm italic">
                    <CornerRightDown className="inline w-4 h-4 mr-1 text-red-500" /> And a network of hundreds of dedicated volunteers and staff.
                </p>
            </div>
        </section>
    );
};

// =======================================================================
// Donation Steps Section
// =======================================================================
const Certifications = () => {
    const steps = [
        { icon: BookOpen, title: 'NBTC Guidelines', description: 'We strictly follow National Blood Transfusion Council guidelines.' },

        { icon: FileCheck, title: 'FDA License', description: 'Licensed and regulated under FDA norms.' },

        { icon: Database, title: 'e-RaktKosh', description: 'Integrated with national blood bank network.' },

        { icon: Shield, title: 'NACO Standards', description: 'Follow national safety and screening standards.' },

        { icon: Scale, title: 'Clinical Act', description: 'Operates under government clinical regulations.' },

        { icon: Trash2, title: 'Waste Management', description: 'Safe biomedical waste disposal.' },

        { icon: CheckCircle, title: 'Quality Control', description: 'Strict quality and safety checks.' },
    ];

    return (
        <section className="py-20 bg-red-50/50">
            <div className="max-w-7xl mx-auto px-4">

                <SectionHeader
                    title="Our Certifications"
                    subtitle="Safe Blood Donation"
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {steps.map((step, index) => (

                        <DonationStepCard key={index} {...step} />

                    ))}

                </div>

            </div>
        </section>
    );
};

// Registration & NOC Section
const RegistrationSection = () => {

    const registrations = [

        {
            icon: FileCheck,
            title: "Blood Bank Registration",
            description: "Officially registered and licensed under State FDA and Drug Control Authority."
        },

        {
            icon: ShieldCheck,
            title: "Fire NOC",
            description: "Approved by Fire Department ensuring fire safety compliance and emergency preparedness."
        },

        {
            icon: Microscope,
            title: "Biomedical Waste Authorization",
            description: "Authorized for safe disposal of biomedical waste as per Biomedical Waste Management Rules."
        },

        {
            icon: Globe,
            title: "Pollution Control NOC",
            description: "Certified by State Pollution Control Board ensuring environmental safety standards."
        },

        {
            icon: Droplet,
            title: "ETP Plant & Water NOC",
            description: "Equipped with Effluent Treatment Plant and approved water safety certification."
        },

        {
            icon: Zap,
            title: "Electric Safety NOC",
            description: "Electrical systems approved for safety, backup, and uninterrupted power supply."
        }

    ];

    return (

        <section className="py-20 bg-red-50/50">

            <div className="max-w-7xl mx-auto px-4">

                <SectionHeader
                    title="Registrations & Government Approvals"
                    subtitle="Licenses & Compliance"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {registrations.map((item, index) => (

                        <DonationStepCard key={index} {...item} />

                    ))}

                </div>

            </div>

        </section>

    );

};

// Facilities Section
const FacilitiesSection = () => {

    const facilities = [

        {
            icon: Truck,
            title: "Ambulance Facility",
            description: "Fully equipped ambulance available for emergency blood transport and patient support."
        },

        {
            icon: Wifi,
            title: "Free Wi-Fi",
            description: "High-speed Wi-Fi available for donors and visitors for comfort and convenience."
        },

        {
            icon: Armchair,
            title: "Comfortable Donor Area",
            description: "Clean, hygienic, and comfortable seating and donation beds for donor safety."
        },

        {
            icon: Clock,
            title: "24×7 Service",
            description: "Blood bank services available 24 hours a day for emergency and patient needs."
        },

        {
            icon: Zap,
            title: "Power Backup Generator",
            description: "Automatic generator backup ensures uninterrupted blood storage and services."
        },

        {
            icon: Thermometer,
            title: "Temperature Controlled Storage",
            description: "Advanced refrigeration systems to maintain proper blood storage temperature."
        },

        {
            icon: ShieldCheck,
            title: "Safe & Hygienic Environment",
            description: "Maintains highest level of cleanliness and infection control standards."
        },

        {
            icon: HeartHandshake,
            title: "Donor Care & Refreshment",
            description: "Refreshments and care provided to donors after donation for quick recovery."
        }

    ];

    return (

        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4">

                <SectionHeader
                    title="Our Facilities"
                    subtitle="Infrastructure & Support"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {facilities.map((item, index) => (

                        <DonationStepCard key={index} {...item} />

                    ))}

                </div>

            </div>

        </section>

    );

};
// =======================================================================
// Our Impact (Metrics) Section
// =======================================================================
const OurImpactSection = () => {
    const metrics = [
        { number: '15,000+', label: 'Lives Supported Annually', icon: HeartHandshake },
        { number: '98%', label: 'Voluntary Donation Rate', icon: Users },
        { number: '45+', label: 'Camps Conducted in UK', icon: Map },
        { number: '5,000+', label: 'Registered Donors', icon: CalendarCheck },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="Our Footprint of Hope"
                    subtitle="Impact in Uttarakhand"
                />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric, index) => (
                        <div key={index} className="p-8 rounded-xl shadow-2xl bg-red-600/10 transition transform hover:bg-red-600 hover:text-white duration-300 group">
                            <metric.icon className="w-10 h-10 text-red-600 mx-auto mb-3 group-hover:text-white" />
                            <p className="text-5xl font-extrabold text-red-900 mb-1 group-hover:text-white">{metric.number}</p>
                            <p className="text-md font-semibold text-red-700 group-hover:text-red-100">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =======================================================================
// Technology and Quality Assurance Section
// =======================================================================
const TechnologyAndQualitySection = () => {
    const techFeatures = [
        { icon: Globe, title: 'e-Raktkosh Integration', description: 'National Blood Bank Network se jude hue, jisse real-time data up-to-date rehta hai.' },
        { icon: Microscope, title: 'Modern Testing Labs', description: 'Har unit ki jaanch NAT aur ELISA jaisi advanced techniques se ki jaati hai taaki suraksha sunischit ho.' },
        { icon: Award, title: 'Quality Standards', description: 'All procedures strictly adhere to NACO and DCGI guidelines for blood storage and processing.' },
        { icon: Zap, title: 'Component Separation', description: 'Ek unit blood se multiple life-saving components (PRBC, FFP, Platelets) taiyar kiye jaate hain.' },
    ];

    return (
        <section className="py-20 bg-red-100/50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="Technology & Safety First"
                    subtitle="Advanced Blood Management"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-xl border-b-4 border-gray-300 transition hover:border-red-600 h-full">
                            <feature.icon className="w-8 h-8 text-red-600 mb-4" />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =======================================================================
// Main View Component
// =======================================================================
const AboutPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
            <div className="min-h-screen bg-gray-100 font-sans mt-16">

                {/* Header / Hero Section (Focus on Red/White) */}
                <header
                    className="py-24 text-white shadow-2xl"
                    style={{
                        // Deep red background with a subtle linear gradient for elegance
                        background: 'linear-gradient(135deg, #a0364d 0%, #d46884 100%)',
                    }}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight">
                            {aboutContent.title}
                        </h1>
                        <p className="text-xl font-light max-w-5xl opacity-90">
                            {aboutContent.description}
                        </p>

                        <a
                            href="/services"
                            className="mt-8 inline-flex items-center px-8 py-3 text-lg font-semibold text-red-800 bg-white rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]"
                        >
                            <HeartHandshake className="w-5 h-5 mr-3" />
                            Explore Our Services
                        </a>
                    </div>
                </header>

                {/* Vision & Mission Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Vision Card */}
                        <div className="p-8 rounded-xl shadow-xl border-l-8 border-red-600 bg-red-50">
                            <Target className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>

                            <ul className="space-y-3 text-gray-700">
                                {aboutContent.vision.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mission Card */}
                        <div className="p-8 rounded-xl shadow-xl border-l-8 border-red-600 bg-red-50">
                            <Users className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>

                            <ul className="space-y-3 text-gray-700">
                                {aboutContent.mission.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Objectives */}
                        <div className="p-8 rounded-xl shadow-xl bg-white border border-gray-200">
                            <BookOpen className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Key Objectives</h3>

                            <ul className="space-y-3 text-gray-700">
                                {aboutContent.objectives.map((obj, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>

                <Certifications />
                <RegistrationSection />
                <FacilitiesSection />

                <OurImpactSection />

                {/* NEW TEAM SECTION ADDED HERE */}
                <OurTeamSection />

                <TechnologyAndQualitySection />

                {/* Location Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <SectionHeader
                            title="Serving Dehradun and Uttarakhand"
                            subtitle="Our Reach"
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <MapPin className="w-8 h-8 text-[#BC003D] mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Blood Bank near Rispana Bridge</h3>
                                <p className="text-gray-600">Convenient access for residents near Rispana Bridge, Dehradun.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <MapPin className="w-8 h-8 text-[#BC003D] mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Blood Bank on Haridwar Road</h3>
                                <p className="text-gray-600">Serving the Haridwar Road area with reliable blood services.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <MapPin className="w-8 h-8 text-[#BC003D] mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Blood Bank near ISBT</h3>
                                <p className="text-gray-600">Located near ISBT for easy reach from transport hubs.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <MapPin className="w-8 h-8 text-[#BC003D] mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Blood Bank near Ballupur Chowk</h3>
                                <p className="text-gray-600">Supporting Ballupur Chowk community with blood bank services.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <MapPin className="w-8 h-8 text-[#BC003D] mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Blood Bank near Doon Hospital</h3>
                                <p className="text-gray-600">Partnering with Doon Hospital for emergency supplies.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <MapPin className="w-8 h-8 text-[#BC003D] mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Blood Bank near Graphic Era Hospital</h3>
                                <p className="text-gray-600">Providing support to Graphic Era Hospital patients.</p>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <a href="/donation-process" className="text-[#BC003D] hover:underline text-lg font-semibold">Learn about our donation process</a>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default AboutPage;