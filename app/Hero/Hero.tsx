"use client"
import React from "react"
import { Button } from "Components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"
import { Inter, Rowdies, Iceland } from "next/font/google"

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
  weight: "400",
  subsets: ["latin"],
})

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
})

const Hero = () => {
  return (
    <div
      className=" relative min-h-screen w-screen bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('/HEROBG.png')" }}
    >
      <Navbar />

      <div className=" flex h-5/6 flex-col items-center justify-center  md:h-full ">
        <p className={`text-center font-extralight text-gray-400 ${inter.className}`}>
          Unlocking Potential: Code is a Universal Language
        </p>
        <h1 className={` text-8xl text-gray-100 md:text-[8rem] ${iceland.className}`}>CODEBILITY</h1>

        <p className={`text-center font-extralight text-white ${inter.className}`}>
          “Everyone has the ability to code”
        </p>
        <div className="mt-14 md:mt-16">
          <Button
            className="h-12 w-44 items-center justify-center rounded-sm bg-gradient-to-r from-green-400 to-purple-700 p-1 md:h-14 md:w-52
             "
          >
            <div
              className={` flex h-full w-full items-center justify-center bg-zinc-950 text-base text-white ${inter.className}`}
            >
              Get Starded
            </div>
          </Button>

          {/* <Button className={` h-14 w-44 items-center justify-center rounded-sm bg-gradient-to-r from-green-400 to-purple-700  text-white ${inter.className}`}>
            Get Started
          </Button> */}
        </div>
        <div className="flex gap-5 pt-16 md:mt-16">
          {socials.map((social) => (
            <Link href={social.socialUrl} target="_blank" rel="noopener noreferrer">
              <Image src={social.icon} alt={social.alt} width={30} height={30} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
