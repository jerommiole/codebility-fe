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
import axios from "axios"

type CoDevData = []
export default function Page() {
  const [data, setData] = useState<any[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCoDevsData = async () => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/users")
        if (!response) {
          throw new Error("Error: Cannot get users")
        }
        setData(response.data.data)
        // console.log(response.data)
        setIsLoading(false)
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

  if (isLoading) {
    return <div className="bg-black">Loading....</div>
  }

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

      {/*      {isLoading ? (
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
      )}*/}

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
        className="flex w-full items-center justify-center text-sm md:mt-5 md:w-screen md:px-20 md:text-center lg:w-[90%] lg:text-sm xl:max-w-5xl xl:px-0"
      >
        Our CoDevs are not just about individual brilliance; they are a testament to the power of collaboration. Working
        in synergy, they push the boundaries of what's possible, fostering an environment where innovation thrives.
        They're not just developers; they're pioneers who are continuously exploring new frontiers in technology.
      </motion.div>
    </motion.div>
  )
}
