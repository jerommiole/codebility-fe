import Calendar from "./components/Calendar"
import TimeTracker from "./components/TimeTracker"
import TodoList from "./components/TodoList"
import H1 from "@/Components/shared/dashboard/H1"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <H1>Dashboard</H1>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:basis-[60%]">
          <div className="flex flex-col gap-6">
            <TimeTracker />
            <Calendar />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:basis-[40%]">
          <TodoList />
        </div>
      </div>
    </div>
  )
}
