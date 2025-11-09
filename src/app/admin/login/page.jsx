"use client";
import React, { useState } from "react";
import { LogIn, Mail, Lock, Shield } from "lucide-react";

// ================================
// Reusable Input Component
// ================================
const LoginInput = ({ label, type = "text", name, placeholder, icon: IconComponent, value, onChange }) => (
  <div className="py-3">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 sr-only">
      {label}
    </label>
    <div className="relative rounded-lg shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {IconComponent && <IconComponent className="h-5 w-5 text-gray-400" />}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500 transition duration-150 shadow-sm text-base"
      />
    </div>
  </div>
);

// ================================
// Main Admin Login Component
// ================================
export default function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5007/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('adminToken', data.data.accessToken);
        localStorage.setItem('adminUser', JSON.stringify(data.data.user));
        
        // Redirect to admin dashboard
        window.location.href = '/admin';
      } else {
        alert(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <main className="w-full max-w-sm md:max-w-md p-0 rounded-xl overflow-hidden shadow-2xl bg-white">

        {/* Header Section with Gradient */}
        <header
          className="py-6 px-6 sm:px-8 text-white font-extrabold text-xl sm:text-2xl text-center flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(to right, #3730a3, #4338ca, #4f46e5, #6366f1, #818cf8)",
          }}
        >
          <Shield className="w-6 h-6 text-white" />
          Admin Panel Login
        </header>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <LoginInput
            label="Admin Email"
            name="email"
            type="email"
            placeholder="Admin Email"
            icon={Mail}
            value={formData.email}
            onChange={handleChange}
          />

          <LoginInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            icon={Lock}
            value={formData.password}
            onChange={handleChange}
          />

          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md shadow-indigo-500/30 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-300/80"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Log In
            </button>
          </div>
        </form>

        {/* Demo Credentials Section */}
        <div className="px-6 pb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-800 mb-2">Demo Credentials:</h4>
            <div className="text-xs text-blue-700 space-y-1">
              <p><strong>Email:</strong> admin@bloodcentre.com</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
            <button
              type="button"
              onClick={() => setFormData({ email: "admin@bloodcentre.com", password: "admin123" })}
              className="mt-3 w-full text-xs bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 transition duration-200"
            >
              Fill Demo Credentials
            </button>
          </div>
        </div>

        {/* Forgot Password Section */}
        <div className="py-4 text-center border-t border-gray-100 mt-2">
          <p className="text-gray-600 text-sm">
            Forgot password?{" "}
            <a href="/admin/forgot-password" className="text-indigo-600 font-semibold hover:text-indigo-700 transition duration-200">
              Reset Here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
