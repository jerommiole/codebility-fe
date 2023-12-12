<<<<<<< HEAD
import Hero from "./CoDevs/Hero/Hero"
import Footer from "./Footer/page"
=======
import Sidebar from "Components/sidebar"
import Footer from "./Footer/page"
import ToggleMenu from "Components/toggleMenu"
>>>>>>> 4fc66f3dddd074db67a4076a653f60fcf186e2f0

export default function Web() {
  return (
    <>
<<<<<<< HEAD
      <div className="flex h-screen w-full">
        <Hero />
      </div>
      <div className="flex h-screen w-full flex-col ">
        {/* LANDING PAGE */}

=======
      <div className="flex h-screen w-full flex-col ">
        <Sidebar />
        <ToggleMenu />
        {/* LANDING PAGE */}
>>>>>>> 4fc66f3dddd074db67a4076a653f60fcf186e2f0
        <Footer />
      </div>
    </>
  )
}
