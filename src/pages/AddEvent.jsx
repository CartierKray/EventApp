import React, { useState } from "react";
import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
} from "@chakra-ui/react";

export const AddEvent = () => {
  const { isOpen, onOpen, onClose, reset } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        location,
        startTime,
        endTime,
        categoryIds,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    toast({
      title: "Event added succesfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
    reset();
  };

  return (
    <Box p={"6"}>
      <Heading as="h1" size="xl" mb="6">
        Add Your Event
      </Heading>
      <Button onClick={onOpen} mb="4" colorScheme="teal">
        Add Event
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Start Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={startTime}
                  onChange={(event) => setStartTime(event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>End Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={endTime}
                  onChange={(event) => setEndTime(event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  placeholder="Category IDs separated by commas"
                  value={categoryIds}
                  onChange={(event) =>
                    setCategoryIds(
                      event.target.value.split(",").map((id) => id.trim())
                    )
                  }
                />
              </FormControl>
              <Button variant="outline" mt={8} type="submit">
                Save
              </Button>
              <Button
                variant="outline"
                ml={4}
                mt={8}
                onClick={() => {
                  onClose();
                  reset();
                }}
              >
                Cancel
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
