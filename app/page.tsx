import Sidebar from "Components/sidebar"
import Footer from "./Footer/page"
import ToggleMenu from "Components/toggleMenu"
import Services from "./Services/Services"
export default function Web() {
  return (
    <>
      <div className="flex flex-col w-full h-screen ">
        
        <ToggleMenu />
        {/* LANDING PAGE */}
        <Services/>
        
      </div>
    </>
  )
}
