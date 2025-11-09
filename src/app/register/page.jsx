"use client"
import React, { useState } from 'react';
import { Check, LogIn } from 'lucide-react'; // Using Lucide-react icons

// 1. Reusable Input/Textarea Component
const FormInput = ({ label, type = 'text', name, placeholder, isTextArea = false, value, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gray-100 last:border-b-0 ">
      {/* Label - Responsive width */}
      <label
        htmlFor={name}
        className="w-full md:w-1/3 text-lg text-gray-700 font-medium mb-2 md:mb-0 pr-4"
      >
        {label}
      </label>
      {/* Input Field - Responsive width */}
      <div className="w-full md:w-2/3">
        {isTextArea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition duration-150 resize-none shadow-sm"
            value={value}
            onChange={onChange}
          ></textarea>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition duration-150 shadow-sm"
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

// 2. Reusable Select Component
const FormSelect = ({ label, name, options, value, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gray-100 last:border-b-0">
      <label
        htmlFor={name}
        className="w-full md:w-1/3 text-lg text-gray-700 font-medium mb-2 md:mb-0 pr-4"
      >
        {label}
      </label>
      <div className="w-full md:w-2/3">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition duration-150 shadow-sm appearance-none bg-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// 3. Main Application Component (Registration Form)
const App = () => {
  // State to track form data
  const [formData, setFormData] = useState({
    registerAs: 'donor', // Default to Donor
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted:', formData);
    // Add API submission logic here
  };

  const registrationOptions = [
    { value: 'donor', label: 'Donor' },
    { value: 'other_org', label: 'Other Organization' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans p-4 ">
      <main className="w-full max-w-4xl p-0 rounded-xl overflow-hidden shadow-2xl bg-white mt-12 md:mt-4    ">
        
        {/* Header Section */}
        <header
          className="py-6 px-6 sm:px-10 text-white font-extrabold text-xl sm:text-2xl"
          style={{
            background: 'linear-gradient(to right, #8a0330, #a0364d, #b94f68, #d46884, #f081a1)'
          }}
        >
          Register New User
        </header>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-10">
          
          {/* 1. Name */}
          <FormInput
            label="Name"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          
          {/* 2. Email */}
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="your@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          {/* 3. Phone Number */}
          <FormInput
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          {/* 4. Address */}
          <FormInput
            label="Address"
            name="address"
            placeholder="Type Your Address Here"
            isTextArea
            value={formData.address}
            onChange={handleChange}
          />
          
          {/* 5. Register As (Select Field) */}
          <FormSelect
            label="Register As"
            name="registerAs"
            options={registrationOptions}
            value={formData.registerAs}
            onChange={handleChange}
          />

          {/* 6. Password */}
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create a Strong Password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <div className="flex justify-end pt-8">
            <button
              type="submit"
              className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-red-600 rounded-full shadow-lg shadow-red-500/50 hover:bg-red-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-300/80"
            >
              Submit
              <Check className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>

        {/* Login Link Section */}
        <div className="py-4 text-center border-t border-gray-100 mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-red-600 font-semibold hover:text-red-700 transition duration-200">
              Log In
            </a>
          </p>
        </div>

      </main>
    </div>
  );
};

export default App;
