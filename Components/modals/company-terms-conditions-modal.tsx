"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"

const CompanyTermsConditionModal = () => {
  const { isOpen, onClose, type } = useModal()
  const isModalOpen = isOpen && type === "termsAndCondition"

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>
        Content
        <DialogFooter>Footer</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyTermsConditionModal
