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
          setIsLoading(false);
        }, 2000);
      }
    }

    fetchCoDevsData()
  }, [])


  return (
    <motion.div
      id="codevs"
      className="flex flex-col px-3.5 w-full items-center justify-center mx-auto my-32 max-w-7xl bg-backgroundColor text-primaryColor"
    >
      {/* TEXT SECTION */}
      <div className="justify-between w-full mx-auto lg:flex md:items-center xl:px-0">
        <motion.div variants={fadeInOutLeftToRight} initial="hidden" whileInView="visible">
          <p>Our CoDevs</p>
          <div className="mb-3 lg:h-[3px] w-full lg:w-[30px] bg-white"></div>
          <h1 className="text-4xl font-medium md:text-5xl">Who Are We?</h1>
        </motion.div>
        <motion.div variants={fadeInOutRightToLeft} initial="hidden" whileInView="visible">
          <p className="w-full mt-1 text-sm md:w-full lg:max-w-xl">
            Welcome to the heart of our operation - our CoDevs. Here, you'll find a team of passionate, skilled, and
            innovative developers who are not just proficient in code but are architects of the digital future. Our team
            comprises individuals from diverse backgrounds, each bringing a unique perspective to the table, united by a
            common love for technology and a commitment to excellence.
          </p>
        </motion.div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="CodevsSpinner"></div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full py-10 mb-5 bg-white rounded mt-7 bg-opacity-5">
          <motion.div variants={fadeInOutUpToDown} initial="hidden" whileInView="visible">
            <h3 className="text-xl text-center uppercase text-secondaryColor">Meet our</h3>
            <h2 className="text-5xl font-semibold text-center uppercase">Co Devs</h2>
            <p className="text-sm text-center text-secondaryColor">The Pioneers Behind the Code</p>
          </motion.div>
          <FilterCodev codevs={data} />
        </div>
      )}

      <motion.div
        variants={fadeInOutDownToUp}
        initial="hidden"
        whileInView="visible"
        className="md:mt-5 flex w-full items-center justify-center md:text-center text-sm md:w-screen md:px-20 lg:w-[90%] lg:text-sm xl:max-w-5xl xl:px-0"
      >
        Our CoDevs are not just about individual brilliance; they are a testament to the power of collaboration. Working
        in synergy, they push the boundaries of what's possible, fostering an environment where innovation thrives.
        They're not just developers; they're pioneers who are continuously exploring new frontiers in technology.
      </motion.div>
    </motion.div>
  )
}
