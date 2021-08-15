import * as React from "react";
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import Login from "./pages/login";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" flexDir="column">
        <Login />
      </Flex>
    </ChakraProvider>
  );
};
