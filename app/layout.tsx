import type { Metadata } from "next";

import "./globals.css";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";





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
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
