import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import OpenHubsportDialog from "./OpenHubspotDialog";

export default function CallToActionSection({
  description,
}: {
  description: string;
}) {
  return (
    <Flex
      my={{ base: 2, md: 2, lg: 6 }}
      direction={"row"}
      align={"center"}
      justify={"center"}
      gap={4}
      bg={"gray.50"}
      borderRadius={"md"}
      p={4}
      w={"fit-content"}
      mx={"auto"}
    >
      <Box display={{ base: "none", md: "none", lg: "initial" }}>
        <HiOutlineLightningBolt size={24} color="#9B7FC8" />
      </Box>
      <Heading
        display={{ base: "none", md: "none", lg: "initial" }}
        size={"2xl"}
      >
        {description}
      </Heading>
      <OpenHubsportDialog text="Drop us a message" toCenter={false} />
    </Flex>
  );
}
