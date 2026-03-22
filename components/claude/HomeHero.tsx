"use client";

import { Box, Flex, Text, Grid, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

function shouldForwardProp(prop: any) {
  return prop;
}

const MotionBox = motion(Box) as any;
const MotionFlex = motion(Flex) as any;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const PROOF_POINTS = [
  { val: "587K", label: "Annual impressions on Data Journal" },
  { val: "-68%", label: "Misattributed direct traffic for a client" },
  { val: "59K", label: "Sessions correctly reclassified in one cycle" },
];

export default function HomeHero() {
  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      px={{ base: 6, md: 12 }}
      pb={{ base: 16, md: 20 }}
      pt="80px"
      position="relative"
      overflow="hidden"
    >
      {/* Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(ellipse 900px 700px at 65% 25%, rgba(232,81,42,0.08), transparent 60%)"
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
        {/* Eyebrow */}
        <MotionFlex align="center" gap={3} mb={6} {...fadeUp(0)}>
          <Box w="32px" h="1px" bg={"colors.coral.500"} />
          <Text
            fontFamily="mono"
            fontSize="11px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color={"colors.coral.500"}
          >
            Marketing Analytics Consulting
          </Text>
        </MotionFlex>

        {/* Headline */}
        <MotionBox {...fadeUp(0.1)} mb={8}>
          <Text
            as="h1"
            fontFamily="heading"
            fontSize={{ base: "52px", md: "76px", lg: "96px" }}
            fontWeight="800"
            lineHeight="0.95"
            letterSpacing="-0.03em"
            color="{colors.ink.900}"
            maxW="900px"
          >
            Your marketing data should not be a{" "}
            <Box as="em" fontStyle="normal" color="{colors.coral.500}">
              liability.
            </Box>
          </Text>
        </MotionBox>

        {/* Sub */}
        <MotionBox {...fadeUp(0.2)} mb={12}>
          <Text
            fontSize="18px"
            fontWeight="300"
            color="{colors.ink.400}"
            maxW="540px"
            lineHeight={1.7}
          >
            We diagnose and fix tracking, attribution, and reporting systems for
            established SMB marketing teams so every decision your leadership
            makes is backed by numbers they can trust.
          </Text>
        </MotionBox>

        {/* Actions */}
        <MotionFlex align="center" gap={5} mb={20} {...fadeUp(0.3)}>
          <Link
            href="#contact"
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
            py="13px"
            borderRadius="4px"
            _hover={{ bg: "{colors.coral.200}", textDecoration: "none" }}
            transition="all 0.2s"
          >
            Book a Data Diagnostic
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
            href="#pain-points"
            color="{colors.ink.400}"
            fontFamily="body"
            fontSize="14px"
            display="inline-flex"
            alignItems="center"
            gap={2}
            _hover={{ color: "{colors.ink.900}", textDecoration: "none" }}
            transition="color 0.2s"
          >
            See if this sounds familiar
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

        {/* Proof points */}
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
            {PROOF_POINTS.map(({ val, label }) => (
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

      {/* Scroll hint */}
      <Text
        position="absolute"
        bottom={8}
        right={{ base: 6, md: 12 }}
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color="{colors.ink.200}"
        transform="rotate(90deg)"
        transformOrigin="right center"
        display={{ base: "none", md: "block" }}
      >
        Scroll to explore
      </Text>
    </Box>
  );
}
