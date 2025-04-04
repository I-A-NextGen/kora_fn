import React from 'react'
import PricingCard from './PricingCard'

const examPlans = [
  { amount: 300, exams: 2, durationDays: 1 },
  { amount: 500, exams: 5, durationDays: 3 },
  { amount: 1000, exams: 12, durationDays: 7 },
  { amount: 2000, exams: 25, durationDays: 30 },
  { amount: 5000, exams: 60, durationDays: 75 },
  { amount: 10000, exams: 1000000, durationDays: 730 },
];

const HeroPricing = () => {
  return (
    <div className="min-h-screen bg-primary/10 px-[5%] lg:px-[10%] py-32">
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
          />
        ))}
      </div>
    </div>
  );
}

export default HeroPricing