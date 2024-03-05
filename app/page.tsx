"use client"

import { useEffect, useState } from "react"
import Loader from "@/Components/Loader"
import About from "./(landingPage)/About"
import Footer from "./(landingPage)/Footer"
import Hero from "./(landingPage)/Hero"
import Navbar from "./(landingPage)/Navbar"
import Services from "./(landingPage)/Services"
import MissionVision from "./(landingPage)/MissionVision"
import WhyChoose from "./(landingPage)/WhyChoose"
import Codevs from "./(landingPage)/codevs/page"

export default function Web() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        setIsLoading(false)
      }, 1000)
    }

    fetchData()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen flex-col items-center justify-center gap-10 bg-black-400">
          <Loader />
          <div className="flex items-center justify-center gap-5">
            <div className="text-primaryColor">Please Wait</div>
            <div className="dots translate-y-1"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="relative flex h-screen w-full flex-col overflow-x-hidden bg-black-400">
            <Navbar />
            <Hero />
            <About />
            <Codevs />
            <Services />
            <MissionVision />
            <WhyChoose />
            <Footer />
          </div>
        </>
      )}
    </>
  )
}
