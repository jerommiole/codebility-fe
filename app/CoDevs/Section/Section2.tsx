import React from "react"
import Avatars from "Components/Avatars"
import { Avatar1, Avatar2,Avatar3 } from "../Assets/exports"


const jsondata = [
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  {  Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },

];
const Section2 = () => {
  return (
    <div className="flex h-[auto] w-full items-center flex-col space-y-5 bg-[#151515] p-2 ">
      <div className="flex flex-col space-y-4  w-full text-center text-[#8E8E8E]">
        <div className="flex flex-col items-center">
          <span>MEET OUR</span>
          <span className="text-3xl text-white">CO DEVS</span>
          <span>Lorem Ipsum is simply dummy text </span>
        </div>
        <div className="flex md:justify-end justify-center space-x-6 w-full  md:pr-10 pr-0">
          <span>All</span>
          <span className="text-[#FDB7D0]">Full Stack Developer</span>
          <span className="text-[#02FFE2]">Backend Developer</span>
          <span className="text-[#6A78F2]">Frontend Developer</span>
          <span className="text-[#C108FE]">UI/UX Designer</span>
        </div>
      </div>
      <div className="flex flex-col h-[100%] w-[80%] items-center justify-center space-y-8  p-3">

      <div className=" grid md:grid-flow-col md:grid-rows-2 grid-cols-2 grid-flow-row gap-x-12 ">

          {
            jsondata.map((data,index)=>(
              <Avatars
                key={index}
                Name={data.Name}
                Honorifics={data.Honorifics}
                Position={data.Position}
                Avatarimg={data.Avatarimg} />


            ))


          }





      </div>




      </div>
    </div>
  )
}

export default Section2
