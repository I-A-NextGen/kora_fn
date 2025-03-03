import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PricingCard = () => {
    const itemlist = [
        {
            icon:<Check/>,
            content:"Lorem ipsum dolor sit amet"
        },
        {
            icon:<Check/>,
            content:"Lorem ipsum dolor sit amet"
        },
        {
            icon:<Check/>,
            content:"Lorem ipsum dolor sit amet"
        },
        {
            icon:<Check/>,
            content:"Lorem ipsum dolor sit amet"
        },

    ]
  return (
    <div className='w-[300px] flex p-4 border-2 border-blue-700 rounded-2xl py-8 items-center text-center flex-col gap-4'>
        <h4>Ibizamini 2</h4>
        <p>Lorem ipsum dolor sit amet consecte</p>
        <h2 className='font-black'>300 RWF</h2>
        <div className='size-fit-fit'>
            {
                itemlist.map((item, i) => {
                    return (
                        <div key={i} className='text-green-500 inline-flex gap-4'>
                            {item.icon}
                            <span className='text-black'>{item.content}</span>
                        </div>
                    )
                })
            }
        </div>
        <Button className='bg-blue-700'>
            <Link href={"/"}>
            Tangira Isuzuma
            </Link>
        </Button>

    </div>
  )
}

export default PricingCard