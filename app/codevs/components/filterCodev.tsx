"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { internList, positions, positionsSm } from "../../(protectedroutes)/interns/DummyData"
import Link from "next/link"
import Wavey from "app/codevs/Assets/Wave.png"
import { motion } from "framer-motion"
import { box, item, fadeInOutUpToDown } from "../../../Components/FramerAnimation/Framer"

export default function FilterCodev({ codevs }: any) {
  const [filterToggle, setFilterToggle] = useState(false)
  const [byCategory, setByCategory] = useState("")
  const [filteredData, setFilteredData] = useState([])

  // FILTER IN CODEVS SECTION
  useEffect(() => {
    const data = codevs.filter((codev: any) => {
      if (byCategory) {
        if (byCategory === "All") {
          return codev
        } else {
          return codev.position.includes(byCategory)
        }
      } else {
        return codev
      }
    })
    setFilteredData(data)
  }, [codevs, byCategory])

  const handelFilterToggle = () => {
    setFilterToggle((prev) => !prev)
  }

  return (
    <>
      <div onClick={handelFilterToggle} className="relative mt-2 flex cursor-pointer gap-4 self-end px-3.5 lg:hidden ">
        <p className="text-base text-primaryColor">Filter</p>
        <Image src="/filter.svg" alt="filter" width={13} height={13} className="h-auto w-auto" />
        {/* FILTER CARD FOR MOBILE AND TABLET SCREEN */}
        {filterToggle && (
          <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-[#0E0E0E] p-3 text-sm">
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="hidden lg:mr-8 lg:mt-4 lg:flex lg:items-center lg:gap-4 lg:self-end"
      >
        {positions.map((p) => (
          <motion.div
            variants={fadeInOutUpToDown}
            initial="hidden"
            whileInView="visible"
            key={p.position}
            onClick={() => setByCategory(p.position)}
          >
            {p.position === "Full Stack Developer" ? (
              <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5 text-sm text-lightPinkColor">FS</p>
                <p className="text-sm">{p.position}</p>
              </div>
            ) : null}
            {p.position === "UI/UX Designer" ? (
              <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5  text-sm text-magentaColor">UI/UX</p>
                <p className="text-sm">{p.position}</p>
              </div>
            ) : null}
            {p.position === "Backend Developer" ? (
              <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5  text-sm text-tealColor">BE</p>
                <p className="text-sm">{p.position}</p>
              </div>
            ) : null}
            {p.position === "Frontend Developer" ? (
              <div title={p.position} className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <p className="rounded-lg bg-[#363636] bg-opacity-20 px-1 py-0.5  text-sm text-darkBlueColor">FE</p>
                <p className="text-sm">{p.position}</p>
              </div>
            ) : null}
          </motion.div>
        ))}

        {/* FILTER FOR DESKTOP SCREEN */}
        <div
          title="Filter"
          onClick={handelFilterToggle}
          className="hidden lg:relative lg:flex lg:cursor-pointer lg:gap-4"
        >
          <p className="text-sm text-primaryColor">Filter</p>
          <Image src="/filter.svg" alt="filter" width={20} height={20} className="h-auto w-auto" />

          {/* FILTER CARD FOR DESKTOP SCREEN */}
          {filterToggle && (
            <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-[#0E0E0E] p-3 text-xs">
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
      </motion.div>

      {/* TEAM SECTION */}
      <motion.div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-24 py-10 md:mt-24 md:grid-cols-4 lg:mt-24 lg:grid-cols-5 lg:gap-x-14 lg:gap-y-24">
        {/* DEV CARD */}
        {filteredData.map((user: any) => (
          <motion.div variants={item} key={user.id} className="flex flex-col items-center justify-center gap-2 ">
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              className="flex h-40 w-40 flex-col items-center justify-end gap-1  rounded-xl bg-[#181818] bg-opacity-20 py-10"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex flex-col items-center"
              >
                <Link
                  className="mt-1 flex items-center justify-center gap-3 hover:cursor-pointer"
                  href={`/codevs/${user.id}`}
                >
                  <Image
                    src={user.image_icon ? user.image_icon : "/projectsCompletedAssets/image2.png"}
                    alt="Dummy Photo"
                    width={100}
                    height={100}
                    priority
                    className="absolute bottom-9 z-10 h-auto duration-300 hover:-translate-y-5"
                  />
                </Link>
                <div className="relative flex w-40 flex-col items-center text-center">
                  <Image src={Wavey} alt="wave" width={105} height={20} className="z-20 h-auto border-none" />
                  <h1 className="absolute bottom-0 z-30 w-full text-base font-bold text-darkBlueColor">{user.name}</h1>
                </div>
              </motion.div>
              <p className="text-xs text-secondaryColor">Full Stack Development</p>
              {/* CARD BADGE */}
              <div className="flex items-center justify-center gap-2">
                {user.position.map((pos: any, i: any) => (
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
                    {pos === "Backend Developer" || pos === "Back End Developer" ? (
                      <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-tealColor">
                        BE
                      </p>
                    ) : null}
                    {pos === "Frontend Developer" || pos === "Front End Developer" ? (
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
                    {pos === "Research Auditor" ? (
                      <p className="rounded-lg bg-[#363636] bg-opacity-20 px-2 py-1 text-xs font-semibold text-white">
                        RA
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
              <Link
                className="mt-1 flex items-center justify-center gap-3 hover:cursor-pointer"
                href={`/codevs/${user.id}`}
              >
                <p className="fw-semibold text-sm text-darkBlueColor">Read Bio</p>
                <Image src="/back.svg" alt="see website" priority width={15} height={15} className="w-auto" />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
