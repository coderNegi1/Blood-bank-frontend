"use client"

import React from "react";
import { Phone, FileText, Handshake } from "lucide-react";

const TopBar = () => {
    return (
        <div className="bg-red-700 text-white text-sm fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between py-1 md:py-1 gap-3 md:gap-0">

                {/* Left Side - Contact Info (Centered on mobile) */}
                <div className="flex md:gap-3 items-center justify-center md:justify-start">
                    <a
                        href="tel:+919876543210"
                        className="flex items-center space-x-2 hover:text-red-100 transition-colors font-medium"
                    >
                        <Phone className="w-4 h-4 " />
                        <span>+91 98765 43210</span>
                    </a>
                    <a
                        href="tel:+91 74569 09619"
                        className="flex items-center space-x-2 ps-1 hover:text-red-100 transition-colors font-medium"
                    >
                        <Phone className="w-4 h-4 " />
                        <span>+91 74569 09619</span>
                    </a>

                </div>

                {/* Right Side - Medical Forms (Side-by-side even on small screens) */}
                <div className="flex items-center gap-2 sm:gap-4 w-full md:w-auto">

                    {/* 1. Blood Requisition - Emergency Focus */}
                    <a
                        href="/blood-requisition-form.jpg"
                        download
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 font-bold hover:bg-white hover:text-red-700 transition-all px-3 sm:px-5 py-1.5 rounded-lg bg-red-600 text-white border-2 border-white shadow-sm group text-xs sm:text-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        <span className="whitespace-nowrap">Blood Requisition</span>
                    </a>
                    {/* 2. MOU Form - Hospital Tie-up */}
                    <a
                        href="#mouForm"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 font-bold hover:bg-gray-100 transition-all px-3 sm:px-5 py-1.5 rounded-lg bg-white text-red-700 border-2 border-transparent shadow-sm text-xs sm:text-sm"
                    >
                        <Handshake className="w-4 h-4 hidden sm:block" />
                        <span className="whitespace-nowrap">MOU Registration</span>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default TopBar;