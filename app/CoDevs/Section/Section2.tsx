import React from "react"
import Avatars from "Components/Avatars"
import { Avatar1, Avatar2,Avatar3 } from "../Assets/exports"
const Section2 = () => {
  return (
    <div className="flex h-[80vh] w-full items-center flex-col space-y-5 bg-[#151515] p-2 ">
      <div className="flex flex-col space-y-4  w-full text-center text-[#8E8E8E]">
        <div className="flex flex-col items-center">
          <span>MEET OUR</span>
          <span className="text-3xl text-white">TEAM</span>
          <span>Lorem Ipsum is simply dummy text </span>
        </div>
        <div className="flex justify-end space-x-6 w-full  pr-10">
          <span>All</span>
          <span className="text-[#FDB7D0]">Full Stack Developer</span>
          <span className="text-[#02FFE2]">Backend Developer</span>
          <span className="text-[#6A78F2]">Frontend Developer</span>
          <span className="text-[#C108FE]">UI/UX Designer</span>
        </div>
      </div>
      <div className="flex flex-col h-[100%] w-[80%] items-center justify-center space-y-8  p-3">

      <div className="flex w-full items-center justify-center ">

          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar2} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>

      </div>
      <div className="flex w-full items-center justify-center ">

          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>
          <div className="flex-grow flex justify-center items-center ">
            <Avatars  Avatarbg='bg-[#C108FE]'  Name="Adele" Honorifics="Mrs." Position="Full Stack Developer" Avatarimg={Avatar3} />
          </div>

      </div>



      </div>
    </div>
  )
}

export default Section2
