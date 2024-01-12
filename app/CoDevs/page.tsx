"use client"

import Image from "next/image"
import { interns, positionsSm, positions } from "../Interns/DummyData"
import { useState } from "react"

const CoDevs = () => {
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
    <div className="flex w-full py-10 flex-col items-center justify-center bg-backgroundColor text-primaryColor">
      {/* TEXT SECTION */}
      <div className="w-80 max-w-7xl md:flex md:w-screen md:items-center md:justify-between md:px-16 lg:w-[90%] xl:w-[70%] xl:px-0">
        <div>
          <p>Lorem Lorem</p>
          <div className="mb-3 h-[3px] w-[30px] bg-black dark:bg-white"></div>
          <h1 className="text-4xl font-medium md:text-5xl">LOREM IPSUM</h1>
        </div>
        <div>
          <p className="mt-1 max-w-[260px] text-sm xl:max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
        </div>
      </div>

      <div className="mb-5 mt-7 flex w-80 max-w-7xl flex-col items-center justify-center gap-2 bg-white bg-opacity-5 p-5 text-center md:w-[85%] lg:w-[90%] xl:w-[70%]">
        <h3 className="text-xl uppercase text-secondaryColor">Meet our</h3>
        <h2 className="fw-bold text-3xl uppercase">Co Devs</h2>
        <p className="text-sm text-secondaryColor">Lorem Ipsum is simply dummy text</p>

        {/* FILTER FOR MOBILE SCREEN */}
        <div onClick={handelFilterToggle} className="relative mt-2 flex cursor-pointer gap-4 self-end lg:hidden">
          <p className="text-xs dark:text-primaryColor">Filter</p>
          <Image src="/Filter.svg" alt="filter" width={13} height={13} className="h-auto w-auto" />

          {filterToggle && (
            <div className="absolute right-16 top-6 z-40 flex h-96 overflow-y-auto w-32 flex-col gap-1 rounded-xl bg-slate-50 p-3 text-xs dark:bg-[#0E0E0E] md:w-36">
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

        {/* POSITIONS FOR DESKTOP SCREEN */}
        <div className="hidden lg:mr-8 lg:mt-8 lg:flex lg:items-center lg:gap-4 lg:self-end">
          {positions.map((p) => (
            <div key={p.position} onClick={() => setByCategory(p.position)}>
              {p.position === "Full Stack Developer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 py-0.5 px-1 text-xs text-lightPinkColor dark:bg-[#363636]">
                    FS
                  </p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
              {p.position === "UI/UX Designer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 py-0.5 px-1 text-xs  text-magentaColor dark:bg-[#363636]">
                    UI/UX
                  </p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
              {p.position === "Backend Developer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 py-0.5 px-1 text-xs  text-tealColor dark:bg-[#363636]">
                    BE
                  </p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
              {p.position === "Frontend Developer" ? (
                <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 py-0.5 px-1 text-xs  text-darkBlueColor dark:bg-[#363636]">
                    FE
                  </p>
                  <p className="text-xs">{p.position}</p>
                </div>
              ) : null}
            </div>
          ))}

          {/* FILTER FOR DESKTOP SCREEN */}
          <div title="Filter" onClick={handelFilterToggle} className="hidden lg:relative lg:flex lg:cursor-pointer lg:gap-4">
            <p className="text-sm dark:text-primaryColor">Filter</p>
            <Image src="/Filter.svg" alt="filter" width={20} height={20} className="h-auto w-auto" />

            {filterToggle && (
              <div className="scrollCustom absolute right-16 top-6 z-40 flex h-96 overflow-y-auto w-28 flex-col gap-1 rounded-xl bg-slate-50 p-3 text-xs dark:bg-[#0E0E0E] md:w-40">
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

        {/* TEAM SECTION */}
        <div className="mt-16 grid grid-cols-2 gap-x-7 gap-y-20 md:mt-20 md:grid-cols-4 lg:grid-cols-5">
          {/* DEV CARD */}
          {filteredData.map((intern) => (
            <div key={intern.id} className=" flex flex-col items-center justify-center">
              <div className="flex h-36 w-36 flex-col items-center justify-end gap-1 rounded-3xl bg-slate-400  bg-opacity-20 pb-3 dark:bg-[#181818]">
                <div className="relative flex flex-col items-center">
                  <Image
                    src={`${intern.imageUrl}`}
                    alt={intern.name + " photo"}
                    width={90}
                    height={90}
                    priority
                    className="absolute bottom-9 z-10 h-auto"
                  />
                  <div className={`absolute bottom-9 h-16 w-16 ${intern.backgroundColor}`}></div>

                  <div className="relative flex w-40 flex-col items-center text-center">
                    <Image
                      src={"/Wave.svg"}
                      alt="wave"
                      width={95}
                      height={20}
                      className="z-20 h-auto border-none invert dark:invert-0 "
                    />
                    <h1 className="absolute bottom-0 z-30 w-full text-base font-bold text-darkBlueColor">
                      {intern.name}
                    </h1>
                  </div>
                </div>
                <p className="text-xs dark:text-secondaryColor">Full Stack Development</p>
                {/* CARD BADGE */}
                <div className="flex items-center justify-center gap-2">
                  {intern.position.map((pos: any, i) => (
                    <div key={i}>
                      {pos === "Full Stack Developer" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-lightPinkColor dark:bg-[#363636]">
                          FS
                        </p>
                      ) : null}
                      {pos === "UI/UX Designer" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-magentaColor dark:bg-[#363636]">
                          UI/UX
                        </p>
                      ) : null}
                      {pos === "Backend Developer" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-tealColor dark:bg-[#363636]">
                          BE
                        </p>
                      ) : null}
                      {pos === "Frontend Developer" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-darkBlueColor dark:bg-[#363636]">
                          FE
                        </p>
                      ) : null}
                      {pos === "Video Editor" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-greenColor dark:bg-[#363636]">
                          VE
                        </p>
                      ) : null}
                      {pos === "Virtual Assistant" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-redColor dark:bg-[#363636]">
                          VA
                        </p>
                      ) : null}
                      {pos === "Shopify Developer" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-yellowColor dark:bg-[#363636]">
                          SD
                        </p>
                      ) : null}
                      {pos === "Wordpress Developer" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-blueColor dark:bg-[#363636]">
                          WD
                        </p>
                      ) : null}
                      {pos === "Human Resource" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold dark:text-white dark:bg-[#363636]">
                          HR
                        </p>
                      ) : null}
                      {pos === "Project Manager" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-skyBlueColor dark:bg-[#363636]">
                          PrM
                        </p>
                      ) : null}
                      {pos === "Social Media Manager" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-orangeColor dark:bg-[#363636]">
                          SMM
                        </p>
                      ) : null}
                      {pos === "Fb Ads Specialist" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-secondaryColor dark:bg-[#363636]">
                          Fb Ads
                        </p>
                      ) : null}
                      {pos === "Research Auditor" ? (
                        <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold dark:text-white dark:bg-[#363636]">
                          RA
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-1 flex items-center justify-center gap-3 hover:cursor-pointer">
                  <p className="fw-semibold text-xs dark:text-darkBlueColor">Read Bio</p>
                  <Image src="/back.svg" alt="see website" priority width={15} height={15} className="w-auto" />
                </div>
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

export default CoDevs
