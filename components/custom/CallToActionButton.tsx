import React from "react";
import { Flex } from "@chakra-ui/react";
import OpenHubsportDialog from "./OpenHubspotDialog";

export default function CallToActionButton({
  text,
  toCenter,
}: {
  text: string;
  toCenter?: any;
}) {
  const mx = toCenter
    ? {
        base: toCenter.base ? "auto" : 0,
        sm: toCenter.sm ? "auto" : 0,
        md: toCenter.md ? "auto" : 0,
        lg: toCenter.lg ? "auto" : 0,
        xl: toCenter.xl ? "auto" : 0,
        "2xl": toCenter["2xl"] ? "auto" : 0,
      }
    : "initial";

  return (
    <Flex
      my={2}
      direction={"row"}
      align={"center"}
      justify={"center"}
      gap={4}
      borderRadius={"md"}
      p={{ base: 0, md: 0, lg: 4 }}
      w={{ base: 0, md: 0, lg: "fit-content" }}
      mx={mx}
    >
      <OpenHubsportDialog text={text} toCenter={toCenter} />
    </Flex>
  );
}
