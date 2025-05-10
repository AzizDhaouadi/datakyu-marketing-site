import React from "react";
import { Box, Flex, Text, Heading, Stack } from "@chakra-ui/react";

type ListsWithIconsProps = {
  title: string;
  description: string;
  icon: any;
  reverse?: boolean;
};

export default function ListsWithIcons({
  listDescriptions,
  toReverse,
}: {
  listDescriptions: ListsWithIconsProps[];
  toReverse?: boolean;
}) {
  return (
    <Stack
      direction={toReverse ? "row" : "column"}
      wrap={toReverse ? "wrap" : "initial"}
      gap={5}
      justifyContent={{ lg: "center", xl: "center" }}
    >
      {listDescriptions.map((item, index) => (
        <Flex
          w={{
            md: toReverse ? "30rem" : "inherit",
            lg: toReverse ? "40rem" : "inherit",
          }}
          key={index}
          direction={item.reverse ? "column" : "row"}
          gap={2}
        >
          {item.icon && (
            <Box alignItems={"center"} display={"flex"} boxSize={10}>
              {item.icon}
            </Box>
          )}
          <Flex direction={"column"} gap={2}>
            <Heading size={"xl"}>{item.title}</Heading>
            <Text>{item.description}</Text>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}
