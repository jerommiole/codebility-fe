"use client"
import React from "react"
import { Button } from "Components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Inter, Rowdies, Iceland } from "next/font/google"
import { motion } from "framer-motion"
import Navbar from "./Navbar"

const socials = [
  {
    socialUrl: "#facebook",
    alt: "facebook",
    icon: "ri_facebook-fill.svg",
  },
  {
    socialUrl: "#twitter",
    alt: "twitter",
    icon: "mdi_twitter.svg",
  },
  {
    socialUrl: "https://github.com/Zeff01/codebility-fe/tree/main",
    alt: "github",
    icon: "mdi_github.svg",
  },
  {
    socialUrl: "#linkedin",
    alt: "linkedin",
    icon: "mdi_linkedin.svg",
  },
  {
    socialUrl: "#slack",
    alt: "slack",
    icon: "ri_slack-fill.svg",
  },
]
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
})
const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
})

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
})

const SocialContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}
const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="relative min-h-screen w-full flex-col items-center justify-center overflow-hidden  bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/HEROBG.png') " }}
    >
      <Navbar />
      <div className="flex h-5/6 flex-col items-center justify-center md:h-full">
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
          <Button
            className=" md:w-22 h-12 w-44 items-center justify-center rounded-full
             bg-gradient-to-r from-[#02FFE2] via-[#6A78F2] to-[#C108FE] p-0.5 hover:bg-gradient-to-br
             "
          >
            <div
              className={` flex h-full w-full items-center justify-center rounded-full bg-[#030303] text-base text-white ${inter.className}`}
            >
              Get Starded
            </div>
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-5 pt-16 md:mt-16"
          variants={SocialContainer}
          initial="hidden"
          whileInView="visible"
        >
          {socials.map((social, i) => (
            <Link key={`socials-${i}`} href={social.socialUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.5, rotate: 360 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
                variants={item}
              >
                <Image src={social.icon} alt={social.alt} width={30} height={30} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
