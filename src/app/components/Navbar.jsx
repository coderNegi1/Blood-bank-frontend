"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { 
      name: "Media", 
      path: "#",
      dropdown: [
        { name: "Events", path: "/events" },
        { name: "Blogs", path: "/blogs" },
        { name: "Gallery", path: "/gallery" },
      ]
    },
    // { name: "Donate Blood", path: "/donate" },
    { name: "Blood Availability", path: "/blood-availability" },
    { name: "Donation Process", path: "/donation-process" },
    // { name: "Find Blood", path: "/find-blood" },
    { name: "Contact", path: "/contact" },
    // { name: "Admin", path: "/admin" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/70 shadow-md text-gray-700 backdrop-blur-lg py-4 md:py-4"
          : "bg-[#BC003D] py-6 md:py-6"
      }`}
    >
      {/* ---------- Logo ---------- */}
      <Link href="/" className="flex items-center gap-2">
        <svg
          width="157"
          height="40"
          viewBox="0 0 157 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-9 ${isScrolled && "invert opacity-80"}`}
        >
          {/* your SVG content here */}
        </svg>
      </Link>

      {/* ---------- Desktop Nav ---------- */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          link.dropdown ? (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === link.name ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {link.dropdown.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </Link>
          )
        ))}
      </div>

      {/* ---------- Mobile Menu Button ---------- */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          link.dropdown ? (
            <div key={i} className="flex flex-col items-center gap-3">
              <button
                onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                className="flex items-center gap-1 font-semibold"
              >
                {link.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === link.name ? 'rotate-180' : ''
                }`} />
              </button>
              {openDropdown === link.name && (
                <div className="flex flex-col items-center gap-2 pl-4">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
