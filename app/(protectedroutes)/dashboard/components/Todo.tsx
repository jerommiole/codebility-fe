"use client"

import { useState } from "react"

interface Tag {
  tag: string
}

interface TodoProps {
  id: string
  title: string
  subheader: string
  full_description: string
  userTodoId: string | null
  projectId: string | null
  prio_level: string
  github_link: string
  created_at: string
  updated_at: string
  tagId: string[]
  tags: Tag[]
  userTodo: any // Define type accordingly
  projects: any // Define type accordingly
}

const Todo = ({ todo }: { todo: TodoProps }) => {
  const { title, subheader, full_description, id } = todo // Destructuring todo object

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
          <div className={`flex flex-col justify-center ${subheader ? "gap-0" : ""}`}>
            <div className="text-blue-100">{title}</div>
            <div className="text-xs">{subheader}</div> {/* Changed desc to subheader */}
          </div>
        </div>
        <div className="text-md cursor-pointer text-violet">View</div>
      </div>
    </div>
  )
}

export default Todo
