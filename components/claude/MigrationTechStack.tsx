"use client";

import { Box, Grid, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box) as any;

const STACK_ITEMS = [
  {
    name: "Google Analytics 4",
    category: "Web Analytics",
    features: [
      "Event-based data model",
      "Machine learning insights",
      "Cross-platform tracking",
      "Google Ads integration",
    ],
    desc: "The industry standard rebuilt from scratch. GA4 is the right long-term bet and most teams are underusing it.",
  },
  {
    name: "Segment",
    category: "Customer Data Platform",
    features: [
      "Single collection point",
      "300+ integrations",
      "User identity resolution",
      "Real-time data pipelines",
    ],
    desc: "Collect once, send everywhere. Segment removes the need to re-instrument every time you add a new tool.",
  },
  {
    name: "Mixpanel",
    category: "Product Analytics",
    features: [
      "Self-serve exploration",
      "Funnel & retention analysis",
      "Group analytics",
      "A/B test measurement",
    ],
    desc: "Built for product teams who need to answer questions without waiting on a data analyst.",
  },
];

function StackCard({
  name,
  category,
  features,
  desc,
  delay,
}: {
  name: string;
  category: string;
  features: string[];
  desc: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      bg="{colors.ink.800}"
      p={{ base: 7, md: 9 }}
      display="flex"
      flexDirection="column"
      gap={6}
    >
      {/* Header */}
      <Box>
        <Text
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.1em"
          textTransform="uppercase"
          color="{colors.coral.500}"
          mb={2}
        >
          {category}
        </Text>
        <Text
          fontFamily="heading"
          fontSize="20px"
          fontWeight="700"
          color="white"
          letterSpacing="-0.02em"
        >
          {name}
        </Text>
      </Box>

      {/* Description */}
      <Text fontSize="13px" color="rgba(255,255,255,0.5)" lineHeight={1.7}>
        {desc}
      </Text>

      {/* Feature list */}
      <VStack align="stretch" mt="auto">
        {features.map((f, i) => (
          <Flex
            key={i}
            align="center"
            gap={3}
            py={3}
            borderBottom="1px solid rgba(255,255,255,0.06)"
            _last={{ borderBottom: "none" }}
          >
            <Box
              w="4px"
              h="4px"
              borderRadius="full"
              bg="{colors.coral.500}"
              flexShrink={0}
            />
            <Text fontSize="13px" color="rgba(255,255,255,0.6)">
              {f}
            </Text>
          </Flex>
        ))}
      </VStack>
    </MotionBox>
  );
}

export default function MigrationTechStack() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="stack"
      bg="{colors.ink.900}"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 32 }}
    >
      <Box maxW="1200px" mx="auto">
        <MotionBox
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          mb={16}
        >
          <Flex align="center" gap={3} mb={4}>
            <Box w="20px" h="1px" bg="rgba(255,255,255,0.3)" />
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.3)"
            >
              The stack
            </Text>
          </Flex>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={10}
            alignItems="flex-end"
          >
            <Text
              fontFamily="heading"
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="700"
              letterSpacing="-0.025em"
              lineHeight={1.05}
              color="white"
            >
              Tools built for{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                the long run.
              </Box>
            </Text>
            <Text
              fontSize="16px"
              color="rgba(255,255,255,0.5)"
              lineHeight={1.7}
            >
              We migrate you onto platforms that will still be the right choice
              in five years — not whatever was easiest to implement.
            </Text>
          </Grid>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="1px"
          bg="rgba(255,255,255,0.08)"
          border="1px solid rgba(255,255,255,0.08)"
          borderRadius="md"
          overflow="hidden"
        >
          {STACK_ITEMS.map((item, i) => (
            <StackCard key={item.name} {...item} delay={i * 0.1} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
