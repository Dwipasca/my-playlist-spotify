// ? lib third party
import React, { useEffect } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// ? api
import {
  loginAuthorizeSpotify,
  getProfile,
  getAccessTokenFromURL,
} from "libs/api/authSpotify";

// ? redux
import { useAppDispatch } from "store";
import { login, storeUser } from "store/authSlice";

// ? style module css
import style from "./login.module.css";

const Login = () => {
  let history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUser(data)));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);

  return (
    <Flex
      flexDir="column"
      className={style["login-background"]}
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        size="2xl"
        bgColor="blackAlpha.500"
        borderRadius="10px"
        p="20px"
        color="white"
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
