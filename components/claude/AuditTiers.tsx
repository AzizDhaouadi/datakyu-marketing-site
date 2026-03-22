"use client";

import { Box, Grid, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import NextLink from "next/link";

const MotionBox = motion(Box);

const BASIC_ITEMS = ["Google Analytics 4", "Google Tag Manager Containers"];

const FULL_ITEMS = [
  "Google Analytics 4",
  "Other Analytics Tools",
  "Google Tag Manager Containers",
  "Event Parameters",
  "User Properties",
  "Filters and Data Controls",
  "Consent & Privacy Signals",
  "Data Layer Review",
  "Conversion Tracking",
  "User Identification",
  "Custom Dimensions & Metrics",
];

const CheckIcon = ({ active }: { active: any }) => (
  <Flex
    w="18px"
    h="18px"
    borderRadius="full"
    bg={active ? "rgba(232,81,42,0.12)" : "rgba(12,11,9,0.06)"}
    align="center"
    justify="center"
    flexShrink={0}
  >
    {active ? (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5l2 2 4-4"
          stroke="#E8512A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <Box w="6px" h="1px" bg="rgba(12,11,9,0.2)" />
    )}
  </Flex>
);

export default function AuditTiers() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="audit-tiers"
      bg="{colors.ink.900}"
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
            <Box w="20px" h="1px" bg="rgba(255,255,255,0.3)" />
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.3)"
            >
              Auditing services
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
              color="white"
            >
              Comprehensive audits for{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                data you can trust.
              </Box>
            </Text>
            <Text
              fontSize="16px"
              color="rgba(255,255,255,0.5)"
              lineHeight={1.7}
            >
              Two audit tiers to fit your needs. Both deliver a clear picture of
              your analytics health. The full audit goes deeper on every
              dimension.
            </Text>
          </Grid>
        </MotionBox>

        {/* Tier cards */}
        <MotionBox
          ref={cardsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap="1px"
            bg="rgba(255,255,255,0.08)"
            border="1px solid rgba(255,255,255,0.08)"
            borderRadius="md"
            overflow="hidden"
          >
            {/* Basic */}
            <Box
              bg="{colors.ink.800}"
              p={{ base: 7, md: 10 }}
              display="flex"
              flexDirection="column"
            >
              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                color="rgba(255,255,255,0.3)"
                mb={4}
              >
                Tier 01
              </Text>
              <Text
                fontFamily="heading"
                fontSize="28px"
                fontWeight="700"
                color="white"
                letterSpacing="-0.02em"
                mb={2}
              >
                Basic Audit
              </Text>
              <Text
                fontSize="14px"
                color="rgba(255,255,255,0.4)"
                mb={8}
                lineHeight={1.7}
              >
                A focused review of your core GA4 setup and GTM containers. Best
                for teams that need a quick health check.
              </Text>

              <VStack align="stretch" flex={1} mb={8}>
                {FULL_ITEMS.map((item) => {
                  const active = BASIC_ITEMS.includes(item);
                  return (
                    <Flex
                      key={item}
                      align="center"
                      gap={3}
                      py={3}
                      borderBottom="1px solid rgba(255,255,255,0.06)"
                      _last={{ borderBottom: "none" }}
                      opacity={active ? 1 : 0.35}
                    >
                      <CheckIcon active={active} />
                      <Text
                        fontSize="13px"
                        color={active ? "white" : "rgba(255,255,255,0.4)"}
                      >
                        {item}
                      </Text>
                    </Flex>
                  );
                })}
              </VStack>

              <Link
                href="#contact"
                color="{colors.coral.500}"
                fontFamily="body"
                fontSize="14px"
                fontWeight="500"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{ color: "{colors.coral.200}", textDecoration: "none" }}
                transition="color 0.2s"
                mt="auto"
              >
                Request Basic Audit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Box>

            {/* Full */}
            <Box
              bg="{colors.ink.800}"
              p={{ base: 7, md: 10 }}
              display="flex"
              flexDirection="column"
              position="relative"
            >
              {/* Featured badge */}
              <Box
                position="absolute"
                top={0}
                right={0}
                bg="{colors.coral.500}"
                px={4}
                py={2}
                borderBottomLeftRadius="md"
              >
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  color="white"
                >
                  Recommended
                </Text>
              </Box>

              <Text
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                color="rgba(255,255,255,0.3)"
                mb={4}
              >
                Tier 02
              </Text>
              <Text
                fontFamily="heading"
                fontSize="28px"
                fontWeight="700"
                color="white"
                letterSpacing="-0.02em"
                mb={2}
              >
                Full Audit
              </Text>
              <Text
                fontSize="14px"
                color="rgba(255,255,255,0.4)"
                mb={8}
                lineHeight={1.7}
              >
                A complete deep-dive across every layer of your analytics stack.
                The standard for teams serious about data quality.
              </Text>

              <VStack align="stretch" flex={1} mb={8}>
                {FULL_ITEMS.map((item) => (
                  <Flex
                    key={item}
                    align="center"
                    gap={3}
                    py={3}
                    borderBottom="1px solid rgba(255,255,255,0.06)"
                    _last={{ borderBottom: "none" }}
                  >
                    <CheckIcon active={true} />
                    <Text fontSize="13px" color="white">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </VStack>

              <Link
                href="#contact"
                color="{colors.coral.500}"
                fontFamily="body"
                fontSize="14px"
                fontWeight="500"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{ color: "{colors.coral.200}", textDecoration: "none" }}
                transition="color 0.2s"
                mt="auto"
              >
                Request Full Audit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Box>
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
}
