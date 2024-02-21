"use client"

import Title from "Components/Title"
import { useState } from "react"
import FilterInterns from "./components/FilterInterns"
import InternList from "./components/InternList"

const Interns = () => {
  const [isSearching, setIsSearching] = useState("")
  const [byCategory, setByCategory] = useState("")

  return (
    <div className="mx-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          <Title
            title="Interns"
            subtitle="Explore opportunities, gain hands-on experience, and contribute to innovative projects. Join us on a journey of learning and collaboration."
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4">
          <div className="flex justify-center md:justify-end">
            <input
              type="text"
              value={isSearching}
              placeholder="Search"
              onChange={(e) => setIsSearching(e.target.value)}
              className="h-10 w-[200] rounded-full border border-gray-400 border-opacity-50 bg-inherit px-5 text-xs focus:outline-none"
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <FilterInterns />
          </div>
        </div>
      </div>
      <InternList isSearching={isSearching} byCategory={byCategory} />
    </div>
  )
}

export default Interns
