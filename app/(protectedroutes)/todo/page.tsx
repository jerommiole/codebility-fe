"use client"

import H1 from "@/Components/shared/dashboard/H1"
import TodoCard from "./TodoCard"

const TodoPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <H1>To do List</H1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TodoCard />
      </div>
    </div>
  )
}

export default TodoPage
