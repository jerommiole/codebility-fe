import Image from "next/image"
import { interns } from "./DummyData"

interface InternProps {
  isSearching: string
  byCategory: string
}

interface Interns {
  name: string
  position: string
}

const fakePagination = ["<", "1", "2", "3", "...", "10", ">"]

const Intern = ({ isSearching, byCategory }: InternProps) => {
  const fields: (keyof Interns)[] = ["name", "position"]

  const filteredData = interns.filter((intern) => {
    if (isSearching) {
      return fields.some((data) => intern[data].toLowerCase().includes(isSearching.toLowerCase()))
    } else if (byCategory) {
      if (byCategory === "All") {
        return intern
      } else {
        return intern.position === byCategory
      }
    } else {
      return intern
    }
  })

  return (
    <div className="relative mx-5 mt-5">
      {/* Avatars */}
      <div className="grid grid-cols-2 place-items-center gap-y-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-7 xl:grid-cols-7 transition-transform">
        {filteredData.map((intern) => (
          <div key={intern.id} className="flex w-28 flex-col gap-1">
            <div className={`mx-auto rounded-full ${intern.backgroundColor} bg-opacity-30`}>
              <Image src={intern.imageUrl} alt={intern.name} width={80} height={80} className="w-32" />
            </div>
            <div className="text-center text-xs">
              <h1>{intern.name}</h1>
              <p className="text-secondaryColor">{intern.position}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mb-10 mt-8 flex items-center justify-center gap-2 md:hidden">
        {fakePagination.map((page) => (
          <p key={page} className="flex h-8 w-8 items-center justify-center rounded-xl text-xs text-white">{page}</p>
        ))}
      </div>

      {/* Arrow */}
      <div>
        <Image
          src="/Arrow.svg"
          alt="arrow"
          width={80}
          height={80}
          className="z-10 hidden hover:cursor-pointer xl:absolute xl:inset-y-48 xl:-right-20 xl:flex"
        />
      </div>
    </div>
  )
}

export default Intern
