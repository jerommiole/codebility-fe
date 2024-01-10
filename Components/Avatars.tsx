"use client"

import React from "react"
import Avatar from "Components/ui/avatar"
// import { Arrow } from "/app/CoDevs/Assets/exports"
import { Arrow, Waves } from "app/CoDevs/Assets/exports"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface props {
  Position?: string
  Honorifics?: string
  Name?: string
  Avatarimg: any
  custmwdt?: number
  custmhgt?: number
  linkHref?: any
  FE?:string
  BE?:string
  UIUX?:string
  showFE?:boolean
  showBE?:boolean
  showUIUX?:boolean
  showLink?:boolean
}
const Avatars = ({ Position, Honorifics, Name, Avatarimg, custmwdt, custmhgt,FE,BE,UIUX,showFE,showBE,showUIUX,showLink }: props) => {
  const router = useRouter()
  return (

      <div className=" flex w-32 flex-col items-center justify-center ">
        <div className="relative flex items-end justify-center">
          <div className="z-10 flex w-full justify-center">
            <Image className="object-center" alt="dp" width={custmwdt} height={custmhgt} src={Avatarimg} />
          </div>
          <div className="absolute bottom-0 flex h-12 w-full justify-center "></div>

          <div className="absolute  h-[60px] w-[70px] bg-[#02FFE2]"></div>
        </div>

        <div className="relative flex w-full flex-col items-center space-y-1 rounded-3xl bg-[#171717] p-2">
          <div className="absolute top-[-15px]">
            <Image className="h-[50.24px] object-contain" alt="dp" src={Waves} />
          </div>

          <span className="z-40 text-sm font-semibold text-[#6A78F2]">
            {Honorifics} {Name}
          </span>

          <span className="text-[12px] text-[#8E8E8E]">{Position}</span>
          <div className="flex w-full items-center space-x-4">
              {showFE && (
                <span className="h-4 w-[50%] rounded-full bg-[#363636] text-center text-[0.6rem] text-[#FDB7D0]">
                  {FE}
                </span>
              )}
              {showBE && (
                <span className="h-4 w-[50%] rounded-full bg-[#363636] text-center text-[0.6rem] text-[#02FFE2]">
                  {BE}
                </span>
              )}
              {showUIUX && (
                <span className="h-4 w-[100%] rounded-full bg-[#363636] text-center text-[0.6rem] font-medium text-[#6A78F2]">
                  {UIUX}
                </span>
              )}
          </div>
          {showLink &&(

            <Link className="flex space-x-4 text-sm font-medium text-[#6A78F2]" href={"#"}>
            <span>Read Bio</span>
            <Image alt="arrow" src={Arrow} />
            </Link>
          )}

        </div>
      </div>

  )
}

export default Avatars
