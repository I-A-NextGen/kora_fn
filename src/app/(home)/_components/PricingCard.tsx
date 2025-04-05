"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PricingCardProps {
  amount: number;
  exams: number;
  durationDays: number;
  features: string[];
}

const PricingCard = ({amount,exams,durationDays,features}:PricingCardProps) => {
  const itemlist = [
    {
      icon: <Check />,
      content: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <Check />,
      content: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <Check />,
      content: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <Check />,
      content: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="flex w-96 flex-col items-center gap-6 rounded-2xl border border-black px-4 lg:px-8 py-8 text-center">
      <h4>{exams > 100000 ?<>Ibizamini bidashira mu myaka ibiri</>:<>Ibizamini {exams}</>}</h4>
      <h2 className="font-semibold text-blue-700">{amount} RWF</h2>
      <h5 className="font-semibold">mu minsi {durationDays}</h5>
      <div className="size-fit">
        
      </div>
      
      <div className="flex w-full flex-col gap-2">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="text-primary" />
            <p className="text-left">{item}</p>
          </div>
        ))}
      </div>
      <Button size={"lg"} className="h-12 rounded-3xl bg-primary">
        <Link href={"/"}>Ishyura Isuzuma</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
