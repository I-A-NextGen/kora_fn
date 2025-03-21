"use client"

import Goback from '@/components/Goback'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center gap-8 flex-col text-blue-700 h-screen w-screen'>
        <h1 className='w-1/3 text-center'>The page you are looking is not found</h1>
        <Goback/>
    </div>
  )
}

export default NotFound