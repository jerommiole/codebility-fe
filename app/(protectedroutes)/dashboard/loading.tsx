import Calendar from "./components/Calendar"
import TimeTracker from "./components/TimeTracker"
import TodoList from "./components/TodoList"
import H1 from "@/Components/shared/dashboard/H1"
import { Skeleton } from "@/Components/ui/skeleton/skeleton"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <H1>Dashboard</H1>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:basis-[60%]">
          <div className="flex flex-col gap-6">
            <Skeleton className="aspect-square w-full rounded-lg border bg-gray-300 md:aspect-video" />
            <Skeleton className="aspect-square w-full rounded-lg border bg-gray-300" />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:basis-[40%]">
          <Skeleton className="aspect-square w-full rounded-lg border bg-gray-300 md:aspect-[3/4]" />
        </div>
      </div>
    </div>
  )
}
