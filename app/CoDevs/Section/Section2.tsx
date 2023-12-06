import React from "react"
import Avatars from "Components/Avatars"
import { Avatar1, Avatar2 } from "../Assets/exports"
const Section2 = () => {
  return (
    <div className="flex h-[80vh] w-full  flex-col space-y-5 bg-[#151515] p-2 ">
      <div className="flex flex-col text-center text-[#8E8E8E]">
        <span>MEET OUR</span>
        <span className="text-3xl text-white">TEAM</span>
        <span>Lorem Ipsum is simply dummy text </span>
      </div>
      <div className="flex h-[100%] w-[100%] justify-center   p-5">
        <div className="flex md:flex-row flex-col justify-center items-center  md:space-x-8 space-x-0  ">
          <div className="flex flex-col  space-y-6 ">
            <div className="flex w-[100%] justify-center md:space-x-8 space-x-5 ">
              <Avatars Avatarbg='bg-[#C108FE]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar1} />

              <Avatars Avatarbg='bg-[#6A78F2]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar2} />
              <Avatars Avatarbg='bg-[#C108FE]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar2} />
            </div>
            <div className="flex w-full justify-center md:space-x-8 space-x-5 ">
              <Avatars Avatarbg='bg-[#6A78F2]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar1} />

              <Avatars Avatarbg='bg-[#6A78F2]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar2} />
              <Avatars Avatarbg='bg-[#C108FE]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar2} />
            </div>
          </div>
            <div className="flex flex-row md:flex-col md:space-x-0 space-x-5 justify-center  space-y-6 ">
                <Avatars Avatarbg='bg-[#6A78F2]' Name="Adele" Honorifics="Mrs." Position="sec row" Avatarimg={Avatar1} />
                <Avatars Avatarbg='bg-[#C108FE]' Name="Adele" Honorifics="Mrs." Position="Web Dev" Avatarimg={Avatar2} />

            </div>
          </div>

      </div>
    </div>
  )
}

export default Section2
