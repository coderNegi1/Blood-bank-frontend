import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper"; // new wrapper

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Uttarakhand Blood Centre",
  description: "Donate blood, save lives — Official Blood Donation Platform.",
  icons: {
    icon: "/ukbloodcentreLogo.jpg", // image path — public folder ke andar
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Client-side wrapper handles Navbar/Footer logic */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
