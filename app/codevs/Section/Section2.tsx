import React from "react"
import Avatars from "Components/Avatars"
import Avatar3 from "../Assets/image110.svg"

const jsondata = [
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
  { Name: "Adele", Honorifics: "Mrs.", Position: "Full Stack Developer", Avatarimg: Avatar3 },
]
const Section2 = () => {
  return (
    <div className="flex h-[auto] w-full flex-col items-center space-y-5 bg-[#151515] p-2 ">
      <div className="flex w-full flex-col  space-y-4 text-center text-[#8E8E8E]">
        <div className="flex flex-col items-center">
          <span>MEET OUR</span>
          <span className="text-3xl text-white">CO DEVS</span>
          <span>Lorem Ipsum is simply dummy text </span>
        </div>
        <div className="flex justify-center w-full pr-0 space-x-6 md:justify-end md:pr-10">
          <span>All</span>
          <span className="text-[#FDB7D0]">Full Stack Developer</span>
          <span className="text-[#02FFE2]">Backend Developer</span>
          <span className="text-[#6A78F2]">Frontend Developer</span>
          <span className="text-[#C108FE]">UI/UX Designer</span>
        </div>
      </div>
      <div className="flex h-[100%] w-[80%] flex-col items-center justify-center space-y-8  p-3">
        <div className="grid grid-flow-row grid-cols-2 gap-x-12 md:grid-flow-col md:grid-rows-2">
          {jsondata.map((data, index) => (
            <Avatars
              key={index}
              Name={data.Name}
              Honorifics={data.Honorifics}
              Position={data.Position}
              Avatarimg={data.Avatarimg}
              FE={"FE"}
              BE={"BE"}
              UIUX={"UI/UX"}
              showFE={true}
              showBE={true}
              showUIUX={true}
              showLink={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section2
