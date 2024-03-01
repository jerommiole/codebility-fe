"use client"

import { useState } from "react"

type TodoProps = {
  title: string
  desc: string
  duration?: string
  id: number
}

const Todo = ({ title, desc, duration, id }: TodoProps) => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <div className="background-lightsmallbox_darksmallbox rounded-lg p-3" key={id}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="h-5 w-5 cursor-pointer rounded-[3px] border-[1px] border-[#8e8e8e] p-[3px] hover:opacity-90 dark:border-white"
            onClick={() => setCheck(!check)}
          >
            <div className={`${check ? "bg-teal" : ""} h-full w-full`}></div>
          </div>
          <div className={`flex flex-col justify-center ${duration ? "gap-0" : ""}`}>
            <div className="text-blue-100">{title}</div>
            <div className="text-xs">{duration}</div>
          </div>
        </div>
        <div className="text-md cursor-pointer text-violet">View</div>
      </div>
    </div>
  )
}

export default Todo
