import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import CarsSvg from "./_components/CarsSvg";
import { LogIn, Pen } from "lucide-react";
import Hero from "./_components/Hero";
import HeroFeatures from "./_components/HeroFeatures";
import HeroPricing from "./_components/HeroPricing";

const page = () => {
  return (
    <>
      <Hero/>
      <HeroFeatures/>
      <HeroPricing/>
    </>
  );
};

export default page;
