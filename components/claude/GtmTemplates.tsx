"use client";

import { Box, Grid, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const TEMPLATES = [
  {
    num: "01",
    title: "General Template",
    desc: "Everything you need to get started with GA4 event tracking, regardless of industry. Essential tags, triggers, and variables based on GA4's recommended event structure — ready to customize.",
    badge: "All businesses",
    file: "/downloads/gtm-general-template.json",
    features: [
      "GA4 recommended events",
      "Pre-configured triggers",
      "Reusable variables",
      "Implementation guide included",
    ],
  },
  {
    num: "02",
    title: "SaaS Template",
    desc: "Purpose-built for SaaS companies. Preconfigured tags for signups, feature usage, and conversions — a ready-to-use foundation that speeds up your time to insight.",
    badge: "SaaS",
    file: "/downloads/gtm-saas-template.json",
    features: [
      "Signup & onboarding events",
      "Feature usage tracking",
      "Conversion events",
      "User identification setup",
    ],
  },
  {
    num: "03",
    title: "E-commerce Template",
    desc: "Built for online stores. Preloaded with all essential tags for standard and e-commerce-specific events — purchases, product views, add-to-cart, and more.",
    badge: "E-commerce",
    file: "/downloads/gtm-ecommerce-template.json",
    features: [
      "Purchase & checkout events",
      "Product view tracking",
      "Add to cart events",
      "Enhanced e-commerce setup",
    ],
  },
];

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7 2v7M7 9l-3-3M7 9l3-3M2 12h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function TemplateCard({
  num,
  title,
  desc,
  badge,
  file,
  features,
  delay,
}: {
  file: string;
  num: string;
  title: string;
  desc: string;
  badge: string;
  features: string[];
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
      p={{ base: 7, md: 10 }}
      display="flex"
      flexDirection="column"
      role="group"
      _hover={{ bg: "white" }}
    >
      {/* Header */}
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
          color="{colors.coral.500}"
          bg="rgba(232,81,42,0.08)"
          px={3}
          py={1}
          borderRadius="2px"
        >
          {badge}
        </Box>
      </Flex>

      {/* GTM logo mark */}
      <Flex
        w="44px"
        h="44px"
        borderRadius="sm"
        bg="rgba(232,81,42,0.1)"
        align="center"
        justify="center"
        mb={5}
        flexShrink={0}
        _groupHover={{ bg: "rgba(232,81,42,0.06)" }}
        transition="background 0.25s"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="#E8512A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 2L2 7l8 5 8-5-8-5zM2 13l8 5 8-5M2 10l8 5 8-5" />
        </svg>
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

      <Text fontSize="14px" color="{colors.ink.400}" lineHeight={1.7} mb={7}>
        {desc}
      </Text>

      {/* Feature list */}
      <VStack align="stretch" mb={8} flex={1}>
        {features.map((f, i) => (
          <Flex
            key={i}
            align="center"
            gap={3}
            py={3}
            borderBottom="1px solid"
            borderColor="rgba(12,11,9,0.07)"
            _last={{ borderBottom: "none" }}
          >
            <Flex
              w="16px"
              h="16px"
              borderRadius="full"
              bg="rgba(232,81,42,0.1)"
              align="center"
              justify="center"
              flexShrink={0}
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
            <Text fontSize="13px" color="{colors.ink.600}">
              {f}
            </Text>
          </Flex>
        ))}
      </VStack>

      {/* Download button */}
      <Link
        as="a"
        href={file}
        download
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
        mt="auto"
        w="fit-content"
      >
        Download Template
        <DownloadIcon />
      </Link>
    </MotionBox>
  );
}

export default function GTMTemplates() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

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
              Container templates
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
              Pick your template.{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                Download. Done.
              </Box>
            </Text>
            <Text fontSize="16px" color="{colors.ink.400}" lineHeight={1.7}>
              Three containers covering the most common business types. Each one
              is fully configured and ready to import into your GTM workspace.
            </Text>
          </Grid>
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
          {TEMPLATES.map((t, i) => (
            <TemplateCard key={t.num} {...t} delay={i * 0.1} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
