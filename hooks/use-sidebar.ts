import { create } from "zustand"

interface PostStore {
  activeNav: Boolean
  toggleNav: () => void
  closeNav: () => void
}

export const useNavStore = create<PostStore>((set) => ({
  activeNav: false,
  toggleNav: () => set((state) => ({ activeNav: !state.activeNav })),
  closeNav: () => set((state) => ({ activeNav: false })),
}))
