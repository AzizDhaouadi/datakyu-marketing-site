import React from "react";
import { Box, Flex, Heading, Text, List, Image } from "@chakra-ui/react";

export default function IllustrationWithText({
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  reverse,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  features: string[];
  reverse?: boolean;
}) {
  return (
    <Flex
      my={4}
      gap={6}
      direction={reverse ? "row-reverse" : "row"}
      justifyContent={"center"}
      mx="auto"
    >
      <Box display={{ base: "none", lg: "initial" }} width={{ lg: "30%" }}>
        <Image
          src={imageSrc}
          mx={"auto"}
          alt={imageAlt ? imageAlt : "This is a generic image"}
          width={{ lg: "100%" }}
          height={"auto"}
        ></Image>
      </Box>
      <Flex
        ml={{ base: 0, md: 0, lg: 6 }}
        my={4}
        p={{ base: 0, md: 0, lg: 4 }}
        direction={"column"}
        gap={6}
        width={{ base: "100%", md: "100%", lg: "50%" }}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Heading size={"xl"} color={"rgb(79, 59, 62)"}>
          {title}
        </Heading>
        <Text fontSize={"lg"}>{description}</Text>
        <List.Root>
          {features.map((feature, index) => (
            <List.Item key={index} fontSize={"lg"}>
              {feature}
            </List.Item>
          ))}
        </List.Root>
      </Flex>
    </Flex>
  );
}
