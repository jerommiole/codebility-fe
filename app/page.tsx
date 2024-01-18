import Hero from "./Hero/Hero"
import WhyJoinUs from "./WhyJoinUs/page"
import Services from "./Services/Services"
import Codevs from "./codevs/page"
import Footer from "../Components/Footer"

export default function Web() {
  return (
    <div className="flex h-screen w-full flex-col ">
      <Hero />
      <Services />
      <WhyJoinUs />
      <Codevs />
      <Footer />
    </div>
  )
}
