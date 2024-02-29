import Todo from "./Todo"
import Box from "@/Components/shared/dashboard/Box"
import Button from "@/Components/shared/dashboard/Button"

const TodoList = () => {
  type todoType = {
    title: string
    desc: string
    duration?: string
    id: number
  }

  const todos: todoType[] = [
    {
      title: "Fix login authentication issue",
      desc: "Investigate and resolve the authentication problem occurring during user login",
      duration: "Duration Time: 2.0 hrs",
      id: 2,
    },
    {
      title: "Update product pricing",
      desc: "Review and update the pricing of products based on market analysis",
      duration: "Duration Time: 2.0 hrs",
      id: 3,
    },
    {
      title: "Implement responsive design",
      desc: "Ensure the website layout is responsive on various devices and screen sizes",
      duration: "Duration Time: 2.0 hrs",
      id: 4,
    },
    {
      title: "Write API documentation",
      desc: "Document the usage and endpoints of the new API for external developers",
      duration: "Duration Time: 2.0 hrs",
      id: 5,
    },
    {
      title: "Conduct team meeting",
      desc: "Schedule and lead a team meeting to discuss project progress and address any concerns",
      duration: "Duration Time: 2.0 hrs",
      id: 6,
    },
    {
      title: "Review and merge pull requests",
      desc: "Check and merge the pending pull requests from team members",
      duration: "Duration Time: 2.0 hrs",
      id: 7,
    },
    {
      title: "Optimize database queries",
      desc: "Identify and optimize slow-performing database queries for better application performance",
      duration: "Duration Time: 2.0 hrs",
      id: 8,
    },
    {
      title: "Create weekly progress report",
      desc: "Compile and send out a detailed progress report to stakeholders and team members",
      duration: "Duration Time: 2.0 hrs",
      id: 9,
    },
    {
      title: "Test and debug new features",
      desc: "Conduct thorough testing and debugging of recently implemented features in the application",
      duration: "Duration Time: 2.0 hrs",
      id: 10,
    },
    {
      title: "Prepare for client presentation",
      desc: "Gather necessary materials and information for an upcoming client presentation",
      duration: "Duration Time: 2.0 hrs",
      id: 11,
    },
  ]

  return (
    <Box className="flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <p>To do List</p>
        <Button className="bg-violet">
          <p className="text-md text-white">Add</p>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {todos.map((todo, i) => {
          const { title, desc, duration, id } = todo
          return <Todo title={title} desc={desc} duration={duration} id={id} />
        })}
      </div>
    </Box>
  )
}

export default TodoList
