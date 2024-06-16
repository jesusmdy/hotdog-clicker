import { Box } from "@chakra-ui/react";
import HotDogClicker from "./components/hotDog";
import Counter from "./components/counter";
import StateStorageHandler from "./components/storage";
import Perks from "./components/perks";
import styles from "./App.module.css";
import GeneratorHandlers from "./components/generatorsHandler";

export default function App() {
  return (
    <StateStorageHandler>
      <GeneratorHandlers>
        <Box className={styles.body}>
          <Box
            maxWidth={{
              sm: "90vw",
              md: "30vw",
            }}
            mx="auto"
            height="100vh"
            display="flex"
            flexDir="column"
          >
            <Counter />
            <Box
              flex={1}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <HotDogClicker />
            </Box>
            <Perks />
          </Box>
        </Box>
      </GeneratorHandlers>
    </StateStorageHandler>
  );
}
