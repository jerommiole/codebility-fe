"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

import SvgFooterCodebility from "../../../Components/logos/footerCodebility"
import Navbar from "../../Hero/Navbar"
import CopyToClipboardButton from "../../../lib/helpers/copytoClipboard"
import { skillList, socialsList } from "../../../lib/statisData"

const Page = ({ params }: { params: { slug: string } }) => {
  const name = params.slug.replace(/%20/g, " ")

  const socials = [
    {
      name: "facebook",
      url: "http://facebook.com",
    },
    {
      name: "github",
      url: "http://facebook.com",
    },
    {
      name: "linkedin",
      url: "http://facebook.com",
    },
    {
      name: "whatsapp",
      url: "http://facebook.com",
    },
    {
      name: "skype",
      url: "http://facebook.com",
    },
    {
      name: "telegram",
      url: "http://facebook.com",
    },
  ]

  const contactList = [
    {
      name: "phone",
      details: "+63123456789",
    },
    {
      name: "email",
      details: "LoremIpsum@gmail.com",
    },
    {
      name: "website",
      details: "LoremIpsum.com",
    },
    {
      name: "github",
      details: "Lorem@github.io",
    },
  ]

  const educList = [
    {
      name: "Dummy Univ",
      details: "Lorem Ipsum is simply",
      date: "2019-2023",
    },
    {
      name: "Dummy Univ",
      details: "Lorem Ipsum is simply",
      date: "2019-2023",
    },
    {
      name: "Dummy Univ",
      details: "Lorem Ipsum is simply",
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
    {
      position: "Senior UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
    {
      position: "Senior UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
    {
      position: "Senior UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
    {
      position: "Senior UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
    {
      position: "Senior UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
    {
      position: "Senior UI/UX Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      fromYear: "April 2000",
      toYear: "April 2023",
    },
  ]

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 text-gray01 md:container">
        <div className="mb-8 grid gap-y-5 pt-[6.3rem] lg:h-[30rem] lg:grid-cols-6 lg:grid-rows-3 lg:gap-y-0">
          <div className="border-b border-b-tealColor pb-3 lg:col-span-2 lg:pt-0">
            <h2 className="mb-3 text-2xl font-medium text-white md:text-5xl">{name}</h2>
            <p className="max-w-60 text-xs font-normal">Lorem Ipsum is simply dummy text has been the industry's </p>
            <span className="w-full"></span>
          </div>
          <div className="flex w-full items-center justify-center lg:row-span-2">
            <div className="flex h-full w-[10.6875rem] items-center bg-indigo-950 pt-3 lg:pt-0">
              <Image src="/sampleProfile/profile.png" width="328" height="390" alt="profile" />
            </div>
          </div>
          <div className="flex items-end lg:col-span-2 lg:col-start-4 lg:row-start-2">
            <div className="lg:pb-5 lg:pl-8">
              <div className="flex gap-5 pb-4">
                {socials.map((social: { name: string; url: string }, i) => (
                  <Link key={`link-${i}`} href={social.url}>
                    <Image
                      src={socialsList[social.name]?.icon!}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="transition duration-300 hover:-translate-y-0.5"
                    />
                  </Link>
                ))}
              </div>
              <p className="text-xs">Lorem Ipsum is simply dummy text has been the industry's </p>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-start-3">
            <div>
              <p className="text-base text-tealColor">About Me</p>
              <p className="pl-4 pt-4 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <p className="hidden text-center text-base text-tealColor lg:block">Work Experience</p>
        <section className="lg:grid-rows-0 mb-5 grid grid-cols-1 lg:grid-cols-6">
          <div className="lg:col-span-2 lg:pb-14">
            <p className="text-base text-tealColor">Contacts</p>
            <div className="py-5 pl-4 text-xs">
              <ul className="flex w-full flex-col gap-3">
                {contactList.map((contact, i) => (
                  <div key={`contact-${i}`} className="flex">
                    <li className="flex w-20 capitalize">
                      <p className="text-xs">{contact.name}</p>
                    </li>
                    <li className="flex w-full capitalize">
                      <div className="flex items-center gap-2.5 text-xs">
                        {contact.details} <CopyToClipboardButton value={contact.details} />
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-start-2 lg:pb-14">
            <p className="text-base text-tealColor">Education</p>
            <div className="pb-6 pl-4 pt-5 text-xs">
              <ul className="flex w-full flex-col gap-3">
                {educList.map((educ, i) => (
                  <li key={`li-${i}`} className="flex flex-col capitalize">
                    <p className="text-xs">{educ.name}</p>
                    <p className="text-xs">{educ.details}</p>
                    <p className="text-xs">{educ.date}</p>
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
                  <p className="mb-1 text-xs text-secondaryColor">
                    {item.fromYear} = {item.toYear}
                  </p>
                  <p className="mb-2 text-base text-gray01">{item.position}</p>
                  <p className="text-xs text-gray01">{item.description}</p>
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
          <p className=" text-base">CODEBILITY PROEJCTS</p>
          <div className="mt-7 flex flex-col gap-y-10 lg:gap-y-5">
            {[1, 2, 3].map((i, j) => (
              <div key={`div-${j}`} className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10">
                <div className="gap-3 lg:flex">
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

                <div className="flex w-full flex-grow flex-col justify-between">
                  <p className="text-xs text-secondaryColor">April 2023</p>
                  <h4 className="text-base">CODEBILITY </h4>
                  <a className="text-base hover:underline" href="#">
                    Link: https//codebility.com{" "}
                  </a>
                  <p className="h-12 truncate text-wrap text-xs">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-20  px-20">
        {/* <div className="flex h-full w-full items-center justify-between">
          <div className="text-xs text-gray01">Lorem Ipsum</div>
          <div>
            <SvgFooterCodebility />
          </div>
        </div>*/}
      </div>
    </>
  )
}

export default Page
