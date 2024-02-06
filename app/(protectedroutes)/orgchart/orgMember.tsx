"use client"

import React from 'react'
import Image from 'next/image'

interface orgMemberProps {
  image: any
  color: string
  yAxis: string
  name: string
  position: string
}

const orgMember = ({  image, color, yAxis, name, position  }:orgMemberProps) => {

  return (
    <div className='relative flex flex-col items-center justify-center cursor-pointer hover:opacity-[.9] active:opacity-[.8]'>
      <div className='rounded-full bg-gray-300 p-1 md:p-2'>
        <div className={`flex items-center justify-center ${color} rounded-full w-[6vmin] h-[6vmin] md:w-[7vmin] md:h-[7vmin] relative`}>
          <div className={`rounded-full w-2 h-2 left-[50%] translate-x-[-50%] md:w-3 md:h-3 absolute ${color} ${yAxis === 'top' ? 'top-[-1rem] md:top-[-2rem]' : 'bottom-[-2.5rem] md:bottom-[-5rem]' }`}>
            {/* Dot */}
          </div>
          <Image src={image} alt="filter" width={0} height={0} className="h-[90%] w-[90%]" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='font-bold text-[0.40rem] uppercase mt-[.5rem] md:text-sm text-center text-nowrap'>
          {position}
        </div>
        <div className='uppercase text-[0.25rem] md:text-xs text-center text-nowrap'>
          {name}
        </div>
      </div>
    </div>
  )
}

export default orgMember