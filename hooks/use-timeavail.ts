import { StaticImageData } from "next/image"
import { create } from "zustand"

export interface ScheduleType {
  from: string
  to: string
}

interface Schedule {
  time: ScheduleType
  addTime: (iTime: ScheduleType) => void
  clearTime: () => void
}

export const useSchedule = create<Schedule>((set) => ({
  time: {
    from: "",
    to: "",
  },
  addTime: (iTime) => set((state) => ({ ...state.time, time: iTime })),
  clearTime: () =>
    set((state) => ({
      ...state.time,
      time: {
        from: "",
        to: "",
      },
    })),
}))
