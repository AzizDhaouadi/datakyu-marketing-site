"use client";

import { Box, Grid, Text, Flex, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const PROBLEMS = [
  {
    title: "Data you can't trust",
    desc: "Misfire events, duplicate conversions, and gaps in tracking leave you flying blind on your most critical decisions.",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="#E8512A"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="7" cy="7" r="5" />
        <path d="M7 4v4M7 9.5v.5" />
      </svg>
    ),
  },
  {
    title: "Dashboards nobody opens",
    desc: "Pretty charts that don't answer business questions. Teams stop looking because the data doesn't reflect reality.",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="#E8512A"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M2 10h10M2 6h6M2 2h8" />
      </svg>
    ),
  },
  {
    title: "No attribution clarity",
    desc: "You're spending on channels without knowing what's driving revenue. Every budget decision is a guess.",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="#E8512A"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M7 2v5l3 3" />
        <circle cx="7" cy="7" r="5" />
      </svg>
    ),
  },
];

function ProblemItem({
  title,
  desc,
  icon,
  delay,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
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
    >
      <Flex gap={4} align="flex-start">
        <Flex
          w="32px"
          h="32px"
          borderRadius="sm"
          bg="rgba(232,81,42,0.15)"
          align="center"
          justify="center"
          flexShrink={0}
          mt="2px"
        >
          {icon}
        </Flex>
        <Box>
          <Text color="white" fontWeight="medium" fontSize="15px" mb={1}>
            {title}
          </Text>
          <Text color="rgba(255,255,255,0.6)" fontSize="15px" lineHeight={1.65}>
            {desc}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  );
}

export default function Problem() {
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      bg="#0C0B09"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      {/* Giant quote mark decoration */}
      <Text
        position="absolute"
        top="-60px"
        right={{ base: 6, md: 12 }}
        fontFamily="heading"
        fontSize="400px"
        fontWeight="extrabold"
        color="rgba(255,255,255,0.03)"
        lineHeight={1}
        pointerEvents="none"
        userSelect="none"
      >
        "
      </Text>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 16, md: 20 }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        {/* Quote */}
        <MotionBox
          ref={quoteRef}
          initial={{ opacity: 0, y: 24 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: "28px", md: "36px", lg: "44px" }}
            fontWeight="semibold"
            lineHeight={1.2}
            letterSpacing="-0.02em"
            color="white"
          >
            Most analytics setups are built to{" "}
            <Box as="em" fontStyle="normal" color="coral.500">
              look good
            </Box>{" "}
            in a dashboard.
            <br />
            Ours are built to{" "}
            <Box as="em" fontStyle="normal" color="coral.500">
              make you money.
            </Box>
          </Text>
        </MotionBox>

        {/* Problem list */}
        <VStack align="stretch">
          {PROBLEMS.map((p, i) => (
            <ProblemItem key={p.title} {...p} delay={i * 0.1} />
          ))}
        </VStack>
      </Grid>
    </Box>
  );
}
