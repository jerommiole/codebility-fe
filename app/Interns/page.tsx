"use client"

import Image from "next/image"
import { positions, positionsSm } from "./DummyData"
import { useState } from "react"
import { Iceland } from "next/font/google"
import Intern from "./Intern"

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
    <div className="mx-auto flex w-screen max-w-7xl flex-col gap-5 py-5 ">
      <div className="mx-5 mb-10 flex flex-col items-center justify-center gap-5 lg:mx-14 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center gap-7 md:gap-1">
          <h1 className={`text-5xl font-semibold uppercase ${iceland.className} dark:text-[#EAEAEA] xl:self-start`}>Interns Page</h1>
          <p className="max-w-xs px-2 text-center text-xs text-secondaryColor xl:text-start xl:max-w-xl">
          Lorem Ipsum is simply dummy text for searching interns and their  contributions in the company y text for searching interns and their  contributions in the company
          </p>

          {/* Filter for Mobile Screen */}
          <div
            onClick={handelFilterToggle}
            className="relative flex cursor-pointer gap-4 self-end bg-inherit md:hidden"
          >
            <p className="text-xs dark:text-primaryColor">Filter</p>
            <Image src="/Filter.svg" alt="filter" width={13} height={13} className="h-auto w-auto" />

            {filterToggle && (
              <div className="absolute right-16 top-6 z-10 flex h-56 w-28 flex-col gap-1 rounded-xl bg-slate-50 dark:bg-[#0E0E0E] p-3 text-xs">
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
                      className="rounded-md px-2 py-1 hover:bg-[#6A78F2]"
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
           <Image src="/Search.svg" alt="search" width={30} height={30} className="p-1.5 absolute right-1" />
        </div>
      </div>

      {/* Positions */}
      <div className="hidden md:mx-5 md:mb-12 md:flex md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-1 lg:mr-14 lg:self-end xl:gap-10">
        {positions.map((p) => (
          <p
            key={p.position}
            className={`${p.textColor} ${isSearching ? "cursor-not-allowed" : "cursor-pointer"} text-xs md:text-sm`}
            onClick={() => setByCategory(p.position)}
          >
            {p.position}
          </p>
        ))}
      </div>

      <Intern isSearching={isSearching} byCategory={byCategory} />

      <div className="mx-5 space-y-3 text-center text-xs text-secondaryColor md:max-w-md md:mx-auto md:flex md:flex-col md:justify-center">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
    </div>
  )
}

export default Interns
