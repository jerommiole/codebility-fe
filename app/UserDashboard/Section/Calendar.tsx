import React from 'react'
import { useState } from 'react';
const Calendar = () => {

    const [currentMonth, setcurrentMonth] = useState(new Date());
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];



    const yearMonthName = () => {
      const presentMonth = currentMonth.getMonth();
      const year = currentMonth.getFullYear();
      const monthName = monthNames[presentMonth];

      return {
        month: monthName,
        year: year,
      };
    }

    const { month, year } = yearMonthName();

    const DaysMonth = () => {
      const today = new Date();
      const dateToday = today.getDate();
      const monthToday = today.getMonth();
      const yearToday = today.getFullYear();

      const firstDayOfMonth = new Date(yearToday, monthToday, 1);
      const lastDayOfMonth = new Date(yearToday, monthToday + 1, 0);
      const startingDayIndex = firstDayOfMonth.getDay();
      const numberOfDaysInMonth = lastDayOfMonth.getDate();

      const daysArray = Array.from({ length: numberOfDaysInMonth }, (_, i) => {
        const day = i + 1;
        const isToday = day === dateToday && monthToday === currentMonth.getMonth() && yearToday === currentMonth.getFullYear();
        return { day, isToday };
      });

      const paddedDaysArray = Array(startingDayIndex).fill({ day: null, isToday: false }).concat(daysArray);

      return paddedDaysArray;
    };

    const paddedDaysArray = DaysMonth();

    const prevMonth = () => {
      const prevmonth = new Date(currentMonth);
      prevmonth.setMonth(prevmonth.getMonth() - 1);
      setcurrentMonth(prevmonth);
    }

    const nextMonth = () => {
      const nextmonth = new Date(currentMonth);
      nextmonth.setMonth(nextmonth.getMonth() + 1);
      setcurrentMonth(nextmonth);
    }
  return (
    <div className="flex flex-col text-white bg-[#181818] space-y-3 h-[50%] rounded-lg pr-4 pl-4 text-[12px]">
    <div className="font-medium">
      <span>Schedule your Calendar</span>
    </div>
    <div className="flex justify-between text-[#6A78F2]">
      <div className="flex space-x-4 order-1">
        <span>Today</span>
          <input type="button" onClick={prevMonth}  value="Back" />
          <input type="button" onClick={nextMonth}  value="Next" />

      </div>
      <div className="order-2">
        <span>{`${month}-${year}`}</span>
      </div>
      <div className="order-3 space-x-4">
        <span>Month</span>
        <span>Week</span>
        <span>Day</span>
        <span>Agenda</span>
      </div>
    </div>

    <div className="w-full  border-red flex flex-col items-center justify-center text-[12px]">
      <div className="grid grid-cols-7 place-items-center w-full ">
          {daysOfWeek.map((day, index) => (
          <span className="text-right w-[50%] border " key={index}>
              {day}
          </span>
          ))}
      </div>
      <div className="place-items-center grid grid-cols-7  text-[10px] w-full">
      {paddedDaysArray.map(({ day, isToday }, index) => (
      <span key={index} className="w-[50%] border h-[43px] text-right">
        {isToday && day ? (
          <div className="flex items-start justify-end">
            <div className="bg-white text-black rounded-full  text-center h-[2%] w-[45%] ">{day}</div>

          </div>
        ) : (
          day || ' '
        )}
      </span>
    ))}
      </div>
    </div>

  </div>
  )
}

export default Calendar
