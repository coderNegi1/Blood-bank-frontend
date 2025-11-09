"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className="min-h-screen mt-8 md:mt-20">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
