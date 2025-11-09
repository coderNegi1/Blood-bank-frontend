"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, ArrowLeft, Phone, MapPin, ShieldCheck, HeartHandshake, Loader2 } from 'lucide-react';

// =======================================================================
// API CONFIGURATION (REAL API se connect hone par ise change karein)
// =======================================================================
// NOTE: Is app ko sirf 'Uttarakhand Blood Center' ke liye banaya gaya hai.
const API_CONFIG = {
  // Aapko API Setu par register karne ke baad yeh milega
  API_URL: 'https://demo-eraktkosh.api', // Example (replace with actual)
  API_KEY: 'YOUR_SECRET_KEY_FROM_API_SETU', // Example (replace with actual)
  
  // ****** APNE BLOOD BANK KA UNIQUE ID AUR NAAM YAHAN FIX KARO ******
  MY_BLOOD_BANK_ID: 'BB_UK_001', // Placeholder for Uttarakhand Blood Center's BB ID
  MY_BLOOD_BANK_NAME: 'Uttarakhand Blood Center', // Aapka fixed Blood Bank ka naam
};

// DUMMY API function jo async data fetching aur filtering ka simulation karta hai
const fetchAndFilterBloodBankData = async (searchData) => {
    // 1 second ka delay taaki LOADING state dikh sake
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    console.log("Searching with:", searchData);

    // *****************************************************************
    // REAL API CALL: Yahan aap e-RaktKosh API se data fetch karoge.
    // *****************************************************************
    
    // DUMMY list jo API se aayegi (Is list mein aapka Blood Bank bhi hai - bb_id: BB_UK_001)
    const DUMMY_RESULTS = [
        // Yeh doosre blood banks ka dummy data hai (Filtering mein hat jayega)
        { id: 1, bb_id: 'BB_123', type: 'Other Bank', name: 'City Central Blood Bank', units: 5, distance: '2.5 km', contact: '123-456-7890', isVerified: true, component: searchData.requestType, group: searchData.bloodGroup },
        
        // Yeh aapke Blood Bank ka dummy data hai
        { 
            id: 2, 
            bb_id: API_CONFIG.MY_BLOOD_BANK_ID, 
            type: 'Government Blood Bank', 
            name: API_CONFIG.MY_BLOOD_BANK_NAME, 
            // Units ko Blood Group ke hisaab se change karna: 
            units: searchData.bloodGroup === 'a+' ? 7 : (searchData.bloodGroup === 'b-' ? 2 : 10), 
            distance: '0.0 km', 
            contact: '0135-260000', // Example Contact
            isVerified: true, 
            component: searchData.requestType, 
            group: searchData.bloodGroup 
        },
        
        { id: 3, bb_id: 'BB_789', type: 'Other Donor', name: 'Amit Singh', units: 1, distance: '1.1 km', contact: '555-123-4567', isVerified: false, component: searchData.requestType, group: searchData.bloodGroup },
    ];
    
    // Agar O- Blood Group chuna gaya hai, toh koi result na dikhayein (Out of stock demo)
    if (searchData.bloodGroup === 'o-') {
        return [];
    }

    // *****************************************************************
    // FILTER LOGIC: Poore list mein se sirf apne Blood Bank ka result filter karna
    // *****************************************************************
    const myBloodBankResult = DUMMY_RESULTS.filter(
        result => result.bb_id === API_CONFIG.MY_BLOOD_BANK_ID
    );
    
    // API se sirf apne blood bank ka filtered data return karein
    return myBloodBankResult;
};

