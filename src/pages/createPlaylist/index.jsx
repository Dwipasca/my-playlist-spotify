// ? lib third party
import React, { useState } from "react";
import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

// ? redux
import { useAppSelector } from "store";

// ? components
import ModalCreatePlaylist from "components/modal";
import TrackList from "components/trackList";
import SearchBar from "components/searchBar";
import TrackItemSkeleton from "components/trackItemSkeleton";

const CreatePlaylist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tracks = useAppSelector((state) => state.playlist.tracks);
  const selectedTracks = useAppSelector(
    (state) => state.playlist.selectedTracks
  );
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Flex minH="90vh" flexDir="column">
        <Heading as="h2" size="md" mt={5} ml={5}>
          Create Playlist
        </Heading>
        <Flex
          p={5}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          boxShadow="md"
          mb={10}
          position="sticky"
        >
          <SearchBar
            setIsLoading={setIsLoading}
            search={search}
            setSearch={setSearch}
          />

          <Flex>
            <Button
              leftIcon={<FaPlus />}
              onClick={onOpen}
              colorScheme="green"
              isDisabled={selectedTracks.length === 0 ? true : false}
            >
              Create Playlist
            </Button>
          </Flex>
        </Flex>

        {isLoading ? (
          <TrackItemSkeleton />
        ) : (
          tracks.length !== 0 && <TrackList tracks={tracks} />
        )}
      </Flex>
      <ModalCreatePlaylist isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CreatePlaylist;
