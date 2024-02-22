"use client"
import { useEffect, useState } from "react"
import Navbar from "./(landingPage)/Navbar"
import Loader from "../Components/loader"
import About from "./(landingPage)/About"
import Footer from "./(landingPage)/Footer"
import Hero from "./(landingPage)/Hero"
import Services from "./(landingPage)/Services"
import WhyChoose from "./(landingPage)/WhyChoose"
import Codevs from "./codevs/page"
import MissionVision from "./(landingPage)/MissionVision"

export default function Web() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        setIsLoading(false)
      }, 2000)
    }

    fetchData()
  }, [])

  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden bg-black">
      {isLoading ? (
        <div className="flex h-screen flex-col items-center justify-center gap-10 ">
          <Loader />
          <div className="flex items-center justify-center gap-5">
            <div className="text-primaryColor">Please Wait</div>
            <div className="dots translate-y-1"></div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Codevs />
          <Services />
          {/* <MissionVision /> */}
          <WhyChoose />
          <Footer />
        </>
      )}
    </div>
  )
}
