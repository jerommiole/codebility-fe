import axios from "axios"
import InternCard from "./InternCard"
import { User } from "@/types"

interface InternProps {
  isSearching: string
  byCategory: string
}

// Function to fetch Interns data asynchronously
const getInterns = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/users")
  return res.data.data
}

const Intern = async ({ isSearching, byCategory }: InternProps) => {
  // Explicitly type interns as an array of User objects
  const interns: User[] = await getInterns()

  if (!interns || !Array.isArray(interns)) {
    return null
  }

  // const filteredData = interns.filter((intern: User) => {
  //   // Check if the intern's position matches the search criteria
  //   if (isSearching) {
  //     switch (isSearching.toLowerCase()) {
  //       case "fs":
  //       case "Front End Developer":
  //       case "be":
  //       case "md":
  //         return intern.position && intern.position.includes(isSearching)
  //       default:
  //         return (
  //           intern.name.toLowerCase().includes(isSearching.toLowerCase()) ||
  //           (intern.position && intern.position.some((pos) => pos.toLowerCase().includes(isSearching.toLowerCase())))
  //         )
  //     }
  //   }
  //   // Check if the intern's position matches the selected category
  //   else if (byCategory) {
  //     if (byCategory === "All") {
  //       return true
  //     } else {
  //       return intern.position && intern.position.includes(byCategory)
  //     }
  //   }
  //   // If no search criteria or category is provided, return true for all interns
  //   else {
  //     return true
  //   }
  // })

  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-5">
        {interns.map((intern) => (
          <InternCard
            key={intern.id}
            user={intern} // Pass user data to InternCard
          />
        ))}
      </div>
    </>
  )
}

export default Intern
