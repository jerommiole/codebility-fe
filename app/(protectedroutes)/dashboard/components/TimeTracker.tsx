"use client"

import Box from "@/Components/shared/dashboard/Box"
import Avatar from "Components/ui/avatar"
import Image from "next/image"
import photo from "@/public/assets/images/default-avatar-male.png"
import Link from "next/link"
import useAuthCookie from "@/hooks/use-cookie"
import { useEffect, useState } from "react"
import { getUserDataById } from "@/app/api"
import SmallLoader from "@/Components/SmallLoader"
import useAuth from "@/hooks/use-auth"

const TimeTracker = () => {
  const { isLoading, userData } = useAuth()

  //Date Format
  const currentDate = Date.now()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
    .format(currentDate)
    .split(", ")
  const newFormatDate = `${formattedDate[1]}, ${formattedDate[2]}, ${formattedDate[0]}`

  console.log(userData)
  return (
    <Box>
      {!isLoading ? (
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="mx-auto my-auto flex w-full flex-col items-center gap-1.5">
            <p className="text-md">Hello!</p>
            <p className="text-lg font-semibold">{userData?.name ?? "Loading..."}</p>
            <Avatar className={`h-24 w-24 bg-blue-100`}>
              <Image alt="Avatar" src={userData?.image_url || photo} width={96} height={96} />
            </Avatar>
            <p className="text-sm">My Time Schedule</p>
            <p className="text-md">
              {userData?.start_time && userData?.end_time
                ? `${userData?.start_time} - ${userData?.end_time}`
                : "NULLam - NULLpm"}
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-2">
            <p className="font-semibold">Time Tracker</p>
            <p className="text-sm">{newFormatDate}</p>

            <div className="background-lightsmallbox_darksmallbox flex flex-col rounded-[10px]">
              <div className="flex min-w-[250px] justify-center">
                <div className="flex flex-col items-center">
                  <p className="text-md p-3 font-semibold text-blue-100">Fix login authentication issue</p>
                </div>
              </div>
              <div className="flex min-w-[250px] justify-center">
                <div className="flex flex-col gap-2 p-3">
                  <p className="text-5xl font-bold">00:00</p>
                  <div className="flex justify-between gap-2">
                    <p>Hour</p>
                    <p>Minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="text-teal">
              Start
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <SmallLoader />
        </div>
      )}
    </Box>
  )
}

export default TimeTracker
