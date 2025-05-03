import React from "react";
import { Flex, Card, Box } from "@chakra-ui/react";

type FeatureCardsProps = {
  icon: any;
  title: string;
  description: string;
};

export default function FeatureCards({
  featuredCards,
}: {
  featuredCards: FeatureCardsProps[];
}) {
  return (
    <Flex direction={"row"} my={"2rem"} justifyContent={"center"} gap={6} wrap={"wrap"}>
      {featuredCards.map((featuredCard, index) => {
        return (
          <Card.Root width="320px" variant={"elevated"} key={index}>
            <Card.Body p={4} color={"#9B7FC8"}>
              <Card.Header>
                <Box boxSize={5}>
                    {featuredCard.icon}
                </Box>
                <Card.Title color={"rgb(79, 59, 62)"} mb={2}>{featuredCard.title}</Card.Title>
              </Card.Header>
              <Card.Description fontSize={"md"}>
                {featuredCard.description}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        );
      })}
    </Flex>
  );
}
