import * as React from "react";
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import Login from "./pages/login";
import { Provider } from "react-redux";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Flex w="100vw" h="100vh" flexDir="column">
          <Login />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
};
