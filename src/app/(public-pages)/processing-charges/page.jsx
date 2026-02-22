"use client"
import React from 'react';
import { 
  Calculator, 
  Info,
  ExternalLink
} from 'lucide-react';

const BloodBankCharges = () => {
  // Processing data for the pricing table
  const processingData = [
    { id: 'whole-blood', name: 'Whole Blood ', govt: 1050, pvt: 1000, linkId: 'whole-blood' },
    { id: 'rbcs', name: 'Packed Red Blood Cells (PRBC)', govt: 1050, pvt: 1000, linkId: 'rbcs' },
    { id: 'plasma-donation', name: 'Fresh Frozen Plasma (FFP)', govt: 300, pvt: 400, linkId: 'plasma-donation' },
    { id: 'platelets-sdp', name: 'Platelets (SDP/Apheresis) Donation', govt: '---', pvt: 11000, linkId: 'platelets-sdp'},
    { id: 'platelets-rdp', name: 'Platelet Concentrate (RDP)', govt: 300, pvt: 400, linkId: 'platelets-rdp' },
    { id: 'cryoprecipitate', name: 'Cryoprecipitate', govt: 200, pvt: 200, linkId: 'cryoprecipitate' }
  ];

  // Function to handle redirection to the details page
  const handleDetailsClick = (id) => {
    // Redirects to your custom route with the specific component ID as a hash
    window.location.href = `/donation-process#${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            Blood <span className="text-red-600">Processing</span> Charges
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base font-medium">
            Standard approved service charges for blood and its components.
          </p>
        </div>

        {/* Simplified Pricing Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-900 text-white text-[10px] md:text-xs uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Component Name</th>
                  {/* <th className="px-6 py-5 text-center">Govt. Rate (₹)</th> */}
                  <th className="px-6 py-5 text-center">Processing Charges </th>
                  <th className="px-8 py-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {processingData.map((item) => (
                  <tr key={item.id} className="hover:bg-red-50/40 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="font-bold text-gray-800 text-base md:text-lg">{item.name}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold mt-0.5 tracking-wider">Approved Component</div>
                    </td>
                    {/* <td className="px-6 py-6 text-center">
                      <div className="text-red-600 font-black text-xl">₹{item.govt}</div>
                    </td> */}
                    <td className="px-6 py-6 text-center font-black text-gray-700 text-xl">
                      ₹{item.pvt}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button 
                        onClick={() => handleDetailsClick(item.linkId)}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold bg-gray-900 text-white group-hover:bg-red-600 px-5 py-2.5 rounded-full transition-all uppercase tracking-widest shadow-lg active:scale-95"
                      >
                        Details <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Simple Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Calculator className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Standardization</p>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Charges are strictly governed by NBTC (National Blood Transfusion Council) guidelines.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-red-50 border border-red-100 rounded-2xl shadow-sm">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Info className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-1">Policy Exception</p>
              <p className="text-sm text-red-700 leading-relaxed font-semibold italic">Processing charges are waived off (FREE) for Thalassemia and Hemophilia patients.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
           <p className="text-xs text-gray-400 uppercase font-bold tracking-[0.3em]">© Blood Bank Services - Information Portal</p>
        </div>

      </div>
    </div>
  );
};

export default BloodBankCharges;