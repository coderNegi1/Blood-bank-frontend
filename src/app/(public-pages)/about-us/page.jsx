"use client"
import React from 'react';
import { MapPin, ShieldCheck, HeartHandshake, Target, Users, BookOpen, UserCheck, Droplet, CheckCircle, Clock, Zap, Award, Globe, Microscope, TrendingUp, Handshake, CalendarCheck, Map, CornerRightDown } from 'lucide-react';

// =======================================================================
// CONFIGURATION: Blood Bank Details
// =======================================================================
const API_CONFIG = {
    MY_BLOOD_BANK_ID: 'BB_UK_001', 
    MY_BLOOD_BANK_NAME: 'Uttarakhand Blood Center', 
};

// =======================================================================
// DATA: Content
// =======================================================================
const aboutContent = {
    title: "About Uttarakhand Blood Center",
    description: "Our center, inspired by the e-Raktkosh initiative, is dedicated to ensuring a safe, sufficient, and timely supply of blood and its components throughout Uttarakhand. We operate with strict adherence to national blood policy standards and guidelines.",
    vision: "To ensure adequate supply of safe and quality blood and blood components, accessible to all in need, 24x7.",
    mission: "To serve the community by promoting voluntary blood donation, providing world-class blood processing and distribution services focused on the needs of Uttarakhand.",
    objectives: [
        "Maintain a zero-wastage blood inventory system.",
        "Ensure compliance with all national blood safety standards.",
        "Promote 100% voluntary, non-remunerated blood donation.",
        "Use cutting-edge technology for efficient blood management."
    ]
};

const teamMembers = [
    { name: 'Dr. Ramesh Kumar', designation: 'Chief Medical Officer (CMO)', imageUrl: 'https://placehold.co/128x128/C70039/ffffff?text=RK', bio: 'Expert in Transfusion Medicine and Blood Safety, leading clinical operations.' },
    { name: 'Ms. Priya Sharma', designation: 'Operations Head', imageUrl: 'https://placehold.co/128x128/900C3F/ffffff?text=PS', bio: 'Manages logistics, camp organization, and volunteer networks across the region.' },
    { name: 'Mr. Alok Singh', designation: 'Quality Assurance Manager', imageUrl: 'https://placehold.co/128x128/581845/ffffff?text=AS', bio: 'Ensures strict compliance with NACO and DCGI quality and safety standards.' },
    { name: 'Ms. Neha Verma', designation: 'Community Outreach Coordinator', imageUrl: 'https://placehold.co/128x128/FFC300/800000?text=NV', bio: 'Leads public awareness campaigns and organises local blood donation drives.' },
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
                    <CornerRightDown className="inline w-4 h-4 mr-1 text-red-500"/> And a network of hundreds of dedicated volunteers and staff.
                </p>
            </div>
        </section>
    );
};


// =======================================================================
// Donation Steps Section
// =======================================================================
const DonationStepsSection = () => {
    const steps = [
        { icon: UserCheck, title: 'Step 1: Registration', description: 'Quick sign-up and pre-screening to verify basic eligibility.' },
        { icon: ShieldCheck, title: 'Step 2: Health Check', description: 'A confidential physical exam and blood test to ensure donor safety.' },
        { icon: Droplet, title: 'Step 3: Collection', description: 'The actual donation process, guided by our experienced medical staff.' },
        { icon: Clock, title: 'Step 4: Post-Donation', description: 'Rest, refreshment, and monitoring for a few minutes before leaving.' },
    ];

    return (
        <section className="py-20 bg-red-50/50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader 
                    title="The Life-Saving Process"
                    subtitle="How Donation Works"
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
// Blood Compatibility Table Section
// // =======================================================================
// const BloodCompatibilityTable = () => {
//     const compatibility = [
//         { group: 'A+', giveTo: 'A+, AB+', receiveFrom: 'A+, A-, O+, O-' },
//         { group: 'O+', giveTo: 'O+, A+, B+, AB+', receiveFrom: 'O+, O-' },
//         { group: 'B+', giveTo: 'B+, AB+', receiveFrom: 'B+, B-, O+, O-' },
//         { group: 'AB+', giveTo: 'AB+', receiveFrom: 'All Groups (Universal Recipient)' },
//         { group: 'A-', giveTo: 'A+, A-, AB+, AB-', receiveFrom: 'A-, O-' },
//         { group: 'O-', giveTo: 'All Groups (Universal Donor)', receiveFrom: 'O-' },
//         { group: 'B-', giveTo: 'B+, B-, AB+, AB-', receiveFrom: 'B-, O-' },
//         { group: 'AB-', giveTo: 'AB+, AB-', receiveFrom: 'AB-, A-, B-, O-' },
//     ];

//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4">
//                 <SectionHeader 
//                     title="Understanding Compatibility"
//                     subtitle="Blood Group Chart"
//                 />
//                 <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-red-200">
//                     <table className="min-w-full divide-y divide-red-200">
//                         <thead className="bg-red-600">
//                             <tr>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Blood Group</th>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Can Donate To</th>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Can Receive From</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-red-100">
//                             {compatibility.map((item, index) => (
//                                 <tr key={item.group} className={index % 2 === 0 ? 'bg-white' : 'bg-red-50 hover:bg-red-100 transition'}>
//                                     <td className="px-6 py-4 whitespace-nowrap text-lg font-extrabold text-red-700">{item.group}</td>
//                                     <td className="px-6 py-4 text-sm text-gray-700">{item.giveTo}</td>
//                                     <td className="px-6 py-4 text-sm text-gray-700">{item.receiveFrom}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </section>
//     );
// };


// =======================================================================
// Main View Component
// =======================================================================
const AboutPage = () => {
    return (
        <div className="min-h-screen font-sans">
            
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
                    
                    <button
                        onClick={() => console.log('Simulating navigation to services.')}
                        className="mt-8 flex items-center px-8 py-3 text-lg font-semibold text-red-800 bg-white rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]"
                    >
                        <HeartHandshake className="w-5 h-5 mr-3" />
                        Explore Our Commitment
                    </button>
                </div>
            </header>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Vision Card */}
                    <div className="p-8 rounded-xl shadow-xl border-l-8 border-red-600 bg-red-50">
                        <Target className="w-10 h-10 text-red-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
                        <p className="text-gray-600">{aboutContent.vision}</p>
                    </div>

                    {/* Mission Card */}
                    <div className="p-8 rounded-xl shadow-xl border-l-8 border-red-600 bg-red-50">
                        <Users className="w-10 h-10 text-red-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
                        <p className="text-gray-600">{aboutContent.mission}</p>
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
            
            <DonationStepsSection />
            
            <OurImpactSection />

            {/* NEW TEAM SECTION ADDED HERE */}
            <OurTeamSection />
            
            <TechnologyAndQualitySection />
            
            {/* <BloodCompatibilityTable /> */}
        </div>
    );
};


// =======================================================================
// Main Application Component (Wrapper)
// =======================================================================
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans mt-16">
            {/* Simple Navigation Header */}
          
            
            <AboutPage />
            
          
        </div>
    );
};

export default App;