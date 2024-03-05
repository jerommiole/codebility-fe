"use client"

import { Paragraph } from "@/Components/shared/home"
import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { IconHourGlass, IconPulse, IconTimer } from "@/public/assets/svgs"
import TimeTrackerTable from "./TimeTrackerTable"

const TimeTracker = () => {
  const data = [
    { value: "240.4", label: "Late Hours", svg: <IconHourGlass className="h-[25px] w-[25px] text-teal" /> },
    { value: "240.4", label: "Overtime Hours", svg: <IconTimer className="h-[25px] w-[25px] text-violet" /> },
    { value: "240.4", label: "Rendered Hours", svg: <IconPulse className="h-[25px] w-[25px] text-blue-100" /> },
    { value: "08:00 - 14:00", label: "Schedule Time", svg: <IconTimer className="h-[25px] w-[25px] text-blue-500" /> },
  ]

  return (
    <div className="flex flex-col gap-4">
      <H1>Time Tracker</H1>
      <Box>
        <div className="flex flex-col gap-7 lg:flex-row">
          <div className="flex basis-[60%] flex-col justify-center gap-2">
            <p className="text-lg font-semibold">Summary Of Rendered Time</p>
            <Paragraph className="max-w-[500px]">
              Provides a concise overview of the time allocated and utilized for specific tasks, projects, or
              activities. This summary encapsulates the duration, efficiency, and distribution of time across various
              endeavors, offering valuable insights for better time management and performance evaluation.
            </Paragraph>
          </div>
          <div className="flex basis-[40%] justify-center">
            <div className="w-full flex-row gap-2">
              <div className="grid grid-cols-2 gap-2">
                {data.map((item, index) => (
                  <div className="background-lightsmallbox_darksmallbox flex flex-row items-center gap-6 rounded-lg p-4">
                    {item.svg}
                    <div key={index} className="flex flex-col">
                      <p className="text-2xl font-semibold">{item.value}</p>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-lg font-semibold">Time Log</p>
            <Paragraph className="max-w-[500px]">
              Provides provides a clear and concise overview of the time invested in various tasks, enabling users to
              optimize productivity, analyze trends, and make informed decisions for efficient time management.
            </Paragraph>
          </div>

          <TimeTrackerTable />
        </div>
      </Box>
    </div>
  )
}

export default TimeTracker
