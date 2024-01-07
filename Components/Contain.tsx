"use client"

import React, { useEffect } from "react"
import { BellSVG } from "./logos"
import ToggleMenu from "Components/toggleMenu"
import Image from "next/image"

import Hero from "public/hero.png"
import { useNavStore } from "store/Post"

type ContainProps = {
  children: React.ReactNode
}

const Contain: React.FC<ContainProps> = ({ children }) => {
  useEffect(() => {
    //Fetch Data
  }, [])
  const { activeNav } = useNavStore()

  return (
    <div className="ml-[103px] flex h-screen flex-col bg-background tablet:ml-0">
      <div className="flex items-center justify-between px-4 py-2 lg:pr-20 tablet:pr-5">
        <div>
          <ToggleMenu />
        </div>
        <h2 className="hidden text-xl font-semibold tablet:block">Client</h2>
        <div className="flex items-center gap-4">
          <BellSVG />
          {/* <div className="block tablet:hidden">
            <ModeToggle />
          </div> */}
          <div className="h-16 border-l border-foreground tablet:hidden" />
          <div className="flex items-center gap-2 tablet:hidden">
            <div className="h-14 w-14 overflow-hidden rounded-full bg-violet-500">
              <Image src={Hero} alt="profile-pic" />
            </div>
            {/* <DropdownMenu>
              <DropdownMenuTrigger>
                
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="hidden tablet:flex">
                  <div className="hidden flex-col gap-1 tablet:flex">
                    <p className="font-bold">Mr. Lorem</p>
                    <p className="text-xs">lorem@gmail.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <div className="flex flex-col gap-1 tablet:hidden">
              <p className="font-bold">Mr. Lorem</p>
              <p className="">lorem@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-grow ${activeNav && "overflow-hidden"} lg:overflow-hidden lg:p-[19px]`}>{children}</div>
    </div>
  )
}

export default Contain
