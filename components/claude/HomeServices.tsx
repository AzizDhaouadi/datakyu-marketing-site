"use client";

import { Box, Grid, Flex, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const SERVICES = [
  {
    num: "01",
    title: "Build a Measurement Plan",
    desc: "Tell us your business goals and we'll map out exactly what needs to be tracked to get you there. No guesswork, no generic frameworks.",
    href: "/services/martech-audits",
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
        <path d="M3 10h14M10 3l7 7-7 7" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Establish Growth Tracking",
    desc: "We implement your measurement plan so you can reduce uncertainty and make data-driven decisions with confidence.",
    href: "/services/marketing-tech-migration",
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
        <path d="M3 17l4-8 4 4 3-6 3 10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Identify Opportunities",
    desc: "We dig into raw data, augment it, and enrich it with CRM connectivity. We catch the shifts, outliers, and signals that point to real growth.",
    href: "/services/martech-audits",
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
        <circle cx="9" cy="9" r="6" />
        <path d="M15 15l3 3" />
      </svg>
    ),
  },
];

function ServiceCard({
  num,
  title,
  desc,
  href,
  icon,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  href: string;
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
      bg="{colors.smoke.50}"
      p={{ base: 7, md: 10 }}
      display="flex"
      flexDirection="column"
      role="group"
      _hover={{ bg: "white" }}
    >
      <Text
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        color="{colors.ink.200}"
        mb={6}
      >
        {num}
      </Text>
      <Flex
        w="44px"
        h="44px"
        borderRadius="sm"
        bg="rgba(232,81,42,0.1)"
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
        fontSize="19px"
        fontWeight="700"
        letterSpacing="-0.02em"
        color="{colors.ink.900}"
        mb={3}
      >
        {title}
      </Text>
      <Text
        fontSize="14px"
        color="{colors.ink.400}"
        lineHeight={1.7}
        flex={1}
        mb={6}
      >
        {desc}
      </Text>
      <Link
        href={href}
        color="{colors.coral.500}"
        fontFamily="body"
        fontSize="13px"
        fontWeight="500"
        display="inline-flex"
        alignItems="center"
        gap={2}
        _hover={{ color: "{colors.coral.200}", textDecoration: "none" }}
        transition="color 0.2s"
        mt="auto"
      >
        Learn more
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
    </MotionBox>
  );
}

export default function HomeServices() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="offered-services"
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
              Our approach
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
              A data-driven approach{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                that actually works.
              </Box>
            </Text>
            <Text fontSize="16px" color="{colors.ink.400}" lineHeight={1.7}>
              We believe in transparency and ownership. We make sense of your
              data, empower you to make decisions, and guide you toward growth.
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
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} {...s} delay={i * 0.1} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
