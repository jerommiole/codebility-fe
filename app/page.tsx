import Hero from "./CoDevs/Hero/Hero"
import Footer from "../Components/Footer";
import WhyJoinUs from "./WhyJoinUs/page";
import CoDevs from "./CoDevs/page";

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full">
        <Hero />
      </div>
      <div className="flex h-screen w-full flex-col ">
        {/* LANDING PAGE */}
          <WhyJoinUs />
          <CoDevs />
        <Footer />
      </div>
    </>
  )
}
