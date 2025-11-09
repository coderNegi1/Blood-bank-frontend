import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper"; // new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uttarakhand Blood Centre",
  description: "Donate blood, save lives — Official Blood Donation Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Client-side wrapper handles Navbar/Footer logic */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
