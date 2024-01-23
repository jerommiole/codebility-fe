"use client"

import FilterCodev from "./components/filterCodev"

import { API } from "../../lib/constants"

import { motion } from "framer-motion"
import {
  fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer"
import { useEffect, useState } from "react"

type CoDevData = []
export default function Page() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCoDevsData = async () => {
      try {
        const res = await fetch(API.CODEVS, { headers: { Accepts: "application/json" } })
        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }
        //TODO replace any with CoDevData type above
        const result = (await res.json()) as any
        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoDevsData()
  }, [])

  if (isLoading) {
    return <div className="bg-black">Loading....</div>
  }
  return (
    <motion.div
      id="codevs"
      className="flex w-full flex-col items-center justify-center  bg-backgroundColor px-3.5 py-10 text-primaryColor"
    >
      {/* TEXT SECTION */}
      <div className="mx-auto w-full  max-w-7xl md:flex md:w-screen md:items-center md:justify-between md:px-16 lg:w-[90%] xl:w-[80%] xl:px-0">
        <motion.div variants={fadeInOutLeftToRight} initial="hidden" whileInView="visible">
          <p>Our CoDevs</p>
          <div className="mb-3 h-[3px] w-[30px] bg-white"></div>
          <h1 className="text-4xl font-medium md:text-5xl">Who Are We?</h1>
        </motion.div>
        <motion.div variants={fadeInOutRightToLeft} initial="hidden" whileInView="visible">
          <p className="mt-1 w-full   text-sm md:max-w-[400px] xl:max-w-md">
            Welcome to the heart of our operation - our CoDevs. Here, you'll find a team of passionate, skilled, and
            innovative developers who are not just proficient in code but are architects of the digital future. Our team
            comprises individuals from diverse backgrounds, each bringing a unique perspective to the table, united by a
            common love for technology and a commitment to excellence.
          </p>
        </motion.div>
      </div>

      <div className="mb-5 mt-7 flex w-full  max-w-7xl flex-col items-center justify-center gap-1 rounded bg-white bg-opacity-5 p-5 md:w-[85%] lg:w-[90%] xl:w-[80%]">
        <motion.div variants={fadeInOutUpToDown} initial="hidden" whileInView="visible">
          <h3 className="text-center text-xl uppercase text-secondaryColor">Meet our</h3>
          <h2 className="text-center text-5xl font-semibold uppercase">Co Devs</h2>
          <p className="text-center text-sm text-secondaryColor">The Pioneers Behind the Code</p>
        </motion.div>
        <FilterCodev codevs={data} />
      </div>

      <motion.div
        variants={fadeInOutDownToUp}
        initial="hidden"
        whileInView="visible"
        className="mt-5 flex w-full items-center justify-center text-center text-base md:w-screen md:px-20 lg:w-[90%] lg:text-sm xl:max-w-lg xl:px-0"
      >
        Our Co Devs are not just about individual brilliance; they are a testament to the power of collaboration.
        Working in synergy, they push the boundaries of what's possible, fostering an environment where innovation
        thrives. They're not just developers; they're pioneers who are continuously exploring new frontiers in
        technology.
      </motion.div>
    </motion.div>
  )
}
