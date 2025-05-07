import React from "react";
import { Flex, Card, Image, Text } from "@chakra-ui/react";

type CardsWithImagesProps = {
  image: string;
  title: string;
  description: string;
};

export default function CardsWithImages({
  cardsContent,
}: {
  cardsContent: CardsWithImagesProps[];
}) {
  return (
    <Flex
      direction={"row"}
      gap={6}
      my={"2rem"}
      justifyContent={"center"}
      wrap={"wrap"}
    >
      {cardsContent.map((card, index) => (
        <Card.Root key={index} maxW="sm" p={4} overflow="hidden">
          <Image
            mx={"auto"}
            src={card.image}
            width={"50%"}
            alt="A prop image"
          />
          <Card.Body gap="2">
            <Card.Title>{card.title}</Card.Title>
            <Card.Description>{card.description}</Card.Description>
          </Card.Body>
        </Card.Root>
      ))}
    </Flex>
  );
}
