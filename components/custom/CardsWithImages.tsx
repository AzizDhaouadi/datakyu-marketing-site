import React from "react";
import { Flex, Card, Image } from "@chakra-ui/react";
import CallToActionButton from "./CallToActionButton";

type CardsWithImagesProps = {
  image: string;
  title: string;
  description: string;
  includeFooter?: boolean;
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
            width={"40%"}
            alt="A prop image"
          />
          <Card.Body mt={4} gap="2">
            <Card.Title color={"rgb(79, 59, 62)"}>{card.title}</Card.Title>
            <Card.Description>{card.description}</Card.Description>
          </Card.Body>
          {card.includeFooter && (
            <Card.Footer gap="2">
              <CallToActionButton text="Contact Us" toCenter={false} />
            </Card.Footer>
          )}
        </Card.Root>
      ))}
    </Flex>
  );
}
