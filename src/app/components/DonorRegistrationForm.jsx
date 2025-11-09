"use client";
import React, { useState } from "react";
import apiClient from "@/lib/api";

const DonorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    bloodGroup: "",
    lastDonationMonth: "",
    lastDonationYear: "",
    donationWilling: "both",
    address: "",
    district: "",
    state: "Uttarakhand",
    pincode: "",
    weight: "",
    hasDiseases: "none",
    diseaseDetails: "",
    isOnMedication: false,
    medicationDetails: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ FIXED handleChange — handles both text, checkbox, number properly
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? value.replace(/\D/g, "") // only digits allowed
          : value,
    }));
  };

  // ✅ Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.agreeToTerms) {
        alert("Please agree to the terms before submitting.");
        setIsSubmitting(false);
        return;
      }

      const donorData = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email || undefined,
        address: formData.address,
        age: parseInt(formData.age) || undefined,
        bloodGroup: formData.bloodGroup,
        district: formData.district,
        state: formData.state,
        pincode: formData.pincode,
        lastDonationMonth: formData.lastDonationMonth || undefined,
        lastDonationYear: formData.lastDonationYear || undefined,
        agreeToTerms: formData.agreeToTerms,
      };

      await apiClient.registerDonor(donorData);
      alert("🎉 Registration successful! Thank you for becoming a donor.");

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        age: "",
        gender: "",
        bloodGroup: "",
        lastDonationMonth: "",
        lastDonationYear: "",
        donationWilling: "both",
        address: "",
        district: "",
        state: "Uttarakhand",
        pincode: "",
        weight: "",
        hasDiseases: "none",
        diseaseDetails: "",
        isOnMedication: false,
        medicationDetails: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        emergencyContactRelation: "",
        agreeToTerms: false,
      });
    } catch (err) {
      console.error("Error submitting donor form:", err);
      alert("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Reusable Components
  const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    className = "",
    required = true,
  }) => (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="text-gray-700 mb-1 text-sm font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 shadow-sm"
      />
    </div>
  );

  const FormSelect = ({
    label,
    name,
    options,
    className = "",
    required = true,
  }) => (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="text-gray-700 mb-1 text-sm font-medium"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 shadow-sm"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  // ✅ Final UI
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex items-center justify-center font-['Inter']">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-red-800 to-purple-900">
          <h1 className="text-2xl sm:text-3xl font-semibold text-red-300">
            Register As Donor
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>
            </div>

            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              className="col-span-2"
            />

            <FormInput
              label="Phone Number"
              name="phoneNumber"
              placeholder="10-digit phone number"
              type="tel"
            />
            <FormInput
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
              required={false}
            />

            <FormInput
              label="Age"
              name="age"
              placeholder="Age"
              type="number"
            />
            <FormSelect
              label="Gender"
              name="gender"
              options={["Male", "Female", "Other"]}
            />

            {/* Blood Info */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
                Blood Information
              </h3>
            </div>

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
              ]}
            />
            <FormInput
              label="Weight (kg)"
              name="weight"
              type="number"
              placeholder="Weight"
            />

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
              type="number"
              required={false}
            />
            <FormSelect
              label="Donation Willingness"
              name="donationWilling"
              options={["Regular", "Emergency", "Both"]}
            />

            {/* Address Info */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
                Address Information
              </h3>
            </div>

            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="address"
                className="text-gray-700 mb-1 text-sm font-medium"
              >
                Full Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                required
                rows="3"
                className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 shadow-sm"
              />
            </div>

            <FormSelect
              label="District"
              name="district"
              options={[
                "Dehradun",
                "Haridwar",
                "Udham Singh Nagar",
                "Nainital",
                "Pauri Garhwal",
                "Tehri Garhwal",
                "Rudraprayag",
                "Chamoli",
                "Pithoragarh",
                "Bageshwar",
                "Almora",
                "Champawat",
                "Uttarkashi",
              ]}
            />

            <FormInput
              label="State"
              name="state"
              placeholder="State"
            />
            <FormInput
              label="Pincode"
              name="pincode"
              placeholder="6-digit pincode"
              type="number"
            />

            {/* Health */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
                Health Information
              </h3>
            </div>

            <FormSelect
              label="Any Diseases?"
              name="hasDiseases"
              options={[
                "none",
                "diabetes",
                "blood_pressure",
                "heart_disease",
                "other",
              ]}
            />
            <div className="col-span-1 flex items-center">
              <input
                type="checkbox"
                id="isOnMedication"
                name="isOnMedication"
                checked={formData.isOnMedication}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label
                htmlFor="isOnMedication"
                className="ml-2 text-sm text-gray-700"
              >
                Currently on medication
              </label>
            </div>

            {formData.hasDiseases !== "none" && (
              <div className="col-span-2 flex flex-col">
                <label
                  htmlFor="diseaseDetails"
                  className="text-gray-700 mb-1 text-sm font-medium"
                >
                  Disease Details
                </label>
                <textarea
                  id="diseaseDetails"
                  name="diseaseDetails"
                  value={formData.diseaseDetails}
                  onChange={handleChange}
                  placeholder="Provide details about your condition"
                  rows="3"
                  className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 shadow-sm"
                />
              </div>
            )}

            {formData.isOnMedication && (
              <div className="col-span-2 flex flex-col">
                <label
                  htmlFor="medicationDetails"
                  className="text-gray-700 mb-1 text-sm font-medium"
                >
                  Medication Details
                </label>
                <textarea
                  id="medicationDetails"
                  name="medicationDetails"
                  value={formData.medicationDetails}
                  onChange={handleChange}
                  placeholder="Please provide medication details"
                  rows="3"
                  className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 shadow-sm"
                />
              </div>
            )}

            {/* Emergency */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
                Emergency Contact
              </h3>
            </div>

            <FormInput
              label="Emergency Contact Name"
              name="emergencyContactName"
              placeholder="Full name"
              required={false}
            />
            <FormInput
              label="Emergency Contact Phone"
              name="emergencyContactPhone"
              placeholder="10-digit phone"
              type="tel"
              required={false}
            />
            <FormInput
              label="Relation"
              name="emergencyContactRelation"
              placeholder="e.g. Parent, Spouse"
              required={false}
            />
          </div>

          {/* Terms */}
          <div className="mt-8 flex items-start">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label
              htmlFor="agreeToTerms"
              className="ml-3 text-sm text-gray-600"
            >
              I confirm that the information provided is correct and I am
              willing to be contacted for blood donation.
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center space-x-2 py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 shadow-md ${
                isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-50 hover:shadow-lg"
              }`}
            >
              <span>
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              <svg
                className="w-5 h-5 ml-1 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;
