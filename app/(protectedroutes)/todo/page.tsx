import React from "react"

import TodoCard from "./TodoCard"
import { AddSVG, FilterSVG } from "Components/logos"
import { SvgPriority } from "assets/icons"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "Components/ui/pagination/pagination"
import { Card } from "Components/ui/card"

const TodoPage = () => {
  return (
    <div className="flex h-full flex-col ">
      <div className="my-4 flex items-center justify-between px-1 sm:px-10 md:px-0">
        <h1 className="font-semibold sm:text-xl md:text-2xl">TO DO LIST</h1>
        <div className="flex items-center gap-4 text-xs sm:text-base">
          <div className="flex items-center gap-2">
            Add <AddSVG className="text-text4" />
          </div>
          <div className="flex items-center gap-2">
            Filter <FilterSVG className="text-text4" />
          </div>
          <div className="flex items-center gap-2">
            Priority <SvgPriority />
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid h-full w-full place-items-start gap-2 md:grid-cols-2 xl:grid-cols-3">
          {"qw".split("").map((i) => (
            // Add key prop
            <TodoCard key={i} />
          ))}
          <Card className="mx-auto flex h-[260px] w-full max-w-[400px] items-center justify-center">
            <p className="flex items-center gap-2">
              <AddSVG className="text-text4" />
              ADD NEW TASK
            </p>
          </Card>
        </div>
      </div>
      <div className="py-4">
        <Pagination className="mt-4">
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
    </div>
  )
}

export default TodoPage
