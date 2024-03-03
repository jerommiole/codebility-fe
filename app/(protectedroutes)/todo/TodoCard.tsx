import { useModal } from "hooks/use-modal"
import { Paragraph } from "@/Components/landingPage"
import Box from "@/Components/shared/dashboard/Box"
import RenderTeam from "@/Components/shared/dashboard/RenderTeam"
import RenderTag from "../../../Components/shared/dashboard/RenderTag"

const TodoCard = () => {
  const { onOpen } = useModal()

  return (
    <>
      <Box className="cursor-pointer border hover:border-violet" onClick={() => onOpen("todoViewModal")}>
        <div className="flex h-full flex-col justify-between">
          <div className="relative flex flex-col gap-1">
            <p className="absolute right-0 top-0  text-xs">11/28/23</p>
            <p className="text-lg font-semibold">Title</p>
            <p>Project Name</p>
            <p className="text-sm">
              Priority Level: <span>High</span>
            </p>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut ipsum
              minima impedit.
            </Paragraph>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <RenderTag />
            <RenderTeam />
          </div>
        </div>
      </Box>

      <Box className="cursor-pointer border hover:border-violet" onClick={() => onOpen("todoAddModal")}>
        <div className="flex h-full w-full items-center justify-center gap-2">Add New Task</div>
      </Box>
    </>
  )
}

export default TodoCard
