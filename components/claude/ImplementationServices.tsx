"use client";

import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const SERVICES = [
  {
    num: "01",
    title: "Understand what you are tracking",
    desc: "Which user actions, if tracked, can help measure your KPIs? We map your business questions to the events that actually answer them.",
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
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" />
        <path d="M10 6v4l3 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Understand your Marketing Tech Stack",
    desc: "Which tools are ideal for your tracking needs? How long will implementation take? We scope it before we start, not halfway through.",
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
        <rect x="2" y="3" width="16" height="14" rx="2" />
        <path d="M7 8h6M7 12h4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Understand data integrity and quality",
    desc: "Is your analytics layer collecting everything that matters? Do you have a single source of truth? We find out — and fix it.",
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
        <path d="M10 2l6 3v5c0 4-3 7-6 8-3-1-6-4-6-8V5l6-3z" />
        <path d="M7 10l2 2 4-4" />
      </svg>
    ),
  },
];

function ServiceCard({
  num,
  title,
  desc,
  icon,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
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
      role="group"
      _hover={{ bg: "white" }}
      display="flex"
      flexDirection="column"
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
      <Text fontSize="14px" color="{colors.ink.400}" lineHeight={1.7} flex={1}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function ImplementationServices() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="services"
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
              Implementation services
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
              Seamless implementation,{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                built to scale.
              </Box>
            </Text>
            <Text fontSize="16px" color="{colors.ink.400}" lineHeight={1.7}>
              Delivering scalable implementation tailored to your business
              objectives not a copy-paste job from a template.
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
