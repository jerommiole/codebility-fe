import { CallSVG, EmailSVG, LocationSVG, LinkedinSVG } from "Components/logos"
import Avatar from "Components/ui/avatar"
import Image from "next/image"

const TimeTracker = () => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-lg border bg-card-client px-5 py-[37px] dark:border-none md:flex-row lg:flex-col lg:px-[37px] xl:flex-row">
      <p className="absolute right-5 top-5 text-xs text-muted-foreground">9:24 PM</p>
      <p className="absolute bottom-5 right-5 mt-2 cursor-pointer text-xs hover:underline">View Logs</p>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm">Hello!</p>
        <h2 className="text-lg font-bold">Mr. Lorem Ipsum!</h2>
        {/* imgBgColor must follow tailwind coloring system. bg-{color you want}-{shade} */}
        <Avatar className={`h-24 w-24 bg-blue-900 lg:h-36 lg:w-36 `}>
          <Image alt="dp" fill={true} src="/hero.png" />
        </Avatar>
        <p className="text-sm md:mt-5">"Mr. Lorem Ipsum"</p>
        <h2 className="text-lg ">loremIpsum@gmail.com</h2>
      </div>
      <div className="mt-12 flex flex-1 flex-col items-center gap-2 md:ml-10 md:mt-0 lg:ml-0 xl:ml-10">
        <h1 className="self-center text-2xl font-semibold">Time Tracker</h1>
        <p className="mt-2  text-center text-text4">Monday</p>
        <p className="text-sm text-gray-500 ">November 25, 2023</p>
        <div className="mt-4 h-[130px] w-[230px] overflow-hidden rounded-lg border">
          <div className="flex h-[30px] items-center  justify-center bg-gray-300">
            <p className="text-xs text-gray-500 ">FE-FIX THE BUTTON</p>
          </div>
          <div className="relative h-full w-full  bg-gray-200 pt-4">
            <p className="text-center text-5xl font-bold tracking-widest">01:23</p>
            <p className="absolute bottom-10 left-14 text-sm text-gray-500">Hour</p>
            <p className="absolute bottom-10 right-14 text-sm text-gray-500">Minutes</p>
          </div>
        </div>
        <p className="mt-2 text-[#02FFE2] cursor-pointer">Start</p>
      </div>
    </div>
  )
}

export default TimeTracker
