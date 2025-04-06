import { Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='p-8 md:px-16 flex justify-between text-white bg-gray-800'>
      <h3>KORA</h3>
      <p>© Umusamariya- 2025</p>
      <div className='flex flex-row gap-4'>
        <Twitter/>
        <Instagram/>
        <Youtube/>

      </div>
    </footer>
  )
}

export default Footer