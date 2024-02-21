import { interns } from "../data"
import InternCard from "./InternCard"

interface InternProps {
  isSearching: string
  byCategory: string
}

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
        case "md":
          return intern.position.some((pos) => pos === "Mobile Developer")
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
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-5">
        {filteredData.map((intern) => (
          <InternCard
            key={intern.id}
            image={intern.imageUrl}
            name={intern.name}
            position={intern.position}
            roles={intern.position}
            bgColor={intern.backgroundColor}
          />
        ))}
      </div>
    </>
  )
}

export default Intern
