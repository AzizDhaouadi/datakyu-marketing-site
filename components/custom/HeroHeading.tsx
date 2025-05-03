import React from "react";
import { Highlight, Heading } from "@chakra-ui/react";

export default function HeroHeading({title, highlight}: {title: string, highlight?: string}) {
    return (
        <Heading size="5xl" mt={"2rem"} color={"rgb(79, 59, 62)"} textAlign={"center"} letterSpacing="tight">
            <Highlight query={highlight || ""} styles={{ color: "rgb(224, 165, 51)" }}>
                {title}
            </Highlight>
        </Heading>
    )
}