import React from 'react'
import { useState } from 'react'
import {Topbar,Avatar_Dashboard} from 'Components/exports'
import images from './Assets/avt.svg'
const page = () => {

  return (
  <>
        <div className="w-full h-screen bg-[#0E0E0E] flex flex-col">
            <div className="h-[10%] bg-yellow-500">
                <Topbar/>
            </div>

            <div className="flex w-full p-4 h-[90%] space-x-4">
                {/* r1 */}
                <div className="flex flex-col space-y-4 w-[70%] bg-[#0E0E0E] p-4 rounded-lg">
                    {/* col 1 */}
                    <div className="flex justify-between bg-[#181818] text-white h-[60%] rounded-lg p-4">
                        <div className="order-1 flex items-center  justify-center w-[40%] h-full">
                            <Avatar_Dashboard
                                Honorifics='Mr.'
                                Name='Lorem Ipsum'
                                Email='loremIpsum@gmail.com'
                                DP={images}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-3 order-2 text-[#8E8E8E] w-[40%]">
                            <div className="flex flex-col items-center w-full text-center space-y-3">
                                <span className='font-medium text-2xl text-white'>TIME TRACKER</span>
                                <span className='text-[#6A78F2] font-medium text-xl'>Monday</span>
                                <div className="font-light">
                                    <span className=''>November 25, 2023</span>
                                    <span>Time In</span>
                                </div>

                            </div>
                            <div className="flex flex-col text-center space-y-2 w-full items-center">
                                <div className="flex space-x-6 font-light">
                                    <span>Hour</span>
                                    <span>Minutes</span>
                                </div>
                                <span className='text-white text-6xl font-semibold'>01:23</span>
                                <span className='text-[#02FFE2]'>Start</span>
                            </div>
                            <div className="w-3/4 text-center font-light">
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>

                            </div>

                        </div>
                        <div className="flex flex-col items-end justify-between order-3 w-[20%] font-light text-[#8E8E8E]">
                            <div className="order-1"><span >Philippine Time</span></div>
                            <div className="order-2"><span>View logs</span></div>


                        </div>
                    </div>
                    {/* col2 */}
                    <div className="text-white bg-[#181818] h-[40%] rounded-lg">Calendar</div>
                </div>


                {/* r2 */}
                <div className="flex flex-col space-y-4 w-[30%] bg-[#181818] rounded-lg">
                    <div className="bg-[#181818]">TodoList</div>
                    <div className="bg-[#181818]">TodoList2</div>
                </div>
            </div>
        </div>
  </>
  )
}

export default page
