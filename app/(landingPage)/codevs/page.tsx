"use client"

import H2 from "@/Components/shared/home/H2"
import Heading3 from "@/Components/shared/home/Heading3"
import IntroText from "@/Components/shared/home/IntroText"
import SectionWrapper from "@/Components/shared/home/SectionWrapper"
import axios from "axios"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeInOutDownToUp } from "@/Components/FramerAnimation/Framer"
import CodevsCard from "./CodevsCard"

const Codevs = () => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCoDevsData = async () => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/users")
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setData(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }
    fetchCoDevsData()
  }, [])

  console.log(data)

  return (
    <SectionWrapper id="codevs" className="w-full bg-black-500">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="mx-auto">
            <H2 className="text-primaryColor">Who Are We?</H2>
          </motion.div>
          <motion.div
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            className="mx-auto max-w-[650px] text-center text-secondaryColor"
          >
            <Heading3>Meet Our Co Devs — The Pioneers Behind the Code</Heading3>
            <IntroText>
              Welcome to our core team - the CoDevs. Skilled, passionate, and innovative developers shaping the digital
              future. Diverse backgrounds, unique perspectives, united by a love for technology and commitment to
              excellence.
            </IntroText>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex h-screen items-center justify-center">
            <div className="CodevsSpinner"></div>
          </div>
        ) : (
          <CodevsCard users={data} />
        )}
      </div>
    </SectionWrapper>
  )
}

export default Codevs
