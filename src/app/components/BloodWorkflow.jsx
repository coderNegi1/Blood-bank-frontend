
"use client"
import React, { useState } from 'react';

// Enhanced Mock data for the Blood Donation to Blood Bank workflow steps with step-specific FAQs
const MOCK_STEPS = [
  {
    id: 1,
    title: 'Registration and Initial Screening',
    description: 'Filling the donation form, verifying ID, and giving consent.',
    status: 'pending',
    details: 'Form submitted. ID (Aadhaar/PAN) verified. Consent for donation recorded. Average time: 5 minutes.',
    icon: '📝', // Document/Request Icon
    faqs: [
      { q: 'How often can I donate blood?', a: 'Generally, you can donate whole blood every $56$ days (about $8$ weeks) to allow your body time to fully recover.' },
      { q: 'What documents do I need for registration?', a: 'You typically need a valid photo ID (like Aadhaar card, Voter ID, or driving license) and proof of age/address.' }
    ]
  },
  {
    id: 2,
    title: 'Medical Check and Vitals Testing',
    description: 'Your blood pressure, pulse rate, and hemoglobin level are checked.',
    status: 'pending',
    details: 'Hemoglobin levels found within safe limits. Blood pressure is normal. All parameters are suitable for donation. Average time: 8 minutes.',
    icon: '❤️', // Heart/Vitals Icon
    faqs: [
      { q: 'What is the minimum hemoglobin required?', a: 'Usually, the minimum required hemoglobin is $12.5 \text{ g}/\text{dL}$ for females and $13.0 \text{ g}/\text{dL}$ for males.' },
      { q: 'What disqualifies me from donating blood?', a: 'Common reasons include certain medications, recent tattoos/piercings, recent travel to specific regions, or specific chronic health conditions.' }
    ]
  },
  {
    id: 3,
    title: 'Blood Collection / Donation',
    description: 'Collecting $350-450 \text{ mL}$ of blood from your body under a sterile process.',
    status: 'pending',
    details: 'Blood collection is underway. The donor is comfortable. The entire process takes approximately $10-15$ minutes.',
    icon: '💉', // Syringe/Collection Icon
    faqs: [
      { q: 'How much blood will be collected?', a: 'Approximately $350-450 \text{ mL}$ (about 1 pint), which is a small portion of your body\'s total blood volume.' },
      { q: 'Does the blood collection hurt?', a: 'You may feel a brief pinch when the needle is inserted, but the rest of the process should be comfortable.' }
    ]
  },
  {
    id: 4,
    title: 'Post-Donation Care and Refreshments',
    description: 'You are given refreshments to rest for a while and replenish fluids in your body.',
    status: 'pending',
    details: 'You are advised to rest for at least $15$ minutes. Tea/juice and biscuits are provided. This step is crucial for your safety.',
    icon: '☕', // Coffee/Refreshment Icon
    faqs: [
      { q: 'What should I do immediately after donating?', a: 'Rest for $15$ minutes, have the provided refreshments, and avoid heavy lifting or strenuous exercise for the next $12$ hours.' },
      { q: 'Can I drive home after donating?', a: 'It is generally safe, but resting and hydrating for $15$ minutes first is mandatory. If you feel dizzy, you should wait longer.' }
    ]
  },
  {
    id: 5,
    title: 'Laboratory Testing and Safe Storage',
    description: 'Your donated blood is tested for all mandatory diseases (like HIV, Hepatitis) and Blood Group.',
    status: 'pending',
    details: 'The blood is now sent to the lab for safety and compatibility testing (including cross-match). This testing takes approximately $12-24$ hours. After this, the blood will be ready for use.',
    icon: '🧪', // Lab Test Icon
    faqs: [
      { q: 'Is the testing safe and confidential?', a: 'Yes, all donated blood is tested for safety (infectious diseases) and blood type. Your personal and test results are kept strictly confidential.' },
      { q: 'What is "cross-match" testing?', a: 'Cross-match is the final test to ensure compatibility between the donor\'s blood and the intended recipient\'s blood, preventing severe reactions.' }
    ]
  },
  // Adding extra steps to demonstrate scrolling functionality
  {
    id: 6,
    title: 'Component Separation',
    description: 'Blood is separated into plasma, red cells, and platelets.',
    status: 'pending',
    details: 'The unit of whole blood is processed to extract different components, maximizing the benefit for various patients. Estimated time: 4 hours.',
    icon: '⚗️',
    faqs: []
  },
  {
    id: 7,
    title: 'Quality Control and Labeling',
    description: 'Final check for quality and accurate labeling before storage.',
    status: 'pending',
    details: 'Each component is quality-checked, given a unique code, and labeled with the blood type and expiration date. Estimated time: 2 hours.',
    icon: '🏷️',
    faqs: []
  },
  {
    id: 8,
    title: 'Ready for Transfusion',
    description: 'The blood is stored in controlled temperatures, ready for hospital use.',
    status: 'pending',
    details: 'Components are stored at specific temperatures to ensure viability—red cells at $1-6^\circ \text{C}$. This marks the end of the processing workflow.',
    icon: '🏥',
    faqs: []
  },
];

