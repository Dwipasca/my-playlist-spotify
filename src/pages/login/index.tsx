import React from "react";

import { Flex, Heading, Button } from "@chakra-ui/react";

import { loginAuthorizeSpotify } from "../../libs/api/authSpotify";

const Login = () => {
  return (
    <Flex flexDir="column">
      <Heading as="h1" size="4xl">
        WITHOUT MUSIC, LIFE<br></br>
        WOULD BE A MISTAKE
      </Heading>
      <Button onClick={loginAuthorizeSpotify}>Please Login First</Button>
    </Flex>
  );
};

export default Login;
