import { create } from 'zustand'

type State = {
  counter: number
  increaseCount: () => void
  decreaseCount: () => void
  reset: () => void
}

export const useStore = create<State>((set) => ({
  // state
  counter: 0,
  // functions
  increaseCount: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCount: () => set((state) => ({ counter: state.counter - 1 })),
  reset: () => set({ counter: 0 }),
}))
