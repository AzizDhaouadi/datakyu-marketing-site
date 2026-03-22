"use client";

import { Box, Flex, Text, Grid, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box) as any;
const MotionFlex = motion(Flex) as any;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const STATS = [
  { val: "Free", label: "no cost, just duplicate and connect" },
  { val: "4", label: "steps to a live dashboard" },
  { val: "GA4", label: "powered by BigQuery export" },
];

export default function LookerHero() {
  return (
    <Box
      as="section"
      minH="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      px={{ base: 6, md: 12 }}
      pb={{ base: 16, md: 20 }}
      pt="80px"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(ellipse 700px 500px at 40% 20%, rgba(232,81,42,0.06), transparent 60%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.5}
        backgroundImage="linear-gradient(rgba(12,11,9,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,9,0.1) 1px, transparent 1px)"
        backgroundSize="80px 80px"
        pointerEvents="none"
      />

      <Box position="relative" zIndex={1} maxW="1200px" mx="auto" w="100%">
        <MotionFlex align="center" gap={3} mb={6} {...fadeUp(0)}>
          <Box w="32px" h="1px" bg="{colors.coral.500}" />
          <Text
            fontFamily="mono"
            fontSize="11px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="{colors.coral.500}"
          >
            Free Resources
          </Text>
        </MotionFlex>

        <MotionBox {...fadeUp(0.1)} mb={8}>
          <Text
            as="h1"
            fontFamily="heading"
            fontSize={{ base: "48px", md: "72px", lg: "88px" }}
            fontWeight="800"
            lineHeight="0.95"
            letterSpacing="-0.03em"
            color="{colors.ink.900}"
            maxW="780px"
          >
            Your data,{" "}
            <Box as="em" fontStyle="normal" color="{colors.coral.500}">
              visualized.
            </Box>
          </Text>
        </MotionBox>

        <MotionBox {...fadeUp(0.2)} mb={12}>
          <Text
            fontSize="17px"
            fontWeight="300"
            color="{colors.ink.400}"
            maxW="500px"
            lineHeight={1.7}
          >
            Ready-to-go Looker Studio templates. Duplicate, connect your data
            source, and start analyzing in minutes.
          </Text>
        </MotionBox>

        <MotionFlex align="center" gap={5} mb={20} {...fadeUp(0.3)}>
          <Link
            href="#templates"
            display="inline-flex"
            alignItems="center"
            gap={2}
            bg="{colors.coral.500}"
            color="white"
            fontFamily="body"
            fontSize="14px"
            fontWeight="500"
            letterSpacing="0.02em"
            px={8}
            py="12px"
            borderRadius="4px"
            _hover={{ bg: "{colors.coral.200}", textDecoration: "none" }}
            transition="all 0.2s"
          >
            View Templates
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            color="{colors.ink.400}"
            fontFamily="body"
            fontSize="14px"
            display="inline-flex"
            alignItems="center"
            gap={2}
            _hover={{ color: "{colors.ink.900}", textDecoration: "none" }}
            transition="color 0.2s"
          >
            How it works
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 2L6 10M6 10L3 7M6 10L9 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </MotionFlex>

        <MotionBox {...fadeUp(0.4)}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="1px"
            bg="rgba(12,11,9,0.1)"
            border="1px solid"
            borderColor="rgba(12,11,9,0.1)"
            borderRadius="md"
            overflow="hidden"
          >
            {STATS.map(({ val, label }) => (
              <Box key={val} bg="{colors.smoke.50}" px={8} py={6}>
                <Text
                  fontFamily="heading"
                  fontSize="36px"
                  fontWeight="800"
                  letterSpacing="-0.03em"
                  color="{colors.ink.900}"
                  lineHeight={1}
                  mb={2}
                >
                  {val}
                </Text>
                <Text
                  fontFamily="mono"
                  fontSize="11px"
                  color="{colors.ink.400}"
                  letterSpacing="0.04em"
                >
                  {label}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
}
