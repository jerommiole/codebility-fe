import React from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "../ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Label } from "../ui/label"
import Input from "../ui/forms/input"
import { Button } from "../ui/button"
import { useModal } from "@/hooks/use-modal"
import Link from "next/link"
import Image from "next/image"
import { Textarea } from "../ui/textarea"

const ProjectAddModal = () => {
  const { isOpen, onClose, type } = useModal()

  const isModalOpen = isOpen && type === "projectAddModal"
  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent
        hasButton
        className="flex h-[32rem] w-[90%] max-w-lg flex-col gap-6 overflow-x-auto overflow-y-auto lg:h-auto"
      >
        <DialogHeader className="relative">
          <DialogTitle className="mb-2 text-left text-xl">Add New Project</DialogTitle>
        </DialogHeader>

        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex h-14 w-28 items-center justify-center rounded-lg bg-gray md:h-20 md:w-40">
                <Image src="/assets/svgs/icon-kanban.svg" width={30} height={30} alt="logo" />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-xs text-gray">Image size 1080 x 768 px</p>
                <div className="flex gap-4">
                  <Link href={`#`}>
                    <p className="text-xs text-blue-100 sm:text-base">Upload Image</p>
                  </Link>
                  <Link href={`#`}>
                    <p className="text-xs text-violet sm:text-base">Remove Image</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-8 md:mt-0 md:space-y-4">
              <div>
                <div>
                  <Label className="text-gray" htmlFor="projectName">
                    Name
                  </Label>
                  <Input id="projectName" placeholder="Project Name" />
                </div>
                <div>
                  <Label className="text-gray" htmlFor="client">
                    Client
                  </Label>
                  <Input id="client" placeholder="Client Name" />
                </div>
                <div>
                  <Label className="text-gray" htmlFor="githubLink">
                    Github Link
                  </Label>
                  <Input id="githubLink" placeholder="Link" />
                </div>
                <div>
                  <Label className="text-gray" htmlFor="productionLink">
                    Production Link
                  </Label>
                  <Input id="productionLink" placeholder="Link" />
                </div>
                <div>
                  <Label className="text-gray" htmlFor="summary">
                    Summary
                  </Label>
                  <Textarea id="summary" placeholder="Summary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-2 lg:flex-row">
          <Button variant="hollow" className="order-2 w-full sm:order-1 sm:w-[130px]" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button variant="default" className="order-1 w-full sm:order-2 sm:w-[130px]">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectAddModal
