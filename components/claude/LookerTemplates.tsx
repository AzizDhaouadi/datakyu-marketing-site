"use client";

import { Box, Grid, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box) as any;

const FEATURES = [
  "Powered by BigQuery GA4 export",
  "Time series & session performance",
  "Source-based traffic analysis",
  "User engagement visualizations",
  "Filled maps & bar charts",
  "No SQL expertise required",
];

export default function LookerTemplates() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="templates"
      bg="{colors.smoke.100}"
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
            <Box w="20px" h="1px" bg="{colors.ink.200}" />
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="{colors.ink.200}"
            >
              Dashboard templates
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
              color="{colors.ink.900}"
            >
              Duplicate. Connect.{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                Analyze.
              </Box>
            </Text>
            <Text fontSize="16px" color="{colors.ink.400}" lineHeight={1.7}>
              Our Looker Studio template is fully built and ready to go. Connect
              your own data source and you're live in minutes.
            </Text>
          </Grid>
        </MotionBox>

        {/* Single card — wide layout */}
        <MotionBox
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          bg="{colors.smoke.50}"
          border="1px solid"
          borderColor="rgba(12,11,9,0.1)"
          borderRadius="md"
          overflow="hidden"
          role="group"
          _hover={{ bg: "white" }}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
            {/* Left — info */}
            <Box
              p={{ base: 8, md: 12 }}
              borderRight={{ md: "1px solid" }}
              borderColor="rgba(12,11,9,0.1)"
            >
              <Flex justify="space-between" align="flex-start" mb={8}>
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.1em"
                  color="{colors.ink.200}"
                >
                  01
                </Text>
                <Box
                  fontFamily="mono"
                  fontSize="9px"
                  letterSpacing="0.06em"
                  color="{colors.coral.500}"
                  bg="rgba(232,81,42,0.08)"
                  px={3}
                  py={1}
                  borderRadius="2px"
                >
                  Looker Studio
                </Box>
              </Flex>

              {/* Looker icon */}
              <Flex
                w="48px"
                h="48px"
                borderRadius="sm"
                bg="rgba(232,81,42,0.1)"
                align="center"
                justify="center"
                mb={6}
                _groupHover={{ bg: "rgba(232,81,42,0.06)" }}
                transition="background 0.25s"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="#E8512A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 17l4-8 4 4 3-6 3 10" />
                  <path d="M3 13h16" />
                </svg>
              </Flex>

              <Text
                fontFamily="heading"
                fontSize="24px"
                fontWeight="700"
                letterSpacing="-0.02em"
                color="{colors.ink.900}"
                mb={4}
              >
                Google Analytics 4 with BigQuery
              </Text>

              <Text
                fontSize="15px"
                color="{colors.ink.400}"
                lineHeight={1.7}
                mb={8}
              >
                Analyze user engagement, session and event performance, and
                source-based traffic — all powered by BigQuery with data
                exported directly from GA4. No SQL expertise required.
              </Text>

              <Flex gap={3} flexWrap="wrap">
                <Link
                  as="a"
                  href="https://lookerstudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="{colors.coral.500}"
                  color="white"
                  fontFamily="body"
                  fontSize="13px"
                  fontWeight="500"
                  letterSpacing="0.02em"
                  px={6}
                  py="10px"
                  borderRadius="4px"
                  _hover={{ bg: "{colors.coral.200}", textDecoration: "none" }}
                  transition="all 0.2s"
                >
                  Open Template
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H5M10 2v5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  as="a"
                  href="#how-it-works"
                  color="{colors.ink.400}"
                  fontFamily="body"
                  fontSize="13px"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  py="10px"
                  _hover={{ color: "{colors.ink.900}", textDecoration: "none" }}
                  transition="color 0.2s"
                >
                  How to use it
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
              </Flex>
            </Box>

            {/* Right — features */}
            <Box p={{ base: 8, md: 12 }} bg="{colors.smoke.50}">
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="{colors.ink.200}"
                mb={6}
              >
                What's included
              </Text>
              <VStack align="stretch">
                {FEATURES.map((f, i) => (
                  <Flex
                    key={i}
                    align="center"
                    gap={3}
                    py={4}
                    borderBottom="1px solid"
                    borderColor="rgba(12,11,9,0.07)"
                    _last={{ borderBottom: "none" }}
                  >
                    <Flex
                      w="18px"
                      h="18px"
                      borderRadius="full"
                      bg="rgba(232,81,42,0.1)"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M1.5 4.5l2 2 4-4"
                          stroke="#E8512A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Flex>
                    <Text fontSize="14px" color="{colors.ink.600}">
                      {f}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
}
