"use client";

import { Box, Flex, Text, Grid, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

// 💻 Code Hightlighter
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const MotionBox = motion(Box) as any;
const MotionFlex = motion(Flex) as any;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const TOOLS = [
  {
    name: "Google Analytics 4",
    desc: "Event-based data model with ML insights.",
    num: "01",
  },
  {
    name: "Segment",
    desc: "Collect once, send anywhere.",
    num: "02",
  },
  {
    name: "Mixpanel",
    desc: "Self-serve product analytics.",
    num: "03",
  },
];

export default function MigrationHero() {
  const codeContent = [
    `gtag("event",
    "submitted_form",{
    "form_id":"contact_form",
    "session_number":4
});`,

    `
window.dataLayer.push({
    "event":"submitted_form",
    "form_id":"contact_form",
    "session_number":4
});`,
    `
mixpanel.track(
    "submitted_form",{
    "form_id":"contact_form",
    "session_number":4
});
    `,
  ];

  const highlightedCodeContent = codeContent.map((code) => {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  });

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
      {/* Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(ellipse 800px 600px at 70% 20%, rgba(232,81,42,0.07), transparent 60%)"
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
          <MotionFlex align="center" gap={3} {...fadeUp(0)}>
            <Box w="32px" h="1px" bg="{colors.coral.500}" />
            <Text
              fontFamily="mono"
              fontSize="11px"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="{colors.coral.500}"
            >
              Marketing Tech Migration
            </Text>
          </MotionFlex>

          <MotionBox {...fadeUp(0.1)}>
            <Text
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "48px", md: "64px", lg: "76px" }}
              fontWeight="800"
              lineHeight="0.95"
              letterSpacing="-0.03em"
              color="{colors.ink.900}"
            >
              Built for your
              <br />
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                business.
              </Box>
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0.2)}>
            <Text
              fontSize="17px"
              fontWeight="300"
              color="{colors.ink.400}"
              maxW="460px"
              lineHeight={1.7}
            >
              Build a tracking infrastructure that scales with your business.
              Future-proof your analytics and work with tools shaping the future
              of web analytics.
            </Text>
          </MotionBox>

          {/* Tool list */}
          <MotionBox {...fadeUp(0.3)}>
            <Flex direction="column" gap={0}>
              {TOOLS.map(({ name, desc, num }) => (
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
                    color="{colors.ink.200}"
                    minW="20px"
                  >
                    {num}
                  </Text>
                  <Box flex={1}>
                    <Text
                      fontFamily="heading"
                      fontSize="15px"
                      fontWeight="700"
                      color="{colors.ink.900}"
                      letterSpacing="-0.01em"
                    >
                      {name}
                    </Text>
                    <Text fontSize="13px" color="{colors.ink.400}">
                      {desc}
                    </Text>
                  </Box>
                  <Box
                    w="6px"
                    h="6px"
                    borderRadius="full"
                    bg="{colors.coral.500}"
                    flexShrink={0}
                  />
                </Flex>
              ))}
            </Flex>
          </MotionBox>

          <MotionFlex align="center" gap={5} {...fadeUp(0.4)}>
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
              py="10px"
              borderRadius="4px"
              _hover={{ bg: "{colors.coral.200}", textDecoration: "none" }}
              transition="all 0.2s"
            >
              Book a Migration Diagnostic
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
              href="#process"
              color="{colors.ink.400}"
              fontFamily="body"
              fontSize="14px"
              fontWeight="400"
              display="inline-flex"
              alignItems="center"
              gap={2}
              _hover={{ color: "{colors.ink.900}", textDecoration: "none" }}
              transition="color 0.2s"
            >
              See the process
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

        {/* Right — code block */}
        <MotionBox
          display={{ base: "none", lg: "block" }}
          {...fadeUp(0.3)}
          h="420px"
          borderRadius="md"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          p={{ base: 6, md: 7 }}
          mt={10}
          bg="#0C0B09"
        >
          <Flex direction={"column"} align="stretch" gap={6}>
            {highlightedCodeContent.map((code: string, index) => (
              <Box
                color={"white"}
                p={4}
                key={index}
                dangerouslySetInnerHTML={{ __html: code }}
              ></Box>
            ))}
          </Flex>{" "}
        </MotionBox>
      </Grid>
    </Box>
  );
}
