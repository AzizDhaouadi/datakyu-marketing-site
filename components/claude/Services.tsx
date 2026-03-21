"use client";

import { Box, Grid, Text, Flex, HStack, Link, Tag } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NextLink from "next/link";
import CallToActionButton from "../custom/CallToActionButton";

const MotionBox = motion(Box);

const services = [
  {
    num: "01",
    title: "Auditing & Implementation",
    desc: "We diagnose your current tracking setup, find what's broken or missing, and rebuild it to industry standards. From GTM to server-side, we get the foundation right.",
    tags: ["GA4", "GTM", "Server-side", "Consent mode"],
    icon: (
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
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6v4l3 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Product Performance",
    desc: "We instrument your product with events that actually tell you something. Funnel analysis, retention cohorts, feature adoption — built to answer the questions your team keeps asking.",
    tags: ["Mixpanel", "Amplitude", "Funnels", "Retention"],
    icon: (
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
        <path d="M3 17l4-8 4 4 3-6 3 10M3 13h14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Analytics Consulting",
    desc: "Embedded analytics expertise for your team. We join your sprints, advise on measurement strategy, and turn your data stack into a competitive advantage — not a liability.",
    tags: ["Strategy", "Dashboards", "Attribution", "Reporting"],
    icon: (
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
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M10 7v6M7 10h6" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ServiceCard({
  num,
  title,
  desc,
  tags,
  icon,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
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
      bg="smoke.50"
      p={{ base: 7, md: 10 }}
      position="relative"
      role="group"
      _hover={{ bg: "white" }}
      display="flex"
      flexDirection="column"
    >
      <Text
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        color="ink.200"
        mb={6}
      >
        {num}
      </Text>

      <Flex
        w="44px"
        h="44px"
        borderRadius="sm"
        bg="rgba(232,81,42,0.12)"
        align="center"
        justify="center"
        mb={5}
        _groupHover={{ bg: "rgba(232,81,42,0.06)" }}
        transition="background 0.25s"
      >
        {icon}
      </Flex>

      <Text
        fontFamily="heading"
        fontSize="20px"
        fontWeight="bold"
        letterSpacing="-0.02em"
        color="ink.900"
        mb={3}
      >
        {title}
      </Text>

      <Text fontSize="14px" color="ink.400" lineHeight={1.7} mb={7} flex={1}>
        {desc}
      </Text>

      <HStack flexWrap="wrap" mb={6}>
        {tags.map((tag: any) => (
          <Tag.Root
            key={tag}
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.06em"
            fontWeight="normal"
            px={3}
            py={1}
            bg="smoke.200"
            color="ink.600"
            borderRadius="2px"
            border="1px solid"
            borderColor="rgba(12,11,9,0.1)"
          >
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        ))}
      </HStack>

      <Link
        as={NextLink}
        href="#contact"
        display="inline-flex"
        alignItems="center"
        gap={2}
        fontSize="13px"
        fontWeight="medium"
        color="coral.500"
        _hover={{ gap: "10px", textDecoration: "none" }}
        transition="gap 0.2s"
      >
        Learn more <ArrowIcon />
      </Link>
    </MotionBox>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="services"
      bg="smoke.50"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 32 }}
    >
      <Box maxW="1200px" mx="auto">
        {/* Header */}
        <MotionBox
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Flex
            justify="space-between"
            align={{ base: "flex-start", md: "flex-end" }}
            direction={{ base: "column", md: "row" }}
            gap={10}
            mb={16}
          >
            <Box maxW="480px">
              <Flex align="center" gap={3} mb={4}>
                <Box w="20px" h="1px" bg="ink.200" />
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="ink.200"
                >
                  What we do
                </Text>
              </Flex>
              <Text
                fontFamily="heading"
                fontSize={{ base: "36px", md: "52px" }}
                fontWeight="bold"
                letterSpacing="-0.025em"
                lineHeight={1.05}
                color="ink.900"
              >
                Analytics work that{" "}
                <Box as="em" fontStyle="normal" color="coral.500">
                  scales with you.
                </Box>
              </Text>
              <Text fontSize="16px" color="ink.400" mt={4} lineHeight={1.7}>
                Three core practice areas. Each one built to close the gap
                between raw data and real decisions.
              </Text>
            </Box>
            <CallToActionButton text={"Contact us"} />
            {/* <Button
              as={NextLink}
              href="#contact"
              variant="primary"
              flexShrink={0}
            >
              Contact us
            </Button> */}
          </Flex>
        </MotionBox>

        {/* Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="2px"
          bg="rgba(12,11,9,0.1)"
          border="1px solid"
          borderColor="rgba(12,11,9,0.1)"
          borderRadius="md"
          overflow="hidden"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.num} {...s} delay={i * 0.1} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
