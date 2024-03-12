import React from "react"
import { Paragraph } from "../shared/home"
import { Dialog, DialogContent } from "../ui/dialog"
import { Button } from "../ui/button"
import { useModal } from "@/hooks/use-modal"
import Image from "next/image"
import { IconEmail, IconLinkedIn, IconMapPin, IconTelephone } from "@/public/assets/svgs"
import { Label } from "../ui/label"

const CompanyViewModal = () => {
  const { isOpen, type, onClose, onOpen } = useModal()

  const isModalOpen = isOpen && type === "companyViewModal"

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent hasButton className="h-[32rem] w-[80%] max-w-xl overflow-x-auto overflow-y-auto lg:h-auto">
        <div className="flex flex-col gap-6">
          <div className="relative flex flex-col gap-1">
            <p className="absolute right-0 top-0  cursor-pointer text-xs" onClick={() => onOpen("companyEditModal")}>
              Edit
            </p>
            <div className="space-y-8 md:p-5">
              <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray">
                  <Image src="/assets/svgs/icon-kanban.svg" width={80} height={80} alt="logo" />
                </div>
                <div className="space-y-2">
                  <p className="text-center text-xl font-bold">Company Name</p>
                  <div className="flex items-center gap-4 text-sm">
                    <IconEmail />
                    admin@gmail.com
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <IconTelephone />
                    +639
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <IconLinkedIn />
                    Linkedin
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <IconMapPin />
                    Address
                  </div>
                </div>
              </div>
              <div className="">
                <Label>Work Schedule</Label>
                <Paragraph>08:00am - 05:00pm</Paragraph>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <IconMapPin />
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut
                    ipsum minima impedit.
                  </Paragraph>
                </div>
                <div className="flex gap-2">
                  <IconMapPin />
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut
                    ipsum minima impedit.
                  </Paragraph>
                </div>
                <div className="flex gap-2">
                  <IconMapPin />
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut
                    ipsum minima impedit.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyViewModal
