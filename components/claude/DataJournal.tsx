"use client";

import { Box, Grid, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const STATS = [
  { val: "587K", label: "Annual impressions" },
  { val: "37+", label: "Technical guides" },
  { val: "4", label: "AI platforms citing us" },
];

const POSTS = [
  {
    name: "Flatten GA4 BigQuery Export Schema",
    href: "https://datajournal.datakyu.co/flatten-ga4-bigquery-export-schema/",
  },
  {
    name: "Google Consent Mode V2 with CookieYes & GTM",
    href: "https://datajournal.datakyu.co/implementing-google-consent-mode-using-cookieyes-integration/",
  },
  {
    name: "Track Gravity Forms with Google Tag Manager",
    href: "https://datajournal.datakyu.co/track-gravity-forms-with-google-tag-manager/",
  },
  {
    name: "GA4 Measurement Protocol: Server-Side Events",
    href: "https://datajournal.datakyu.co/advanced-ga4-measurement-protocol-implementation/",
  },
];

export default function DataJournal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="data-journal"
      bg="{colors.ink.900}"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 32 }}
    >
      <Box maxW="1200px" mx="auto">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              Data Journal
            </Text>
          </Flex>
          <Text
            fontFamily="heading"
            fontSize={{ base: "36px", md: "52px" }}
            fontWeight="700"
            letterSpacing="-0.025em"
            lineHeight={1.05}
            color="white"
            mb={16}
          >
            Trusted by data teams{" "}
            <Box as="em" fontStyle="normal" color="{colors.coral.500}">
              worldwide.
            </Box>
          </Text>

          <Box
            border="1px solid rgba(255,255,255,0.07)"
            borderRadius="lg"
            overflow="hidden"
          >
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
              {/* Left — stats + description */}
              <Box
                p={{ base: 8, md: 12 }}
                borderRight={{ lg: "1px solid rgba(255,255,255,0.07)" }}
                borderBottom={{
                  base: "1px solid rgba(255,255,255,0.07)",
                  lg: "none",
                }}
              >
                {/* Stats */}
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap="1px"
                  bg="rgba(255,255,255,0.07)"
                  border="1px solid rgba(255,255,255,0.07)"
                  borderRadius="md"
                  overflow="hidden"
                  mb={10}
                >
                  {STATS.map(({ val, label }) => (
                    <Box key={val} bg="{colors.ink.800}" px={5} py={5}>
                      <Text
                        fontFamily="heading"
                        fontSize="28px"
                        fontWeight="800"
                        letterSpacing="-0.03em"
                        color="{colors.coral.500}"
                        lineHeight={1}
                        mb={1}
                      >
                        {val}
                      </Text>
                      <Text
                        fontFamily="mono"
                        fontSize="10px"
                        color="rgba(255,255,255,0.3)"
                        letterSpacing="0.04em"
                        lineHeight={1.4}
                      >
                        {label}
                      </Text>
                    </Box>
                  ))}
                </Grid>

                <Text
                  fontSize="15px"
                  color="rgba(255,255,255,0.45)"
                  lineHeight={1.75}
                  mb={8}
                >
                  Data Journal is our independent publication covering GA4, GTM,
                  BigQuery, server-side tracking, and consent management.
                  Referenced by practitioners, cited by AI tools, and shared in
                  enterprise Slack and Teams channels daily.
                </Text>

                <Link
                  href="https://datajournal.datakyu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  color="{colors.coral.500}"
                  fontFamily="body"
                  fontSize="14px"
                  fontWeight="500"
                  _hover={{
                    color: "{colors.coral.200}",
                    textDecoration: "none",
                  }}
                  transition="color 0.2s"
                >
                  Read Data Journal
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H5M10 2v5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Box>

              {/* Right — recent posts */}
              <Box p={{ base: 8, md: 12 }}>
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(255,255,255,0.3)"
                  mb={8}
                >
                  Recent guides
                </Text>
                <VStack align="stretch">
                  {POSTS.map((post, i) => (
                    <Flex
                      key={i}
                      align="center"
                      justify="space-between"
                      gap={4}
                      py={5}
                      borderBottom="1px solid rgba(255,255,255,0.06)"
                      _last={{ borderBottom: "none" }}
                      role="group"
                      cursor="pointer"
                    >
                      <Flex align="center" gap={4}>
                        <Text
                          fontFamily="mono"
                          fontSize="10px"
                          color="rgba(255,255,255,0.2)"
                          flexShrink={0}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </Text>
                        <Text
                          fontSize="14px"
                          fontWeight="500"
                          color="rgba(255,255,255,0.6)"
                          lineHeight={1.5}
                          _groupHover={{ color: "white" }}
                          transition="color 0.2s"
                        >
                          <Link target={"_blank"} href={post.href}>
                            {post.name}
                          </Link>
                        </Text>
                      </Flex>
                      <Box
                        color="rgba(255,255,255,0.2)"
                        flexShrink={0}
                        _groupHover={{ color: "{colors.coral.500}" }}
                        transition="color 0.2s"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Flex>
                  ))}
                </VStack>
              </Box>
            </Grid>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
