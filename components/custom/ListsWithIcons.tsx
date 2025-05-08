import React from "react";
import { Box, Flex, Text, Heading, Stack } from "@chakra-ui/react";

type ListsWithIconsProps = {
  title: string;
  description: string;
  icon: any;
};

export default function ListsWithIcons({
  listDescriptions,
}: {
  listDescriptions: ListsWithIconsProps[];
}) {
  return (
    <Stack direction={"column"} gap={5}>
      {listDescriptions.map((item, index) => (
        <Flex key={index} direction={"row"} gap={2}>
          <Box alignItems={"center"} display={"flex"} boxSize={10}>
            {item.icon}
          </Box>
          <Flex direction={"column"} gap={2}>
            <Heading size={"xl"}>{item.title}</Heading>
            <Text>{item.description}</Text>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}
