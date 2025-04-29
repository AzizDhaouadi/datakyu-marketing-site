import React from "react";
import { SimpleGrid, Tabs, Box } from "@chakra-ui/react";

type FeatureTabsProps = {
    step: string;
    description: string;
    icon: any;
}

export default function FeatureTabs({FeatureTabs}: {FeatureTabs: FeatureTabsProps[]}) {
    return (
        <SimpleGrid columns={1} mx="auto">
            <Tabs.Root my={"2.5rem"} defaultValue="Consultation Call" variant={"outline"}>
                <Tabs.List>
                    {FeatureTabs.map((featureTab, index) => (
                        <Tabs.Trigger key={index} width="max-content" flex="1" value={featureTab.step} color={"teal.600"} fontSize={"md"} fontWeight={"bold"}>
                            <Box pl={1} boxSize={5} color={"teal.600"}>
                                {featureTab.icon}
                            </Box>
                            {featureTab.step}
                        </Tabs.Trigger>   
                    ))}
                </Tabs.List>
                {FeatureTabs.map((featureTab, index) => (
                    <Box key={index} maxW={"1200px"}>
                        <Tabs.Content lineHeight={"taller"} my={"1.5rem"} key={index} value={featureTab.step} fontSize={"md"} fontWeight={"bold"}>
                            {featureTab.description}
                        </Tabs.Content>
                    </Box>
                ))}
            </Tabs.Root>
        </SimpleGrid>
    )
}