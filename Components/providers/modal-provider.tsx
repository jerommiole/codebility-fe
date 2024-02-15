"use client"

import AddTodoModal from "Components/modals/add-todo-modal"
import CompanyPrivacyPolicyModal from "Components/modals/company-privacy-policy-modal"
import CompanyProfileModal from "Components/modals/company-profile-modal"
import CompanyTermsConditionModal from "Components/modals/company-terms-conditions-modal"
import EditTodoModal from "Components/modals/edit-Todo-Modal"
import ScheduleModal from "Components/modals/schedule-modal"
import TechStackModal from "Components/modals/techstack-modal"
import ViewTodoModal from "Components/modals/view-todo-modal"
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
      <TechStackModal />
      <ScheduleModal />
      <AddTodoModal />
      <ViewTodoModal />
      <EditTodoModal />
    </>
  )
}
