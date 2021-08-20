// ? lib third party
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Textarea,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// ? redux
import { useAppSelector, useAppDispatch } from "store";
import { clearSelectedTracks } from "store/playlistSlice";

// ? api
import {
  createNewPlaylist,
  storeTracksToNewPlaylist,
} from "libs/api/apiSpotify";

const ModalCreatePlaylist = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.accessToken);
  const userID = useAppSelector((state) => state.auth.user?.id);
  const selectedTracks = useAppSelector(
    (state) => state.playlist.selectedTracks
  );

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const toast = useToast();

  const onSubmit = (values) => {
    createNewPlaylist(userID, token, values).then((newPlaylist) =>
      storeTracksToNewPlaylist(newPlaylist.id, token, selectedTracks).then(
        (data) => {
          console.log(data);
          onClose();
          toast({
            position: "top-right",
            title: "New Playlist has been created.",
            description:
              "Congratulation your new playlist successfully created.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          reset({
            name: "",
            description: "",
          });
          dispatch(clearSelectedTracks());
        }
      )
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Playlist</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="input-name">Name</FormLabel>
              <Input
                type="text"
                id="input-name"
                placeholder="Name Playlist"
                autoComplete="off"
                {...register("name", {
                  required: "Name playlist is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={errors.description}>
              <FormLabel htmlFor="input-description">Description</FormLabel>
              <Textarea
                type="text"
                id="input-description"
                placeholder="Description about new playlist"
                autoComplete="off"
                {...register("description", {
                  required: "Description about new playlist is required",
                  minLength: {
                    value: 20,
                    message: "Minimum length should be 20",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} colorScheme="red">
              Cancel
            </Button>
            <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
              Create New Playlist
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreatePlaylist;
