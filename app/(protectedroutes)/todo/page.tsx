"use client"

import React, { useState } from "react"

import TodoCard from "./components/TodoCard"

import { AddSVG, FilterSVG } from "Components/logos"
import { SvgPriority } from "public/assets/icons"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "Components/ui/pagination/pagination"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "Components/ui/dropdown-menu"
import { Card } from "Components/ui/card"
import { useModal } from "hooks/use-modal"

const TodoPage = () => {
  const { onOpen } = useModal()

  return (
    <div className="relative flex h-full flex-col justify-between pb-4">
      <div className="my-4 flex items-center justify-between px-1 ">
        <h1 className="font-semibold sm:text-xl md:text-2xl">TO DO LIST</h1>
        <div className="flex items-center gap-4 text-xs sm:text-base">
          <div className="flex items-center gap-2">
            Add
            <button
              onClick={() => {
                onOpen("addTodoModal")
              }}
            >
              <AddSVG className="cursor-pointer text-text4  duration-200 hover:scale-110" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            Filter
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FilterSVG className="cursor-pointer text-text4 duration-200 hover:scale-110" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Frontend Develop</DropdownMenuItem>
                <DropdownMenuItem>Backend Developer</DropdownMenuItem>
                <DropdownMenuItem>Design UI/UX</DropdownMenuItem>
                <DropdownMenuItem>Codebility</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            Priority
            <button>
              <SvgPriority className="cursor-pointer duration-200 hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid w-full place-content-start place-items-start gap-2 overflow-y-auto sm:grid-cols-2 lg:h-full xl:grid-cols-3">
        {"qwert".split("").map((i) => (
          // Add key prop
          <TodoCard key={i} />
        ))}
        <Card
          onClick={() => onOpen("addTodoModal")}
          className="group h-[250px] w-full cursor-pointer duration-300 hover:bg-gray-100"
        >
          <div className="flex h-full w-full items-center justify-center gap-2">
            <AddSVG className="text-text4 duration-200 group-hover:scale-125" />
            ADD NEW TASK
          </div>
        </Card>
      </div>
      <Pagination className="right-0 mt-6 w-[350px] sm:absolute sm:-bottom-14 xl:-bottom-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default TodoPage
