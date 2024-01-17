import Footer from "../Components/Footer"
import WhyJoinUs from "./WhyJoinUs/page"

import CoDevs from "./codevs/page"
import Services from "./Services/Services"
import Hero from "./Hero/Hero"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full flex-col ">
        <Hero />
        {/* LANDING PAGE */}
        {/* <WhyJoinUs /> */}
        {/* <Footer /> */}
        <Services />
        <WhyJoinUs />
        <CoDevs />
        <Footer />
      </div>
    </>
  )
}
