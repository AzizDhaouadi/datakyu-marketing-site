import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

type FeatureTabsProps = {
  step: string;
  description: string;
  icon: any;
};

export default function FeatureTabs({
  FeatureTabs,
}: {
  FeatureTabs: FeatureTabsProps[];
}) {
  return (
    <Flex direction={"row"} justifyContent={"space-evenly"}>
      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Image
          src={"/images/folders.png"}
          alt="Stacked folders"
          width={450}
          height={450}
        />
      </Flex>
      <VStack
        align="start"
        position="relative"
        pl={6}
        py={8}
        w={{ base: "100%", md: "100%", lg: "55%" }}
      >
        {FeatureTabs.map((item, index) => (
          <Flex
            borderLeft="1px dotted #CBD5E0"
            my={"1rem"}
            key={index}
            direction="column"
            position="relative"
          >
            <Flex
              direction={"row"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Box ml={"1rem"}>{item.icon}</Box>
              <Text ml={"1rem"} fontWeight="bold" fontSize="lg" mb={1}>
                {item.step}
              </Text>
            </Flex>
            <Text ml={"2rem"} color="gray.600">
              {item.description}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
}
