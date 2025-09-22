"use client";

import styles from "@/app/lib/styles/FeatureCards.module.css";
import React from "react";
import { Flex, Card, Image, Link } from "@chakra-ui/react";
import CallToActionButton from "./CallToActionButton";
import track from "@/app/lib/universalTracking";

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

  const handleClickTracking = (e: React.MouseEvent) => {
    track({
      trackingPlatform: { dataLayer: true, segment: false },
      eventPayload: {
        event_name: "Download Resource",
        event_parameters: {
          template_name: (e.target as HTMLElement)
            .closest("[data-template-target]")
            ?.querySelector("[data-template-value]")?.textContent,
        },
      },
      identify: { capture: false, identifier: "" },
    });
  };

  return (
    <Flex
      direction={"row"}
      gap={2}
      my={"2rem"}
      justifyContent={"center"}
      wrap={"wrap"}
    >
      {cardsContent.map((card, index) => (
        <Card.Root
          className={styles.downloadCard}
          key={index}
          maxW="sm"
          p={4}
          data-template-target={card.title}
          overflow="hidden"
        >
          {card.image && (
            <Image
              mx={"auto"}
              src={card.image}
              width={"40%"}
              alt="A prop image"
            />
          )}
          <Card.Body mt={4} gap="2">
            <Card.Title data-template-value color={"#f15a25"}>
              {card.title}
            </Card.Title>
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
                    onClick={handleClickTracking}
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
