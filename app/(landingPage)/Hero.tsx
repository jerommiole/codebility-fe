import { Button } from "Components/ui/button"
import { Rowdies } from "next/font/google"
import Link from "next/link"
import SocialIcons from "@/Components/shared/SocialIcons"

const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
})

const Hero = () => {
  return (
    <div
      id="home"
      className="relative -mt-20 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat"
    >
      <div className="flex flex-col gap-3 text-center text-white">
        <p className="text-lg">Unlocking Potential: Code is a Universal Language</p>
        <h1 className={`text-5xl uppercase md:text-[6rem] ${rowdies.className}`}>Codebility</h1>
        <p className="text-lg md:text-2xl">“Everyone has the ability to code”</p>

        <Link href="#codevs">
          <Button className="m-6 h-12 w-44 rounded-full bg-gradient-to-r from-teal via-blue-100 to-violet p-0.5 hover:bg-gradient-to-br">
            <div className="bg-black-500 flex h-full w-full items-center justify-center rounded-full text-lg text-white">
              See Our Codevs
            </div>
          </Button>
        </Link>

        <SocialIcons />
      </div>

      <div className="hero-gradient absolute -top-80 z-10  h-[400px] w-screen blur-[200px] md:blur-[500px]"></div>

      <div className="hero-bubble">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} />
        ))}
      </div>
    </div>
  )
}

export default Hero
