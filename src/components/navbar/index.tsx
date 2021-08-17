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

// ? function switch Theme
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

// ? redux
import { useAppSelector } from "store";

const Navbar = () => {
  const userName = useAppSelector((state) => state.auth.user?.display_name);
  const userImage = useAppSelector((state) => state.auth.user?.images[0].url);
  const navbarStyle = useColorModeValue("yellow.400", "gray.900");

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
        <Menu>
          <MenuButton as={Button} rightIcon={<FaAngleDown />}>
            <Flex alignItems="center">
              <Avatar src={userImage} size="sm" />
              <Box ml="3">
                <Text fontSize="sm">{userName}</Text>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaUserAlt />}>Profile</MenuItem>
            <ColorModeSwitcher />
            <MenuItem icon={<FaSignOutAlt />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
