import { Button } from "Components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { ScheduleType, useSchedule } from "hooks/use-timeavail"
import { ArrowBigRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const ScheduleModal = () => {
  const { isOpen, onClose, type } = useModal()
  const [time, setTime] = useState<ScheduleType>({
    from: "",
    to: "",
  })

  const { addTime, clearTime, time: newTime } = useSchedule()

  function convertTo24HourFormat(time12: string): string {
    // Extract hours, minutes, and period (AM/PM) from the 12-hour time string
    const [time, period]: string[] = time12.split(" ")
    const [hours, minutes]: string[] = (time || "").split(":")

    // Convert hours to 24-hour format
    let hours24: number = parseInt(hours || "", 10)

    // Adjust hours based on the period (AM/PM)
    if (period === "PM" && hours24 !== 12) {
      hours24 += 12
    } else if (period === "AM" && hours24 === 12) {
      hours24 = 0
    }

    // Format the hours and return the 24-hour time string
    const hours24Formatted: string = String(hours24).padStart(2, "0")
    const minutesFormatted: string = String(minutes).padStart(2, "0")

    return `${hours24Formatted}:${minutesFormatted}`
  }

  function convertTo12HourFormat(time24: string, type: "from" | "to") {
    const timeObj = new Date(`2022-01-01T${time24}`)
    const hours = timeObj.getHours()
    const minutes = timeObj.getMinutes()
    const period = hours >= 12 ? "PM" : "AM"
    const hours12 = hours % 12 || 12
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes

    switch (type) {
      case "from":
        setTime((prev) => ({ ...prev, from: `${hours12}:${minutesFormatted} ${period}` }))
        break
      case "to":
        setTime((prev) => ({ ...prev, to: `${hours12}:${minutesFormatted} ${period}` }))
        break
      default:
        return null
    }
  }
  const isModalOpen = isOpen && type === "scheduleModal"

  useEffect(() => {
    if (isModalOpen) {
      setTime(newTime)
    }
  }, [isModalOpen])
  // h-[100rem] max-w-md overflow-y-auto py-8 sm:h-auto sm:max-w-2xl sm:px-12 sm:py-16
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={() => {
        onClose()
      }}
    >
      <DialogContent className="max-w-md overflow-y-auto py-8 sm:max-w-2xl sm:px-12 sm:py-16">
        <DialogHeader className="">
          <DialogTitle className="text-center">
            <h1 className="text-xl md:text-4xl">Work Time Availability</h1>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="mb-4 flex flex-col gap-2 sm:mb-0 sm:flex-row">
            <div className="flex h-10 items-center justify-between gap-2 sm:justify-normal">
              <label htmlFor="from" className="text-sm sm:text-xl">
                From
              </label>
              <input
                onChange={(e) => convertTo12HourFormat(e.target.value, "from")}
                className="text-xl outline-none sm:bg-transparent"
                type="time"
                id="from"
                value={convertTo24HourFormat(time.from)}
              />
            </div>
            <div className="hidden h-full w-[1px] bg-white/30 sm:block"></div>
            <div className="flex h-10 items-center justify-between gap-2 sm:justify-normal">
              <label htmlFor="to" className="text-sm sm:text-xl">
                To
              </label>
              <input
                onChange={(e) => convertTo12HourFormat(e.target.value, "to")}
                className="text-xl outline-none sm:bg-transparent"
                type="time"
                id="to"
                value={convertTo24HourFormat(time.to)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                clearTime()
                setTime((prev) => ({ ...prev, from: "", to: "" }))
              }}
              className="w-24 flex-1 bg-[#743bc7] text-sm text-foreground hover:bg-[#743bc7]/50"
            >
              Clear
            </Button>
            <Button
              onClick={() => {
                if (time.from || time.to) addTime(time)
                onClose()
              }}
              className="w-24 flex-1 bg-[#6876f5] text-sm text-foreground hover:bg-[#6876f5]/50"
              disabled={!time.from || !time.to ? true : false}
            >
              Ok
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleModal
