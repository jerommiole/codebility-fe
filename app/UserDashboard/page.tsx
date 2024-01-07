"use client"
import React from "react"

import "../../styles/calendar.scss"
import { Topbar, Avatar_Dashboard, Sidebar } from "Components/exports"
import images from "./Assets/avt.svg"

import { useState, useCallback } from "react"
import { Calendar, momentLocalizer, Views } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

type ViewType = (typeof Views)[keyof typeof Views]

const Page = () => {
  const [events] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [defaultView, setDefaultView] = useState<ViewType>(Views.MONTH)
  const switchToWeekView = () => {
    setDefaultView(Views.WEEK)
  }

  return (
    <>
      <div className="flex h-screen w-full bg-[#0E0E0E] ">
        <Sidebar />

        <div className="ml-[8%] flex h-full w-full flex-col">
          <div className="h-[8%] w-full bg-yellow-500">
            <Topbar />
          </div>

          <div className="flex h-[92%] w-full space-x-4 p-4">
            {/* r1 */}
            <div className="flex w-[50%] flex-col space-y-4 rounded-lg bg-[#181818] bg-opacity-50 p-4">
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
              <div className="flex w-full bg-yellow-500">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  views={{
                    month: true,
                    week: true,
                    day: true,
                    agenda: true,
                  }}
                  date={currentDate}
                  onNavigate={(date) => setCurrentDate(date)}
                  defaultView={defaultView}
                  style={{ height: 500 }}
                />
              </div>
            </div>

            {/* r2 */}
            <div className="flex w-[auto] flex-col space-y-4 rounded-lg bg-[#181818]">
              <div className="bg-[#181818]">TodoList</div>
              <div className="bg-[#181818]">TodoList2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
