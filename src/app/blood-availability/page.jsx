"use client";
import { useState, useEffect } from 'react';

export default function BloodAvailabilityPage() {
  const [bloodStock, setBloodStock] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBloodStock();
  }, []);

  const fetchBloodStock = async () => {
    try {
      const response = await fetch('http://localhost:5007/api/v1/blood-stock');
      
      if (response.ok) {
        const data = await response.json();
        setBloodStock(data.data);
      }
    } catch (error) {
      console.error('Error fetching blood stock:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStockColor = (units) => {
    if (units === 0) return 'bg-red-100 text-red-800 border-red-300';
    if (units <= 5) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    return 'bg-green-100 text-green-800 border-green-300';
  };

  const getStockIcon = (units) => {
    if (units === 0) return '❌';
    if (units <= 5) return '⚠️';
    return '✅';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            🩸 Uttarakhand Blood Bank
          </h1>
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Blood Availability
          </h2>
          <p className="text-gray-600">
            Check current blood stock availability at our blood bank
          </p>
        </div>

        {/* Blood Groups Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodGroup => {
            const stock = bloodStock.find(s => s.bloodGroup === bloodGroup);
            const units = stock ? stock.units : 0;
            
            return (
              <div key={bloodGroup} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <div className={`p-6 text-center border-2 ${getStockColor(units)}`}>
                  <div className="text-3xl mb-2">{getStockIcon(units)}</div>
                  <div className="text-2xl font-bold mb-1">{bloodGroup}</div>
                  <div className="text-3xl font-bold">{units}</div>
                  <div className="text-sm mt-1">Units Available</div>
                  {units === 0 && (
                    <div className="text-xs mt-2 font-semibold">Out of Stock</div>
                  )}
                  {units > 0 && units <= 5 && (
                    <div className="text-xs mt-2 font-semibold">Low Stock</div>
                  )}
                  {units > 5 && (
                    <div className="text-xs mt-2 font-semibold">Available</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Summary Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {bloodStock.reduce((sum, stock) => sum + stock.units, 0)}
              </div>
              <div className="text-gray-600 mt-1">Total Units Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {bloodStock.filter(stock => stock.units > 0).length}
              </div>
              <div className="text-gray-600 mt-1">Blood Groups Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600">
                {bloodStock.filter(stock => stock.units === 0).length}
              </div>
              <div className="text-gray-600 mt-1">Blood Groups Unavailable</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-800 mb-3">🏥 Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div>
                <strong className="text-red-700">Blood Bank Name:</strong>
                <p className="text-gray-700">Uttarakhand Blood Bank</p>
              </div>
              <div>
                <strong className="text-red-700">Emergency Contact:</strong>
                <p className="text-gray-700">📞 1800-123-4567</p>
              </div>
              <div>
                <strong className="text-red-700">Address:</strong>
                <p className="text-gray-700">Dehradun, Uttarakhand</p>
              </div>
              <div>
                <strong className="text-red-700">Working Hours:</strong>
                <p className="text-gray-700">24/7 Emergency Service</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600 mb-3">
                <strong>For emergency blood requirement:</strong>
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => window.location.href = 'tel:1800-123-4567'}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                >
                  📞 Call Now
                </button>
                <button 
                  onClick={() => window.location.href = '/donate'}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  🩸 Donate Blood
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="mt-1">Stock is updated regularly by our admin team</p>
        </div>
      </div>
    </div>
  );
}
