import React from 'react'
import Image from 'next/image'
import BG from './Assets/MissionVission.svg'

const page = () => {
  return (
    <div className='w-full h-screen flex md:flex-row flex-col p-12  justify-between text-white bg-[#030303] items-center md:space-y-0 space-y-6'>
                <div className="flex flex-col order-1  text-right md:space-y-12 space-y-2  md:h-full h-[30%] justify-center md:w-[30%] w-full">
                    <span className='text-7xl font-bold'>MISSION</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p>Lorem Ipsum</p>
                    </div>
                <div className="order-2  md:h-full h-[40%] flex items-center "><Image alt='BG' src={BG}/></div>

                <div className="flex flex-col  justify-center  text-left order-3 md:w-[30%] w-full md:h-full h-[30%] md:space-y-12 space-y-2">
                    <p>Lorem Ipsum</p>
                    <span className='text-7xl font-bold'>VISION</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>

    </div>
  )
}

export default page
