"use client"

import H1 from "@/Components/shared/dashboard/H1"
import TodoCard from "./TodoCard"
import axios from "axios"

interface Tag {
  tag: string
}

export interface TodoItem {
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

const getTodos = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/todos")
  return res.data.data
}

const TodoPage = async () => {
  const todos = await getTodos()

  console.log(todos)

  return (
    <div className="flex flex-col gap-4">
      <H1>To do List</H1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo: TodoItem) => {
          return <TodoCard todo={todo} />
        })}
      </div>
    </div>
  )
}

export default TodoPage
