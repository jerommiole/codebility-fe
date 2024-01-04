"use client"
import React from "react"
import MobileNav from "./MobileNav"
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
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>

      <div className="flex h-screen flex-col items-center justify-center gap-6">
        <p className="text-center text-white">Unlocking Potential: Code is a Universal Language</p>
        <Image src="/CODEBILITY.svg" alt="CODEBILITY" width={906} height={133} />
        <p className="text-center text-white">“Everyone has the ability to code”</p>
        <Button className="mt-6 border-2 border-blue-600 text-white">Get Started</Button>
        <div className="mt-32 flex gap-5">
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
