import H1 from "@/Components/shared/dashboard/H1"
import Box from "@/Components/shared/dashboard/Box"
import { Skeleton } from "Components/ui/skeleton/skeleton"

const Loading = () => {
  return (
    <div>
      <H1>Projects</H1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array(6)
          .fill(null)
          .map((value, index) => (
            <Box key={index} className="flex flex-col gap-2 border">
              <Skeleton className="mb-2 aspect-video w-full rounded-lg border bg-gray-300" />
              <Skeleton className="h-8 w-full rounded-lg border bg-gray-300" />
              <div className="flex gap-2">
                <Skeleton className="h-[20px] w-[20px] rounded-lg border bg-gray-300" />
                <Skeleton className="h-[20px] w-[20px] rounded-lg border bg-gray-300" />
              </div>
              <Skeleton className="h-5 w-full rounded-lg border bg-gray-300" />
              <div className="flex justify-end">
                <Skeleton className="h-10 w-24 rounded-lg border bg-gray-300" />
              </div>
            </Box>
          ))}
      </div>
    </div>
  )
}

export default Loading