// Helper component for rendering a single step in the workflow
// It now accepts totalSteps to correctly render the timeline line.
const WorkflowStep = ({ step, isActive, onClick, totalSteps }) => {
  // Determine color and border based on status
  const statusColors = {
    'completed': 'bg-green-500 border-green-600',
    'in-progress': 'bg-blue-500 border-blue-600',
    'pending': 'bg-gray-400 border-gray-500',
  };

  const statusStyle = statusColors[step.status] || 'bg-gray-400 border-gray-500';
  // activeStyle uses indigo for a vibrant interactive look
  const activeStyle = isActive ? 'ring-4 ring-[#BC003D] bg-red-100 transform scale-[1.01]' : 'hover:bg-gray-50';

  // Helper to capitalize the first letter for display
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="relative group">
      {/* Vertical Timeline Line (Hidden for the last item) */}
      {step.id !== totalSteps && (
        <div
          className={`absolute left-4 top-10 h-full w-0.5 ${step.status === 'completed' ? 'bg-green-300' : 'bg-gray-300'} group-last:hidden`}
          aria-hidden="true"
        ></div>
      )}

      <button
        onClick={() => onClick(step)}
        className={`w-full text-left p-4 rounded-xl transition-all duration-300 shadow-lg mb-6 border border-gray-200 ${activeStyle}`}
      >
        <div className="flex items-start space-x-4">
          {/* Status Indicator Circle */}
          <div className={`flex items-center justify-center h-8 w-8 rounded-full text-white text-lg font-bold flex-shrink-0 ${statusStyle}`}>
            {step.icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Title */}
            <p className={`text-lg font-semibold ${isActive ? 'text-indigo-700' : 'text-gray-800'}`}>
              {step.id}. {step.title}
            </p>
            {/* Description */}
            <p className={`mt-1 text-sm ${isActive ? 'text-indigo-500' : 'text-gray-500'}`}>
              {step.description}
            </p>
            {/* Status Tag - Displayed in English */}
            <span className={`mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium capitalize ${step.status === 'completed'
                ? 'bg-green-100 text-green-800' // Green for completed
                : step.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800' // Blue for in-progress
                  : 'bg-gray-100 text-gray-800' // Gray for pending
              }`}>
              {capitalize(step.status.replace('-', ' '))}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

// Main App component
const App = () => {
  // Use state for the steps array to allow dynamic status updates
  const [steps, setSteps] = useState(MOCK_STEPS);
  // Initialize state with the first 'in-progress' step active by default
  const [activeStep, setActiveStep] = useState(steps.find(s => s.status === 'in-progress') || steps[0]);
  // State to toggle between step details and FAQs
  const [showFaqs, setShowFaqs] = useState(false);

  // Set the active step when a step is clicked and reset FAQ view
  const handleStepClick = (step) => {
    setActiveStep(step);
    setShowFaqs(false); // Reset to show details when switching steps
  };

  // Function to simulate completing the current step and advancing the workflow
  const handleCompleteStep = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep.id);

    if (currentIndex === -1 || activeStep.status === 'completed') {
      console.log('Step already completed or not found.');
      return;
    }

    const newSteps = steps.map((step, index) => {
      // 1. Mark the current active step as 'completed'
      if (index === currentIndex) {
        return { ...step, status: 'completed' };
      }
      // 2. Mark the next step (if it exists) as 'in-progress'
      if (index === currentIndex + 1) {
        setActiveStep({ ...step, status: 'in-progress' });
        return { ...step, status: 'in-progress' };
      }
      return step;
    });

    setSteps(newSteps);
    // If it was the last step, keep the focus on it (now completed)
    if (currentIndex === steps.length - 1) {
      setActiveStep(newSteps[currentIndex]);
    }
    // Automatically switch back to details view after status change
    setShowFaqs(false);
  };

  // Determine if the "Mark as Complete" button should be shown
  const isLastStep = activeStep && activeStep.id === steps.length;
  const canComplete = activeStep && activeStep.status !== 'completed';

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
      {/* Load Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Blood Donation to Blood Bank Workflow
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Understand how your valuable blood is processed from donation to safe use.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 ">

          {/* 1. Workflow Timeline (Left/Top) 
              -- Added lg:max-h-[calc(100vh-6rem)] to fix height on desktop (100vh minus header and margins)
              -- Added lg:overflow-y-auto to allow scrolling for steps only
              -- Added lg:pr-4 to prevent scrollbar overlaying content
          */}
          <div className="lg:w-1/2 w-full lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-4 ">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Steps of the Process</h2>
            <div className="space-y-5 p-3">
              {steps.map((step) => (
                <WorkflowStep
                  key={step.id}
                  step={step}
                  isActive={activeStep && activeStep.id === step.id}
                  onClick={handleStepClick}
                  totalSteps={step.length} // Pass total steps for timeline rendering
                />
              ))}
            </div>
          </div>

          {/* 2. Step Details Panel (Right/Bottom) 
              -- Added lg:sticky and lg:top-8 to keep the details panel visible on desktop while steps scroll
          */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              {showFaqs ? `FAQs for Step ${activeStep ? activeStep.id : '...'}` : `Detailed Status for Step ${activeStep ? activeStep.id : '...'}`}
            </h2>

            {activeStep ? (
              <div className="bg-white p-6 rounded-xl shadow-2xl border border-indigo-100">

                {/* Header for Details Panel */}
                {!showFaqs && (
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{activeStep.icon}</span>
                    <h3 className="text-2xl font-bold text-indigo-600">{activeStep.title}</h3>
                  </div>
                )}

                {/* Conditional Content: Details or FAQs */}
                {showFaqs ? (
                  <div className="space-y-6">
                    {activeStep.faqs && activeStep.faqs.length > 0 ? (
                      activeStep.faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <p className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                            ❓ {faq.q}
                          </p>
                          <p className="text-gray-600 ml-6 text-sm italic">{faq.a}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">No specific FAQs found for this step.</p>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700 mb-4">{activeStep.description}</p>

                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Key Information and Estimated Time:</p>
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 shadow-inner">
                        <p className="text-sm text-indigo-700 whitespace-pre-wrap">
                          {activeStep.details}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Footer Buttons */}
                <div className="mt-6 flex justify-between space-x-3">
                  {/* FAQ Toggle Button */}
                  {showFaqs ? (
                    <button
                      onClick={() => setShowFaqs(false)}
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                    >
                      ← Back to Step Details
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowFaqs(true)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                      View FAQs
                    </button>
                  )}

                  {/* Workflow Advancement Button */}
                  {canComplete ? (
                    <button
                      onClick={handleCompleteStep}
                      className="px-4 py-2 text-sm font-medium text-white rounded-lg transition bg-green-600 hover:bg-green-700"
                    >
                      {isLastStep ? 'Complete Workflow' : 'Mark as Complete and Next →'}
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 text-sm font-medium text-white rounded-lg opacity-50 cursor-not-allowed bg-green-600"
                    >
                      Completed
                    </button>
                  )}
                </div>

              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center text-gray-500">
                Click on any step in the workflow to view its detailed information.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
