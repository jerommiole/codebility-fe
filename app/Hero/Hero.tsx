"use client"
import React from "react"
import { Button } from "Components/ui/button"
import Link from "next/link"
import Image from "next/image"
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

const Hero = () => {
  return (
    <div
      className=" relative min-h-screen w-screen bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('/HEROBG.png')" }}
    >
      <Navbar />

      <div className=" flex h-5/6 flex-col items-center justify-center gap-6 md:h-full ">
        <p className="text-center text-white">Unlocking Potential: Code is a Universal Language</p>
        <div className="block md:hidden ">
          <Image src="/CODEBILITY.svg" alt="CODEBILITY" width={485} height={133} />
        </div>
        <div className="hidden md:block">
          <Image src="/CODEBILITY.svg" alt="CODEBILITY" width={906} height={133} />
        </div>
        <p className="text-center text-white">“Everyone has the ability to code”</p>
        <Button className=" border-2 border-blue-600  bg-transparent text-white">Get Started</Button>
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
