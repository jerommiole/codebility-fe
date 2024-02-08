import React from "react"
import { Card } from "Components/ui/card"
import Image from "next/image"
import { SvgBox, SvgPin, SvgMore, SvgWarning } from "assets/icons"

const TodoCard = () => {
  return (
    <Card className="mx-auto h-[260px] w-full max-w-[400px] p-3 ">
      <div className="flex justify-between">
        <div className="flex w-[60px] items-center justify-between">
          <SvgBox />
          <SvgPin />
        </div>
        <div className="flex w-[65px] items-center justify-between">
          <SvgWarning className="text-text4" />
          <SvgMore className="text-text4" />
        </div>
      </div>
      {/* Card Content  */}
      <div>
        <div className="mt-4 flex justify-between">
          <h1 className="font-600 text-xl text-[#02FFE2]">JIRA TICKET</h1>
          <p className="text-xs text-gray-500">11/28/2023</p>
        </div>
        <p className="text-xs text-[#9747FF] sm:text-sm">Git Link : https://github.com/mitzukin/AnyStore</p>
        <div className="p-3">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut ipsum minima
            impedit.
          </p>
        </div>
      </div>
      {/* Card Footer  */}
      <div className="flex items-center justify-between">
        {/* left  container */}
        <div className="flex gap-2">
          <div className="flex items-center gap-3 rounded-full border px-2 py-1 text-xs sm:px-3">
            <div className="h-full w-0.5 bg-[#9747FF]" />
            <p>Codebility</p>
          </div>
          <div className="flex items-center gap-3 rounded-full border px-2 py-1 text-xs sm:px-3">
            <div className="h-full w-0.5 bg-[#9747FF]" />
            <p>Z-Form</p>
          </div>
        </div>
        {/* right container  */}
        <div className="">
          <p className="mb-1 text-xs">Team</p>
          <div className="flex items-center gap-1">
            <div className="h-5 w-5 rounded-full bg-[#2f85a1] sm:h-7 sm:w-7">
              <Image
                className="h-full w-full rounded-full object-cover"
                src="/image25.png"
                width={35}
                height={5}
                alt="team-member"
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-[#34cc80] sm:h-7 sm:w-7">
              <Image
                className="h-full w-full rounded-full object-cover"
                src="/image32.png"
                width={35}
                height={5}
                alt="team-member"
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-[#9747FF] sm:h-7 sm:w-7">
              <Image
                className="h-full w-full rounded-full object-cover"
                src="/image33.png"
                width={35}
                height={5}
                alt="team-member"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TodoCard
