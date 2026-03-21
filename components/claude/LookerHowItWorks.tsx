"use client";

import { Box, Grid, Flex, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box) as any;

const STEPS = [
  {
    num: "01",
    title: "Open the template",
    desc: "Click the Open Template button. You can explore all the charts and reports before committing. When you're ready, click the ⋮ menu and select Make a copy.",
  },
  {
    num: "02",
    title: "Create a Looker Studio account",
    desc: "If you don't have one already, sign in with your Google account at lookerstudio.google.com. You'll be taken to the copy prompt automatically.",
  },
  {
    num: "03",
    title: "Map your data sources",
    desc: "When copying, you'll be asked to map the original data sources to your own. Match each source to its equivalent — GA4 to your GA4 property, BigQuery to your export. Then click Copy Report.",
  },
  {
    num: "04",
    title: "Review & you're done",
    desc: "Check that all charts are rendering correctly. If everything looks good, you're live. Broken charts usually mean a data source wasn't mapped correctly — revisit step three.",
  },
];

function StepCard({
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
      position="relative"
      px={{ base: 0, md: 6 }}
    >
      <Flex
        w="56px"
        h="56px"
        borderRadius="full"
        border="1px solid rgba(255,255,255,0.12)"
        bg="{colors.ink.800}"
        align="center"
        justify="center"
        mb={6}
        position="relative"
        zIndex={1}
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
      <Text
        fontFamily="heading"
        fontSize="17px"
        fontWeight="700"
        letterSpacing="-0.01em"
        color="white"
        mb={3}
      >
        {title}
      </Text>
      <Text fontSize="13px" color="rgba(255,255,255,0.45)" lineHeight={1.7}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function LookerHowItWorks() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const noteRef = useRef(null);
  const noteInView = useInView(noteRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="how-it-works"
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
              How it works
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
              Live in{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                four steps.
              </Box>
            </Text>
            <Text
              fontSize="16px"
              color="rgba(255,255,255,0.5)"
              lineHeight={1.7}
            >
              Duplicate the template, connect your data sources, and you're
              analyzing. No dashboard built from scratch.
            </Text>
          </Grid>
        </MotionBox>

        <Box position="relative">
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="28px"
            left="calc(12.5% + 16px)"
            right="calc(12.5% + 16px)"
            h="1px"
            bg="rgba(255,255,255,0.08)"
            zIndex={0}
          />
          <Grid
            templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
            gap={{ base: 10, md: 0 }}
          >
            {STEPS.map((s, i) => (
              <StepCard key={s.num} {...s} delay={i * 0.1} />
            ))}
          </Grid>
        </Box>

        {/* Help note */}
        <MotionBox
          ref={noteRef}
          initial={{ opacity: 0, y: 16 }}
          animate={noteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          mt={16}
          p={6}
          border="1px solid rgba(255,255,255,0.07)"
          borderRadius="md"
          display="flex"
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Flex align="center" gap={4}>
            <Flex
              w="36px"
              h="36px"
              borderRadius="sm"
              bg="rgba(232,81,42,0.12)"
              align="center"
              justify="center"
              flexShrink={0}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#E8512A"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="8" cy="8" r="6" />
                <path d="M8 7v4M8 5.5v.5" />
              </svg>
            </Flex>
            <Text
              fontSize="14px"
              color="rgba(255,255,255,0.5)"
              lineHeight={1.6}
            >
              Broken charts after copying usually mean a data source wasn't
              mapped correctly. Check the FAQ or reach out.
            </Text>
          </Flex>
          <Link
            href="#faq"
            color="{colors.coral.500}"
            fontFamily="body"
            fontSize="13px"
            fontWeight="500"
            display="inline-flex"
            alignItems="center"
            gap={2}
            flexShrink={0}
            _hover={{ color: "{colors.coral.200}", textDecoration: "none" }}
            transition="color 0.2s"
          >
            View FAQ
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
      </Box>
    </Box>
  );
}
