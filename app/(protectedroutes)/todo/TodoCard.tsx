import { useModal } from "hooks/use-modal"
import { Paragraph } from "@/Components/shared/home"
import Box from "@/Components/shared/dashboard/Box"
import RenderTeam from "@/Components/shared/dashboard/RenderTeam"
import RenderTag from "../../../Components/shared/dashboard/RenderTag"
import { Todo } from "@/types"

interface TodoCardProps {
  todo: Todo
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const { onOpen } = useModal()

  const { created_at, title, prio_level, full_description } = todo

  const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <>
      <Box className="cursor-pointer border hover:border-violet" onClick={() => onOpen("todoViewModal")}>
        <div className="flex h-full flex-col justify-between">
          <div className="relative flex flex-col gap-1">
            <p className="absolute right-0 top-0  text-xs">{formattedDate}</p>
            <p className="text-lg font-semibold">Title</p>
            <p>{title}</p>
            <p className="text-sm">Priority Level: {prio_level}</p>
            <Paragraph>{full_description}</Paragraph>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <RenderTag />
            <RenderTeam />
          </div>
        </div>
      </Box>
    </>
  )
}

export default TodoCard
