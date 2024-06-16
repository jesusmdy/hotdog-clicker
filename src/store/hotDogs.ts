import { create } from "zustand";
import { localStorageLabels } from "../components/storage";

interface ICounterStore {
  hotDogs: number;
  totalHotDogs: number;
  increment: () => void;
  decrement: () => void;
  setTotalHotDogs: (totalHotDogs: number) => void;
}

export const useHotDogsStore = create<ICounterStore>(
  (set) => (
    {
      hotDogs: Number(localStorage.getItem(localStorageLabels.hotDogs)),
      totalHotDogs: 0,
      increment: () => set((state) => ({ hotDogs: state.hotDogs + 1 })),
      decrement: () => set((state) => ({ hotDogs: state.hotDogs - 1 })),
      setTotalHotDogs: (totalHotDogs) => set((state) => ({ totalHotDogs })),
    }
  )
)
