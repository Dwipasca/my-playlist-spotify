import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const CreatePlaylist = () => {
  return (
    <div>
      <Flex alignSelf="flex-end">
        <ColorModeSwitcher justifySelf="flex-end" bgColor="green.200" />
        <Text>Create Playlist Page</Text>
      </Flex>
    </div>
  );
};

export default CreatePlaylist;
