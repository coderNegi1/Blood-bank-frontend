"use client";
import { useState, useEffect, useRef } from 'react';
import DashboardCard from "@/app/components/DashboardCard";

export default function BloodStockManagementPage() {
  const [bloodStock, setBloodStock] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create refs for all input fields
  const inputRefs = {
    'A+': useRef(null),
    'A-': useRef(null),
    'B+': useRef(null),
    'B-': useRef(null),
    'AB+': useRef(null),
    'AB-': useRef(null),
    'O+': useRef(null),
    'O-': useRef(null)
  };

  // Fetch blood stock and stats
  useEffect(() => {
    fetchBloodStock();
    fetchStats();
  }, []);

  const fetchBloodStock = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5007/api/v1/blood-stock/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setBloodStock(data.data.stocks || []);
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching blood stock:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5007/api/v1/blood-stock/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const updateStock = async (bloodGroup, units) => {
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5007/api/v1/blood-stock', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bloodGroup, units })
      });

      if (response.ok) {
        fetchBloodStock();
        fetchStats();
        alert(`${bloodGroup} stock updated to ${units} units`);
      } else {
        const data = await response.json();
        if (response.status === 401) {
          alert('Session expired. Please login again.');
          window.location.href = '/admin/login';
        } else {
          alert(data.message || 'Failed to update stock');
        }
      }
    } catch (error) {
      console.error('Error updating stock:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateAllStock = async () => {
    setIsSubmitting(true);
    
    try {
      const stockUpdates = [];
      ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].forEach(bloodGroup => {
        const input = inputRefs[bloodGroup].current;
        if (input) {
          stockUpdates.push({
            bloodGroup,
            units: parseInt(input.value) || 0
          });
        }
      });

      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5007/api/v1/blood-stock/bulk', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stockUpdates })
      });

      if (response.ok) {
        fetchBloodStock();
        fetchStats();
        alert('All blood stocks updated successfully');
      } else {
        const data = await response.json();
        if (response.status === 401) {
          alert('Session expired. Please login again.');
          window.location.href = '/admin/login';
        } else {
          alert(data.message || 'Failed to update stocks');
        }
      }
    } catch (error) {
      console.error('Error updating stocks:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
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
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Blood Stock Management</h1>
          <p className="text-gray-600">Update blood inventory for Uttarakhand Blood Bank</p>
        </div>
        <button
          onClick={updateAllStock}
          disabled={isSubmitting}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Updating...' : 'Update All Stock'}
        </button>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid md:grid-cols-4 gap-4">
          <DashboardCard title="Total Units" value={stats.totalUnits} />
          <DashboardCard title="Available Groups" value={stats.availableGroups} />
          <DashboardCard title="Empty Groups" value={stats.emptyGroups} />
          <DashboardCard title="Total Groups" value={stats.totalGroups} />
        </div>
      )}

      {/* Stock Update Form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Blood Stock</h3>
        <p className="text-sm text-gray-600 mb-6">Enter the current units available for each blood group</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodGroup => {
            const stock = bloodStock.find(s => s.bloodGroup === bloodGroup);
            const currentUnits = stock ? stock.units : 0;
            
            return (
              <div key={bloodGroup} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStockColor(currentUnits)}`}>
                    {getStockIcon(currentUnits)} {bloodGroup}
                  </span>
                  <span className="text-sm text-gray-500">{currentUnits} units</span>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700">
                    Current Units
                  </label>
                  <input
                    ref={inputRefs[bloodGroup]}
                    type="number"
                    defaultValue={currentUnits}
                    min="0"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter units"
                  />
                  <button
                    onClick={() => {
                      const input = inputRefs[bloodGroup].current;
                      if (input) {
                        updateStock(bloodGroup, parseInt(input.value) || 0);
                      }
                    }}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => {
              if (confirm('Set all blood groups to 0 units?')) {
                ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].forEach(bloodGroup => {
                  const input = inputRefs[bloodGroup].current;
                  if (input) {
                    input.value = 0;
                  }
                });
              }
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Clear All Stock
          </button>
          <button
            onClick={() => {
              ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].forEach(bloodGroup => {
                const input = inputRefs[bloodGroup].current;
                if (input) {
                  input.value = 10;
                }
              });
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Set All to 10 Units
          </button>
          <button
            onClick={() => {
              ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].forEach(bloodGroup => {
                const input = inputRefs[bloodGroup].current;
                if (input) {
                  input.value = 20;
                }
              });
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Set All to 20 Units
          </button>
        </div>
      </div>

      {/* Current Stock Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Stock Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Group
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Available
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bloodStock.map((stock) => (
                <tr key={stock._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStockColor(stock.units)}`}>
                      {stock.bloodGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold">{stock.units}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {stock.units === 0 && <span className="text-red-600 font-semibold">Out of Stock</span>}
                    {stock.units > 0 && stock.units <= 5 && <span className="text-yellow-600 font-semibold">Low Stock</span>}
                    {stock.units > 5 && <span className="text-green-600 font-semibold">Available</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(stock.lastUpdated).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
