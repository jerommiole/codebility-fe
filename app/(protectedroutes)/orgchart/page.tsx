"use client"

import React from 'react'
import image from './assets/image.png'
import image1 from './assets/image-1.png'
import image2 from './assets/image-2.png'
import OrgMember from './orgMember'

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
      name: 'Lorem Ipsum',
      position: 'Lorem Ipsum',
      image: image,
      color: 'bg-green-900',
      yAxis: 'bottom',
      id: 1
    }
  ]

  const groupB: GroupItems[] = [
    {
      name: 'Lorem Ipsum',
      position: 'Lorem Ipsum',
      image: image2,
      color: 'bg-purple-900',
      yAxis: 'top',
      id: 2
    },
    {
      name: 'Lorem Ipsum',
      position: 'Lorem Ipsum',
      image: image,
      color: 'bg-green-900',
      yAxis: 'top',
      id: 3
    },
    {
      name: 'Lorem Ipsum',
      position: 'Lorem Ipsum',
      image: image1,
      color: 'bg-blue-900',
      yAxis: 'top',
      id: 4
    }
  ]

  const groupC: GroupItems[][] = [
    [
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum',
        image: image2,
        color: 'bg-purple-900',
        yAxis: 'top',
        id: 5
      },
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum',
        image: image2,
        color: 'bg-purple-900',
        yAxis: 'top',
        id: 6
      }
    ],
    [
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum',
        image: image,
        color: 'bg-green-900',
        yAxis: 'top',
        id: 7
      },
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum',
        image: image,
        color: 'bg-green-900',
        yAxis: 'top',
        id: 8
      }
    ],
    [
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum',
        image: image1,
        color: 'bg-blue-900',
        yAxis: 'top',
        id: 9
      },
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum',
        image: image1,
        color: 'bg-blue-900',
        yAxis: 'top',
        id: 10
      }
    ]
  ]

  return (
    <div>
      <div className='flex flex-col py-[2rem]'>
        <div className='uppercase font-bold text-2xl md:text-5xl mb-2 md:mb-5'>
          Organization Charts
        </div>
        <div className='text-xs md:text-sm w-[350px]'>
          Lorem Ipsum is simply dummy text for searching interns and their  contributions in the company
        </div>
      </div>
      <div className={`flex items-center ${groupC.length > 3 || groupB.length > 3 ? 'justify-start' : 'justify-center'}`}>
        <div className='flex flex-col justify-center items-center gap-y-[4rem] md:gap-y-[7rem] pl-[63px] sm:pl-[100px] md:pl-[200px] lg:pl-[50px]'>
          {/* S-tier */}
          <div className='flex items-center justify-center self-center gap-[30vmin]'>
            {groupA.map((member, index) => (
              <OrgMember image={member.image} color={member.color} yAxis={member.yAxis} position={member.position} name={member.name} />
            ))}
          </div>
          {/* A-tier */}
          <div className='flex items-center justify-center gap-[30vmin]'>
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
          <div className='flex items-center justify-center gap-[20vmin] md:gap-x-[22vmin] lg:gap-[20vmin]'>
            {groupC.map((innerArray, index) => (
              <div key={index} className='flex items-center justify-center gap-[10vmin] w-[20vmin]'>
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
    </div>
  )
}

export default page