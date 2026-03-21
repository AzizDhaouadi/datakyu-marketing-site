"use client";

import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const MANIFESTO = [
  { less: "Hypothetical", more: "Evidence-based execution" },
  { less: "Noise", more: "Measurable outcomes" },
  { less: "Talk", more: "Actionable tracking" },
  { less: "Friction", more: "Scalable infrastructure" },
  { less: "Guesswork", more: "Data-informed decisions" },
  { less: "Fragmentation", more: "Unified visibility" },
  { less: "Lag", more: "Real-time clarity" },
];

const DELIVERABLES = [
  {
    num: "01",
    title: "Documentation",
    desc: "We design, build, and maintain robust tracking documentation — naming conventions, implementation references, and event schemas — so your data stays trustworthy long after we're gone.",
    tag: "Included in all packages",
  },
  {
    num: "02",
    title: "Tracking Code",
    desc: "High-quality, maintainable tracking code across web and product platforms. Data flows cleanly from event to destination, with no silent failures.",
    tag: "Included in all packages",
  },
  {
    num: "03",
    title: "Training",
    desc: "Workshops and stakeholder sessions to ensure everyone — from marketers to engineers — understands how to use and trust the data. Your team owns it when we're done.",
    tag: "Coming soon",
  },
];

function ManifestoRow({
  less,
  more,
  delay,
}: {
  less: string;
  more: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Grid
        templateColumns="1fr 40px 1fr"
        gap={4}
        py={5}
        borderBottom="1px solid rgba(255,255,255,0.07)"
        alignItems="center"
      >
        <Text
          fontFamily="heading"
          fontSize={{ base: "15px", md: "18px" }}
          fontWeight="700"
          color="rgba(255,255,255,0.3)"
          letterSpacing="-0.01em"
          textDecoration="line-through"
        >
          {less}
        </Text>
        <Flex justify="center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M10 5l3 3-3 3"
              stroke="#E8512A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
        <Text
          fontFamily="heading"
          fontSize={{ base: "15px", md: "18px" }}
          fontWeight="700"
          color="white"
          letterSpacing="-0.01em"
        >
          {more}
        </Text>
      </Grid>
    </MotionBox>
  );
}

function DeliverableCard({
  num,
  title,
  desc,
  tag,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  tag: string;
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
      bg="{colors.smoke.50}"
      p={{ base: 7, md: 9 }}
      role="group"
      _hover={{ bg: "white" }}
    >
      <Flex justify="space-between" align="flex-start" mb={6}>
        <Text
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.1em"
          color="{colors.ink.200}"
        >
          {num}
        </Text>
        <Box
          fontFamily="mono"
          fontSize="9px"
          letterSpacing="0.06em"
          color={
            tag === "Coming soon" ? "{colors.ink.200}" : "{colors.coral.500}"
          }
          bg={
            tag === "Coming soon"
              ? "{colors.smoke.200}"
              : "rgba(232,81,42,0.08)"
          }
          px={3}
          py={1}
          borderRadius="2px"
        >
          {tag}
        </Box>
      </Flex>
      <Text
        fontFamily="heading"
        fontSize="20px"
        fontWeight="700"
        letterSpacing="-0.02em"
        color="{colors.ink.900}"
        mb={3}
      >
        {title}
      </Text>
      <Text fontSize="14px" color="{colors.ink.400}" lineHeight={1.7}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function AnalyticsImportance() {
  const h1Ref = useRef(null);
  const h1InView = useInView(h1Ref, { once: true, margin: "-40px" });
  const h2Ref = useRef(null);
  const h2InView = useInView(h2Ref, { once: true, margin: "-40px" });

  return (
    <>
      {/* Deliverables — light */}
      <Box
        as="section"
        id="deliverables"
        bg="{colors.smoke.100}"
        px={{ base: 6, md: 12 }}
        py={{ base: 20, md: 32 }}
      >
        <Box maxW="1200px" mx="auto">
          <MotionBox
            ref={h2Ref}
            initial={{ opacity: 0, y: 24 }}
            animate={h2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            mb={16}
          >
            <Flex align="center" gap={3} mb={4}>
              <Box w="20px" h="1px" bg="{colors.ink.200}" />
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="{colors.ink.200}"
              >
                What you get
              </Text>
            </Flex>
            <Text
              fontFamily="heading"
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="700"
              letterSpacing="-0.025em"
              lineHeight={1.05}
              color="{colors.ink.900}"
            >
              The backbone of{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                marketing analytics.
              </Box>
            </Text>
          </MotionBox>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="2px"
            bg="rgba(12,11,9,0.1)"
            border="1px solid"
            borderColor="rgba(12,11,9,0.1)"
            borderRadius="md"
            overflow="hidden"
          >
            {DELIVERABLES.map((d, i) => (
              <DeliverableCard key={d.num} {...d} delay={i * 0.1} />
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Manifesto — dark */}
      <Box
        as="section"
        id="analytics-importance"
        bg="{colors.ink.900}"
        px={{ base: 6, md: 12 }}
        py={{ base: 20, md: 32 }}
      >
        <Box maxW="1200px" mx="auto">
          <MotionBox
            ref={h1Ref}
            initial={{ opacity: 0, y: 24 }}
            animate={h1InView ? { opacity: 1, y: 0 } : {}}
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
                The standard we hold
              </Text>
            </Flex>
            <Text
              fontFamily="heading"
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="700"
              letterSpacing="-0.025em"
              lineHeight={1.05}
              color="white"
              maxW="600px"
            >
              You are only as strong as your
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                analytics layer.
              </Box>
            </Text>
          </MotionBox>

          <Box borderTop="1px solid rgba(255,255,255,0.07)">
            {MANIFESTO.map((row, i) => (
              <ManifestoRow key={row.less} {...row} delay={i * 0.06} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
