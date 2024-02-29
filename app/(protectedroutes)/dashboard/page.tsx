import Title from "Components/Title"
import Calendar from "./components/Calendar"
import TimeTracker from "./components/TimeTracker"
import TodoList from "./components/TodoList/TodoList"
import { H1 } from "@/Components/landingPage"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <H1>Dashboard</H1>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:basis-3/5">
          <div className="flex flex-col gap-6">
            <TimeTracker />
            <Calendar />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:basis-2/5">
          <TodoList />
        </div>
      </div>
    </div>
  )
}
