import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import CallToActionButton from "./CallToActionButton";

export default function CallToActionSection({ description }: { description: string }) {
    return (
        <Flex 
            my={6}
            direction={"row"}
            align={"center"}
            justify={"center"}
            gap={4}
            bg={"green.50"}
            borderRadius={"md"}
            p={4}
            w={"fit-content"}
            mx={"auto"}
        >
            <HiOutlineLightningBolt size={24} color="#2B6CB0" />
            <Heading size={"2xl"}>{description}</Heading>
            <CallToActionButton text="Drop us a message" />
        </Flex>
    )
}