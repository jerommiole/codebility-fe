"use client"
import React from 'react';

import '../../styles/calendar.scss'
import { Topbar, Avatar_Dashboard, Sidebar } from 'Components/exports';
import images from './Assets/avt.svg';

import { useState,useCallback } from 'react';
import { Calendar, momentLocalizer,Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


const Page = () => {

  const [events] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [defaultView, setDefaultView] = useState(Views.MONTH);
  const switchToWeekView = () => {
    setDefaultView(Views.WEEK);
  };


  return (
    <>

      <div className="w-full h-screen bg-[#0E0E0E] flex ">

      <Sidebar/>

      <div className="w-full ml-[8%] h-full flex flex-col">
        <div className="h-[8%] w-full bg-yellow-500">
          <Topbar />
        </div>

        <div className="flex w-full p-4 h-[92%] space-x-4">
          {/* r1 */}
          <div className="flex flex-col space-y-4 w-[50%] bg-[#181818] bg-opacity-50 p-4 rounded-lg">
            {/* col 1 */}
            <div className="flex justify-between bg-[#181818] text-white h-[48%] rounded-lg p-4">
              <div className="order-1 flex items-center justify-center w-[40%] h-full">
                <Avatar_Dashboard
                  Honorifics="Mr."
                  Name="Lorem Ipsum"
                  Email="loremIpsum@gmail.com"
                  DP={images}
                />
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 order-2 text-[#8E8E8E] w-[40%]">
                <div className="flex flex-col font-light items-center w-full text-center space-y-1">
                  <span className=" text-[20px] text-white">TIME TRACKER</span>
                  <span className="text-[#6A78F2]  text-[20px]">Monday</span>
                  <div className="font-light flex flex-col text-[12px]">
                    <span className="">November 25, 2023</span>
                    <span>Time In</span>
                  </div>
                </div>
                <div className="flex flex-col text-center   w-full items-center">
                    <div className="flex space-x-6 font-light text-[12px] ">
                      <span>Hour</span>
                      <span>Minutes</span>
                    </div>
                    <span className="text-white text-[64px] font-semibold">01:23</span>
                    <span className="text-[#02FFE2] text-[16px]">Start</span>
                </div>
                <div className="w-3/4 text-center text-[12px] font-light">
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between order-3 w-[20%] font-light text-[#8E8E8E] text-[12px]">
                <div className="order-1">
                  <span>Philippine Time</span>
                </div>
                <div className="order-2">
                  <span>View logs</span>
                </div>
              </div>
            </div>
            {/* col2 */}
            <div className="w-full bg-yellow-500 flex">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              views={{
                month:true,
                week:true,
                day:true,
                agenda:true,
              }}
              date={currentDate}
              onNavigate={(date) => setCurrentDate(date)}
              defaultView={defaultView}

              style={{ height: 500 }}
            />

            </div>
          </div>

          {/* r2 */}
          <div className="flex flex-col space-y-4 w-[auto] bg-[#181818] rounded-lg">
            <div className="bg-[#181818]">TodoList</div>
            <div className="bg-[#181818]">TodoList2</div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Page;
