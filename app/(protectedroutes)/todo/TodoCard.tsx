import { Paragraph } from "@/Components/shared/home"
import Box from "@/Components/shared/dashboard/Box"
import RenderTeam from "@/Components/shared/dashboard/RenderTeam"
import RenderTag from "../../../Components/shared/dashboard/RenderTag"
import { Todo } from "@/types"
import { useModal } from "hooks/use-modal"
import Image from "next/image"

interface TodoCardProps {
  todo: Todo
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const { onOpen } = useModal()

  const { created_at, title, subheader, prio_level, tags, tagId, full_description, projects } = todo

  // const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // })
  let prioLevel = null

  switch (prio_level.toLowerCase()) {
    case "highest":
      prioLevel = 1
      break
    case "critical":
      prioLevel = 2
      break
    case "high":
      prioLevel = 3
      break
    case "medium":
      prioLevel = 4
      break
    default:
      prioLevel = 5
  }

  return (
    <>
      <Box className="cursor-pointer border hover:border-violet" onClick={() => onOpen("todoViewModal")}>
        <div className="flex h-full flex-col justify-between">
          <div className="relative flex flex-col gap-1">
            <Image
              width={20}
              height={20}
              src={`/assets/svgs/icon-priority-${prioLevel}.svg`}
              className="absolute right-0 top-0 "
              alt="prio level"
            />
            <p className="text-lg font-semibold text-violet">#01</p>
            <p>{title}</p>
            <p className="text-sm">{subheader}</p>
            <Paragraph>{full_description}</Paragraph>
            <div className="flex items-center gap-2 text-xs text-gray">
              Project: <p className="text-sm uppercase text-dark-100 dark:text-white">{projects?.project_name}</p>
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs text-gray">
              Duration Hours: <p className="text-sm uppercase text-dark-100 dark:text-white">2.0</p>
            </div>
          </div>
          <div className="mt-1">
            {tags.map(({ tag }, i) => (
              <RenderTag key={i} name={tag} />
            ))}
          </div>
          <div className="mt-1">
            {tagId.map((id) => (
              <RenderTeam key={id} />
            ))}
          </div>
        </div>
      </Box>
    </>
  )
}

export default TodoCard
