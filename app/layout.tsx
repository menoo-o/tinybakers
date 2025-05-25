import type { Metadata } from "next";

import "./globals.css";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";

import Marquee from "@/components/Marquee";



export const metadata: Metadata = {
  title: "The Tiny Bakery",
  description: "Landing Page for The Tiny Bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`} >
        
        <DesktopNavbar />
        <Marquee />
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
