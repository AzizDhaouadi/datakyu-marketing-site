"use client";

import { Box, Grid, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const STATS = [
  {
    val: "-68%",
    label:
      "Drop in misattributed direct traffic after self-referral exclusion fix",
  },
  {
    val: "-20.7%",
    label: "Reduction in unassigned sessions via custom channel grouping",
  },
  {
    val: "59K",
    label: "Sessions correctly classified in a single reporting period",
  },
  { val: "3", label: "Platforms deduplicated via User ID (Web, iOS, Android)" },
];

const TECH_STACK = [
  "GA4",
  "User ID",
  "GTM",
  "Channel Attribution",
  "Referral Exclusions",
];

const OUTCOMES = [
  "Self-referral exclusions removed — direct traffic accurately reflects real behaviour",
  "Custom channel groupings covering Apple Search Ads, affiliates, programmatic, and mobile ad networks",
  "User ID implemented via GTM to enable cross-device session deduplication across Web, iOS, and Android",
  "GA4 attribution change documented with BigQuery recommended as ground truth for longitudinal analysis",
];

export default function CaseStudy() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="case-study"
      bg="{colors.smoke.50}"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 32 }}
    >
      <Box maxW="1200px" mx="auto">
        <MotionBox
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          mb={12}
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
              Our work
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
            Results that speak{" "}
            <Box as="em" fontStyle="normal" color="{colors.coral.500}">
              for themselves.
            </Box>
          </Text>
        </MotionBox>

        <MotionBox
          ref={contentRef}
          initial={{ opacity: 0, y: 24 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          border="1px solid"
          borderColor="rgba(12,11,9,0.1)"
          borderRadius="lg"
          overflow="hidden"
        >
          {/* Case study header */}
          <Flex
            px={{ base: 6, md: 10 }}
            py={6}
            borderBottom="1px solid"
            borderColor="rgba(12,11,9,0.1)"
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            gap={4}
            bg="{colors.smoke.100}"
          >
            <Box>
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="{colors.ink.200}"
                mb={1}
              >
                North American SaaS · Millions of active users
              </Text>
              <Text
                fontFamily="heading"
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="700"
                letterSpacing="-0.02em"
                color="{colors.ink.900}"
              >
                User Intelligence & Attribution Overhaul
              </Text>
            </Box>
            <Flex gap={2} flexWrap="wrap">
              {TECH_STACK.map((tech) => (
                <Box
                  key={tech}
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.06em"
                  color="{colors.ink.400}"
                  bg="{colors.smoke.50}"
                  border="1px solid rgba(12,11,9,0.1)"
                  px={3}
                  py={2}
                  borderRadius="2px"
                  whiteSpace="nowrap"
                >
                  {tech}
                </Box>
              ))}
            </Flex>
          </Flex>

          {/* Stats row */}
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap="1px"
            bg="rgba(12,11,9,0.1)"
            borderBottom="1px solid rgba(12,11,9,0.1)"
          >
            {STATS.map(({ val, label }) => (
              <Box key={val} bg="{colors.smoke.50}" px={6} py={6}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "28px", md: "36px" }}
                  fontWeight="800"
                  letterSpacing="-0.03em"
                  color="{colors.coral.500}"
                  lineHeight={1}
                  mb={2}
                >
                  {val}
                </Text>
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  color="{colors.ink.400}"
                  letterSpacing="0.04em"
                  lineHeight={1.5}
                >
                  {label}
                </Text>
              </Box>
            ))}
          </Grid>

          {/* Content */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
            {/* Problem + what we did */}
            <Box
              p={{ base: 7, md: 10 }}
              borderRight={{ md: "1px solid" }}
              borderRightColor="rgba(12,11,9,0.1)"
            >
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="{colors.coral.500}"
                mb={4}
              >
                The Problem
              </Text>
              <Text
                fontSize="14px"
                color="{colors.ink.400}"
                lineHeight={1.75}
                mb={8}
              >
                A large share of the client's traffic was appearing as Direct
                with no clear explanation. Unassigned sessions were inflating
                across all reports, channel groupings didn't reflect the actual
                acquisition mix, and cross-device user identity was fragmented
                across Web, iOS, and Android. Leadership had no reliable
                baseline to make decisions from.
              </Text>

              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="{colors.coral.500}"
                mb={4}
              >
                What We Did
              </Text>
              <Text fontSize="14px" color="{colors.ink.400}" lineHeight={1.75}>
                We audited and removed a self-referral exclusion that was
                silently bucketing traffic into Direct. We built custom channel
                groupings covering Apple Search Ads, affiliates, programmatic,
                and mobile ad networks. We implemented User ID via GTM to
                deduplicate cross-platform sessions, and documented the impact
                of GA4's April 2025 attribution change with a BigQuery-based
                reporting recommendation.
              </Text>
            </Box>

            {/* Outcomes */}
            <Box p={{ base: 7, md: 10 }}>
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="{colors.coral.500}"
                mb={6}
              >
                The Outcome
              </Text>
              <VStack align="stretch">
                {OUTCOMES.map((outcome, i) => (
                  <Flex
                    key={i}
                    align="flex-start"
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
                      mt="2px"
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4l1.5 1.5 3.5-3"
                          stroke="#E8512A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Flex>
                    <Text
                      fontSize="14px"
                      color="{colors.ink.600}"
                      lineHeight={1.65}
                    >
                      {outcome}
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
