"use client"

import Image from "next/image"
import { positions } from "./DummyData"
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
    <div className="mx-auto flex w-screen max-w-7xl flex-col gap-5 py-14">
      <div className="mx-5 flex flex-col items-center justify-center gap-5 lg:mx-14 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center gap-7 md:gap-1">
          <h1 className={`text-6xl font-semibold uppercase ${iceland.className} text-[#EAEAEA]`}>Our Interns</h1>
          <p className="max-w-xs px-2 text-start text-xs text-secondaryColor md:text-center">
            Lorem Ipsum is simply dummy text for searching interns and their contributions in the company
          </p>

          {/* Filter for Mobile Screen */}
          <div
            onClick={handelFilterToggle}
            className="relative flex cursor-pointer gap-4 self-end bg-inherit md:hidden"
          >
            <p className="text-xs text-primaryColor">Filter</p>
            <Image src="/Filter.svg" alt="filter" width={13} height={13} className="h-auto w-auto" />

            {filterToggle && (
              <div className="absolute right-16 top-6 z-10 flex h-40 w-40 flex-col gap-3 rounded-lg bg-footerColor px-5 py-3 text-xs">
                {positions.map((p) => (
                  <p key={p.position} onClick={() => setByCategory(p.position)}>
                    {p.position}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:relative md:flex md:w-full md:max-w-md md:items-center md:justify-center">
          <input
            type="text"
            value={isSearching}
            onChange={(e) => setIsSearching(e.target.value)}
            className="h-10 w-full rounded-full border-2 border-tealColor px-7 pr-16 text-sm focus:outline-none"
          />
          <div className="absolute right-0 flex h-full w-14 items-center justify-center rounded-r-full bg-tealColor">
            <Image
              src="/Search.svg"
              alt="search"
              width={30}
              height={30}
              className="mr-2 h-auto w-auto hover:cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Positions */}
      <div className="hidden md:mx-5 md:flex md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-1 lg:mr-14 lg:self-end xl:gap-10">
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

      <Intern
        isSearching={isSearching}
        byCategory={byCategory}
      />

      <div className="md:hidden mx-5 text-xs text-center space-y-3 text-secondaryColor ">
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
