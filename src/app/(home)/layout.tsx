import "@/styles/globals.css";
import { type Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
