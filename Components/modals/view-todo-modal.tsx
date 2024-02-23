"use client"

import { AddSVG } from "Components/logos"
import { SvgAttachment, SvgUpload, SvgX } from "public/assets/icons"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { Button } from "Components/ui/button"
import { DialogDescription } from "@radix-ui/react-dialog"
import Image from "next/image"

const ViewTodoModal = () => {
  const { isOpen, onClose, type } = useModal()
  const { onOpen } = useModal()

  const isModalOpen = isOpen && type === "viewTodoModal"

  const handleOpenEdit = () => {
    onClose()
    onOpen("editTodoModal")
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent hasButton className="h-[32rem] w-[95%] max-w-sm overflow-x-auto overflow-y-auto">
        <DialogHeader className="relative h-16 w-full">
          <p onClick={handleOpenEdit} className="absolute right-10 top-2.5 cursor-pointer text-xs hover:underline">
            Edit
          </p>
          <div
            onClick={() => onClose()}
            className="absolute right-0 top-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-lg text-gray-500 duration-200 hover:scale-125 hover:bg-gray-200"
          >
            x
          </div>
          <p className="absolute right-2 top-8 text-xs text-gray-500">11/28/23</p>
        </DialogHeader>
        <DialogDescription className="absolute top-24 flex h-auto w-full flex-col justify-between space-y-3  px-6 pb-4">
          {/* top */}
          <div className="min-h-24 space-y-3 ">
            <div className="">
              <h1 className="">Title</h1>
              <p className="font-600 text-xl text-[#02FFE2]">JIRA TICKET</p>
            </div>
            <div className="">
              <h1 className="">Gitlink</h1>
              <p className="text-xs text-[#9747FF] sm:text-sm ">Git Link : https://github.com/mitzukin/AnyStore</p>
            </div>
          </div>
          {/* center */}
          <div className="min-h-32 space-y-2 ">
            <h1 className="">Description</h1>
            <p className="text-xs text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas praesentium accusantium deleniti.
              Nostrum eveniet cupiditate, repellendus praesentium impedit quasi.
              <br /> <br />
              Nostrum eveniet cupiditate, repellendus praesentium impedit quasi.
            </p>
          </div>
          {/* bottom  */}
          <div className="min-h-20  space-y-3">
            <div className="space-y-2">
              <h1>Team</h1>
              <div className="flex flex-wrap gap-2">
                {"qwe".split("").map((i) => (
                  // Add key prop
                  <div key={i} className="relative h-7 w-7 rounded-full bg-[#34cc80]">
                    <Image
                      className="h-full w-full rounded-full object-cover"
                      src="/image32.png"
                      width={35}
                      height={5}
                      alt="team-member"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h1>Labels</h1>
              <div className="w-fulL mt-3 flex flex-wrap items-center gap-2">
                {"qwe".split("").map((i) => (
                  // Add key prop
                  <button
                    key={i}
                    className="flex cursor-pointer items-center gap-3 rounded-full border px-2 py-1 text-xs sm:px-3"
                  >
                    <div className="h-4 w-0.5 bg-[#9747FF]" />
                    <p>Codebility</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default ViewTodoModal
