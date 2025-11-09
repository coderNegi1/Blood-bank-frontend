"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const sidebarLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Blood Stock", path: "/admin/blood-stock" },
    { name: "Events", path: "/admin/events" },
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Contacts", path: "/admin/contacts" },
   
  ];

  useEffect(() => {
    // Check authentication on component mount
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    
    if (!token || !userData) {
      router.push('/login');
      return;
    }

    try {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      router.push('/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="md:w-64 w-16 border-r border-gray-300 flex flex-col bg-white">
        {/* Logo/Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">UB</span>
            </div>
            <span className="ml-3 font-semibold text-gray-800 hidden md:block">
              Uttarakhand Blood
            </span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1">
          {sidebarLinks.map((item, i) => (
            <Link 
              key={i} 
              href={item.path} 
              className="flex items-center p-4 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              <span className="text-lg">📋</span>
              <span className="ml-3 hidden md:block">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Info */}
        {user && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="ml-3 hidden md:block">
                <div className="text-sm font-medium text-gray-700">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300 bg-white">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            <p className="text-sm text-gray-500">Blood Bank Management System</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="text-gray-600 hover:text-red-600 transition-colors duration-200"
              title="Visit Website"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="p-6 flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
