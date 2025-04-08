import React from "react";
import PricingCard from "./PricingCard";

const examPlans = [
  {
    amount: 300,
    exams: 2,
    durationDays: 1,
    features: [
      { check: false, value: "Igihe gihagije cyo kwitoza" },
      { check: true, value: "Kwerekana ibisubizo by'ibizamini" },
      { check: true, value: "Guhitamo gukora ibizamini byibyapa gusa" },
      { check: false, value: "Ubufasha bwa mwalimu" },
    ],
  },
  {
    amount: 500,
    exams: 5,
    durationDays: 3,
    features: [
      { check: false, value: "Igihe gihagije cyo kwitoza" },
      {
        check: true,
        value: "Kubona ikigereranyo cy`amahirwe yawe yo gutsinda",
      },
      { check: true, value: "Kwerekana ibisubizo by'ibizamini" },
      { check: true, value: "Guhitamo gukora ibizamini byibyapa gusa" },
    ],
  },
  {
    amount: 1000,
    exams: 12,
    durationDays: 7,
    features: [
      { check: false, value: "Igihe gihagije cyo kwitoza" },
      {
        check: true,
        value: "Kubona ikigereranyo cy`amahirwe yawe yo gutsinda",
      },
      { check: true, value: "Kwerekana ibisubizo by'ibizamini" },
      { check: true, value: "Guhitamo gukora ibizamini byibyapa gusa" },
    ],
  },
  {
    amount: 2000,
    exams: 25,
    durationDays: 30,
    features: [
      { check: true, value: "Igihe gihagije cyo kwitoza" },
      {
        check: true,
        value: "Kubona ikigereranyo cy`amahirwe yawe yo gutsinda",
      },
      { check: true, value: "Kwerekana ibisubizo by'ibizamini" },
      { check: true, value: "Guhitamo gukora ibizamini byibyapa gusa" },
    ],
  },
  {
    amount: 5000,
    exams: 60,
    durationDays: 75,
    features: [
      { check: true, value: "Igihe gihagije cyo kwitoza" },
      {
        check: true,
        value: "Kubona ikigereranyo cy`amahirwe yawe yo gutsinda",
      },
      { check: true, value: "Kwerekana ibisubizo by'ibizamini" },
      { check: true, value: "Guhitamo gukora ibizamini byibyapa gusa" },
    ],
  },
  {
    amount: 10000,
    exams: 1000000,
    durationDays: 730,
    features: [
      {
        check: true,
        value: "Igihe gihagije cy'imyaka 2 yose ukoresheje urubuga",
      },
      {
        check: true,
        value: "Kubona ikigereranyo cy`amahirwe yawe yo gutsinda",
      },
      { check: true, value: "Kwerekana ibisubizo by'ibizamini" },
      { check: true, value: "Guhitamo gukora ibizamini byibyapa gusa" },
      { check: true, value: "Ubufasha bwa mwalimu" },
    ],
  },
];

const HeroPricing = () => {
  return (
    <div className="min-h-screen bg-primary/10 px-[5%] py-32 lg:px-[10%]">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2>Ibiciro</h2>
        <p>Umutekano binyuze mu bumenyi.</p>
      </div>
      <div className="mt-20 flex w-full flex-wrap justify-center gap-10">
        {examPlans.map((plan, index) => (
          <PricingCard
            key={index}
            amount={plan.amount}
            exams={plan.exams}
            durationDays={plan.durationDays}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroPricing;
