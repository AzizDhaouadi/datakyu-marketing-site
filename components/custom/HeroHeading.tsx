import React from "react";
import { Highlight, Heading } from "@chakra-ui/react";

export default function HeroHeading({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  return (
    <Heading size="4xl" my={6} textAlign={"center"} letterSpacing="tight">
      <Highlight query={highlight || ""} styles={{ color: "#311c3b" }}>
        {title}
      </Highlight>
    </Heading>
  );
}
