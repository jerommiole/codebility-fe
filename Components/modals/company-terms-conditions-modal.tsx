"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import Image from "next/image"

const CompanyTermsConditionModal = () => {
  const { isOpen, onClose, type } = useModal()
  const isModalOpen = isOpen && type === "termsAndCondition"

  const terms = [
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      label: "Lorem Ipsum",
      sublabel:
        "Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ]

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className="h-[35rem] max-w-[60rem] overflow-y-auto p-12 md:h-auto md:px-32 md:py-20">
        <DialogHeader>
          <DialogTitle>
            <p className="text-4xl font-normal">Terms and Conditions</p>
            <p className="mx-auto mt-6 max-w-[25rem] text-xs sm:mx-0">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </DialogTitle>
        </DialogHeader>
        <p className="my-2 text-xl font-semibold">Lorem Ipsum has been the industry's</p>
        <div className="flex flex-col gap-y-3">
          {terms?.map((item, i) => (
            <div className="grid-col-12 grid gap-y-2">
              <Image
                className="col-span-1 mr-3 place-self-center"
                src="/modals/modal-terms-icon.png"
                alt="term-condition-icon"
                height={20}
                width={20}
              />
              <p className="col-span-2 col-start-2 text-sm font-bold">{item.label}</p>
              <p className="col-span-11 col-start-2 text-xs md:col-span-10 md:col-start-2">{item.sublabel}</p>
            </div>
          ))}
        </div>
        <DialogFooter className="mt-4 justify-start sm:justify-start">
          <p className="text-sm">
            Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyTermsConditionModal
