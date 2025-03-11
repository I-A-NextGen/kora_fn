import React from 'react'
import PricingCard from './PricingCard'

const HeroPricing = () => {
  return (
    <div className="min-h-screen bg-primary/10 px-[5%] lg:px-[10%] py-32">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2>Ibiciro</h2>
        <p>Umutekano binyuze mu bumenyi.</p>
      </div>
      <div className="mt-20 flex w-full flex-wrap justify-center gap-10">
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

export default HeroPricing