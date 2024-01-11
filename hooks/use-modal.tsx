import { create } from "zustand"

import Image, { StaticImageData } from "next/image"
export type ModalType = "companyProfile" | "termsAndCondition" | "privacyPolicy"

interface ModalData {
  image?: string | StaticImageData
  imgBgColor?: string
  name?: string
  time?: string
  date?: string
  company?: string
  subtext?: string
  phonenumber?: string
  linkedin?: string
  email?: string
  address?: string
  description?: {
    label: string
    sublabel: string
  }[]
  footerText?: string
}

interface ModalStore {
  type: ModalType | null
  data?: ModalData
  isOpen: boolean
  onOpen: (type: ModalType, data?: ModalData) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}))
