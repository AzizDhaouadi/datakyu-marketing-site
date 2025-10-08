import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import styles from "@/app/lib/styles/FeatureCards.module.css";

// ⚛️ React Bits components
import SpotlightCard from "../Bits/SpotlightCard";

type FeatureCardsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCards({
  featuredCards,
}: {
  featuredCards: FeatureCardsProps[];
}) {
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      my={4}
      justifyContent={"center"}
      gap={6}
      wrap={"nowrap"}
      width={{ base: "fit-content", sm: "100%", md: "100%", lg: "100%" }}
      m={{ lg: "4rem auto" }}
    >
      {featuredCards.map((featuredCard, index) => {
        return (
          // <Card.Root
          //   className={styles.processCard}
          //   w={{
          //     base: "fit-content",
          //     sm: "fit-content",
          //     md: "100%",
          //     lg: "30%",
          //   }}
          //   variant={"elevated"}
          //   key={index}
          // >
          //   <Card.Body p={4} color={"#9B7FC8"}>
          //     <Card.Header>
          //       <Box boxSize={5}>{featuredCard.icon}</Box>
          //       <Card.Title color={"#f15a25"} mb={2}>
          //         {featuredCard.title}
          //       </Card.Title>
          //     </Card.Header>
          //     <Card.Description fontSize={"md"}>
          //       {featuredCard.description}
          //     </Card.Description>
          //   </Card.Body>
          // </Card.Root>
          <SpotlightCard
            key={index}
            className="custom-spotlight-card"
            spotlightColor="rgba(132, 0, 255, 0.35)"
          >
            <Box m={6}>
              <Box my={4} boxSize={5} color={"white"}>
                {featuredCard.icon}
              </Box>
              <Heading fontWeight={"bold"} size="xl" color={"white"} my={4}>
                {featuredCard.title}
              </Heading>
              <Text color={"white"}>{featuredCard.description}</Text>
            </Box>
          </SpotlightCard>
        );
      })}
    </Flex>
  );
}
