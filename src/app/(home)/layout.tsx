import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <div>
        <Navbar/>
        {children}
        <Footer/>
        </div>
  );
}
