import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

import { BeautyCursor } from "@/components/common/BeautyCursor";

export const metadata: Metadata = {
  title: "Best Beauty Salon in Tampa, FL - Parul Beauty Salon",
  description:
    "Experience the epitome of luxury and style at Tampa's leading beauty salon. Expert brow artistry, radiant facials, threading, and timeless bridal makeup.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF9F3] text-[#21152A] selection:bg-[#B88736]/20 selection:text-[#24082F]">
        <BeautyCursor />
        {children}
      </body>
    </html>
  );
}
