"use client"

import Link from "next/link"
import Image from "next/image"
import { interns, positionsSm, positions } from "../(codevdashboard)/Interns/DummyData"
import { useState } from "react"

const Codevs = () => {
  const [filterToggle, setFilterToggle] = useState(false)
  const [byCategory, setByCategory] = useState("")

  const handelFilterToggle = () => {
    setFilterToggle((prev) => !prev)
  }

  const filteredData = interns.filter((intern) => {
    if (byCategory) {
      if (byCategory === "All") {
        return intern
      } else {
        return intern.position.includes(byCategory)
      }
    } else {
      return intern
    }
  })

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-backgroundColor text-primaryColor">
      {/* TEXT SECTION */}
      <div className="w-80 max-w-7xl md:flex md:w-screen md:items-center md:justify-between md:px-16 lg:w-[90%] xl:w-[80%] xl:px-0">
        <div>
          <p>Lorem Lorem</p>
          <div className="mb-3 h-[3px] w-[30px] bg-white"></div>
          <h1 className="text-4xl font-medium md:text-5xl">LOREM IPSUM</h1>
        </div>
        <div>
          <p className="mt-1 max-w-[260px] text-sm xl:max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
        </div>
      </div>

      <div className="mb-5 mt-7 flex w-80 max-w-7xl flex-col items-center justify-center gap-1 rounded-3xl bg-white bg-opacity-5 p-5 md:w-[85%] lg:w-[90%] xl:w-[80%]">
        <h3 className="text-xl uppercase text-secondaryColor">Meet our</h3>
        <h2 className="text-4xl font-semibold uppercase">Co Devs</h2>
        <p className="text-sm text-secondaryColor">Lorem Ipsum is simply dummy text</p>

        {/* FILTER FOR MOBILE SCREEN */}
        <div onClick={handelFilterToggle} className="relative flex self-end gap-4 mt-2 cursor-pointer lg:hidden">
          <p className="text-xs text-primaryColor">Filter</p>
          <Image src="/filter.svg" alt="filter" width={13} height={13} className="w-auto h-auto" />

          {filterToggle && (
            <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-[#0E0E0E] p-3 text-xs">
              <div className="flex justify-end w-full">
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

        {/* POSITIONS FOR DESKTOP SCREEN */}
        <div className="hidden lg:mr-8 lg:mt-4 lg:flex lg:items-center lg:gap-4 lg:self-end">
          {positions.map((p) => (
            <div key={p.position} onClick={() => setByCategory(p.position)}>
              {p.position === "Full Stack Developer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5 text-xs text-lightPinkColor">FS</p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
              {p.position === "UI/UX Designer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5  text-xs text-magentaColor">UI/UX</p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
              {p.position === "Backend Developer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5  text-xs text-tealColor">BE</p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
              {p.position === "Frontend Developer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5  text-xs text-darkBlueColor">FE</p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
            </div>
          ))}

          {/* FILTER FOR DESKTOP SCREEN */}
          <div
            title="Filter"
            onClick={handelFilterToggle}
            className="hidden lg:relative lg:flex lg:cursor-pointer lg:gap-4"
          >
            <p className="text-sm text-primaryColor">Filter</p>
            <Image src="/filter.svg" alt="filter" width={20} height={20} className="w-auto h-auto" />

            {filterToggle && (
              <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-[#0E0E0E] p-3 text-xs">
                <div className="flex justify-end w-full">
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

        {/* TEAM SECTION */}
        <div className="grid grid-cols-2 mt-20 gap-x-10 gap-y-24 md:mt-24 md:grid-cols-4 lg:mt-24 lg:grid-cols-5 lg:gap-x-14 lg:gap-y-24">
          {/* DEV CARD */}
          {filteredData.map((intern) => (
            <div key={intern.id} className="flex flex-col items-center justify-center ">
              <div className="flex h-36 w-36 flex-col items-center justify-end gap-1 rounded-3xl bg-[#181818] bg-opacity-20 pb-3">
                <div className="relative flex flex-col items-center">
                  <Image
                    src={`${intern.imageUrl}`}
                    alt={intern.name + " photo"}
                    width={100}
                    height={100}
                    priority
                    className="absolute z-10 h-auto bottom-9"
                  />
                  <div className={`absolute bottom-9 h-16 w-16 ${intern.backgroundColor}`}></div>

                  <div className="relative flex flex-col items-center w-40 text-center">
                    <Image src={"/Wave.svg"} alt="wave" width={95} height={20} className="z-20 h-auto border-none" />
                    <h1 className="absolute bottom-0 z-30 w-full text-base font-bold text-darkBlueColor">
                      {intern.name}
                    </h1>
                  </div>
                </div>
                <p className="text-xs text-secondaryColor">Full Stack Development</p>
                {/* CARD BADGE */}
                <div className="flex items-center justify-center gap-2">
                  {intern.position.map((pos: any, i) => (
                    <div key={i}>
                      {pos === "Full Stack Developer" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-lightPinkColor">
                          FS
                        </p>
                      ) : null}
                      {pos === "UI/UX Designer" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-magentaColor">
                          UI/UX
                        </p>
                      ) : null}
                      {pos === "Backend Developer" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-tealColor">
                          BE
                        </p>
                      ) : null}
                      {pos === "Frontend Developer" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-darkBlueColor">
                          FE
                        </p>
                      ) : null}
                      {pos === "Video Editor" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-greenColor">
                          VE
                        </p>
                      ) : null}
                      {pos === "Virtual Assistant" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-redColor">
                          VA
                        </p>
                      ) : null}
                      {pos === "Shopify Developer" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-yellowColor">
                          SD
                        </p>
                      ) : null}
                      {pos === "Wordpress Developer" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-blueColor">
                          WD
                        </p>
                      ) : null}
                      {pos === "Human Resource" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-white">
                          HR
                        </p>
                      ) : null}
                      {pos === "Project Manager" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-skyBlueColor">
                          PrM
                        </p>
                      ) : null}
                      {pos === "Social Media Manager" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-orangeColor">
                          SMM
                        </p>
                      ) : null}
                      {pos === "Fb Ads Specialist" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-secondaryColor">
                          Fb Ads
                        </p>
                      ) : null}
                      {pos === "Research Auditor" ? (
                        <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-white">
                          RA
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
                <Link
                  className="flex items-center justify-center gap-3 mt-1 hover:cursor-pointer"
                  href={`/codevs/${intern.name}`}
                >
                  <p className="text-xs fw-semibold text-darkBlueColor">Read Bio</p>
                  <Image src="/back.svg" alt="see website" priority width={15} height={15} className="w-auto" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex w-80 items-center justify-center text-center text-xs md:w-screen md:px-20 lg:w-[90%] lg:text-sm xl:max-w-lg xl:px-0">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
      </div>
    </div>
  )
}

export default Codevs
