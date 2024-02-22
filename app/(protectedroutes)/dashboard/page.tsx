import Title from "Components/Title"
import Calendar from "./components/Calendar"
import TimeTracker from "./components/TimeTracker"
import TodoList from "./components/TodoList/TodoList"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Title title="Dashboard" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:basis-3/5">
          <div className="flex flex-col gap-6">
            <TimeTracker />
            <Calendar />
          </div>
        </div>
        <div className="flex md:basis-2/5 flex-col gap-4">
          <TodoList />
        </div>
      </div>
    </div>
  )
}
