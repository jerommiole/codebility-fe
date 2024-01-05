import React from 'react'
import Image from 'next/image'
import BG from './Assets/MissionVission.svg'

const page = () => {
  return (
    <div className='w-full h-screen  bg-[#030303] items-center md:space-y-0 space-y-6'>
      <div className="w-full h-full flex md:flex-row flex-col justify-between p-12 text-white " style={{ background: 'radial-gradient(circle at center,rgba(255, 255, 255, 0.2) 0%, transparent 50%)' }}>
                <div className="flex flex-col order-1  text-right md:space-y-12 space-y-2  md:h-full h-[30%] justify-center md:w-[30%] w-full ">
                    <span className='md:text-7xl text-5xl font-bold'>MISSION</span>
                    <p className='md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p className='md:text-base text-sm'>Lorem Ipsum</p>
                    </div>
                <div className="order-2  md:h-full h-[40%] flex items-center "><Image alt='BG' src={BG}/></div>

                <div className="flex flex-col  justify-center  text-left order-3 md:w-[30%] w-full md:h-full h-[30%] md:space-y-12 space-y-2">
                    <p className='md:text-base text-sm'>Lorem Ipsum</p>
                    <span className='md:text-7xl text-5xl font-bold'>VISION</span>
                    <p className='md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>
        </div>

    </div>
  )
}

export default page
