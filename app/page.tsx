import Sidebar from "Components/sidebar"
import Footer from "../Components/Footer/index"
import ToggleMenu from "Components/toggleMenu"
import WhyJoinUs from "./WhyJoinUs/page"
import CoDevs from "./CoDevs/page";

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full flex-col ">
        {/* LANDING PAGE */}
         <WhyJoinUs />
          <CoDevs />
        <Footer />
      </div>
    </>
  )
}
