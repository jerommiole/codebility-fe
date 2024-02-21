"use client"

import Image from "next/image"
import { positions, positionsSm } from "./DummyData"
import { useState } from "react"
import { Iceland } from "next/font/google"
import Intern from "./Intern"
import Sidebar from "Components/Sidebar1"

const iceland = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

const Interns = () => {
  const [filterToggle, setFilterToggle] = useState(false)
  const [isSearching, setIsSearching] = useState("")
  const [byCategory, setByCategory] = useState("")

  const handelFilterToggle = () => {
    setFilterToggle((prev) => !prev)
  }

  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-5 bg-background dark:bg-[#0E0E0E] xl:gap-4 xl:p-4">
        <div className="mb-10 flex flex-col items-center justify-center gap-5 md:mb-2 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center gap-7 md:gap-1">
            <h1 className="text-3xl font-semibold uppercase dark:text-[#EAEAEA] lg:self-start xl:text-4xl">
              Interns Page
            </h1>
            <p className="max-w-xs px-2 text-center text-xs text-secondaryColor lg:max-w-lg lg:text-start xl:max-w-xl">
              Lorem Ipsum is simply dummy text for searching interns and their contributions in the company y text for
              searching interns and their contributions in the company
            </p>

            {/* Filter for Mobile Screen */}
            <div
              onClick={handelFilterToggle}
              className="relative flex cursor-pointer gap-4 self-end bg-inherit md:hidden"
            >
              <p className="text-xs dark:text-primaryColor">Filter</p>
              <Image src="/filter.svg" alt="filter" width={13} height={13} className="h-auto w-auto" />

              {filterToggle && (
                <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-slate-50 p-3 text-xs dark:bg-[#0E0E0E]">
                  <div className="flex w-full justify-end">
                    <Image
                      src="/Close.svg"
                      alt="close"
                      width={10}
                      height={10}
                      onClick={(e) => {
                        setFilterToggle((prev) => !prev)
                        e.stopPropagation()
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    {positionsSm.map((position) => (
                      <p
                        key={position}
                        onClick={() => setByCategory(position)}
                        className="rounded-md px-2 py-1 hover:bg-[#6A78F2] hover:text-white"
                      >
                        {position}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:relative md:flex md:w-60 md:max-w-md md:items-center md:justify-center">
            <input
              type="text"
              value={isSearching}
              placeholder="Search members"
              onChange={(e) => setIsSearching(e.target.value)}
              className="h-10 w-full rounded-full border border-[#8E8E8E] border-opacity-50 bg-inherit px-5 text-xs focus:outline-none"
            />
            <Image src="/Search.svg" alt="search" width={30} height={30} className="absolute right-1 p-1.5" />
          </div>
        </div>

        {/* Positions */}
        <div className="hidden md:mb-12 md:mr-10 md:flex md:w-[80%] md:justify-end md:gap-x-4 md:gap-y-1 md:self-end lg:mr-14 xl:mb-5 xl:w-[90%] xl:gap-10">
          {/* {positions.map((p) => (
            <p
              key={p.position}
              className={`${p.textColor} ${isSearching ? "cursor-not-allowed" : "cursor-pointer"} text-xs md:text-sm`}
              onClick={() => setByCategory(p.position)}
            >
              {p.position}
            </p>
          ))} */}

          {/* FILTER FOR DESKTOP SCREEN */}
          <div title="Filter" onClick={handelFilterToggle} className="md:relative md:flex md:cursor-pointer md:gap-4">
            <p className="text-sm dark:text-primaryColor">Filter</p>
            <Image src="/filter.svg" alt="filter" width={20} height={20} className="h-auto w-auto" />

            {filterToggle && (
              <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-slate-50 p-3 text-xs dark:bg-[#0E0E0E]">
                <div className="flex w-full justify-end">
                  <Image
                    src="/Close.svg"
                    alt="close"
                    width={10}
                    height={10}
                    onClick={(e) => {
                      setFilterToggle((prev) => !prev)
                      e.stopPropagation()
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  {positionsSm.map((position) => (
                    <p
                      key={position}
                      onClick={() => setByCategory(position)}
                      className="rounded-md px-2 py-1 hover:bg-[#6A78F2] hover:text-white"
                    >
                      {position}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Intern isSearching={isSearching} byCategory={byCategory} />

        <div className="mx-5 text-center text-xs text-secondaryColor md:mb-5 md:flex md:max-w-md md:flex-col md:justify-center md:self-center lg:mx-auto xl:mb-0 xl:max-w-xl">
          <p>
            Lorem Ipsum is simply dummy text for searching interns and their contributions in the company y text for
            searching interns and their contributions in the company
          </p>
        </div>
      </div>
    </div>
  )
}

export default Interns
