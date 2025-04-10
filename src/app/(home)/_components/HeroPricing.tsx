import React from 'react'
import PricingCard from './PricingCard'

export const examPlans = [
  {
    amount: 300,
    exams: 2,
    durationDays: 1,
    features: [
      "Kugerageza ibizamini bibiri by'icyiciro kimwe",
      "Inkunga yihuse ku bibazo",
      "Ikiguzi cyangwa ibisubizo bikurikiranwa",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    amount: 500,
    exams: 5,
    durationDays: 3,
    features: [
      "Ibizamini bitanu bitandukanye",
      "Igihe gihagije cyo kwitoza",
      "Gusubiramo ibisubizo nyuma y'ikizamini",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    amount: 1000,
    exams: 12,
    durationDays: 7,
    features: [
      "Ibizamini byinshi byo kwitoza",
      "Gufata amanota no kugereranya uko uhagaze",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    amount: 2000,
    exams: 25,
    durationDays: 30,
    features: [
      "Kwiga igihe kirekire",
      "Gufata amanota no kugereranya uko uhagaze",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    amount: 5000,
    exams: 60,
    durationDays: 75,
    features: [
      "Ibizamini byinshi birimo iby’umwihariko",
      "Kwinjira muri forum y'abanyeshuri",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    amount: 10000,
    exams: 1000000,
    durationDays: 730,
    features: [
      "Uburyo butagira umupaka bwo kwitoza",
      "Gufata amanota no kugereranya uko uhagaze",
      "Kwiga imyaka 2 yose ukoresheje urubuga",
        "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
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
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroPricing