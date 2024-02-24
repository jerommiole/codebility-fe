"use client"
import React, { useState } from "react"

import { Calendar as EventCalendar, dateFnsLocalizer } from "react-big-calendar"

import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import enUS from "date-fns/locale/en-US"

import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2024, 1, 24),
    end: new Date(2024, 1, 24),
  },
  {
    title: "Team Lunch",
    allDay: false,
    start: new Date(2024, 1, 25, 12, 0), // Feb. 25th, 2024, 12:00 PM
    end: new Date(2024, 1, 25, 13, 0), // Feb. 25th, 2024, 1:00 PM
  },
  {
    title: "Client Presentation",
    allDay: false,
    start: new Date(2024, 1, 27, 10, 0), // Feb. 27th, 2024, 10:00 AM
    end: new Date(2024, 1, 27, 12, 0), // Feb. 27th, 2024, 12:00 PM
  },
  {
    title: "Project Deadline",
    allDay: true,
    start: new Date(2024, 1, 5), // Feb. 5th, 2024
    end: new Date(2024, 1, 5), // Feb. 5th, 2024
  },
  {
    title: "Training Session",
    allDay: false,
    start: new Date(2024, 1, 11, 14, 0), // Feb. 11th, 2024, 2:00 PM
    end: new Date(2024, 1, 13, 16, 0), // Feb. 13th, 2024, 4:00 PM
  },
]

type View = "month" | "week" | "day" | "agenda" // Custom type for views

const Calendar = () => {
  const [view, setView] = useState<View>("month")
  const [date, setDate] = useState(new Date())

  return (
    <div className="w-full rounded-lg border p-4">
      <h2 className="mb-6 text-center text-2xl md:text-left">Schedule Your Calendar</h2>
      <EventCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, width: "100%" }}
        views={["month", "week", "day", "agenda"]} // Use string literals directly
        defaultView={view}
        view={view} // Include the view prop
        date={date} // Include the date prop
        onView={(view) => setView(view as View)}
        onNavigate={(date) => {
          setDate(new Date(date))
        }}
      />
    </div>
  )
}

export default Calendar
