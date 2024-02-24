"use client"

import Heading2 from "Components/landingPage/Heading2"
import Heading3 from "Components/landingPage/Heading3"
import IntroText from "Components/landingPage/IntroText"
import SectionWrapper from "Components/landingPage/SectionWrapper"
import axios from "axios"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeInOutDownToUp } from "../../../Components/FramerAnimation/Framer"
import CodevsCard from "./components/CodevsCard"

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
    <div className="bg-[#0B0B0C]">
      <SectionWrapper>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="mx-auto">
              <Heading2>Who Are We?</Heading2>
            </motion.div>
            <motion.div
              variants={fadeInOutDownToUp}
              initial="hidden"
              whileInView="visible"
              className="mx-auto max-w-[650px] text-center text-secondaryColor"
            >
              <Heading3>Meet Our Co Devs — The Pioneers Behind the Code</Heading3>
              <IntroText>
                Welcome to our core team - the CoDevs. Skilled, passionate, and innovative developers shaping the
                digital future. Diverse backgrounds, unique perspectives, united by a love for technology and commitment
                to excellence.
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
    </div>
  )
}

export default Codevs
