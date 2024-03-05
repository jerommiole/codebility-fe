"use client"

import Avatar from "Components/ui/avatar"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import Image from "next/image"
import Hero from "@/public/assets/images/bio-project-thumb.png"
import { IconEmail, IconLinkedIn, IconMapPin, IconTelephone } from "@/public/assets/svgs"

const CompanyProfileModal = () => {
  const { isOpen, onClose, type, data } = useModal()
  const isModalOpen = isOpen && type === "companyProfile"
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
        <DialogContent className="h-[30rem] max-w-md overflow-y-auto px-8 py-8 sm:h-auto sm:max-w-2xl sm:px-12 sm:py-16">
          <DialogHeader>
            <DialogTitle className="text-center">
              <p className="text-xl uppercase">Company Profile</p>
              <p className="mt-2 text-xs font-light text-gray-500">{data?.date}</p>
            </DialogTitle>
          </DialogHeader>

          <div className="sm:grid-tem flex flex-col items-center gap-y-3">
            <Avatar className={`h-28 w-28 ${data?.imgBgColor} place-self-center`}>
              <Image alt="dp" src={data?.image || Hero} height={80} />
            </Avatar>
            <div className="order-2 col-span-3 ml-2 flex flex-col sm:order-none">
              <p className="text-xl font-semibold">{data?.company}</p>
              <p className="mt-1 text-xs font-light text-gray-500">{data?.subtext}</p>
            </div>
            <div className="order-1 place-self-center sm:order-none">
              <p className="text-center text-xs text-gray-500">{data?.name}</p>
              <p className="mt-4 text-center text-xs">{data?.time}</p>
            </div>
          </div>
          <div className="mx-auto mt-4 flex max-w-[25rem] flex-col gap-5 sm:max-w-[34rem] sm:flex-row">
            <div className="flex flex-col gap-2 sm:w-[20rem]">
              <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <IconTelephone className="text-text4 dark:text-primary" />
                <p className="ml-[15px] text-xs lg:ml-2">{data?.phonenumber}</p>
              </div>
              <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <IconEmail className="text-text4 dark:text-primary" />
                <p className="ml-[15px] overflow-hidden text-ellipsis text-xs lg:ml-2">{data?.email}</p>
              </div>
              <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <IconLinkedIn className="text-text4 dark:text-primary" />
                <p className="ml-[15px] text-xs lg:ml-2">{data?.linkedin}</p>
              </div>
              <div className="flex items-center rounded-md border py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <IconMapPin className="text-text4 dark:text-primary" />
                <p className="ml-[15px] text-ellipsis text-xs lg:ml-2">{data?.address}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pr-8 sm:h-[15rem] sm:overflow-y-auto">
              {data?.description &&
                data?.description.map((item, i) => (
                  <div className="grid grid-cols-12" key={`Description-${i}`}>
                    <Image
                      className="col-span-1 place-self-center"
                      src="/modals/modal-dashboard-definition-policy.png"
                      alt="logo-description"
                      height={10}
                      width={10}
                    />
                    <p className="col-span-5 text-sm font-bold">{item.label}</p>
                    <p className="col-span-11 col-start-2 text-xs">{item.sublabel}</p>
                  </div>
                ))}
            </div>
          </div>
          <DialogFooter className="justify-start sm:justify-start">
            <p className="mt-4 text-sm sm:mt-8">{data?.footerText}</p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CompanyProfileModal
