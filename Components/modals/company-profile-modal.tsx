"use client"

import { CallSVG, EmailSVG, LinkedinSVG, LocationSVG } from "Components/logos"
import Avatar from "Components/ui/avatar"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import Image from "next/image"
import Hero from "public/hero.png"

const CompanyProfileModal = () => {
  const { isOpen, onClose, type, data } = useModal()
  const isModalOpen = isOpen && type === "companyProfile"
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
        <DialogContent className="max-w-2xl px-12 py-16">
          <DialogHeader>
            <DialogTitle className="text-center">
              <h1 className="text-xl uppercase">Company Profile</h1>
              <p className="mt-2 text-xs font-light text-gray-500">{data?.date}</p>
            </DialogTitle>
          </DialogHeader>

          <div className="grid-tem items-center gap-y-3">
            <Avatar className={`h-28 w-28 ${data?.imgBgColor} place-self-center`}>
              <Image alt="dp" src={data?.image || Hero} height={80} />
            </Avatar>
            <div className="col-span-3 ml-2 flex flex-col">
              <p className="text-xl font-semibold">{data?.company}</p>
              <p className="mt-1 text-xs font-light text-gray-500">{data?.subtext}</p>
            </div>
            <div className="place-self-center">
              <p className="text-center text-xs text-gray-500">{data?.name}</p>
              <p className="mt-4 text-center text-xs">{data?.time}</p>
            </div>
          </div>
          <div className="mx-auto mt-4 flex max-w-[34rem] gap-5">
            <div className="flex w-[20rem] flex-col gap-2">
              <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <CallSVG className="text-text4 dark:text-primary" />
                <p className="ml-[15px] text-xs lg:ml-2">{data?.phonenumber}</p>
              </div>
              <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <EmailSVG className="text-text4 dark:text-primary" />
                <p className="ml-[15px] overflow-hidden text-ellipsis text-xs lg:ml-2">{data?.email}</p>
              </div>
              <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <LinkedinSVG className="text-text4 dark:text-primary" />
                <p className="ml-[15px] text-xs lg:ml-2">{data?.linkedin}</p>
              </div>
              <div className="flex items-center rounded-md border py-[18px] pl-4 dark:border-none dark:bg-gray-800/30">
                <LocationSVG className="text-text4 dark:text-primary" />
                <p className="ml-[15px] text-ellipsis text-xs lg:ml-2">{data?.address}</p>
              </div>
            </div>
            <div className="flex h-[15rem] flex-col gap-4 overflow-y-auto pr-8">
              {data?.description &&
                data?.description.map((item, i) => (
                  <div className="grid grid-cols-12" key={`Description-${i}`}>
                    <Image
                      className="col-span-1 place-self-center"
                      src="/bulb.png"
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
          <DialogFooter className="sm:justify-start">
            <p className="mt-8 text-sm">{data?.footerText}</p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CompanyProfileModal
