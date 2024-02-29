"use client"

import { Button } from "Components/ui/button"
import { motion } from "framer-motion"
import { Inter, Rowdies } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import personBG from "@/public/assets/images/hero-blindfoldedman.png"
import SocialIcons from "@/Components/shared/SocialIcons"

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})
const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
})

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="relative min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat "
    >
      <div className="GradientHero absolute -top-80 z-10  h-[400px] w-screen blur-[200px] md:blur-[500px]"></div>
      <div>
        <Image src={personBG} alt="person" className="absolute bottom-0  right-56 h-[80%] w-auto opacity-50 " />
      </div>
      <div className="heroBubble">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full -translate-y-24 flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className={`text-center font-extralight text-white ${inter.className}`}>
            Unlocking Potential: Code is a Universal Language
          </p>
          <h1 className={` text-center text-5xl text-gray-100 md:text-[6rem] ${rowdies.className}`}>CODEBILITY</h1>

          <p className={`text-center font-extralight text-white ${inter.className}`}>
            “Everyone has the ability to code”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: -40, opacity: 1 }}
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          className="mt-14 md:mt-16"
        >
          <Link href="#codevs">
            <Button
              className=" md:w-22 h-12 w-44 items-center justify-center rounded-full
             bg-gradient-to-r from-[#02FFE2] via-[#6A78F2] to-[#C108FE] p-0.5 hover:bg-gradient-to-br
             "
            >
              <div
                className={` flex h-full w-full items-center justify-center rounded-full bg-[#030303] text-base text-white ${inter.className}`}
              >
                See Our Codevs
              </div>
            </Button>
          </Link>
        </motion.div>

        <SocialIcons />
      </div>
    </motion.div>
  )
}

export default Hero
