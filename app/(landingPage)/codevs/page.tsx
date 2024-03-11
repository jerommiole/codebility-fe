"use client"

import H2 from "@/Components/shared/home/H2"
import Heading3 from "@/Components/shared/home/Heading3"
import IntroText from "@/Components/shared/home/IntroText"
import SectionWrapper from "@/Components/shared/home/SectionWrapper"
import { motion } from "framer-motion"
import { Suspense } from "react"
import { fadeInOutDownToUp } from "@/Components/FramerAnimation/Framer"
import CodevsCard from "./CodevsCard"
import { UsersSkeleton } from "@/Components/ui/skeleton/UsersSkeleton"

const Codevs = () => {
  return (
    <SectionWrapper id="codevs" className="w-full bg-black-500">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInOutDownToUp} initial="hidden" whileInView="visible" className="mx-auto">
            <H2 className="text-primaryColor">Codevs</H2>
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
        <Suspense fallback={<UsersSkeleton />}>
          <CodevsCard />
        </Suspense>
      </div>
    </SectionWrapper>
  )
}

export default Codevs
