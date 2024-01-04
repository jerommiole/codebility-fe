import Hero from "./CoDevs/Hero/Hero"
import Footer from "./Footer/page"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full">
        <Hero />
      </div>
      <div className="flex h-screen w-full flex-col ">
        {/* LANDING PAGE */}

        <Footer />
      </div>
    </>
  )
}
