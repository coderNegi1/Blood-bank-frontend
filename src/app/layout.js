import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";

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
    icon: "/uttarakhand-blood-centre-logo.jpg", 
  },
};

export default function RootLayout({ children }) {
  // Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ukbloodcentre.com/#organization",
        "name": "Uttarakhand Blood Centre",
        "url": "https://www.ukbloodcentre.com",
        "logo": "https://www.ukbloodcentre.com/uttarakhand-blood-centre-logo.jpg",
        "sameAs": [
          "https://www.facebook.com/share/1DN4Mcn4dQ/",
          "https://www.instagram.com/uttarakhandbloodcentre?igsh=eDg2ejJxZmZhc2Zu",
          "https://youtube.com/@uttarakhandbloodcentredehradun?si=3RCriNF62e58LNyE",
          "https://jsdl.in/RSL-QJJ1773077481"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ukbloodcentre.com/#website",
        "url": "https://www.ukbloodcentre.com",
        "name": "Uttarakhand Blood Centre",
        "publisher": {
          "@id": "https://www.ukbloodcentre.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased bg-gray-50 text-gray-900`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}