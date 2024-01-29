"use client"

import React, { useEffect } from "react"
import { BellSVG } from "./logos"
import ToggleMenu from "Components/toggleMenu"
import Image from "next/image"

import { useNavStore } from "hooks/use-sidebar"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

type ContainProps = {
  children: React.ReactNode
}

const Contain: React.FC<ContainProps> = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    //Fetch Data
  }, [])
  const { activeNav } = useNavStore()

  const goToProfile = () => {
    router.push("/dashboard/profile")
  }

  const session = useSession()

  return (
    <div className="relative ml-[103px] flex h-screen flex-col overflow-hidden bg-background tablet:ml-0">
      {/* Header */}
      <div className="flex w-full items-center justify-between bg-background px-4 py-2 lg:pr-16 tablet:pr-5">
        <div>
          <ToggleMenu />
        </div>
        <h2 className="hidden text-xl font-semibold tablet:block">Client</h2>
        <div className="flex items-center gap-4">
          <BellSVG />
          <div className="h-16 border-l border-foreground tablet:hidden" />
          <div className="relative flex cursor-pointer items-center gap-2 px-4 tablet:hidden" onClick={goToProfile}>
            <div className="relative h-14 w-14">
              <div className="flex h-full w-full items-center justify-center">
                {/*<Image src={"/avatar.png"} alt="avatar" className="rounded-full" fill />*/}
              </div>
            </div>
            <div className="flex flex-col gap-1 tablet:hidden">
              <p className="font-bold">{session?.data?.user ? session?.data?.user.name : "name"}</p>
              {/* @ts-ignore */}
              <p className="">{session?.data?.user ? session?.data?.user?.email_address : "email"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      {/* lg:overflow-hidden */}
      {/* ${!activeNav ? "overflow-y-auto" : "overflow-y-hidden"} */}
      <div className={`flex min-h-0 flex-1 overflow-hidden`}>
        <div
          className={`flex-1 ${
            !activeNav ? "overflow-y-auto" : "overflow-y-hidden"
          } mx-auto max-w-[95rem] px-2 pb-4 sm:p-4 sm:pb-20 xl:pb-10`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Contain
