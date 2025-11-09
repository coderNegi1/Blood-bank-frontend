"use client"
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

// Updated Dummy Data to reflect a specific blood component selection
const DUMMY_SEARCH_DATA = {
  requestType: 'Packed Red Blood Cells (PRBC)', // Reflects one of the new components
  bloodGroup: 'O+',
  state: 'Maharashtra',
  district: 'Mumbai',
};

// Dummy Results (यह डेटा डेटाबेस से आएगा)
const DUMMY_RESULTS = [
  { id: 1, type: 'Blood Bank', name: 'City Central Blood Bank', units: 5, distance: '2.5 km', contact: '123-456-7890', isVerified: true },
  { id: 2, type: 'Organization', name: 'Life Savers NGO', units: 10, distance: '5.8 km', contact: '987-654-3210', isVerified: true },
  { id: 3, type: 'Individual Donor', name: 'Amit Singh', units: 1, distance: '1.1 km', contact: '555-123-4567', isVerified: false },
  { id: 4, type: 'Blood Bank', name: 'Coastal Health Center', units: 3, distance: '8.2 km', contact: '444-555-6666', isVerified: true },
];

// Component to display a single search result card
const ResultCard = ({ result }) => {
  const isVerifiedStyle = result.isVerified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  
  return (
    <div className="bg-white p-5 rounded-xl shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            {result.name}
            {result.isVerified && <ShieldCheck className="w-4 h-4 ml-2 text-green-500" title="Verified" />}
          </h3>
          <p className="text-sm text-gray-500">{result.type}</p>
        </div>
        <div className={`px-3 py-1 text-sm font-semibold rounded-full ${isVerifiedStyle}`}>
          {result.isVerified ? 'Verified' : 'Unverified'}
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <div className="text-center">
          <p className="text-2xl font-extrabold text-red-600">{result.units}</p>
          <p className="text-xs text-gray-500">Units Available</p>
        </div>
        
        <div className="text-right">
          <p className="text-md font-medium text-gray-700 flex items-center justify-end">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            {result.distance}
          </p>
          <p className="text-md font-medium text-gray-700 flex items-center justify-end mt-1">
            <Phone className="w-4 h-4 mr-1 text-gray-500" />
            {result.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Application Component (Availability Results Page)
const App = () => {
  const searchData = DUMMY_SEARCH_DATA;
  const searchResults = DUMMY_RESULTS;
  
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 font-sans p-4">
      <main className="w-full max-w-6xl p-0 rounded-2xl overflow-hidden shadow-2xl bg-white mt-12 md:mt-6">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left Side: Summary and Design (similar conical gradient) */}
          <div
            className="w-full md:w-1/3 h-64 md:h-auto p-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex flex-col justify-between"
            style={{
              // Conical Gradient replicating the image design
              backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #f081a1 0%, #d46884 15%, #a0364d 50%, #8a0330 75%, #6f0022 100%)',
              minHeight: '200px'
            }}
          >
            <div className='text-white'>
              <h2 className="text-2xl font-bold mb-3">Search Criteria</h2>
              <p className="text-sm font-medium">Type: <span className="font-semibold">{searchData.requestType}</span></p>
              <p className="text-sm font-medium">Group: <span className="font-semibold">{searchData.bloodGroup}</span></p>
              <p className="text-sm font-medium">Location: <span className="font-semibold">{searchData.district}, {searchData.state}</span></p>
            </div>
            
            <button 
              onClick={() => console.log('Go back to search form')}
              className="mt-8 flex items-center text-white text-sm font-semibold hover:opacity-80 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Change Search
            </button>
          </div>

          {/* Right Side: Search Results List */}
          <div className="w-full md:w-2/3 p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Availability Results</h1>
            <p className="text-gray-500 mb-8">Found <span className="font-bold text-red-600">{searchResults.length}</span> matches for {searchData.bloodGroup} {searchData.requestType} in {searchData.district}.</p>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              {searchResults.length > 0 ? (
                searchResults.map(result => (
                  <ResultCard key={result.id} result={result} />
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-red-400" />
                  <p>No matching resources found for your request.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
