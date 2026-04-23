"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "About", path: "/about-us" },
        { name: "Certifications", path: "/certifications" },
        { name: "Registrations", path: "/registrations" },
      ]
    },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Whole Human Blood", path: "/services/whole-human-blood-dehradun" },
        { name: "Packed Red Blood Cells (PRBC)", path: "/services/packed-red-blood-cells-dehradun" },
        { name: "Single Donor Platelets (SDP)", path: "/services/single-donor-platelets-sdp-dehradun" },
        { name: "Random Donor Platelets (RDP)", path: "/services/random-donor-platelets-dehradun" },
        { name: "Fresh Frozen Plasma (FFP)", path: "/services/fresh-frozen-plasma-dehradun" },
        { name: "Cryoprecipitate (Cryo)", path: "/services/cryoprecipitate-dehradun" },
      ]
    },
    { name: "Processing Charges", path: "/processing-charges" },
    { name: "Blood Donation", path: "/blood-donation" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = isClient && isScrolled;

  return (
    <nav
      className={`fixed md:top-11 top-18 left-0 w-full flex items-center justify-between
      px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
      ${scrolled
          ? "bg-white/70 shadow-md text-gray-700 backdrop-blur-lg py-1"
          : "bg-[#BC003D] py-4"
        }`}
    >
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/uttarakhand-blood-centre-logo.jpg"
            alt="Uttarakhand Blood Centre"
            className={`h-20 w-auto transition-all rounded-full duration-300
          ${scrolled ? "opacity-80" : ""}`}
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) =>
          link.dropdown ? (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.path || "#"}
                className={`flex items-center gap-1 ${scrolled ? "text-gray-700" : "text-white"}`}
              >
                {link.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                />
              </Link>

              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border
                transition-all duration-200
                ${openDropdown === link.name
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                {link.dropdown.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.path}
                    className="block px-4 py-3 text-gray-700 text-sm hover:rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
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
              className={`group flex flex-col gap-0.5 ${scrolled ? "text-gray-700" : "text-white"}`}
            >
              {link.name}
              <div
                className={`${scrolled ? "bg-gray-700" : "bg-white"}
                h-0.5 w-0 group-hover:w-full transition-all`}
              />
            </Link>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${scrolled ? "invert" : ""}`}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden
        items-center justify-center gap-6 transition-all duration-500 overflow-y-auto
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
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

        {navLinks.map((link, i) =>
          link.dropdown ? (
            <div key={i} className="flex flex-col items-center gap-3">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === link.name ? null : link.name)
                }
                className="flex items-center gap-1 font-semibold text-lg"
              >
                {link.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === link.name && (
                <div className="flex flex-col items-center gap-2 pl-4">
                  {/* Main Services Page Link for Mobile */}
                  <Link 
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-red-600 font-medium underline italic"
                  >
                    View All {link.name}
                  </Link>
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="text-gray-600 text-sm py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={i}
              href={link.path}
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;