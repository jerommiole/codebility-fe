"use client"

import React from "react"
import avatar1 from "public/assets/images/default-avatar-male.png"
import avatar2 from "public/assets/images/default-avatar-female.png"
import avatar3 from "public/assets/images/default-avatar-female.png"
import OrgMember from "./orgMember"
import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"

const page = () => {
  interface GroupItems {
    name: string
    position: string
    image: any
    color: string
    yAxis: string
    id: number
  }

  const groupA: GroupItems[] = [
    {
      name: "Lorem Ipsum",
      position: "Lorem Ipsum",
      image: avatar3,
      color: "bg-green-900",
      yAxis: "bottom",
      id: 1,
    },
  ]

  const groupB: GroupItems[] = [
    {
      name: "Lorem Ipsum",
      position: "Lorem Ipsum",
      image: avatar2,
      color: "bg-purple-900",
      yAxis: "top",
      id: 2,
    },
    {
      name: "Lorem Ipsum",
      position: "Lorem Ipsum",
      image: avatar3,
      color: "bg-green-900",
      yAxis: "top",
      id: 3,
    },
    {
      name: "Lorem Ipsum",
      position: "Lorem Ipsum",
      image: avatar1,
      color: "bg-blue-900",
      yAxis: "top",
      id: 4,
    },
  ]

  const groupC: GroupItems[][] = [
    [
      {
        name: "Lorem Ipsum",
        position: "Lorem Ipsum",
        image: avatar2,
        color: "bg-purple-900",
        yAxis: "top",
        id: 5,
      },
      {
        name: "Lorem Ipsum",
        position: "Lorem Ipsum",
        image: avatar2,
        color: "bg-purple-900",
        yAxis: "top",
        id: 6,
      },
    ],
    [
      {
        name: "Lorem Ipsum",
        position: "Lorem Ipsum",
        image: avatar3,
        color: "bg-green-900",
        yAxis: "top",
        id: 7,
      },
      {
        name: "Lorem Ipsum",
        position: "Lorem Ipsum",
        image: avatar3,
        color: "bg-green-900",
        yAxis: "top",
        id: 8,
      },
    ],
    [
      {
        name: "Lorem Ipsum",
        position: "Lorem Ipsum",
        image: avatar1,
        color: "bg-blue-900",
        yAxis: "top",
        id: 9,
      },
      {
        name: "Lorem Ipsum",
        position: "Lorem Ipsum",
        image: avatar1,
        color: "bg-blue-900",
        yAxis: "top",
        id: 10,
      },
    ],
  ]

  return (
    <div className="flex flex-col gap-4">
      <H1>Organizational Chart</H1>
      <Box>
        <div
          className={`flex items-center ${groupC.length > 3 || groupB.length > 3 ? "justify-start" : "justify-center"}`}
        >
          <div className="flex flex-col items-center justify-center gap-y-[4rem] pl-[63px] sm:pl-[100px] md:gap-y-[7rem] md:pl-[200px] lg:pl-[50px]">
            {/* S-tier */}
            <div className="flex items-center justify-center gap-[30vmin] self-center">
              {groupA.map((member, index) => (
                <OrgMember
                  image={member.image}
                  color={member.color}
                  yAxis={member.yAxis}
                  position={member.position}
                  name={member.name}
                />
              ))}
            </div>
            {/* A-tier */}
            <div className="flex items-center justify-center gap-[30vmin]">
              {groupB.map((member, index) => (
                <OrgMember
                  key={member.id}
                  image={member.image}
                  color={member.color}
                  yAxis={member.yAxis}
                  position={member.position}
                  name={member.name}
                />
              ))}
            </div>
            {/* B-tier */}
            <div className="flex items-center justify-center gap-[20vmin] md:gap-x-[22vmin] lg:gap-[20vmin]">
              {groupC.map((innerArray, index) => (
                <div key={index} className="flex w-[20vmin] items-center justify-center gap-[10vmin]">
                  {innerArray.map((member, memberIndex) => (
                    <OrgMember
                      key={member.id}
                      image={member.image}
                      color={member.color}
                      yAxis={member.yAxis}
                      position={member.position}
                      name={member.name}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default page
