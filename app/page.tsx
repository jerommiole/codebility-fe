import Sidebar from "Components/sidebar"
import Footer from "../Components/Footer/index"
import ToggleMenu from "Components/toggleMenu"
import WhyJoinUs from "./WhyJoinUs/page"
import Hero from "./Hero/Hero"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full flex-col ">
        <Hero />
        {/* LANDING PAGE */}
        {/* <WhyJoinUs /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}
