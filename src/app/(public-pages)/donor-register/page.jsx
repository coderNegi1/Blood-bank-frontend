"use client";
import React, { useState } from "react";
import apiClient from '@/lib/api';

const DonorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    age: "",
    bloodGroup: "",
    district: "",
    state: "",
    pincode: "",
    lastDonationMonth: "",
    lastDonationYear: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiClient.registerDonor(formData);
      alert('Registration successful! Thank you for becoming a blood donor.');
      
      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        age: "",
        bloodGroup: "",
        district: "",
        state: "",
        pincode: "",
        lastDonationMonth: "",
        lastDonationYear: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input Component
  const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    required = true,
  }) => (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-700 mb-1 text-sm font-medium tracking-wide"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
      />
    </div>
  );

  // Select Component
  const FormSelect = ({ label, name, options }) => (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-700 mb-1 text-sm font-medium tracking-wide"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#8C002B]">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-['Inter']">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="p-8 bg-[#8C002B] text-white">
          <h1 className="text-3xl font-semibold">Donor Registration</h1>
          <p className="text-sm text-gray-200 mt-1">
            Become a life saver — Register as a blood donor.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="Enter your name"
            />
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="Enter phone number"
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required={false}
            />
            <FormInput
              label="Age"
              name="age"
              type="number"
              placeholder="Enter your age"
            />
            <FormSelect
              label="Blood Group"
              name="bloodGroup"
              options={[
                "A+",
                "A-",
                "B+",
                "B-",
                "O+",
                "O-",
                "AB+",
                "AB-",
                "Unknown",
              ]}
            />
            <FormSelect
              label="District"
              name="district"
              options={["Dehradun", "Haridwar", "Udham Singh Nagar", "Nainital", "Pauri Garhwal", "Tehri Garhwal", "Rudraprayag", "Chamoli", "Pithoragarh", "Bageshwar", "Almora", "Champawat", "Uttarkashi"]}
            />
            <FormInput
              label="State"
              name="state"
              placeholder="State"
              value="Uttarakhand"
            />
            <FormInput
              label="Pincode"
              name="pincode"
              placeholder="Enter pincode"
            />
          </div>

          <div>
            <label className="text-gray-700 mb-1 text-sm font-medium tracking-wide">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your full address"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              required
            ></textarea>
          </div>

          {/* Last Donation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Last Donation Month"
              name="lastDonationMonth"
              placeholder="e.g. March"
              required={false}
            />
            <FormInput
              label="Last Donation Year"
              name="lastDonationYear"
              placeholder="e.g. 2024"
              required={false}
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 mt-4">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              required
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              I confirm that the information provided is correct and I am
              willing to be contacted for blood donation when required.
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;
