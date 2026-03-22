"use client";

import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const ADVANTAGES = [
  {
    num: "01",
    title: "Future-Proof Analytics",
    desc: "Build your setup on tools shaping the future of web analytics. No more migrating away from platforms that can't keep up.",
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
        <path d="M10 2L10 6M10 2L7 5M10 2L13 5" />
        <path d="M3 10a7 7 0 1014 0A7 7 0 003 10z" />
        <path d="M10 10l3-3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Complete Data Visibility",
    desc: "Get the full picture from acquisition to conversion to retention. No blind spots, no gaps in your funnel.",
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
        <path d="M3 13h14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Compliance & Privacy Ready",
    desc: "Migrate to tools built for the post-cookie world. Cookie-consent management that works with your stack, not against it.",
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
  {
    num: "04",
    title: "Scalable & Flexible",
    desc: "Infrastructure that grows as you do. Whether you're at 10k or 10M users, your analytics won't be the bottleneck.",
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
        <path d="M3 10h4M10 3v4M17 10h-4M10 17v-4" />
        <circle cx="10" cy="10" r="3" />
      </svg>
    ),
  },
];

function AdvantageCard({
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
      p={{ base: 7, md: 9 }}
      position="relative"
      role="group"
      _hover={{ bg: "white" }}
    >
      <Flex justify="space-between" align="flex-start" mb={6}>
        <Flex
          w="44px"
          h="44px"
          borderRadius="sm"
          bg="rgba(232,81,42,0.1)"
          align="center"
          justify="center"
          _groupHover={{ bg: "rgba(232,81,42,0.06)" }}
          transition="background 0.25s"
        >
          {icon}
        </Flex>
        <Text
          fontFamily="mono"
          fontSize="10px"
          color="{colors.ink.200}"
          letterSpacing="0.1em"
        >
          {num}
        </Text>
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
      <Text fontSize="14px" color="{colors.ink.400}" lineHeight={1.7}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function AdvantagesList() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="advantages"
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
          maxW="560px"
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
              Why migrate with us
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
            Infrastructure built to{" "}
            <Box as="em" fontStyle="normal" color="{colors.coral.500}">
              last.
            </Box>
          </Text>
          <Text
            fontSize="16px"
            color="{colors.ink.400}"
            mt={4}
            lineHeight={1.7}
          >
            We don't just move your data. We rebuild your foundation on tools
            that give you a long-term edge.
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap="2px"
          bg="rgba(12,11,9,0.1)"
          border="1px solid"
          borderColor="rgba(12,11,9,0.1)"
          borderRadius="md"
          overflow="hidden"
        >
          {ADVANTAGES.map((a, i) => (
            <AdvantageCard key={a.num} {...a} delay={i * 0.1} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
