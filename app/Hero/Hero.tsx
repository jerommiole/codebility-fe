"use client"
import React from "react"
import { Button } from "@/components/ui/button"
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
    socialUrl: "#github",
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
      className=" h-screen w-screen overflow-hidden bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('/HEROBG.png')" }}
    >
      <Navbar />

      <div className=" flex h-5/6 flex-col items-center justify-center gap-6 md:h-full ">
        <p className="text-center text-white">Unlocking Potential: Code is a Universal Language</p>
        <Image src="/CODEBILITY.svg" alt="CODEBILITY" width={906} height={133} />
        <p className="text-center text-white">“Everyone has the ability to code”</p>
        <Button className=" border-2 border-blue-600  bg-transparent text-white">Get Started</Button>
        <div className="flex gap-5 pt-16 md:mt-16">
          {socials.map((social) => (
            <Link href={social.socialUrl}>
              <Image src={social.icon} alt={social.alt} width={30} height={30} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
