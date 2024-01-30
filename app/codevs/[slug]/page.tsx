"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { skillList } from "../../../lib/statisData"
import axios from "axios"

const Page = ({ params }: { params: { slug: string } }) => {
  const id = params.slug

  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCoDevsData = async (id: string) => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/users/" + id)
        if (!response) {
          throw new Error("Error: Cannot get specific users")
        }
        setData(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoDevsData(id)
  }, [id])

  if (isLoading) {
    return <div className="bg-black">Loading....</div>
  }

  const educList = [
    {
      name: "Harvard University",
      details: "BS Computer Engineering",
      date: "2019-2023",
    },
  ]

  const skillData = [
    {
      name: "angular",
    },
    {
      name: "css",
    },
    {
      name: "github",
    },
    {
      name: "firebase",
    },
    {
      name: "bootstrap",
    },
    {
      name: "oracle",
    },
    {
      name: "html",
    },
  ]

  const workExperienceData = [
    {
      position: "Senior UI/UX Designer",
      fromYear: "April 2000",
      toYear: "April 2023",
      company: "Codebility",
      tasks: [
        "Design and iterate on user interfaces for [mention specific platforms or products], ensuring a seamless and visually appealing experience.",
        "Collaborate with product management and engineering teams to define and implement innovative solutions for product direction, visuals, and experience.",
        "Conduct user research and evaluate user feedback to enhance usability and optimize the design of products.",
        "Create wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas.",
        "Execute all visual design stages from concept to final hand-off to engineering.",
        "Develop and maintain design wireframes, mockups, and specifications as needed.",
        "Stay current with the latest UI trends, techniques, and technologies.",
      ],
      technologies: ["html", "css", "javascript", "angular", "jquery"],
    },
    {
      position: "Senior UI/UX Designer",
      fromYear: "April 2000",
      toYear: "April 2023",
      company: "Microsoft Corporation",
      tasks: [
        "Design and iterate on user interfaces for [mention specific platforms or products], ensuring a seamless and visually appealing experience.",
        "Collaborate with product management and engineering teams to define and implement innovative solutions for product direction, visuals, and experience.",
        "Conduct user research and evaluate user feedback to enhance usability and optimize the design of products.",
        "Create wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas.",
        "Execute all visual design stages from concept to final hand-off to engineering.",
        "Develop and maintain design wireframes, mockups, and specifications as needed.",
        "Stay current with the latest UI trends, techniques, and technologies.",
      ],
      technologies: ["html", "css", "javascript", "angular", "jquery"],
    }
  ]

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 text-gray01 md:container ">
        <div className="mb-8 grid gap-y-5 pt-8 lg:h-[20rem] lg:grid-cols-6 lg:grid-rows-3 lg:gap-y-0 lg:relative">
          <div className="border-b border-b-tealColor pb-3 lg:col-span-2 lg:pt-0">
            <div className="flex justify-between">
              <h2 className="mb-3 text-2xl font-semibold text-white md:text-5xl">John Doe</h2>
              <Image src="/download.svg" alt="Download Button" width={25} height={25} className="lg:hidden" />
            </div>
            <p className="max-w-60 text-base font-normal lg:text-xl">Frontend Developer</p>
            <span className="w-full"></span>
          </div>
          <div className="flex w-full items-center justify-center lg:row-span-2">
            <div className="flex h-full w-[10.6875rem] items-center bg-indigo-950 pt-3 lg:h-[20rem] lg:pt-0">
              <Image src="/sampleProfile/profile.png" width="328" height="390" alt="profile" />
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-start-2 lg:mt-10">
            <div>
              <p className="text-base text-tealColor">About Me</p>
              <p className="pl-4 pt-4 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <Image src="/download.svg" alt="Download Button" width={40} height={40} className="hidden lg:flex lg:absolute lg:right-5 lg:top-5 cursor-pointer" />
        </div>
          
        <p className="hidden text-center text-base text-tealColor lg:block">Work Experience</p>
        <section className="lg:grid-rows-0 mb-5 grid grid-cols-1 lg:grid-cols-6">
          <div className="lg:col-span-2 lg:row-start-2 lg:pb-14">
            <p className="text-base text-tealColor">Education</p>
            <div className="pb-6 pl-4 pt-5 text-xs">
              <ul className="flex w-full flex-col gap-3">
                {educList.map((educ, i) => (
                  <li key={`li-${i}`} className="flex flex-col capitalize">
                    <p className="text-xs lg:text-sm font-semibold">{educ.name}</p>
                    <p className="text-xs lg:text-sm font-normal">{educ.details}</p>
                    <p className="text-xs lg:text-sm text-secondaryColor">{educ.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-start-3 lg:pb-14">
            <p className="text-base text-tealColor">Skills</p>
            <div className="pb-6 pl-4 pt-5 text-xs">
              <ul className="flex w-full items-center gap-3">
                {skillData.map((skill, i) => (
                  <li key={`skill-${i}`}>
                    <Image
                      src={skillList[skill?.name]?.icon!}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className=" transition duration-300 hover:-translate-y-0.5"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row-span-10 mt-10 lg:col-span-3">
            <p className="pb-5 text-center text-base text-tealColor lg:hidden lg:pb-0">Work Experience</p>
            <div className="flex flex-col">
              {workExperienceData.map((item, i) => (
                <div key={`skill-${i}`} className="relative border-l border-tealColor pb-6 pl-10">
                  <p className="mb-1 text-xs text-secondaryColor lg:text-sm">
                    {item.fromYear} - {item.toYear}
                  </p>
                  <p className="mb-2 text-lg font-bold text-gray01 lg:text-xl">{item.position}</p>
                  <p className="mb-2 text-sm text-gray01 lg:text-lg">{item.company}</p>
                  <ul className="pl-4">
                    {item.tasks?.map((task: any, i) => (
                      <li className="list-disc text-xs lg:text-sm" key={i}>
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="m-2 flex gap-2">
                    {item.technologies?.map((task: any, i) => (
                      <Image
                        src={`/techStack/${task}.png`}
                        alt={task + " icon"}
                        width={20}
                        height={20}
                        title={task}
                        className="cursor-pointer object-contain"
                      />
                    ))}
                  </div>
                  <span className="absolute -left-[4px] bottom-0 h-2 w-2 animate-ping rounded-full bg-tealColor">
                    &nbsp;
                  </span>
                  <span className="absolute -left-[4px] bottom-0 h-2 w-2 rounded-full bg-tealColor ">&nbsp;</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <p className=" text-base">CODEBILITY PROJECTS</p>
          <div className="mt-7 flex flex-col gap-y-10 lg:gap-y-5">
            {[1, 2, 3].map((i, j) => (
              <div key={`div-${j}`} className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10">
                <div className="gap-3 lg:flex hover:cursor-pointer">
                  <div className=" h-full w-[303px] lg:w-[203px]">
                    <Image
                      src="/sampleproject/codebility.png"
                      height={142}
                      width={203}
                      // fill
                      alt="codebility"
                      className="aspect-auto h-full w-full rounded transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="hidden flex-col justify-between lg:flex">
                    <Image
                      src="/sampleproject/codebility.png"
                      height="80"
                      width="87"
                      alt="codebility"
                      className="rounded transition duration-300 hover:scale-105"
                    />
                    <Image
                      src="/sampleproject/codebility.png"
                      height="80"
                      width="87"
                      alt="codebility"
                      className="rounded transition duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-grow flex-col justify-between gap-1 px-5 py-2 md:w-1/2">
                  <p className="text-xs text-secondaryColor lg:text-sm">April 2023</p>
                  <h4 className="text-lg">CODEBILITY </h4>
                  <a className="text-sm hover:underline" href="#">
                    Link: https://codebility-fe.vercel.app/
                  </a>
                  <ul className="my-1 flex w-full items-center gap-3">
                    {skillData.map((skill, i) => (
                      <li key={`skill-${i}`}>
                        <Image
                          src={skillList[skill?.name]?.icon!}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className=" transition duration-300 hover:-translate-y-0.5"
                        />
                      </li>
                    ))}
                  </ul>
                  <p className="h-12 truncate text-wrap text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className=" text-base">PERSONAL PROJECTS</p>
          <div className="mt-7 flex flex-col gap-y-10 lg:gap-y-5">
            {[1, 2, 3].map((i, j) => (
              <div key={`div-${j}`} className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10">
                <div className="gap-3 lg:flex hover:cursor-pointer">
                  <div className=" h-full w-[303px] lg:w-[203px]">
                    <Image
                      src="/sampleproject/codebility.png"
                      height={142}
                      width={203}
                      // fill
                      alt="codebility"
                      className="aspect-auto h-full w-full rounded transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="hidden flex-col justify-between lg:flex">
                    <Image
                      src="/sampleproject/codebility.png"
                      height="80"
                      width="87"
                      alt="codebility"
                      className="rounded transition duration-300 hover:scale-105"
                    />
                    <Image
                      src="/sampleproject/codebility.png"
                      height="80"
                      width="87"
                      alt="codebility"
                      className="rounded transition duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-grow flex-col justify-between gap-1 px-5 py-2 md:w-1/2">
                  <p className="text-xs text-secondaryColor lg:text-sm">April 2023</p>
                  <h4 className="text-lg">CODEBILITY </h4>
                  <a className="text-sm hover:underline" href="#">
                    Link: https://codebility-fe.vercel.app/
                  </a>
                  <ul className="my-1 flex w-full items-center gap-3">
                    {skillData.map((skill, i) => (
                      <li key={`skill-${i}`}>
                        <Image
                          src={skillList[skill?.name]?.icon!}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className=" transition duration-300 hover:-translate-y-0.5"
                        />
                      </li>
                    ))}
                  </ul>
                  <p className="h-12 truncate text-wrap text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-20 px-20 flex items-center justify-end">
        <Link href="/">
          <Image 
            src="/codebilityLogoBlue.png"
            alt="Codebility logo"
            height={50}
            width={120}
            className="opacity-40"
            />
          </Link>
      </div>
    </>
  )
}

export default Page
