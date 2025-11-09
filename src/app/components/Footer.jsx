"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        * {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-700 bg-red-300">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[110px]">
          {/* Logo */}
          <Image
            src="/Uttarakhand Blood Centre Log.jpg"
            alt="Uttarakhand Blood Centre Logo"
            width={100}
            height={100}
            className="hover:opacity-80 transition-opacity duration-300 rounded-full"
            priority
          />

          {/* Quick Links */}
          <div>
            <p className="text-slate-100 font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/blood-availability" className="hover:text-white transition">Blood Availability</Link></li>
              <li><Link href="/donation-process" className="hover:text-white transition">Donation Process</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Media */}
          <div>
            <p className="text-slate-100 font-semibold mb-3">Media</p>
            <ul className="space-y-2">
              <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-slate-100 font-semibold mb-3">Legal</p>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/jury-policy" className="hover:text-white transition">Jury Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60 text-slate-100">
            Donate blood, save lives — Together we can make a difference.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3">
            <Link href="#" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="hover:text-white transition">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>

            <Link href="#" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="hover:text-white transition">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>

            <Link href="#" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="hover:text-white transition">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>

          <p className="mt-3 text-center text-slate-100">
            © 2025 Uttarakhand Blood Centre
          </p>
        </div>
      </footer>
    </>
  );
}