// =======================================================================
// Component 1: FormSelect (Reusable Component)
// =======================================================================
const FormSelect = ({ label, name, options, value, onChange }) => (
    <div className="flex flex-col md:flex-row items-center justify-between py-3">
        <label htmlFor={name} className="text-lg text-gray-700 font-medium mb-2 md:mb-0 w-full md:w-1/3 text-left">
            {label}
        </label>
        <div className="w-full md:w-2/3 relative">
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 appearance-none bg-white pr-10 shadow-sm"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

// =======================================================================
// Component 2: BloodAvailabilityForm (Search Form View)
// =======================================================================
// State aur District fields hata diye gaye hain
const BloodAvailabilityForm = ({ formData, handleChange, handleProceed }) => {
    
    const requestTypeOptions = [
        { value: '', label: 'Select Blood Component' },
        { value: 'whole_blood', label: 'Whole Blood' },
        { value: 'prbc', label: 'Packed Red Blood Cells (PRBC)' },
        { value: 'plasma', label: 'Plasma / FFP' },
        { value: 'platelets', label: 'RDP' },
        { value: 'sdp', label: 'SDP' },
        { value: 'cryo', label: 'Cryoprecipitate' },
        { value: 'granulocytes', label: 'Granulocytes' },
    ];
    
    const bloodGroupOptions = [
        { value: '', label: 'Select Blood Group' },
        { value: 'a+', label: 'A+' },
        { value: 'a-', label: 'A-' },
        { value: 'b+', label: 'B+' },
        { value: 'b-', label: 'B-' },
        { value: 'ab+', label: 'AB+' },
        { value: 'ab-', label: 'AB-' },
        { value: 'o+', label: 'O+' },
        { value: 'o-', label: 'O-' },
    ];

    // Ab sirf component aur group hi required hain
    const isFormInvalid = !formData.requestType || !formData.bloodGroup;

    return (
        <div className="w-full md:w-3/5 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                Blood Availability Check
            </h1>
            <p className="text-gray-500 mb-8 font-medium">
                Check stock at <span className="text-red-600 font-bold">{API_CONFIG.MY_BLOOD_BANK_NAME}</span>
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-1">
                
                <FormSelect label="Request Component" name="requestType" options={requestTypeOptions} value={formData.requestType} onChange={handleChange} />
                <FormSelect label="Blood Group" name="bloodGroup" options={bloodGroupOptions} value={formData.bloodGroup} onChange={handleChange} />
                
                {/* Fixed location ka message */}
                <div className="text-sm text-gray-500 pt-4 pb-2">
                    <MapPin className="w-4 h-4 inline mr-1 text-red-500" /> Location is fixed to {API_CONFIG.MY_BLOOD_BANK_NAME}.
                </div>

                <div className="flex justify-end pt-5">
                    <button
                        onClick={handleProceed}
                        disabled={isFormInvalid}
                        className={`w-full md:w-auto flex items-center justify-center px-10 py-3 text-lg font-semibold text-white rounded-lg shadow-xl transition duration-300 ${
                            isFormInvalid 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-red-600 hover:bg-red-700'
                        }`}
                    >
                        Check Stock
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

// =======================================================================
// Component 3: AvailabilityResults (Results View)
// =======================================================================

const ResultCard = ({ result }) => {
  const isVerifiedStyle = result.isVerified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg transition duration-300 hover:shadow-xl border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            {result.name}
            {result.isVerified && <ShieldCheck className="w-4 h-4 ml-2 text-green-500" title="Verified" />}
          </h3>
          <p className="text-sm text-gray-500">{result.type}</p>
        </div>
        <div className={`px-3 py-1 text-xs font-semibold rounded-full ${isVerifiedStyle}`}>
          {result.isVerified ? 'Verified' : 'Unverified'}
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <div className="text-center">
          {/* Agar units zero hain, toh 'Out of Stock' dikhao */}
          <p className={`text-2xl font-extrabold ${result.units > 0 ? 'text-red-600' : 'text-gray-500'}`}>
            {result.units > 0 ? result.units : '0'}
          </p>
          <p className="text-xs text-gray-500">Units Available</p>
        </div>
        
        <div className="text-right">
          <p className="text-md font-medium text-gray-700 flex items-center justify-end">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            {result.distance}
          </p>
          <a href={`tel:${result.contact}`} className="text-md font-medium text-blue-600 flex items-center justify-end mt-1 hover:underline">
            <Phone className="w-4 h-4 mr-1" />
            Call: {result.contact}
          </a>
        </div>
      </div>
    </div>
  );
};


const AvailabilityResults = ({ searchData, searchResults, isLoading, error, onBack }) => {
    
    // Convert short codes back to user-friendly labels for display
    const requestTypeMap = {
        'whole_blood': 'Whole Blood', 'prbc': 'PRBC', 'plasma': 'Plasma / FFP', 
        'platelets': 'RDP', 'sdp': 'SDP', 'cryo': 'Cryo', 'granulocytes': 'Granulocytes',
    };
    
    const displayComponent = requestTypeMap[searchData.requestType] || searchData.requestType;

    // Fixed message for the single blood bank
    const bankName = API_CONFIG.MY_BLOOD_BANK_NAME;

    return (
        <div className="w-full md:w-2/3 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Stock Status</h1>
            
            <p className="text-gray-500 mb-8">
                Results for <span className="font-bold text-red-600">{searchData.bloodGroup.toUpperCase()} {displayComponent}</span> at <span className='font-bold'>{bankName}</span>.
            </p>

            <div className="flex flex-col space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg border border-red-300">
                        Error: {error}
                    </div>
                )}

                {isLoading ? (
                    <div className="text-center py-20 text-gray-500">
                        <Loader2 className="w-8 h-8 mx-auto mb-4 text-red-500 animate-spin" />
                        <p>Checking stock at {bankName}...</p>
                    </div>
                ) : searchResults.length > 0 ? (
                    <>
                        <p className="text-md font-bold text-gray-700">
                            Current Availability:
                        </p>
                        {searchResults.map(result => (
                            <ResultCard key={result.id} result={result} />
                        ))}
                    </>
                ) : (
                    <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-red-400" />
                        <p className="font-semibold text-lg">Resource Out of Stock.</p>
                        <p className="text-sm">We currently do not have the requested {searchData.bloodGroup.toUpperCase()} {displayComponent} in stock.</p>
                    </div>
                )}
            </div>
            
             <div className="pt-8">
                <button 
                  onClick={onBack}
                  className="mt-4 flex items-center text-gray-700 text-md font-semibold hover:text-red-600 transition"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Check Another Component
                </button>
            </div>
        </div>
    );
};


