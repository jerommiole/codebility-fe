import React from "react"
import { Paragraph } from "../shared/home"
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog"
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
            <div className="space-y-8 md:p-5">
              <div className="flex flex-col items-center gap-8 md:h-40 md:flex-row md:gap-10">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray">
                  <Image src="/assets/svgs/icon-kanban.svg" width={80} height={80} alt="logo" />
                </div>
                <div className="flex h-full flex-col justify-between gap-2">
                  <p className="text-center text-xl font-semibold uppercase" onClick={() => onOpen("companyEditModal")}>
                    Company Name
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconEmail className="invert dark:invert-0" />
                    admin@gmail.com
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconTelephone className="invert dark:invert-0" />
                    +639
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconLinkedIn className="invert dark:invert-0" />
                    Linkedin
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconMapPin className="invert dark:invert-0" />
                    Address
                  </div>
                </div>
              </div>
              <div className="">
                <Label className="text-gray">Work Schedule</Label>
                <Paragraph className="text-black dark:text-white">08:00am - 05:00pm</Paragraph>
              </div>
              <div className="space-y-2">
                <Label className="text-gray">History</Label>

                <div className="flex gap-2">
                  <IconMapPin className="invert dark:invert-0" />
                  <Paragraph className="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut
                    ipsum minima impedit.
                  </Paragraph>
                </div>
                <div className="flex gap-2">
                  <IconMapPin className="invert dark:invert-0" />
                  <Paragraph className="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut
                    ipsum minima impedit.
                  </Paragraph>
                </div>
                <div className="flex gap-2">
                  <IconMapPin className="invert dark:invert-0" />
                  <Paragraph className="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut
                    ipsum minima impedit.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col gap-2 lg:flex-row">
          <Button variant="default" className="w-full sm:w-[130px]" onClick={() => onOpen("companyEditModal")}>
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyViewModal
