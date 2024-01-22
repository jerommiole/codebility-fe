import Hero from "./Hero/Hero"
import WhyJoinUs from "./WhyJoinUs/page"
import About from "./Services/About"
import Codevs from "./codevs/page"
import Footer from "../Components/Footer"
import ServicesSection2 from "./Services/ServicesSection2"

export default function Web() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto ">
      <Hero />
      <About />
      <Codevs />
      <ServicesSection2 />
      <WhyJoinUs />
      <Footer />
    </div>
  )
}
