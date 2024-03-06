import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { IconEmail, IconGithub, IconLink } from "@/public/assets/svgs"
import { User } from "@/types"
import { Checkbox } from "Components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "@/Components/ui/skeleton/skeleton"

const Loading = () => {
  return (
    <Box className="flex flex-col gap-6">
      <H1>Applicants List</H1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="min-w-[150px] text-center">Name</TableHead>
            <TableHead>Gmail</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Portfolio</TableHead>
            <TableHead className="min-w-[200px] text-center">Tech Stack</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-center">Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(5)
            .fill(null)
            .map((value, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-[18px] w-[18px] rounded-lg border bg-gray-300" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-[18px] w-full rounded-lg border bg-gray-300" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Skeleton className="h-[18px] w-[18px] rounded-lg border bg-gray-300" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <Skeleton className="h-[18px] w-[18px] rounded-lg border bg-gray-300" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <Skeleton className="h-[18px] w-[18px] rounded-lg border bg-gray-300" />
                  </div>
                </TableCell>
                <TableCell className="h-full w-full">
                  <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 ">
                    <Skeleton className="h-[20px] w-[20px] rounded-lg border bg-gray-300" />
                    <Skeleton className="h-[20px] w-[20px] rounded-lg border bg-gray-300" />
                    <Skeleton className="h-[20px] w-[20px] rounded-lg border bg-gray-300" />
                  </div>
                </TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="">
                  <div className="flex h-full w-full items-center justify-center gap-4">
                    <Skeleton className="h-[20px] w-[50px] rounded-lg border bg-gray-300" />
                    <Skeleton className="h-[20px] w-[35px] rounded-lg border bg-gray-300" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default Loading
