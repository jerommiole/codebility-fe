import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Avatars from "./Assets/image18.svg"
import { Avatar1,Arrow } from "./Assets/exports"
import Link from 'next/link';

export default function page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-[30px] bg-[#0E0E0E] px-[200px] text-white">
      {/* Column1 */}
      <div className="flex w-full  justify-center bg-green-500">
        <div className="flex w-1/2 flex-col">
          <div className="">
            <span className="text-2xl font-medium">LOREM IPSUM</span>
          </div>
          <div className="mb-3 h-[3px] w-[30px] bg-white"></div>
          <div className="">
            <span className="text-6xl font-normal">LOREM IPSUM</span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-[48%] text-left">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </span>
          </div>
        </div>
      </div>
      {/* Column 2 */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col text-center text-[#8E8E8E]">
          <span>MEET OUR</span>
          <span className="text-3xl text-white">TEAM</span>
          <span>Lorem Ipsum is simply dummy text </span>
        </div>
        <div className="h-[40vh] w-full bg-[#131313] flex flex-col ">
          <Avatar className={"h-32 w-32 bg-[#6A78F2] "}>
            <AvatarImage src={Avatar1.src} />

          </Avatar>
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-medium">Mr. Lorem</span>
            <span className="text-sm text-[#8E8E8E]">Position</span>
            <Link className="flex space-x-4 text-[#6A78F2] font-medium" href="#">
               <span> Read Bio</span>
                <Image alt='arrow' src={Arrow}/>
            </Link>
            </div>

        </div>
      </div>
      {/* Column 3 */}
      <div className="w-1/2 text-center">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
      </div>
    </div>
  )
}
