import React from "react"
import avatar from "@/public/assets/images/default-avatar-male.png"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "../ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useModal } from "@/hooks/use-modal"
import Link from "next/link"
import Image from "next/image"

const CompanyAddModal = () => {
  const { isOpen, onClose, type } = useModal()

  const isModalOpen = isOpen && type === "companyAddModal"
  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent
        hasButton
        className="flex h-[32rem] w-[90%] max-w-3xl flex-col gap-6 overflow-x-auto overflow-y-auto lg:h-auto"
      >
        <DialogHeader className="relative">
          <DialogTitle className="mb-2 text-left text-xl">Add New Company</DialogTitle>
        </DialogHeader>

        <div>
          <div className="flex flex-col gap-4">
            <div>
              <Label className="text-base">Logo</Label>
            </div>
            <div className="flex gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray md:h-20 md:w-20">
                <Image src="/assets/svgs/icon-kanban.svg" width={30} height={30} alt="logo" />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-xs text-gray">Image size 100 x 100 px</p>
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
                <Label className="text-base">Company Info</Label>
                <div className="w-full items-center gap-6 md:flex">
                  <div className="w-full space-y-2">
                    <Label className="text-gray">Name</Label>
                    <Input className="" placeholder="Company Name" />
                  </div>
                  <div className="w-full space-y-2">
                    <Label className="text-gray">Working Hours</Label>
                    <Input className="" placeholder="08:00am - 05:00pm" />
                  </div>
                </div>
                <div className="mt-2 w-full space-y-2">
                  <Label className="text-gray">History</Label>
                  <Input className="" placeholder="History" />
                </div>
              </div>
              <div className="">
                <Label className="text-base">Company Contact Details</Label>
                <div className="w-full items-center gap-6 md:flex">
                  <div className="w-full space-y-2">
                    <Label className="text-gray">Email</Label>
                    <Input className="" placeholder="Email" />
                  </div>
                  <div className="w-full space-y-2">
                    <Label className="text-gray">Telephone</Label>
                    <Input className="" placeholder="+639" />
                  </div>
                </div>
                <div className="w-full items-center gap-6 md:flex">
                  <div className="w-full space-y-2">
                    <Label className="text-gray">Address</Label>
                    <Input className="" placeholder="Address" />
                  </div>
                  <div className="w-full space-y-2">
                    <Label className="text-gray">Linkedin</Label>
                    <Input className="" placeholder="Linkedin" />
                  </div>
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

export default CompanyAddModal
