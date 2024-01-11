"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import Image from "next/image"

const CompanyPrivacyPolicyModal = () => {
  const { isOpen, onClose, type } = useModal()
  const isModalOpen = isOpen && type === "privacyPolicy"

  const policies = [
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className="h-[35rem] max-w-[60rem] overflow-y-auto p-12 md:h-auto md:p-32">
        <DialogHeader>
          <DialogTitle>
            <p className="text-center text-4xl font-normal">Privacy Policy</p>
            <p className="mx-auto mt-4 max-w-[20rem] text-center text-xs">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{" "}
            </p>
          </DialogTitle>
        </DialogHeader>
        <p className="my-4 text-center text-lg">Lorem Ipsum has been the industry's</p>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-y-8">
          {policies?.map((item, i) => (
            <div className="grid grid-cols-12" key={`def-${i}`}>
              <Image
                src="/modals/modal-dashboard-definition-policy.png"
                alt="icon-privacy-policy"
                height={20}
                width={20}
                className="col-span-1 place-self-center"
              />
              <p className="col-span-5 text-sm font-bold">{item.label}</p>
              <p className="col-span-11 col-start-2 text-xs md:col-span-10 md:col-start-2">{item.sublabel}</p>
            </div>
          ))}
        </div>
        <DialogFooter className="justify-start sm:justify-start">
          <p className="mt-8 text-sm">
            Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyPrivacyPolicyModal
