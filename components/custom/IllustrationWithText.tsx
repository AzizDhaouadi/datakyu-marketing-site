import React from "react";
import { Box, Flex, Heading, Text, List, Image } from "@chakra-ui/react";

export default function IllustrationWithText({
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  reverse,
  elaboration,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: string[];
  reverse?: boolean;
  elaboration?: string[];
}) {
  return (
    <Flex
      my={4}
      gap={6}
      direction={reverse ? "row-reverse" : "row"}
      justifyContent={"center"}
      mx="auto"
      width={{ lg: "fit-content", xl: "fit-content" }}
      height={{ lg: "fit-content", xl: "fit-content" }}
    >
      {imageSrc && (
        <Box
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ lg: "30%" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || "Illustration"}
            maxWidth={"100%"}
            height={"auto"}
            borderRadius="md"
            boxShadow="md"
          />
        </Box>
      )}
      <Flex
        ml={{ base: 0, md: 0, lg: 6 }}
        my={4}
        p={{ base: 0, md: 0, lg: 4 }}
        direction={"column"}
        gap={6}
        width={{ base: "100%", md: "100%", lg: "100%" }}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Heading size={"xl"} color={"#f15a25"}>
          {title}
        </Heading>
        <Text fontSize={"lg"}>{description}</Text>
        {features && (
          <List.Root>
            {features &&
              features.map((feature, index) => (
                <List.Item key={index} fontSize={"lg"}>
                  {feature}
                </List.Item>
              ))}
          </List.Root>
        )}
        {elaboration &&
          Array.isArray(elaboration) &&
          elaboration.map((item, index) => (
            <Text fontSize={"lg"} key={index}>
              {item}
            </Text>
          ))}
      </Flex>
    </Flex>
  );
}
