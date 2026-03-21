"use client";

import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const STEPS = [
  {
    num: "01",
    title: "Audit & Planning",
    desc: "We map your entire existing stack — every tag, every event, every integration. You get a full picture of what's working, what's broken, and what needs to move.",
    detail: "Typically 3–5 days",
  },
  {
    num: "02",
    title: "Data Mapping & Architecture",
    desc: "We design the new tracking plan. Every event gets a name, a schema, and a purpose. Nothing moves without a spec.",
    detail: "Typically 5–7 days",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "We build the new setup in parallel with your existing stack. Zero downtime, zero data loss during transition.",
    detail: "Typically 1–3 weeks",
  },
  {
    num: "04",
    title: "Validation & QA",
    desc: "Every event is fired, checked, and documented before we touch production. We don't ship without a passing QA report.",
    detail: "Typically 3–5 days",
  },
  {
    num: "05",
    title: "Handover & Enablement",
    desc: "We hand over documentation, train your team, and stay available for 30 days post-launch. You own it when we're done.",
    detail: "Ongoing support",
  },
];

function StepRow({
  num,
  title,
  desc,
  detail,
  delay,
  isLast,
}: {
  num: string;
  title: string;
  desc: string;
  detail: string;
  delay: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "80px 1fr auto" }}
        gap={{ base: 4, md: 10 }}
        py={10}
        borderBottom={isLast ? "none" : "1px solid"}
        borderColor="rgba(12,11,9,0.1)"
        alignItems="flex-start"
        position="relative"
      >
        {/* Step number with vertical line */}
        <Box position="relative">
          <Flex
            w="56px"
            h="56px"
            borderRadius="full"
            border="1px solid"
            borderColor="rgba(12,11,9,0.18)"
            bg="{colors.smoke.200}"
            align="center"
            justify="center"
          >
            <Text
              fontFamily="mono"
              fontSize="12px"
              fontWeight="500"
              color="{colors.coral.500}"
            >
              {num}
            </Text>
          </Flex>
          {!isLast && (
            <Box
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="56px"
              left="27px"
              w="1px"
              h="calc(100% + 40px)"
              bg="rgba(12,11,9,0.1)"
            />
          )}
        </Box>

        {/* Content */}
        <Box>
          <Text
            fontFamily="heading"
            fontSize="22px"
            fontWeight="700"
            letterSpacing="-0.02em"
            color="{colors.ink.900}"
            mb={3}
          >
            {title}
          </Text>
          <Text
            fontSize="15px"
            color="{colors.ink.400}"
            lineHeight={1.7}
            maxW="540px"
          >
            {desc}
          </Text>
        </Box>

        {/* Timeline detail */}
        <Box display={{ base: "none", md: "block" }} pt={1}>
          <Box
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.08em"
            color="{colors.ink.200}"
            bg="{colors.smoke.200}"
            px={3}
            py={2}
            borderRadius="2px"
            whiteSpace="nowrap"
          >
            {detail}
          </Box>
        </Box>
      </Grid>
    </MotionBox>
  );
}

export default function MigrationProcess() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="process"
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
              Migration process
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
              Migrate with{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                confidence.
              </Box>
            </Text>
            <Text fontSize="16px" color="{colors.ink.400}" lineHeight={1.7}>
              A structured five-step process that keeps your data flowing
              throughout the transition. No surprises, no downtime.
            </Text>
          </Grid>
        </MotionBox>

        <Box>
          {STEPS.map((step, i) => (
            <StepRow
              key={step.num}
              {...step}
              delay={i * 0.08}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
