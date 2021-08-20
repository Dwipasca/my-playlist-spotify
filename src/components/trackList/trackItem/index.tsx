// ? lib third party
import React from "react";
import { Tr, Td, Text, Img, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTimes } from "react-icons/fa";

// ? services
import convertMusicDuration from "libs/services/convertMusicDuration";

// ? redux
import { useAppSelector, useAppDispatch } from "store";
import {
  addSelectedTracks,
  substractSelectedTracks,
} from "store/playlistSlice";

type TrackType = {
  track: {
    uri: string;
    album: {
      name: string;
      images: {
        [index: number]: {
          url: string;
        };
      };
      release_date: string;
    };
    artists: {
      [index: number]: {
        name: string;
      };
    };
    name: string;
    duration_ms: number;
  };
  id: number;
};

const TrackItem = ({ track, id }: TrackType) => {
  const dispatch = useAppDispatch();
  const selectedTracks = useAppSelector(
    (state) => state.playlist.selectedTracks
  );
  const isSelected = selectedTracks.includes(track.uri);

  const handleButtonSelected = () => {
    // check if track already slected then we have to remove the track
    if (isSelected) {
      dispatch(substractSelectedTracks(track.uri));
    } else {
      dispatch(addSelectedTracks(track.uri));
    }
  };

  return (
    <Tr
      _hover={{
        background: "grey",
        color: "white",
      }}
    >
      <Td>{id + 1}</Td>
      <Td>
        <Img src={track.album.images[2]?.url} boxSize="60px" />
      </Td>
      <Td>
        <Text fontWeight="bold" data-testid="track-name">
          {track.name}
        </Text>
        <Text as="sub" data-testid="track-artist">
          {track.artists[0]?.name}
        </Text>
      </Td>
      <Td>{track.album.name}</Td>
      <Td>{track.album.release_date}</Td>
      <Td>{convertMusicDuration(track.duration_ms)}</Td>
      <Td>
        <IconButton
          aria-label="Search database"
          icon={isSelected ? <FaTimes /> : <FaPlus />}
          size="sm"
          colorScheme={isSelected ? "red" : "green"}
          onClick={handleButtonSelected}
        />
      </Td>
    </Tr>
  );
};

export default TrackItem;
