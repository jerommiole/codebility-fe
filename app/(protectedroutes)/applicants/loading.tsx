import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import { Skeleton } from "Components/ui/skeleton/skeleton"

const Loading = () => {
  return (
    <div>
      <h1 className="mb-4 ms-5 text-2xl text-gray-900">Applicants Records</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8"></TableHead>
            <TableHead className="w-[100px] text-center">Name</TableHead>
            <TableHead className="w-[160px] text-center">Gmail</TableHead>
            <TableHead className="w-[200px] text-center">Github Link</TableHead>
            <TableHead className="w-[200px] text-center">Portfolio Link</TableHead>
            <TableHead className="w-[200px] text-center">Tech Stack</TableHead>
            <TableHead className="w-[100px] text-center">Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {"qwerty".split("").map((i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Loading
