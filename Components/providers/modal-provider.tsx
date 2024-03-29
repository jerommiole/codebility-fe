"use client"

import TodoAddModal from "@/Components/modals/TodoAddModal"
import TodoEditModal from "@/Components/modals/TodoEditModal"
import TodoViewModal from "@/Components/modals/TodoViewModal"
import CompanyPrivacyPolicyModal from "Components/modals/company-privacy-policy-modal"
import CompanyProfileModal from "Components/modals/company-profile-modal"
import CompanyTermsConditionModal from "Components/modals/company-terms-conditions-modal"
import ScheduleModal from "Components/modals/schedule-modal"
import TechStackModal from "Components/modals/techstack-modal"
import { useEffect, useState } from "react"
import ProjectAddModal from "../modals/ProjectAddModal"
import ProjectEditModal from "../modals/ProjectEditModal"
import CompanyAddModal from "../modals/CompanyAddModal"
import CompanyEditModal from "../modals/CompanyEditModal"
import CompanyViewModal from "../modals/CompanyViewModal"

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
      <TodoAddModal />
      <TodoViewModal />
      <TodoEditModal />
      <ProjectAddModal />
      <ProjectEditModal />
      <CompanyAddModal />
      <CompanyEditModal />
      <CompanyViewModal />
    </>
  )
}
