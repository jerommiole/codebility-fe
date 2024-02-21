import { AddSVG, FilterSVG, ShowSVG } from "Components/logos"
import React from "react"

const Action = () => {
  return (
    <div className="start flex items-center justify-end gap-5 py-4">
      <div className="flex items-center gap-1">
        Add <AddSVG className="text-text4" />
      </div>
      <div className="flex items-center gap-1">
        Filter <FilterSVG className="text-text4" />
      </div>
      <div className="flex items-center gap-1">
        Show <ShowSVG className="text-text4" />
      </div>
    </div>
  )
}

export default Action
