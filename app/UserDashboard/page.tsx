"use client"
import React from "react"

import "../../styles/calendar.scss"
import { Topbar, Avatar_Dashboard, Sidebar, Dashboard_Card, Dashboard_Card2 } from "Components/exports"
import images from "./Assets/avt.svg"

import CalendarComp from "./Section/CalendarComp"

const Page = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-[#0E0E0E] ">
        <Sidebar />

        <div className="ml-[8%] flex h-full w-full flex-col">
          <div className="h-[8%] w-full ">{/* topbar */}</div>

          <div className="flex h-[92%] w-full space-x-4 p-4">
            {/* r1 */}
            <div className="flex w-[70%] flex-col space-y-4 rounded-lg bg-[#181818] bg-opacity-50 p-4">
              {/* col 1 */}
              <div className="flex h-[48%] justify-between rounded-lg bg-[#181818] p-4 text-white">
                <div className="order-1 flex h-full w-[40%] items-center justify-center">
                  <Avatar_Dashboard Honorifics="Mr." Name="Lorem Ipsum" Email="loremIpsum@gmail.com" DP={images} />
                </div>
                <div className="order-2 flex w-[40%] flex-col items-center justify-center space-y-3 text-[#8E8E8E]">
                  <div className="flex w-full flex-col items-center space-y-1 text-center font-light">
                    <span className=" text-[20px] text-white">TIME TRACKER</span>
                    <span className="text-[20px]  text-[#6A78F2]">Monday</span>
                    <div className="flex flex-col text-[12px] font-light">
                      <span className="">November 25, 2023</span>
                      <span>Time In</span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col   items-center text-center">
                    <div className="flex space-x-6 text-[12px] font-light ">
                      <span>Hour</span>
                      <span>Minutes</span>
                    </div>
                    <span className="text-[64px] font-semibold text-white">01:23</span>
                    <span className="text-[16px] text-[#02FFE2]">Start</span>
                  </div>
                  <div className="w-3/4 text-center text-[12px] font-light">
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                  </div>
                </div>
                <div className="order-3 flex w-[20%] flex-col items-end justify-between text-[12px] font-light text-[#8E8E8E]">
                  <div className="order-1">
                    <span>Philippine Time</span>
                  </div>
                  <div className="order-2">
                    <span>View logs</span>
                  </div>
                </div>
              </div>
              {/* col2 */}
              <div className="flex h-full w-full justify-center border-none bg-[#181818] p-4">
                <CalendarComp />
              </div>
            </div>

            {/* r2 */}
            <div className="flex w-[30%] flex-col space-y-4 ">
              <div className="grid h-[50%] grid-flow-col grid-rows-2 content-center justify-items-center gap-4 bg-[#181818]  bg-opacity-[25%] p-4">
                <Dashboard_Card
                  DataNotes={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
                />
                <Dashboard_Card
                  DataNotes={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
                />
                <Dashboard_Card
                  DataNotes={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
                />
                <Dashboard_Card
                  DataNotes={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
                />
              </div>
              <div className="h-[50%] bg-[#181818] bg-opacity-[25%]">
                <Dashboard_Card2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
