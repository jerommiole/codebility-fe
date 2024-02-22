import { AddSVG } from "Components/logos"
import Todo from "./Todo"


const TodoList = () => {
  type todoType = {
    title: string,
    body: string,
    dueTime?: string,
    id: number
  }

  const todos:todoType[] = [
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      dueTime: 'Due time: 09:30',
      id: 1
    },
    {
      title: 'Standups',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      id: 2
    },
    {
      title: 'Lorem Ipsum is simply dummy',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      dueTime: 'Due time: 13:21',
      id: 3
    },
    {
      title: 'Redesign',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      dueTime: 'Due time: 22:00',
      id: 4
    }
  ]

  return (
    <div className="flex flex-col gap-4 w-full py-[1rem] px-[0.75rem] rounded-md bg-[#fbfbfb] dark:bg-[#0e0e0e] border border-[#999999] border-opacity-50 shadow-md">
      <div className="text-lg text-[#0e0e0e] dark:text-white pl-2 md:hidden">
        Add Notes
      </div>
      <div className="flex flex-col gap-4 w-full py-[1rem] px-[0.5rem] rounded-md bg-[#f0f0f0] dark:bg-[#111111] md:py-[initial] md:px-[initial] md:bg-[initial]">
        <div className="flex justify-between w-full items-end">
          <div className="flex flex-col pl-5">
            <div className="text-lg text-[#0e0e0e] dark:text-white">
              Today
            </div>
            <div className="text-sm text-[#8e8e8e]">
              Lorem Ipsum
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#0e0e0e] dark:text-white">
              Add
            </div>
            <AddSVG className="scale-125 text-[#583dff] cursor-pointer duration-200 hover:scale-150"/>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full overflow-hidden rounded-md">
          {todos.map((todo, i) => {
            const { title, body, dueTime, id } = todo
            
            return (
              <Todo title={title} body={body} dueTime={dueTime} id={id} />
            )
          })}
      </div>
      </div>
    </div>
  )
}

export default TodoList
