"use client"

import { DialogDescription } from "@radix-ui/react-dialog"
import { Button } from "Components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { Paragraph } from "../shared/home"
import RenderTeam from "../shared/dashboard/RenderTeam"
import Input from "../ui/forms/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const TodoAddModal = () => {
  const { isOpen, onClose, type } = useModal()

  const isModalOpen = isOpen && type === "todoAddModal"

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent hasButton className="h-[32rem] w-[80%] max-w-sm overflow-x-auto overflow-y-auto lg:h-auto">
        <DialogHeader className="relative">
          <DialogTitle className="">
            <p className="mb-2 text-left text-lg">Add New To do</p>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="flex flex-col gap-4">
          <div>
            <Label htmlFor="project">Project</Label>
            <Input id="project" placeholder="Search Project..." />
          </div>

          <div>
            <Label htmlFor="name">Title</Label>
            <Input id="name" />
          </div>

          <div>
            <Label htmlFor="message">Description</Label>
            <Textarea id="message" />
          </div>

          <div>
            <Label htmlFor="prio_level">Priority Level</Label>
            <Input id="prio_level" />
            {/* High, Mid, Low */}
          </div>

          <div>
            <Label htmlFor="tags">Tags *</Label>
            <Input id="tags" placeholder="Add a tags..." />
            <p className="text-xs text-gray-400">
              Add a tag to describe what task is about. You need to press enter to add a tag.
            </p>
          </div>

          <div>
            <Label htmlFor="members">Members</Label>
            <Input id="members" placeholder="Search a member" />
          </div>

          <RenderTeam />
        </DialogDescription>

        <DialogFooter>
          <Button variant="hollow" onClick={() => onClose()}>
            Cancel
          </Button>

          <Button variant="default">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TodoAddModal
