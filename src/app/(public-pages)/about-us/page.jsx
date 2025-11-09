"use client"
import React from 'react';
import { MapPin, ShieldCheck, HeartHandshake, Target, Users, BookOpen, UserCheck, Droplet, CheckCircle, Clock, Zap, Award, Globe, Microscope, TrendingUp, Handshake, CalendarCheck, Map } from 'lucide-react';

// =======================================================================
// CONFIGURATION: Blood Bank Details
// =======================================================================
const API_CONFIG = {
  MY_BLOOD_BANK_ID: 'BB_UK_001', 
  MY_BLOOD_BANK_NAME: 'Uttarakhand Blood Center', 
};

// =======================================================================
// DATA: About Page Content (based on your uploaded images)
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

// =======================================================================
// COMPONENT 1: DonationStepCard (Reusable Card)
// =======================================================================
const DonationStepCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-red-500 transition hover:shadow-xl h-full">
        <Icon className="w-8 h-8 text-red-600 mb-3" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

// =======================================================================
// COMPONENT 2: DonationStepsSection
// =======================================================================
const DonationStepsSection = () => {
    const steps = [
        { icon: UserCheck, title: 'Registration Process', description: 'Sign up and schedule your first visit with ease.' },
        { icon: ShieldCheck, title: 'Health Screening', description: 'A simple check-up to ensure you are fit and ready to donate.' },
        { icon: Droplet, title: 'Blood Collection', description: 'Relax as our professional staff guide you through the process.' },
        { icon: Clock, title: 'Rest & Refreshment', description: 'Spend a few minutes relaxing and enjoying refreshments.' },
    ];

    return (
        <section className="py-16 bg-red-50/50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">How Donation Works?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <DonationStepCard key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// =======================================================================
// NEW COMPONENT 3: Our Impact (Metrics)
// =======================================================================
const OurImpactSection = () => {
    const metrics = [
        { number: '15,000+', label: 'Lives Supported Annually', icon: HeartHandshake },
        { number: '98%', label: 'Voluntary Donation Rate', icon: Users },
        { number: '45+', label: 'Camps Conducted in UK', icon: Map },
        { number: '5,000+', label: 'Registered Donors', icon: CalendarCheck },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Impact in Uttarakhand</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric, index) => (
                        <div key={index} className="p-6 rounded-xl border-b-4 border-red-600 bg-white shadow-xl">
                            <metric.icon className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <p className="text-5xl font-extrabold text-gray-900 mb-1">{metric.number}</p>
                            <p className="text-md font-semibold text-gray-600">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// =======================================================================
// NEW COMPONENT 4: Community & Volunteer Support
// =======================================================================
const CommunitySupportSection = () => {
    return (
        <section className="py-16 bg-red-50/50">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="p-8 bg-white rounded-xl shadow-2xl border-l-4 border-red-600">
                    <Handshake className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Our Volunteer Network</h3>
                    <p className="text-gray-600 mb-4">
                        We believe in the power of community. Our volunteers are the backbone of our outreach programs, helping us organize donation drives and spread awareness across remote areas of Uttarakhand.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" /> Host a Donation Camp</li>
                        <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" /> Participate in Awareness Drives</li>
                        <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" /> Provide Emergency Transport Support</li>
                    </ul>
                </div>
                
                <div className="text-gray-700">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment to the Region</h3>
                    <p className="mb-4">
                        Uttarakhand Blood Center is not just a facility; it is a dedicated regional service. We actively collaborate with local hospitals, NGOs, and educational institutions to maintain robust blood security for the entire state, from Dehradun to remote hill districts.
                    </p>
                    <p className="font-semibold text-red-600">
                        Every drop collected stays and serves the people of Uttarakhand.
                    </p>
                </div>
            </div>
        </section>
    );
};


// =======================================================================
// COMPONENT 5: Technology and Quality Assurance Section
// =======================================================================
const TechnologyAndQualitySection = () => {
    const techFeatures = [
        { icon: Globe, title: 'e-Raktkosh Integration', description: 'National Blood Bank Network se jude hue, jisse real-time data up-to-date rehta hai.' },
        { icon: Microscope, title: 'Modern Testing Labs', description: 'Har unit ki jaanch NAT aur ELISA jaisi advanced techniques se ki jaati hai taaki suraksha sunischit ho.' },
        { icon: Award, title: 'Quality Standards', description: 'All procedures strictly adhere to NACO and DCGI guidelines for blood storage and processing.' },
        { icon: Zap, title: 'Component Separation', description: 'State-of-the-art equipment ka upyog kar, ek unit blood se multiple life-saving components (PRBC, FFP, Platelets) taiyar kiye jaate hain.' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Technology & Quality Assurance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-red-50 rounded-xl shadow-lg border-t-4 border-gray-300 transition hover:border-red-500 h-full">
                            <feature.icon className="w-8 h-8 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =======================================================================
// COMPONENT 6: BloodCompatibilityTable
// =======================================================================
const BloodCompatibilityTable = () => {
    const compatibility = [
        { group: 'A+', giveTo: 'A+, AB+', receiveFrom: 'A+, A-, O+, O-' },
        { group: 'O+', giveTo: 'O+, A+, B+, AB+', receiveFrom: 'O+, O-' },
        { group: 'B+', giveTo: 'B+, AB+', receiveFrom: 'B+, B-, O+, O-' },
        { group: 'AB+', giveTo: 'AB+', receiveFrom: 'All Groups (Universal Recipient)' },
        { group: 'A-', giveTo: 'A+, A-, AB+, AB-', receiveFrom: 'A-, O-' },
        { group: 'O-', giveTo: 'All Groups (Universal Donor)', receiveFrom: 'O-' },
        { group: 'B-', giveTo: 'B+, B-, AB+, AB-', receiveFrom: 'B-, O-' },
        { group: 'AB-', giveTo: 'AB+, AB-', receiveFrom: 'AB-, A-, B-, O-' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Blood Group Compatibility</h2>
                <div className="max-w-4xl mx-auto bg-red-50 p-6 rounded-xl shadow-2xl overflow-x-auto border-4 border-red-100">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-red-600">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-lg">Blood Group</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Can Donate To</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-lg">Can Receive From</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {compatibility.map((item, index) => (
                                <tr key={item.group} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-red-600">{item.group}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.giveTo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.receiveFrom}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};


// =======================================================================
// COMPONENT 7: AboutPage (Main View)
// =======================================================================
const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            
            {/* Header / Hero Section (Conical Gradient) */}
            <header 
                className="py-20 text-white shadow-xl"
                style={{
                    backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #f081a1 0%, #d46884 15%, #a0364d 50%, #8a0330 75%, #6f0022 100%)',
                }}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold mb-3">
                        {aboutContent.title}
                    </h1>
                    <p className="text-xl font-medium max-w-4xl">
                        {aboutContent.description}
                    </p>
                    
                    <button
                        // Dummy onClick, since the search view is removed
                        onClick={() => console.log('This button would navigate to the Find Blood page.')}
                        className="mt-6 flex items-center px-6 py-3 text-md font-semibold text-red-900 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
                    >
                        <HeartHandshake className="w-5 h-5 mr-2" />
                        Explore Our Services
                    </button>
                </div>
            </header>

            {/* Vision & Mission Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Vision Card */}
                    <div className="p-6 rounded-xl shadow-lg border-l-4 border-red-500 bg-red-50">
                        <Target className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
                        <p className="text-gray-600">{aboutContent.vision}</p>
                    </div>

                    {/* Mission Card */}
                    <div className="p-6 rounded-xl shadow-lg border-l-4 border-red-500 bg-red-50">
                        <Users className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
                        <p className="text-gray-600">{aboutContent.mission}</p>
                    </div>

                    {/* Objectives */}
                    <div className="p-6 rounded-xl shadow-lg bg-white">
                        <BookOpen className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Key Objectives</h3>
                        <ul className="space-y-2 text-gray-600">
                            {aboutContent.objectives.map((obj, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                                    <span>{obj}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            
            <DonationStepsSection />
            
            <OurImpactSection />
            
            <CommunitySupportSection />
            
            <TechnologyAndQualitySection />
            
            <BloodCompatibilityTable />
        </div>
    );
};


// =======================================================================
// Main Application Component (Wrapper)
// =======================================================================
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
             {/* Simple Header for context */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-start items-center">
                    <HeartHandshake className="w-6 h-6 text-red-600" />
                    <span className="text-xl font-bold text-red-600 ml-2">{API_CONFIG.MY_BLOOD_BANK_NAME}</span>
                    <span className="text-lg font-medium text-gray-500 ml-4">/ About Us</span>
                </div>
            </header>
            
            <AboutPage />
        </div>
    );
};

export default App;
