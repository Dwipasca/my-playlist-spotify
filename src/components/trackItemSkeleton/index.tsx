import React from "react";

import { Grid, Box, SkeletonText, useColorModeValue } from "@chakra-ui/react";

const TrackItemSkeleton = () => {
  const skeletonStyle = useColorModeValue("gray.100", "gray.600");
  return (
    <Grid flexDir="column" pl="20" pr="20">
      <Box padding="6" boxShadow="lg" bg={skeletonStyle} m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg={skeletonStyle} m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg={skeletonStyle} m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg={skeletonStyle} m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg={skeletonStyle} m={2}>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </Box>
    </Grid>
  );
};

export default TrackItemSkeleton;
