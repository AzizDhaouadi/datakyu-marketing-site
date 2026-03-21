"use client";

import { Box, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box) as any;
const MotionText = motion(Text) as any;
const MotionFlex = motion(Flex) as any;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

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

      {/* Content */}
      <Box position="relative" zIndex={1} maxW="900px">
        {/* Eyebrow */}
        <MotionFlex align="center" gap={3} mb={6} {...fadeUp(0)}>
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
            fontSize={{ base: "52px", md: "80px", lg: "96px" }}
            fontWeight="extrabold"
            lineHeight="0.95"
            letterSpacing="-0.03em"
            color="ink.900"
            mb={8}
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
            maxW="520px"
            lineHeight={1.7}
            mb={12}
          >
            We architect tracking systems, build analytics infrastructure, and
            translate raw data into decisions that move the needle. No vanity
            metrics. No fluff.
          </Text>
        </MotionBox>

        {/* Actions */}
        <MotionFlex
          align="center"
          gap={5}
          {...fadeUp(0.3)}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        >
          <Link
            href="#contact"
            color="{colors.coral.500}"
            fontFamily="body"
            fontSize="14px"
            fontWeight="500"
            letterSpacing="0.02em"
            display="inline-flex"
            alignItems="center"
            gap={2}
            _hover={{ color: "{colors.coral.200}", textDecoration: "none" }}
            transition="color 0.2s"
          >
            Book a Marketing Data Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="currentColor"
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
