import Box from "@/Components/shared/dashboard/Box"
import Avatar from "Components/ui/avatar"
import Image from "next/image"
import photo from "@/public/assets/images/default-avatar-male.png"
import Link from "next/link"

const TimeTracker = () => {
  return (
    <Box>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="mx-auto flex flex-col items-center gap-2">
          <p className="text-sm">Hello!</p>
          <p className="text-lg font-semibold">Mr. Lorem Ipsum!</p>
          <Avatar className={`h-24 w-24 bg-blue-100`}>
            <Image alt="Avatar" src={photo} width={96} height={96} />
          </Avatar>
          <p className="text-lg">loremIpsum@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold">Time Tracker</p>
          <p className="text-sm">November 25, 2023, Monday</p>

          <div className="flex flex-col">
            <div className="flex min-w-[250px] justify-center rounded-t border">
              <div className="flex flex-col items-center">
                <p className="p-3 text-xs uppercase">Fe-fix the button</p>
              </div>
            </div>
            <div className="flex min-w-[250px] justify-center rounded-b border-b border-l border-r">
              <div className="flex flex-col gap-2 p-3">
                <p className="text-5xl font-bold">01:23</p>
                <div className="flex justify-between gap-2">
                  <p>Hour</p>
                  <p>Minutes</p>
                </div>
              </div>
            </div>
          </div>

          <Link href="#" className="text-teal">
            Start
          </Link>
        </div>
      </div>
    </Box>
  )
}

export default TimeTracker
