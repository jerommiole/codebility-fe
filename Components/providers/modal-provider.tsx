"use client"

import CompanyPrivacyPolicyModal from "Components/modals/company-privacy-policy-modal"
import CompanyProfileModal from "Components/modals/company-profile-modal"
import CompanyTermsConditionModal from "Components/modals/company-terms-conditions-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }
  return (
    <>
      <CompanyProfileModal />
      <CompanyPrivacyPolicyModal />
      <CompanyTermsConditionModal />
    </>
  )
}