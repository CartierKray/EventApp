import { RadioGroup, Stack, Radio, Flex, Text, Center } from "@chakra-ui/react";

export const EventFilter = ({ value, onChange }) => {
  return (
    <Center>
      <RadioGroup
        bgGradient="linear(to-r, rgba(16, 28, 37, 0.6), rgba(12, 19, 28, 0.90))"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
        borderColor={"gray.400"}
        p={4}
        width={"125%"}
        mt={6}
        mb={6}
        color="gray.400"
        value={value}
        borderRadius={25}
      >
        <Stack>
          <Flex gap={8}>
            <Text>Filter: </Text>
            <Radio
              fontWeight={700}
              value="all"
              onChange={onChange}
              _checked={{ bg: "white", color: "#1A202C" }}
              _focus={{ boxShadow: "none" }}
            >
              All
            </Radio>
            <Radio
              value="sport"
              onChange={onChange}
              _checked={{ bg: "white", color: "#1A202C" }}
              _focus={{ boxShadow: "none" }}
            >
              Sports
            </Radio>
            <Radio
              value="games"
              onChange={onChange}
              _checked={{ bg: "white", color: "#1A202C" }}
              _focus={{ boxShadow: "none" }}
            >
              Games
            </Radio>
          </Flex>
        </Stack>
      </RadioGroup>
    </Center>
  );
};
