import React from "react";
import { Flex } from "@chakra-ui/react";
import OpenHubspotDialog from "./OpenHubspotDialog";

export default function CallToActionButton({
  text,
  toCenter,
}: {
  text: string;
  toCenter?: any | boolean;
}) {
  let mx = {};
  if (typeof toCenter === "object") {
    mx = toCenter.lg ? "auto" : "initial";
  }
  return (
    <Flex
      my={2}
      direction={"row"}
      align={"center"}
      justify={"center"}
      gap={4}
      borderRadius={"md"}
      p={{ base: 0, md: 0, lg: 4 }}
      w={{ lg: "fit-content" }}
      mx={mx}
    >
      <OpenHubspotDialog text={text} toCenter={true} />
    </Flex>
  );
}
