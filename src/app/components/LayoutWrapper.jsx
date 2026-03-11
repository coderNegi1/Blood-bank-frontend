"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import EMGnav from "@/app/components/EMGnav";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <EMGnav />}
      {!isAdmin && <Navbar />}
      <main className="min-h-screen mt-40 md:mt-32">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
