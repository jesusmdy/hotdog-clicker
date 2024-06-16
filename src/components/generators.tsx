import _, { forEach } from "lodash";
import { hotDogsGenerators, IGenerator } from "../misc/perks";
import { Box, Button, Card, CardBody, Flex, Tag, Text } from "@chakra-ui/react";
import { useHotDogsStore } from "../store/hotDogs";
import { useGeneratorStore } from "../store/generators";
import { useMemo } from "react";

function BuyGeneratorButton({ generator }: { generator: IGenerator }) {
  const { hotDogs, decrement } = useHotDogsStore();
  const { addGenerator } = useGeneratorStore();

  const canAfford = useMemo(
    () => hotDogs >= generator.cost,
    [hotDogs, generator.cost]
  );

  function handleBuyGenerator() {
    if (canAfford) {
      addGenerator(generator);
      for (let i = 0; i < generator.cost; i++) {
        setTimeout(() => decrement(), 1000);
      }
    }
  }

  return (
    <Button
      colorScheme="orange"
      variant="outline"
      borderWidth="2px"
      width="100px"
      borderBottomWidth="3.5px"
      borderRadius="lg"
      disabled={!canAfford}
      onClick={handleBuyGenerator}
      _disabled={{
        bg: "orange.300",
        borderColor: "orange.50",
      }}
    >
      {`🌭 ${new Intl.NumberFormat("en-US").format(generator.cost)}`}
    </Button>
  );
}

function Generator({ generator }: { generator: IGenerator }) {
  const { activeGenerators } = useGeneratorStore();
  const kindGeneratorCount = useMemo(
    () =>
      activeGenerators.filter(
        (activeGenerator) => activeGenerator.name === generator.name
      ).length,
    [activeGenerators, generator.name]
  );
  return (
    <Card
      variant="outline"
      colorScheme="orange"
      size="sm"
      borderWidth="2px"
      borderColor="orange.300"
      borderRadius="md"
      bg="orange.100"
    >
      <CardBody>
        <Flex alignItems="center" gap={4}>
          <Box flex={1}>
            <Flex alignItems="center" gap={2}>
              {kindGeneratorCount > 0 && (
                <Tag variant="solid" colorScheme="orange">
                  {kindGeneratorCount}
                </Tag>
              )}

              <Text color="orange.500" fontWeight="bold">
                {generator.name}
              </Text>
            </Flex>
            <Text color="orange.900" fontWeight="bold" flex={1} fontSize="12px">
              {generator.description}
            </Text>
          </Box>
          <BuyGeneratorButton generator={generator} />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default function GeneratorsTab() {
  return (
    <Flex flexDir="column" gap="2">
      {_.map(hotDogsGenerators, (generator) => (
        <Generator key={generator.name} generator={generator} />
      ))}
    </Flex>
  );
}
