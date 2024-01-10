import React from 'react'
import { useState, useCallback } from "react"
import "../../../styles/calendar.scss"




import { Calendar, momentLocalizer, Views } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

type ViewType = (typeof Views)[keyof typeof Views]




const CalendarComp = () => {

  const [events] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [defaultView, setDefaultView] = useState<ViewType>(Views.MONTH)
  const switchToWeekView = () => {
    setDefaultView(Views.WEEK)
  }

  return (
    <>
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
                  style={{
                    height: '100%',
                    width: '100%',
                    border: '0px solid',



                  }}
                  className="custom-calendar-style"
                />



    </>
  )
}

export default CalendarComp
