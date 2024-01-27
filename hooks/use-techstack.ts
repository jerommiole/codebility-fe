import { StaticImageData } from "next/image"
import { create } from "zustand"

export interface Tech {
  name: string
  icon: string | StaticImageData
  index?: number
}

interface TechStack {
  stack: Tech[]
  addRemoveStack: (tech: Tech) => void
  clearStack: () => void
}

export const useTechStackStore = create<TechStack>((set) => ({
  stack: [],
  addRemoveStack: (tech) =>
    set((state) => {
      const isObjectInArray = state.stack.some((obj) => {
        return JSON.stringify(obj) === JSON.stringify(tech)
      })
      if (isObjectInArray) {
        return { stack: state.stack.filter((obj) => JSON.stringify(obj) !== JSON.stringify(tech)) }
      } else {
        return { stack: [...state.stack, tech] }
      }
    }),
  clearStack: () => set((state) => ({ stack: [] })),
}))
