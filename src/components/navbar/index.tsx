// ? lib third party
import React from "react";
import {
  Flex,
  Heading,
  Button,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaAngleDown, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

// ? function switch Theme
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

// ? redux
import { useAppSelector, useAppDispatch } from "store";
import { logout } from "store/authSlice";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.auth.user?.display_name);
  const userImage = useAppSelector((state) => state.auth.user?.images[0].url);
  const user = useAppSelector((state) => state.auth.user);
  const navbarStyle = useColorModeValue("yellow.400", "gray.900");

  console.log(user);

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleProfileClick = () => {
    window.open(user?.external_urls.spotify);
  };

  return (
    <Flex
      h="70px"
      w="100vw"
      p="20px"
      bgColor={navbarStyle}
      justifyContent="space-between"
      alignItems="center"
      flexDir="row"
    >
      <Heading as="h1" size="lg">
        Clone Spotify
      </Heading>

      <Flex alignItems="center">
        <Menu colorScheme="orange">
          <MenuButton
            as={Button}
            rightIcon={<FaAngleDown />}
            colorScheme="yellow"
          >
            <Flex alignItems="center">
              <Avatar src={userImage} size="sm" />
              <Box ml="3">
                <Text fontSize="sm">{userName}</Text>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaUserAlt />} onClick={handleProfileClick}>
              Profile
            </MenuItem>
            <ColorModeSwitcher />
            <MenuItem icon={<FaSignOutAlt />} onClick={handleLogoutClick}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
