import React from "react";
import { Highlight, Heading } from "@chakra-ui/react";

export default function HeroHeading({title, highlight}: {title: string, highlight?: string}) {
    return (
        <Heading size="5xl" textAlign={"center"} letterSpacing="tight">
            <Highlight query={highlight || ""} styles={{ color: "teal.600" }}>
                {title}
            </Highlight>
        </Heading>
    )
}