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
import { useEffect, useLayoutEffect, useState } from "react"

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
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    }

    fetchCoDevsData()
  }, [])

  return (
    <motion.div
      id="codevs"
      className="mx-auto my-32 flex w-full max-w-7xl flex-col items-center justify-center bg-backgroundColor px-3.5 text-primaryColor"
    >
      {/* TEXT SECTION */}
      <div className="mx-auto w-full justify-between md:items-center lg:flex xl:px-0">
        <motion.div variants={fadeInOutLeftToRight} initial="hidden" whileInView="visible">
          <p>Our CoDevs</p>
          <div className="mb-3 w-full bg-white lg:h-[3px] lg:w-[30px]"></div>
          <h1 className="text-4xl font-medium md:text-5xl">Who Are We?</h1>
        </motion.div>
        <motion.div variants={fadeInOutRightToLeft} initial="hidden" whileInView="visible">
          <p className="mt-1 w-full text-sm md:w-full lg:max-w-xl">
            Welcome to the heart of our operation - our CoDevs. Here, you'll find a team of passionate, skilled, and
            innovative developers who are not just proficient in code but are architects of the digital future. Our team
            comprises individuals from diverse backgrounds, each bringing a unique perspective to the table, united by a
            common love for technology and a commitment to excellence.
          </p>
        </motion.div>
      </div>

      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="CodevsSpinner"></div>
        </div>
      ) : (
        <div className="mb-5 mt-7 flex w-full flex-col items-center justify-center rounded bg-white bg-opacity-5 py-10">
          <motion.div variants={fadeInOutUpToDown} initial="hidden" whileInView="visible">
            <h3 className="text-center text-xl uppercase text-secondaryColor">Meet our</h3>
            <h2 className="text-center text-5xl font-semibold uppercase">Co Devs</h2>
            <p className="text-center text-sm text-secondaryColor">The Pioneers Behind the Code</p>
          </motion.div>
          <FilterCodev codevs={data} />
        </div>
      )}

      <motion.div
        variants={fadeInOutDownToUp}
        initial="hidden"
        whileInView="visible"
        className="flex w-full items-center justify-center text-sm md:mt-5 md:w-screen md:px-20 md:text-center lg:w-[90%] lg:text-sm xl:max-w-5xl xl:px-0"
      >
        Our CoDevs are not just about individual brilliance; they are a testament to the power of collaboration. Working
        in synergy, they push the boundaries of what's possible, fostering an environment where innovation thrives.
        They're not just developers; they're pioneers who are continuously exploring new frontiers in technology.
      </motion.div>
    </motion.div>
  )
}
