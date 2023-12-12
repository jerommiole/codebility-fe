import React from "react"
import { Avatar } from "@/components/ui/avatar"
import { Arrow } from "../app/CoDevs/Assets/exports"
import Image from "next/image"
import Link from "next/link"
interface props {
  Position: string
  Honorifics: string
  Name: string
  Avatarimg: string
  Avatarbg: string
}
const Avatars = ({ Position, Honorifics, Name, Avatarimg, Avatarbg }: props) => {
  return (
    <div className="">
      <Avatar className={`w-24  md:h-24 md:w-24 ${Avatarbg} `}>
        <Image alt="dp" src={Avatarimg} />
      </Avatar>
      <div className="flex flex-col space-y-0 md:space-y-2">
        <span className="text-base font-medium text-white md:text-2xl">
          {Honorifics} {Name}
        </span>
        <span className="text-xs text-[#8E8E8E] md:text-sm">{Position}</span>
        <Link className="flex space-x-4 text-sm font-medium text-[#6A78F2] md:text-lg" href="#">
          <span>Read Bio</span>
          <Image alt="arrow" src={Arrow} />
        </Link>
      </div>
    </div>
  )
}

export default Avatars
