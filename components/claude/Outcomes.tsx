"use client";

import { Box, Grid, Text, Flex, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const OUTCOMES = [
  {
    num: "01",
    label: "Audits & Gap Analysis",
    desc: "Understand exactly where your data generation fails. We identify every tracking gap before it costs you a decision.",
  },
  {
    num: "02",
    label: "Interactive Dashboards",
    desc: "Visualizations your team will actually open. Built around the questions you need answered, not what looks impressive in a demo.",
  },
  {
    num: "03",
    label: "User Journey Mapping",
    desc: "See the full path your users take from first touch to conversion. Find the drop-offs that are costing you growth.",
  },
  {
    num: "04",
    label: "E-commerce Tracking",
    desc: "Full-funnel purchase tracking with proper attribution. Know which channels are actually generating revenue.",
  },
  {
    num: "05",
    label: "Insights & Recommendations",
    desc: "Data is only valuable when it leads to action. We deliver clear recommendations backed by your own numbers.",
  },
];

const METRICS = [
  {
    val: "3",
    unit: "×",
    name: "improvement in data confidence within 30 days",
  },
  {
    val: "40",
    unit: "%",
    name: "average reduction in wasted ad spend after attribution fix",
  },
  { val: "100", unit: "%", name: "of deliverables come with QA documentation" },
  {
    val: "<2",
    unit: "wk",
    name: "average time from kickoff to first actionable insight",
  },
];

function OutcomeRow({
  num,
  label,
  desc,
  delay,
}: {
  num: string;
  label: string;
  desc: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Flex
        gap={5}
        py={7}
        borderBottom="1px solid"
        borderColor="rgba(12,11,9,0.1)"
        _first={{ borderTop: "1px solid", borderTopColor: "rgba(12,11,9,0.1)" }}
        align="flex-start"
      >
        <Text
          fontFamily="mono"
          fontSize="11px"
          color="ink.200"
          flexShrink={0}
          pt="3px"
        >
          {num}
        </Text>
        <Box>
          <Text
            fontFamily="heading"
            fontSize="17px"
            fontWeight="bold"
            letterSpacing="-0.01em"
            color="ink.900"
            mb="6px"
          >
            {label}
          </Text>
          <Text fontSize="14px" color="ink.400" lineHeight={1.65}>
            {desc}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  );
}

export default function Outcomes() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const panelRef = useRef(null);
  const panelInView = useInView(panelRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="outcomes"
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
          mb={4}
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
              What you get
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
            Complex problems.{" "}
            <Box as="em" fontStyle="normal" color="coral.500">
              Simple outcomes.
            </Box>
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 16, lg: 20 }}
          alignItems="start"
          mt={16}
        >
          {/* Outcome list */}
          <Box>
            {OUTCOMES.map((o, i) => (
              <OutcomeRow key={o.num} {...o} delay={i * 0.07} />
            ))}
          </Box>

          {/* Metrics panel */}
          <MotionBox
            ref={panelRef}
            initial={{ opacity: 0, y: 24 }}
            animate={panelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            bg="ink.900"
            borderRadius="lg"
            p={{ base: 8, md: 10 }}
            position={{ lg: "sticky" }}
            top={{ lg: "88px" }}
          >
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.3)"
              mb={8}
            >
              What clients typically see
            </Text>

            <VStack align="stretch">
              {METRICS.map(({ val, unit, name }, i) => (
                <Box
                  key={i}
                  py={5}
                  borderBottom="1px solid"
                  borderColor="rgba(255,255,255,0.07)"
                  _last={{ borderBottom: "none" }}
                >
                  <Flex align="baseline" gap={1} mb={1}>
                    <Text
                      fontFamily="heading"
                      fontSize="36px"
                      fontWeight="extrabold"
                      color="white"
                      letterSpacing="-0.03em"
                      lineHeight={1}
                    >
                      {val}
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize="28px"
                      fontWeight="extrabold"
                      color="coral.500"
                      letterSpacing="-0.03em"
                      lineHeight={1}
                    >
                      {unit}
                    </Text>
                  </Flex>
                  <Text fontSize="13px" color="rgba(255,255,255,0.4)">
                    {name}
                  </Text>
                </Box>
              ))}
            </VStack>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
}
