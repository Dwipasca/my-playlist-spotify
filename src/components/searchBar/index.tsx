// ? lib third party
import React from "react";
import { Flex, FormControl, Input, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

// ? api
import { getSearchTracks } from "libs/api/apiSpotify";

// ? redux
import { useAppSelector, useAppDispatch } from "store";
import { setTracks } from "store/playlistSlice";

type SearchBarType = {
  setIsLoading: (query: boolean) => void;
  search: string;
  setSearch: (query: string) => void;
};

const SearchBar = ({ setIsLoading, search, setSearch }: SearchBarType) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.accessToken);

  const handleSearchTracks = () => {
    setIsLoading(true);
    if (search === "") {
      alert("Search can't be empty");
    } else {
      getSearchTracks(search, token).then((data) => {
        dispatch(setTracks(data.tracks.items));
        setIsLoading(false);
      });
      setSearch("");
    }
  };

  return (
    <Flex alignItems="center" w="full" mr={10}>
      <FormControl mr={5}>
        <Input
          type="text"
          id="input-search "
          name="input-search"
          placeholder="Search music.."
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </FormControl>
      <Button
        w="150px"
        leftIcon={<FaSearch />}
        colorScheme="yellow"
        variant="solid"
        onClick={handleSearchTracks}
        isDisabled={search === "" ? true : false}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
