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
      title: 'Lorem Ipsum 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      id: 2
    },
    {
      title: 'Lorem Ipsum 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      dueTime: 'Due time: 13:21',
      id: 3
    },
    {
      title: 'Lorem Ipsum 4',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      dueTime: 'Due time: 22:00',
      id: 4
    },
    {
      title: 'Lorem Ipsum 5',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda?',
      dueTime: 'Due time: 22:00',
      id: 5
    }
  ]

  return (
    <div className="flex flex-col gap-4 w-full py-[1rem] px-[0.75rem] rounded-md bg-[#0e0e0e]">
      <div className="text-lg text-white pl-2 md:hidden">
        Add Notes
      </div>
      <div className="flex flex-col gap-4 w-full py-[1rem] px-[0.5rem] rounded-md bg-[#111111] md:gap-[initial] md:py-[initial] md:px-[initial] md:bg-[initial]">
        <div className="flex justify-between w-full items-end">
          <div className="flex flex-col pl-5">
            <div className="text-lg text-white">
              Today
            </div>
            <div className="text-sm text-gray-400">
              Lorem Ipsum
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white">
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
