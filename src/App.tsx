// ? lib third party
import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";

// ? redux
import store from "./store";

// ? components
import ListRouter from "components/routers";

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ListRouter />
      </ChakraProvider>
    </Provider>
  );
};
