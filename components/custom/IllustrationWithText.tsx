import React from "react";
import {Box, Flex, Heading, Text, List} from "@chakra-ui/react";
import Image from "next/image";

export default function IllustrationWithText({title, description, imageSrc, imageAlt, features, reverse}: 
    {title: string, description: string, imageSrc: string, imageAlt?: string, features: string[], reverse?: boolean}) {
        return (
            <Flex my={"2rem"} direction={reverse ? "row-reverse" : "row"} maxW="4xl" mx="auto">
                <Image src={imageSrc} alt={imageAlt ? imageAlt : "This is a generic image"} width={300} height={180}></Image>
                <Box>
                    <Flex ml={"4rem"} p={4} direction={"column"} gap={6} alignItems={"flex-start"}>
                        <Heading size={"xl"}>{title}</Heading>
                        <Text fontSize={"lg"}>{description}</Text>
                        <List.Root>
                            {features.map((feature, index) => (
                                <List.Item key={index} fontSize={"lg"}>{feature}</List.Item>
                            ))}
                        </List.Root>
                    </Flex>
                </Box>
            </Flex>
        )
}