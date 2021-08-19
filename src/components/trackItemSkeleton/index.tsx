import React from "react";

import { Flex, Box, SkeletonText } from "@chakra-ui/react";

const TrackItemSkeleton = () => {
  return (
    <Flex flexDir="column" pl="20" pr="20">
      <Box padding="6" boxShadow="lg" bg="white" m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
    </Flex>
  );
};

export default TrackItemSkeleton;
