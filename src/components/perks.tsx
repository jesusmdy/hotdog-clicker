import {
  Card,
  CardBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import GeneratorsTab from "./generators";

export default function Perks() {
  return (
    <Card
      width="100%"
      borderWidth="2px"
      borderColor="orange.300"
      borderBottomRadius={0}
      borderBottomWidth={0}
      bg="orange.50"
      borderTopRadius="xl"
      colorScheme="orange"
      height="30vh"
      overflow="auto"
    >
      <CardBody p={0}>
        <Tabs variant="soft-rounded" isFitted colorScheme="orange">
          <TabList
            position="sticky"
            top={0}
            zIndex={10}
            bg="orange.50"
            padding="2"
            borderBottomWidth="2px"
            borderColor="orange.200"
          >
            <Tab>Generator</Tab>
            <Tab>Specials</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <GeneratorsTab />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}
