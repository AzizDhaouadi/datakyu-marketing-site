import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import OpenHubsportDialog from "./OpenHubspotDialog";

export default function CallToActionSection({ description }: { description: string }) {
    return (
        <Flex 
            my={6}
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
            <HiOutlineLightningBolt size={24} color="#9B7FC8" />
            <Heading size={"2xl"}>{description}</Heading>
            <OpenHubsportDialog text="Drop us a message" toCenter={false}/>
        </Flex>
    )
}