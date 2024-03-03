"use client"

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Dialog, DialogContent, DialogHeader } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import Image from "next/image"
import { Button } from "../ui/button"
import { Paragraph } from "../landingPage"
import RenderTag from "../shared/dashboard/RenderTag"
import RenderTeam from "../shared/dashboard/RenderTeam"

const TodoViewModal = () => {
  const { isOpen, onClose, type } = useModal()
  const { onOpen } = useModal()

  const isModalOpen = isOpen && type === "todoViewModal"

  const handleOpenEdit = () => {
    onClose()
    onOpen("todoEditModal")
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent hasButton className="h-[32rem] w-[80%] max-w-sm overflow-x-auto overflow-y-auto lg:h-auto">
        <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-1">
              <p className="text-sm">Tags</p>
              <div className="grid grid-cols-3 gap-1 ">
                <RenderTag />
                <RenderTag />
                <RenderTag />
                <RenderTag />
                <RenderTag />
                <RenderTag />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">Members</p>
              <div className="grid grid-cols-3 gap-1 ">
                <RenderTeam />
                <RenderTeam />
                <RenderTeam />
                <RenderTeam />
                <RenderTeam />
                <RenderTeam />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <Button variant="default" onClick={handleOpenEdit}>
              Edit
            </Button>
            <Button variant="default">Archive</Button>
            <Button variant="default">Pin</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TodoViewModal
