// ? lib third party
import React, { useEffect } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// ? function
import { loginAuthorizeSpotify, getProfile } from "libs/api/authSpotify";
import { useAppSelector, useAppDispatch } from "store";
import { login, storeUser } from "store/auth";

// ? style module css
import style from "./login.module.css";

const Login = () => {
  const { isAuthenticated, accessToken, user } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated && window.location.hash) {
      const params: string[] = window.location.hash.substr(1).split("&");
      params.forEach((param: string) => {
        const [key, value]: string[] = param.split("=");
        if (key === "access_token") dispatch(login(value));
      });
    }
    if (isAuthenticated && user === null) {
      getProfile(accessToken).then((data) => {
        dispatch(storeUser(data));
        // history.push("/create-playlist");
      });
    }
  }, [isAuthenticated, accessToken, user, history, dispatch]);

  return (
    <Flex
      flexDir="column"
      className={style["login-background"]}
      h="100vh"
      alignItems="center"
    >
      <Heading
        as="h1"
        size="2xl"
        bgColor="blackAlpha.500"
        borderRadius="10px"
        p="20px"
        color="white"
        mt="180px"
        mb="25px"
        lineHeight="60px"
      >
        WITHOUT MUSIC, LIFE<br></br>
        WOULD BE A MISTAKE
      </Heading>

      <Button
        width={{ sm: "40%", md: "30%", lg: "20%" }}
        onClick={loginAuthorizeSpotify}
        colorScheme="yellow"
        className={style["btn-login"]}
      >
        PLEASE LOGIN FIRST
      </Button>
    </Flex>
  );
};

export default Login;
