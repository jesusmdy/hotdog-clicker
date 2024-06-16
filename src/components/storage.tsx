import { Fragment, PropsWithChildren, useEffect } from "react";
import { useHotDogsStore } from "../store/hotDogs";
import { useGeneratorStore } from "../store/generators";
import { IGenerator } from "../misc/perks";

export const localStorageLabels = {
  hotDogs: "hotDogs",
  activeGenerators: "activeGenerators",
};

function HotDogsCounterStore({ children }: PropsWithChildren) {
  const { hotDogs } = useHotDogsStore();

  useEffect(() => {
    localStorage.setItem(localStorageLabels.hotDogs, hotDogs.toString());
  }, [hotDogs]);

  return children;
}

function GeneratorStore({ children }: PropsWithChildren) {
  const { activeGenerators, addGenerator } = useGeneratorStore();

  useEffect(() => {
    const generators = localStorage.getItem(
      localStorageLabels.activeGenerators
    );
    if (generators) {
      const activeGenerators: IGenerator[] = JSON.parse(generators);
      activeGenerators.forEach((generator) => {
        addGenerator(generator);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      localStorageLabels.activeGenerators,
      JSON.stringify(activeGenerators)
    );
  }, [activeGenerators]);

  return children;
}

export default function StateStorageHandler({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <HotDogsCounterStore>
        <GeneratorStore>{children}</GeneratorStore>
      </HotDogsCounterStore>
    </Fragment>
  );
}
