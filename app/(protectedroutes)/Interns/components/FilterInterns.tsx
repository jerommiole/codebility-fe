import React, { useState } from "react"
import { positionTitles } from "../data"
import Image from "next/image"

const Filter = () => {
  const [filterToggle, setFilterToggle] = useState(false)
  const [byCategory, setByCategory] = useState("")

  const handelFilterToggle = () => {
    setFilterToggle((prev) => !prev)
  }

  return (
    <div title="Filter" onClick={handelFilterToggle} className="md:relative md:flex md:cursor-pointer md:gap-4">
      <p className="text-sm dark:text-primaryColor">Filter</p>
      <Image src="/filter.svg" alt="filter" width={20} height={20} className="h-auto w-auto" />

      {filterToggle && (
        <div className="absolute right-16 top-6 z-40 flex h-96 w-44 flex-col gap-1 overflow-y-auto rounded-xl bg-slate-50 p-3 text-xs dark:bg-[#0E0E0E]">
          <div className="flex w-full justify-end">
            <Image
              src="/Close.svg"
              alt="close"
              width={10}
              height={10}
              onClick={(e) => {
                setFilterToggle((prev) => !prev)
                e.stopPropagation()
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            {positionTitles.map((position) => (
              <p
                key={position}
                onClick={() => setByCategory(position)}
                className="rounded-md px-2 py-1 hover:bg-[#6A78F2] hover:text-white"
              >
                {position}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Filter
