import { IconAdd, IconEye, IconFilter } from "@/public/assets/svgs"
import React from "react"

const Action = () => {
  return (
    <div className="start flex items-center justify-end gap-5 py-4">
      <div className="flex items-center gap-1">
        Add <IconAdd className="text-text4" />
      </div>
      <div className="flex items-center gap-1">
        Filter <IconFilter className="text-text4" />
      </div>
      <div className="flex items-center gap-1">
        Show <IconEye className="text-text4" />
      </div>
    </div>
  )
}

export default Action
