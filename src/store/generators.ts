import { create } from "zustand";
import { IGenerator } from "../misc/perks";
import { localStorageLabels } from "../components/storage";

interface IGeneratorStore {
  activeGenerators: IGenerator[],
  addGenerator: (generator: IGenerator) => void
}

export const useGeneratorStore = create<IGeneratorStore>(
  (set) => (
    {
      activeGenerators: [],
      addGenerator: (generator) => set((state) => ({
        activeGenerators: [...state.activeGenerators, generator]
      }))
    }
  )
)
