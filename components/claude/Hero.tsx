"use client";

import { Box, Flex, Text, Grid, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box) as any;
const MotionText = motion(Text) as any;
const MotionFlex = motion(Flex) as any;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const METRICS = [
  {
    num: "01",
    name: "Tracking Architecture",
    desc: "Custom event schemas built for your stack.",
  },
  {
    num: "02",
    name: "Analytics Infrastructure",
    desc: "Pipelines that don't break under pressure.",
  },
  {
    num: "03",
    name: "Decision Intelligence",
    desc: "From raw data to actionable insight.",
  },
];

const STATS = [
  { value: "98%", label: "Data accuracy rate" },
  { value: "3×", label: "Faster time-to-insight" },
  { value: "40+", label: "Stacks integrated" },
];

export default function Hero() {
  return (
    <Box
      as="section"
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
      {/* Radial bg glow */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(ellipse 800px 600px at 70% 30%, rgba(232,81,42,0.07), transparent 60%)"
        pointerEvents="none"
      />

      {/* Grid lines */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.5}
        backgroundImage="linear-gradient(rgba(12,11,9,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,9,0.1) 1px, transparent 1px)"
        backgroundSize="80px 80px"
        pointerEvents="none"
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 16, lg: 20 }}
        alignItems="center"
        position="relative"
        zIndex={1}
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        {/* Left — copy */}
        <Flex direction="column" gap={8}>
          {/* Eyebrow */}
          <MotionFlex align="center" gap={3} {...fadeUp(0)}>
            <Box w="32px" h="1px" bg="coral.500" />
            <Text
              fontFamily="mono"
              fontSize="11px"
              fontWeight="normal"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="coral.500"
            >
              Custom Analytics Solutions
            </Text>
          </MotionFlex>

          {/* Headline */}
          <MotionBox {...fadeUp(0.1)}>
            <Text
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "52px", md: "64px", lg: "76px" }}
              fontWeight="extrabold"
              lineHeight="0.95"
              letterSpacing="-0.03em"
              color="ink.900"
            >
              Your data,
              <br />
              finally
              <br />
              <Box as="em" fontStyle="normal" color="coral.500">
                working.
              </Box>
            </Text>
          </MotionBox>

          {/* Subheading */}
          <MotionBox {...fadeUp(0.2)}>
            <Text
              fontSize="17px"
              fontWeight="light"
              color="ink.400"
              maxW="460px"
              lineHeight={1.7}
            >
              We architect tracking systems, build analytics infrastructure, and
              translate raw data into decisions that move the needle. No vanity
              metrics. No fluff.
            </Text>
          </MotionBox>

          {/* Service list */}
          <MotionBox {...fadeUp(0.3)}>
            <Flex direction="column" gap={0}>
              {METRICS.map(({ name, desc, num }) => (
                <Flex
                  key={num}
                  gap={4}
                  py={4}
                  borderBottom="1px solid"
                  borderColor="rgba(12,11,9,0.1)"
                  _first={{
                    borderTop: "1px solid",
                    borderTopColor: "rgba(12,11,9,0.1)",
                  }}
                  align="center"
                >
                  <Text
                    fontFamily="mono"
                    fontSize="10px"
                    color="ink.200"
                    minW="20px"
                  >
                    {num}
                  </Text>
                  <Box flex={1}>
                    <Text
                      fontFamily="heading"
                      fontSize="15px"
                      fontWeight="700"
                      color="ink.900"
                      letterSpacing="-0.01em"
                    >
                      {name}
                    </Text>
                    <Text fontSize="13px" color="ink.400">
                      {desc}
                    </Text>
                  </Box>
                  <Box
                    w="6px"
                    h="6px"
                    borderRadius="full"
                    bg="coral.500"
                    flexShrink={0}
                  />
                </Flex>
              ))}
            </Flex>
          </MotionBox>

          {/* Actions */}
          <MotionFlex align="center" gap={5} {...fadeUp(0.4)}>
            <Link
              href="#contact"
              display="inline-flex"
              alignItems="center"
              gap={2}
              bg="coral.500"
              color="white"
              fontFamily="body"
              fontSize="14px"
              fontWeight="500"
              letterSpacing="0.02em"
              px={8}
              py="10px"
              borderRadius="4px"
              _hover={{ bg: "coral.200", textDecoration: "none" }}
              transition="all 0.2s"
            >
              Book a Marketing Data Diagnostic
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
              href="#services"
              fontSize="14px"
              color="ink.400"
              display="flex"
              alignItems="center"
              gap={1}
              _hover={{ color: "ink.900", textDecoration: "none" }}
              transition="color 0.2s"
            >
              See our services
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
        </Flex>

        {/* Right — stats card */}
        <MotionBox
          display={{ base: "none", lg: "flex" }}
          flexDirection="column"
          gap={0}
          {...fadeUp(0.3)}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          borderRadius="md"
          overflow="hidden"
          border="1px solid"
          borderColor="rgba(12,11,9,0.08)"
          bg="#0C0B09"
          mt={10}
        >
          {/* Card header */}
          <Flex
            px={7}
            py={5}
            borderBottom="1px solid rgba(255,255,255,0.06)"
            align="center"
            justify="space-between"
          >
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.3)"
            >
              Performance Overview
            </Text>
            <Flex gap={2}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <Box key={c} w="10px" h="10px" borderRadius="full" bg={c} />
              ))}
            </Flex>
          </Flex>

          {/* Stats grid */}
          <Grid templateColumns="repeat(3, 1fr)" gap={0}>
            {STATS.map(({ value, label }, i) => (
              <Box
                key={label}
                px={6}
                py={8}
                borderRight={
                  i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none"
                }
              >
                <Text
                  fontFamily="heading"
                  fontSize="38px"
                  fontWeight="800"
                  color="white"
                  letterSpacing="-0.03em"
                  lineHeight={1}
                  mb={2}
                >
                  {value}
                </Text>
                <Text
                  fontFamily="mono"
                  fontSize="11px"
                  color="rgba(255,255,255,0.35)"
                  letterSpacing="0.04em"
                  lineHeight={1.4}
                >
                  {label}
                </Text>
              </Box>
            ))}
          </Grid>

          {/* Divider */}
          <Box h="1px" bg="rgba(255,255,255,0.06)" />

          {/* Chart placeholder — bar sparkline */}
          <Box px={7} py={6}>
            <Flex justify="space-between" mb={4}>
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.3)"
              >
                Data Quality Score
              </Text>
              <Text
                fontFamily="mono"
                fontSize="10px"
                color="rgba(232,81,42,0.8)"
              >
                +12% this month
              </Text>
            </Flex>
            <Flex align="flex-end" gap="6px" h="64px">
              {[40, 55, 45, 60, 52, 70, 65, 80, 72, 88, 84, 98].map((h, i) => (
                <Box
                  key={i}
                  flex={1}
                  h={`${h}%`}
                  borderRadius="2px"
                  bg={i === 11 ? "coral.500" : "rgba(255,255,255,0.08)"}
                  transition="height 0.3s ease"
                />
              ))}
            </Flex>
          </Box>

          {/* Footer row */}
          <Flex
            px={7}
            py={4}
            borderTop="1px solid rgba(255,255,255,0.06)"
            align="center"
            justify="space-between"
          >
            <Flex align="center" gap={2}>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="coral.500"
                css={{ animation: "pulse 2s ease-in-out infinite" }}
              />
              <Text
                fontFamily="mono"
                fontSize="10px"
                color="rgba(255,255,255,0.3)"
                letterSpacing="0.06em"
              >
                Live tracking active
              </Text>
            </Flex>
            <Text
              fontFamily="mono"
              fontSize="10px"
              color="rgba(255,255,255,0.2)"
            >
              Updated just now
            </Text>
          </Flex>
        </MotionBox>
      </Grid>

      {/* Scroll hint */}
      <Text
        position="absolute"
        bottom={8}
        right={{ base: 6, md: 12 }}
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color="ink.200"
        transform="rotate(90deg)"
        transformOrigin="right center"
        display={{ base: "none", md: "block" }}
      >
        Scroll to explore
      </Text>
    </Box>
  );
}
