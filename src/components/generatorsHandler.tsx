import { PropsWithChildren, useEffect } from "react";
import { useGeneratorStore } from "../store/generators";
import { useHotDogsStore } from "../store/hotDogs";

export default function GeneratorHandlers({ children }: PropsWithChildren) {
  const { activeGenerators } = useGeneratorStore();
  const { increment } = useHotDogsStore();

  useEffect(() => {
    const generatorIntervals = activeGenerators.map((generator) => {
      return setInterval(() => {
        increment();
      }, generator.timeSpan * 1000);
    });
    return () => {
      generatorIntervals.forEach((interval) => clearInterval(interval));
    };
  }, [activeGenerators]);

  return children;
}
