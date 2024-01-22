'use client'
import FilterCodev from "./components/filterCodev"

import { API } from "../../lib/constants"


import { motion } from "framer-motion"
import {
  box, item, fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
} from "../../Components/FramerAnimation/Framer";
async function getCodevs() {
  const headers = { Accept: "application/json" }
  const res = await fetch(API.CODEVS, { headers })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Codevs() {
  const data = await getCodevs()
  return (
    <motion.div
      className="flex flex-col px-3.5 items-center justify-center w-full py-10 bg-backgroundColor text-primaryColor">
      {/* TEXT SECTION */}
      <div className="w-full mx-auto  max-w-7xl md:flex md:w-screen md:items-center md:justify-between md:px-16 lg:w-[90%] xl:w-[80%] xl:px-0">
        <motion.div
          variants={fadeInOutLeftToRight}
          initial="hidden"
          animate="visible"
        >
          <p>Lorem Lorem</p>
          <div className="mb-3 h-[3px] w-[30px] bg-white"></div>
          <h1 className="text-4xl font-medium md:text-5xl">LOREM IPSUM</h1>
        </motion.div>
        <motion.div
          variants={fadeInOutRightToLeft}
          initial="hidden"
          animate="visible"
        >
          <p className="mt-1 w-full md:max-w-[260px] text-sm xl:max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
        </motion.div>
      </div>

      <div className="mb-5 mt-7 flex w-full  max-w-7xl flex-col items-center justify-center gap-1 rounded-3xl bg-white bg-opacity-5 p-5 md:w-[85%] lg:w-[90%] xl:w-[80%]">
        <motion.div
          variants={fadeInOutUpToDown}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl text-center uppercase text-secondaryColor">Meet our</h3>
          <h2 className="text-5xl font-semibold text-center uppercase">Co Devs</h2>
          <p className="text-sm text-center text-secondaryColor">Lorem Ipsum is simply dummy text</p>
        </motion.div>
        <FilterCodev codevs={data} />
      </div>

      <motion.div
        variants={fadeInOutDownToUp}
        initial="hidden"
        animate="visible"
        className="mt-5 flex w-full items-center justify-center text-center text-base md:w-screen md:px-20 lg:w-[90%] lg:text-sm xl:max-w-lg xl:px-0">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
      </motion.div>
    </motion.div>
  )
}
