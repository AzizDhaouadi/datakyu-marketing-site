import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import OpenHubsportDialog from "./OpenHubspotDialog";

export default function CallToActionButton({ text, toCenter }: { text: string, toCenter?: boolean }) {
    return (
        <Flex 
            my={2}
            direction={"row"}
            align={"center"}
            justify={"center"}
            gap={4}
            borderRadius={"md"}
            p={4}
            w={"fit-content"}
            mx={"auto"}
        >
            <OpenHubsportDialog text={text} toCenter={toCenter}/>
        </Flex>
    )
}