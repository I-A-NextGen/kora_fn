import React from 'react'
import PricingCard from './PricingCard'

const HeroPricing = () => {
  return (
    <div className="min-h-screen bg-blue-50 my-8 px-8 md:p-16 lg:px-32">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>Ibiciro</h1>
        <p>Umutekano binyuze mu bumenyi.</p>
      </div>
      <div className='flex w-full flex-wrap gap-8 mt-8 justify-center'>
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>

      </div>
    </div>
  )
}

export default HeroPricing