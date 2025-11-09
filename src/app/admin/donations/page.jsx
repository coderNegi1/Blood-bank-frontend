"use client";
import { useState, useEffect } from 'react';
import DashboardCard from "@/app/components/DashboardCard";

export default function DonationsManagementPage() {
  const [donations, setDonations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', bloodGroup: '' });
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch donations and stats
  useEffect(() => {
    fetchDonations();
    fetchStats();
  }, [filter]);

  const fetchDonations = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const queryParams = new URLSearchParams();
      if (filter.status) queryParams.append('status', filter.status);
      if (filter.bloodGroup) queryParams.append('bloodGroup', filter.bloodGroup);

      const response = await fetch(`http://localhost:5007/api/v1/donations?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDonations(data.data);
      }
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5007/api/v1/donations/stats', {
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

  const updateDonationStatus = async (donationId, status, rejectionReason = '') => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5007/api/v1/donations/${donationId}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status, rejectionReason })
      });

      if (response.ok) {
        fetchDonations();
        fetchStats();
        setShowModal(false);
        setSelectedDonation(null);
        alert(`Donation ${status} successfully`);
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating donation:', error);
      alert('Network error. Please try again.');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Donations Management</h1>
        <p className="text-gray-600">Manage blood donation registrations and approvals</p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid md:grid-cols-4 gap-4">
          <DashboardCard title="Total Registrations" value={stats.overview.total} />
          <DashboardCard title="Pending" value={stats.overview.pending} />
          <DashboardCard title="Approved" value={stats.overview.approved} />
          <DashboardCard title="Rejected" value={stats.overview.rejected} />
        </div>
      )}

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
            <select
              value={filter.bloodGroup}
              onChange={(e) => setFilter({ ...filter, bloodGroup: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => setFilter({ status: '', bloodGroup: '' })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Group
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  District
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((donation) => (
                <tr key={donation._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{donation.fullName}</div>
                    <div className="text-sm text-gray-500">Age: {donation.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{donation.phone}</div>
                    <div className="text-sm text-gray-500">{donation.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {donation.bloodGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {donation.address.district}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(donation.status)}`}>
                      {donation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(donation.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {donation.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedDonation(donation);
                            setShowModal(true);
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Review
                        </button>
                      </div>
                    )}
                    {donation.status === 'approved' && (
                      <button className="text-green-600 hover:text-green-900">
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {donations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No donations found
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showModal && selectedDonation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Review Donation Application
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <strong>Name:</strong> {selectedDonation.fullName}
                  </div>
                  <div>
                    <strong>Age:</strong> {selectedDonation.age}
                  </div>
                  <div>
                    <strong>Gender:</strong> {selectedDonation.gender}
                  </div>
                  <div>
                    <strong>Blood Group:</strong> {selectedDonation.bloodGroup}
                  </div>
                  <div>
                    <strong>Weight:</strong> {selectedDonation.weight} kg
                  </div>
                  <div>
                    <strong>Phone:</strong> {selectedDonation.phone}
                  </div>
                  <div>
                    <strong>Email:</strong> {selectedDonation.email}
                  </div>
                  <div>
                    <strong>District:</strong> {selectedDonation.address.district}
                  </div>
                </div>

                <div>
                  <strong>Address:</strong><br />
                  {selectedDonation.address.street}, {selectedDonation.address.city}, {selectedDonation.address.state} - {selectedDonation.address.pincode}
                </div>

                <div>
                  <strong>Emergency Contact:</strong><br />
                  {selectedDonation.emergencyContact.name} ({selectedDonation.emergencyContact.relation}) - {selectedDonation.emergencyContact.phone}
                </div>

                <div>
                  <strong>Health Status:</strong> {selectedDonation.hasDiseases === 'none' ? 'No diseases' : selectedDonation.hasDiseases}
                  {selectedDonation.isOnMedication && ', On medication'}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rejection Reason (if rejecting)
                </label>
                <textarea
                  id="rejectionReason"
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter reason for rejection..."
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => {
                    const reason = document.getElementById('rejectionReason').value;
                    updateDonationStatus(selectedDonation._id, 'rejected', reason);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Reject
                </button>
                <button
                  onClick={() => updateDonationStatus(selectedDonation._id, 'approved')}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedDonation(null);
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
