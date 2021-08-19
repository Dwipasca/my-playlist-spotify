// ? lib third party
import React from "react";
import {
  Flex,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";

// ? components
import TrackItem from "./trackItem";

const TrackList = ({ tracks }) => {
  return (
    <Flex flexDir="column" pl="20" pr="20">
      <Table variant="simple" size="sm">
        <TableCaption>List Music</TableCaption>
        <Thead>
          <Tr>
            <Th w="5%">#</Th>
            <Th w="10%"></Th>
            <Th w="30%">TITLE</Th>
            <Th w="30%">ALBUM</Th>
            <Th w="15%">RELEASE DATE</Th>
            <Th w="5%">
              <FaRegClock />
            </Th>
            <Th w="5%"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {tracks.map((track, id) => {
            return <TrackItem key={track.id} track={track} id={id} />;
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TrackList;
