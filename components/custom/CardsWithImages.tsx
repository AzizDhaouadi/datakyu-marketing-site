import React from "react";
import { Flex, Card, Image, Link } from "@chakra-ui/react";
import CallToActionButton from "./CallToActionButton";

type CardsWithImagesProps = {
  image?: string | null;
  title: string;
  description: string;
  includeFooter?: boolean;
  dialogFooter?: React.ReactNode;
  toDownload?: boolean;
};

export default function CardsWithImages({
  cardsContent,
}: {
  cardsContent: CardsWithImagesProps[];
}) {
  const downloadableLinkMapping = (resourceName: string) => {
    if (resourceName.toLowerCase().includes("general")) {
      return "/download/all-properties-container.json";
    } else if (resourceName.toLowerCase().includes("saas")) {
      return "/download/saas-container.json";
    } else if (resourceName.toLowerCase().includes("commerce")) {
      return "/download/e-commerce-container.json";
    } else if (resourceName.toLowerCase().includes("bigquery")) {
      return "https://lookerstudio.google.com/reporting/fb0c939c-dd51-4ac7-bc1f-f0adcff1edfd";
    } else {
      return "#";
    }
  };

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
          {card.image && (
            <Image
              mx={"auto"}
              src={card.image}
              width={"40%"}
              alt="A prop image"
            />
          )}
          <Card.Body mt={4} gap="2">
            <Card.Title color={"rgb(79, 59, 62)"}>{card.title}</Card.Title>
            <Card.Description>{card.description}</Card.Description>
          </Card.Body>
          {card.includeFooter && (
            <Card.Footer gap="2">
              <CallToActionButton text="Contact Us" toCenter={true} />
            </Card.Footer>
          )}
          {card.dialogFooter && (
            <Card.Footer gap={2}>
              <Flex gap={4} justifyContent={"flex-start"} alignItems={"center"}>
                {card.dialogFooter}
                {card.toDownload && (
                  <Link
                    p={2}
                    variant={"underline"}
                    href={downloadableLinkMapping(card.title)}
                    target={"_blank"}
                  >
                    {card.title.toLowerCase().includes("bigquery")
                      ? "Replicate"
                      : "Download"}
                  </Link>
                )}
              </Flex>
            </Card.Footer>
          )}
        </Card.Root>
      ))}
    </Flex>
  );
}
