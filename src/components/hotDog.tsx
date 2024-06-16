import { Button } from "@chakra-ui/react";
import hotDogIcon from "../assets/hotDog.svg";
import { useHotDogsStore } from "../store/hotDogs";

export default function HotDogClicker() {
  const { increment } = useHotDogsStore();
  return (
    <Button
      w="250px"
      h="250px"
      cursor="pointer"
      backgroundColor="orange.100"
      _hover={{
        borderColor: "red.500",
        transform: "scale(1.05)",
      }}
      _active={{
        transform: "scale(0.95)",
        backgroundSize: "75%",
      }}
      borderColor="orange.300"
      borderRadius="32"
      borderWidth="2px"
      borderBottomWidth="8px"
      borderTopWidth="1px"
      variant="outline"
      backgroundImage={hotDogIcon}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="60%"
      onClick={increment}
      animation="pulse"
    />
  );
}
