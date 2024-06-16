import { Box, Image, Text } from "@chakra-ui/react";
import { useHotDogsStore } from "../store/hotDogs";
import hotDogIcon from "../assets/hotDog.svg";

export default function Counter() {
  const { hotDogs } = useHotDogsStore();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="row"
      padding="4"
      borderRadius="xl"
      justifyContent="center"
      gap="4"
      borderWidth="2px"
      borderColor="orange.300"
      borderTopRadius={0}
      backgroundColor="orange.50"
      borderTop={0}
    >
      <Image src={hotDogIcon} width="50px" />
      <Text
        fontWeight="bold"
        color="orange.600"
      >{`You have ${hotDogs} Hot Dogs`}</Text>
    </Box>
  );
}
