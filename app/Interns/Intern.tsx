import Image from "next/image"
import { interns } from "./DummyData"
import InternCard from "./InternCard"

interface InternProps {
  isSearching: string
  byCategory: string
}

const fakePaginationSm = ["<", "1", "2", "3", "...", "10", ">"]
const fakePaginationMd = ["1", "2", "3", "...", "10"]

const Intern = ({ isSearching, byCategory }: InternProps) => {
  const filteredData = interns.filter((intern) => {
    if (isSearching) {
      switch (isSearching.toLowerCase()) {
        case "fs":
          return intern.position.some((pos) => pos === "Full Stack Developer")
        case "fe":
          return intern.position.some((pos) => pos === "Frontend Developer")
        case "be":
          return intern.position.some((pos) => pos === "Backend Developer")
        default:
          return (
            intern.name.toLowerCase().includes(isSearching.toLowerCase()) ||
            intern.position.some((pos) => pos.toLowerCase().includes(isSearching.toLowerCase()))
          )
      }
    } else if (byCategory) {
      if (byCategory === "All") {
        return intern
      } else {
        return intern.position.includes(byCategory)
      }
    } else {
      return intern
    }
  })

  return (
    <div className="relative mx-5 mt-5">
      {/* Avatars */}
      <div className="grid grid-cols-2 place-items-center gap-y-20 gap-x-5 transition-transform  md:grid-cols-4 lg:grid-cols-5">
        {filteredData.map((intern) => (
         <InternCard key={intern.id} image={intern.imageUrl} name={intern.name} position="Full Stack Developer" roles={intern.position} bgColor={intern.backgroundColor} />
        ))}
      </div>

      <div className="my-10 flex w-full items-center justify-center gap-2 lg:hidden">
        {fakePaginationSm.map((page, i) => (
          <p
            key={i}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-400 bg-opacity-20 text-xs font-semibold text-black dark:bg-[#181818] dark:text-white"
          >
            {page}
          </p>
        ))}
      </div>

      {/* Arrow */}
      <div>
        <Image
          src="/RightArrow.svg"
          alt="right arrow"
          width={15}
          height={15}
          className="z-10 hidden w-auto hover:cursor-pointer xl:absolute xl:inset-y-32 xl:-right-10 xl:flex"
        />
        <div className="mt-14 hidden w-full items-center justify-center gap-2 lg:flex">
          {fakePaginationMd.map((page, i) => (
            <p
              key={i}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-400 bg-opacity-20 text-xs font-semibold text-black dark:bg-[#181818] dark:text-white"
            >
              {page}
            </p>
          ))}
        </div>
        <Image
          src="/LeftArrow.svg"
          alt="left arrow"
          width={15}
          height={15}
          className="z-10 hidden w-auto hover:cursor-pointer xl:absolute xl:inset-y-32 xl:-left-10 xl:flex"
        />
      </div>
    </div>
  )
}

export default Intern
