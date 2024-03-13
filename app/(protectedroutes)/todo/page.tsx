"use client"

import React, { useEffect, useState } from "react"
import H1 from "@/Components/shared/dashboard/H1"
import TodoCard from "./TodoCard"
import axios from "axios"
import { useModal } from "@/hooks/use-modal"
import { Button } from "@/Components/ui/button"
import { IconAdd, IconFilter } from "@/public/assets/svgs"
import { Todo } from "@/types"
import Loading from "./loading"

const getTodos = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/todos")
  return res.data.data
}

const TodoPage = () => {
  const { onOpen } = useModal()
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }

    fetchTodos()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <H1>To do List</H1>
        <div className="flex gap-4">
          {/* Input Hollow for Search */}
          {/* Select Filter */}
          <Button variant="default" className="w-[130px]" onClick={() => onOpen("todoAddModal")}>
            <IconAdd className="mr-2" />
            Add To do
          </Button>
        </div>
      </div>
      {todos.length === 0 && <Loading />}
      {todos.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {todos.map((todo: Todo) => {
            return <TodoCard key={todo.id} todo={todo} />
          })}
        </div>
      )}
    </div>
  )
}

export default TodoPage
