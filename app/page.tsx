import Sidebar from "Components/sidebar"
import Footer from "./Footer/page"
import ToggleMenu from "Components/toggleMenu"
import WhyJoinUs from "./WhyJoinUs/page"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full flex-col ">
        <Sidebar />
        <ToggleMenu />
        {/* LANDING PAGE */}
        <WhyJoinUs />
        <Footer />
      </div>
    </>
  )
}
