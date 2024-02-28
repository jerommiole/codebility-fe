"use client"
import { Sidebar } from "Components/exports"
import { Card } from "Components/ui/card"
import Image from "next/image"
import React from "react"
import icon1 from "@/public/assets/icons/Vector1.svg"
import icon2 from "@/public/assets/icons/Vector2.svg"
import icon3 from "@/public/assets/icons/Vector3.svg"
import icon4 from "@/public/assets/icons/Vector4.svg"
import { DataTableDemo } from "./data-table"

const page = () => {
  return (
    <div className="flex w-full flex-col gap-2 overflow-x-hidden p-3 lg:h-full lg:p-0">
      <div>
        <Card className="flex w-auto flex-col items-center justify-between overflow-hidden border md:flex-row">
          <div className="px-[2.50rem] py-[1.75rem] sm:pl-12">
            <h1 className="text-2xl font-semibold">Summary Of Rendered Time</h1>
            <p className="text-[#8E8E8E] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <Card className="mx-3 my-5 mr-3 flex flex-col px-12 py-4 sm:px-[4rem] md:flex-row lg:gap-24 lg:px-[6rem] ">
            <div className="space-y-5">
              <div className="flex items-center justify-center gap-3 border-l-2 border-[#02FFE2] px-8 py-2 ">
                <div className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] ">
                  <Image src={icon1} alt="" />
                </div>
                <div className="flex flex-col items-start leading-5">
                  <h1 className="text-[1.5rem]">240.4</h1>
                  <p className="text-[#8E8E8E]">Late(Hr/s)</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 border-l-2 border-[#9747FF] px-8 py-2 ">
                <div className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] ">
                  <Image src={icon2} alt="" />
                </div>
                <div className="flex flex-col items-start leading-5">
                  <h1 className="text-[1.5rem]">240.4</h1>
                  <p className="text-[#8E8E8E]">Late(Hr/s)</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="space-y-5 tablet:mt-5">
              <div className="flex items-center justify-center gap-3 border-l-2 border-[#C108FE] px-8 py-2 ">
                <div className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] ">
                  <Image src={icon3} alt="" />
                </div>
                <div className="flex flex-col items-start leading-5">
                  <h1 className="text-[1.5rem]">240.4</h1>
                  <p className="text-[#8E8E8E]">Late(Hr/s)</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 border-l-2 border-[#6A78F2] px-8 py-2 ">
                <div className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] ">
                  <Image src={icon4} alt="" />
                </div>
                <div className="flex flex-col items-start leading-5">
                  <h1 className="text-[1.5rem]">240.4</h1>
                  <p className="text-[#8E8E8E]">Late(Hr/s)</p>
                </div>
              </div>
            </div>
          </Card>
        </Card>
        <Card className="mt-[0.75rem] dark:bg-[#0E0E0E]">
          <div className="flex flex-col items-center gap-3 px-[2.44rem] py-[1.75rem]  sm:flex-row">
            <h1 className=" text-2xl font-semibold text-[#D9D9D9] ">Time Log</h1>
            <p className=" text-[#8E8E8E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
            </p>
          </div>
          <DataTableDemo />
        </Card>
      </div>
    </div>
  )
}

export default page