// =======================================================================
// Main Application Component (Parent Component)
// =======================================================================
const App = () => {
    // 1. STATE MANAGEMENT
    const [formData, setFormData] = useState({
        requestType: '',
        bloodGroup: '',
        // State aur District ab required nahi hain
    });
    const [view, setView] = useState('form'); // 'form' or 'results'
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // 2. HANDLERS
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    // Yeh function upar diye gaye DUMMY function ka use karke API call simulate karta hai
    const handleProceed = async () => {
        // Validation ab sirf component aur blood group ke liye
        if (!formData.requestType || !formData.bloodGroup) {
            setError('Please select both Blood Component and Blood Group.');
            return;
        }

        setError(null);
        setIsLoading(true);
        setView('results'); // Show results view immediately

        try {
            // REAL application mein, yeh line ASLI API call karegi aur phir data ko filter karegi.
            const results = await fetchAndFilterBloodBankData(formData);
            
            setSearchResults(results);
        } catch (e) {
            setError('Failed to fetch data from the server. Check console for details.');
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleBackToForm = () => {
        setView('form');
        setSearchResults([]);
        setError(null);
    };


    // 3. RENDER LOGIC
    const isFormView = view === 'form';
    
    // Left side par search criteria ki summary render karne ka helper function
    const renderCriteriaSummary = (data) => {
        const componentLabel = {
            'whole_blood': 'Whole Blood', 'prbc': 'PRBC', 'plasma': 'Plasma / FFP', 
            'platelets': 'RDP', 'sdp': 'SDP', 'cryo': 'Cryo', 'granulocytes': 'Granulocytes',
        }[data.requestType] || data.requestType.toUpperCase();
        
        return (
            <div className='text-white'>
                <h2 className="text-2xl font-bold mb-3">{API_CONFIG.MY_BLOOD_BANK_NAME}</h2>
                <p className="text-sm font-medium">Bank ID: <span className="font-semibold">{API_CONFIG.MY_BLOOD_BANK_ID}</span></p>
                
                <div className="mt-4">
                    <p className="text-lg font-medium">Selected Criteria:</p>
                    <p className="text-sm font-medium">Component: <span className="font-semibold">{componentLabel || 'N/A'}</span></p>
                    <p className="text-sm font-medium">Group: <span className="font-semibold">{data.bloodGroup.toUpperCase() || 'N/A'}</span></p>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans p-4">
            <main className="w-full max-w-6xl p-0 rounded-2xl overflow-hidden shadow-2xl bg-white my-12 md:my-6">
                <div className="flex flex-col md:flex-row h-full">
                    
                    {/* Left Side: Conical Gradient Design */}
                    <div
                        className="w-full md:w-1/3 h-64 md:h-auto flex flex-col justify-between p-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                        style={{
                            backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #f081a1 0%, #d46884 15%, #a0364d 50%, #8a0330 75%, #6f0022 100%)',
                            minHeight: '200px'
                        }}
                    >
                        {renderCriteriaSummary(formData)}
                        
                        {!isFormView && (
                            <button 
                              onClick={handleBackToForm}
                              className="mt-8 flex items-center text-white text-sm font-semibold hover:opacity-80 transition"
                            >
                              <ArrowLeft className="w-4 h-4 mr-2" />
                              Back to Check Stock
                            </button>
                        )}
                    </div>

                    {/* Right Side: Dynamic Content (Form or Results) */}
                    {isFormView ? (
                        <BloodAvailabilityForm 
                            formData={formData} 
                            handleChange={handleChange} 
                            handleProceed={handleProceed}
                        />
                    ) : (
                        <AvailabilityResults
                            searchData={formData}
                            searchResults={searchResults}
                            isLoading={isLoading}
                            error={error}
                            onBack={handleBackToForm}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
