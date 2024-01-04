import Hero from "./CoDevs/Hero/Hero"
import Footer from "../Components/Footer"
import WhyJoinUs from "./WhyJoinUs/page"
import CoDevs from "./CoDevs/page"
import Services from "./Services/Services"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full scroll-smooth">
        <Hero />
      </div>
      <div className="flex h-screen w-full flex-col ">
        {/* LANDING PAGE */}
        <Services />
        <WhyJoinUs />
        <CoDevs />
        <Footer />
      </div>
    </>
  )
}
