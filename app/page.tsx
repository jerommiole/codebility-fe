import Footer from "../Components/Footer"
import WhyJoinUs from "./WhyJoinUs/page"

import Services from "./Services/Services"
import Hero from "./Hero/Hero"
import Codevs from "./devs/page"

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
        <Codevs />
        <Footer />
      </div>
    </>
  )
}
