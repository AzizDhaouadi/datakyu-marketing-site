"use client";

import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box) as any;

const STEPS = [
  {
    num: "01",
    title: "Diagnostic",
    desc: "We audit your full data pipeline — from collection to reporting. You get a clear map of what's working, what's broken, and what's missing.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "We design a tracking plan and event schema tailored to your business. Every event has a purpose. No noise, no gaps.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "We build it. Server-side tags, GTM containers, SDK calls — all validated with QA testing before we ship anything to production.",
  },
  {
    num: "04",
    title: "Insights",
    desc: "We turn the data into dashboards and reports your team actually uses, plus recommendations on what to do next.",
  },
];

function Step({
  num,
  title,
  desc,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
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
      px={{ base: 0, md: 6 }}
    >
      <Flex
        w="56px"
        h="56px"
        borderRadius="full"
        border="1px solid"
        borderColor="rgba(12,11,9,0.18)"
        bg="smoke.200"
        align="center"
        justify="center"
        mb={6}
        zIndex={1}
        position="relative"
      >
        <Text
          fontFamily="mono"
          fontSize="12px"
          fontWeight="medium"
          color="coral.500"
        >
          {num}
        </Text>
      </Flex>

      <Text
        fontFamily="heading"
        fontSize="17px"
        fontWeight="bold"
        letterSpacing="-0.01em"
        color="ink.900"
        mb={3}
      >
        {title}
      </Text>
      <Text fontSize="13px" color="ink.400" lineHeight={1.65}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="process"
      bg="smoke.200"
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
          mb={20}
          maxW="560px"
        >
          <Flex align="center" gap={3} mb={4}>
            <Box w="20px" h="1px" bg="ink.200" />
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="ink.200"
            >
              How we work
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
            A process built for{" "}
            <Box as="em" fontStyle="normal" color="coral.500">
              actual outcomes.
            </Box>
          </Text>
          <Text fontSize="16px" color="ink.400" mt={4} lineHeight={1.7}>
            No endless discovery phases. We move fast, document everything, and
            leave you with infrastructure your team can own.
          </Text>
        </MotionBox>

        {/* Steps */}
        <Box position="relative">
          <Grid
            templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
            gap={{ base: 10, md: 0 }}
          >
            {STEPS.map((s, i) => (
              <Step key={s.num} {...s} delay={i * 0.1} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
