import React from "react";
import { Box, Flex, Text, Heading, Stack } from "@chakra-ui/react";

type ListsWithIconsProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
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
      gap={4}
      justifyContent={{ md: "center", lg: "center", xl: "center" }}
    >
      {listDescriptions.map((item, index) => (
        <Flex
          w={{
            md: toReverse ? "25rem" : "inherit",
            lg: toReverse ? "35rem" : "inherit",
          }}
          key={index}
          direction={item.reverse ? "column" : "row"}
          gap={2}
        >
          <Flex direction={"column"} gap={2} width={"80%"} margin={".5rem"}>
            <Flex direction={"row"}>
              {item.icon && (
                <Box
                  alignItems={"center"}
                  display={"flex"}
                  color={"#f15a25"}
                  boxSize={10}
                >
                  {item.icon}
                </Box>
              )}
              <Heading size={"xl"}>{item.title}</Heading>
            </Flex>
            <Text>{item.description}</Text>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}
