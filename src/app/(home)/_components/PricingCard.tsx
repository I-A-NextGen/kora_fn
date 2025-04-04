import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PricingCardProps {
  amount: number;
  exams: number;
  durationDays: number;
}

const PricingCard = ({amount,exams,durationDays}:PricingCardProps) => {
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
    <div className="flex w-80 flex-col items-center gap-6 rounded-2xl border border-black px-4 py-8 text-center">
      <h4>Ibizamini {exams}</h4>
      <h2 className="font-semibold text-blue-700">{amount} RWF</h2>
      <h5 className="font-semibold">iminsi {durationDays}</h5>
      <div className="size-fit">
        {itemlist.map((item, i) => {
          return (
            <div key={i} className="inline-flex gap-2 text-green-500">
              {item.icon}
              <span className="text-black text-sm lg:text-sm">{item.content}</span>
            </div>
          );
        })}
      </div>
      <Button size={"lg"} className="h-12 rounded-3xl bg-primary">
        <Link href={"/"}>Tangira Isuzuma</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
