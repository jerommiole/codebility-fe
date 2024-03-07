"use client"

import Todo from "./Todo"
import Box from "@/Components/shared/dashboard/Box"
import Button from "@/Components/shared/dashboard/Button"
import axios from "axios"

interface Tag {
  tag: string
}

interface TodoItem {
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

const TodoList = async () => {
  const todos = await getTodos()

  console.log(todos)
  return (
    <Box className="flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <p>To do List</p>
        <Button className="bg-violet">
          <p className="text-md text-white">Add</p>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {todos.map((todo: TodoItem) => {
          return <Todo todo={todo} />
        })}
      </div>
    </Box>
  )
}

export default TodoList
