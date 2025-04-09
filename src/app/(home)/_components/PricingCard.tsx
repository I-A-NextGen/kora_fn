"use client";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PricingCardProps {
  amount: number;
  exams: number;
  durationDays: number;
  features: Array<{ check: boolean; value: string }>;
}

const PricingCard = ({
  amount,
  exams,
  durationDays,
  features,
}: PricingCardProps) => {
  return (
    <div className="flex w-80 flex-col items-center gap-3 rounded-2xl border border-black px-4 py-8 text-center md:gap-5 xl:w-[20rem]">
      <h5 className="">
        {exams > 100000 ? <>Ibizamini bidashira</> : <>Ibizamini {exams}</>}
      </h5>
      <p className="text-gray-600">
        {exams > 100000
          ? "Imyaka 2"
          : `${durationDays === 1 ? "Umunsi" : "Iminsi"}  ${durationDays}`}
      </p>
      <h2 className="font-bold">{amount} RWF</h2>
      <div className="mt-3 flex size-fit w-[90%] flex-col gap-3 md:mt-1">
        {features.map((item, i) => {
          return (
            <div
              key={i}
              className="flex w-full justify-start gap-2 text-green-500"
            >
              <div>
                {item.check ? (
                  <Check size={21} className="!size-fit text-primary" />
                ) : (
                  <X size={21} className="!size-fit text-red-500" />
                )}
              </div>
              <span className="text-start text-sm leading-4 text-black lg:text-[.95rem]">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
      <Button
        size={"lg"}
        className="mt-4 h-12 rounded-3xl bg-primary md:mt-auto"
      >
        <Link href={"/"}>Ishyura Ikizamini</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
