"use client";

import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const PAIN_POINTS = [
  {
    num: "01",
    title: "Your GA4 revenue does not match your CRM",
    desc: "Two sources of truth. Zero confidence in either. Every report becomes a negotiation.",
  },
  {
    num: "02",
    title: "Your paid media dashboards contradict your pipeline",
    desc: "Meta says one thing. HubSpot says another. Finance wants answers you cannot give them.",
  },
  {
    num: "03",
    title: "Your team spends hours reconciling spreadsheets",
    desc: "The analysis becomes the bottleneck and not the strategy.",
  },
  {
    num: "04",
    title: "Leadership questions your marketing attribution",
    desc: "Every board meeting starts with the same uncomfortable silence around the numbers slide.",
  },
  {
    num: "05",
    title: "You cannot answer: what is actually driving growth?",
    desc: "You have data. You just do not have clarity.",
  },
  {
    num: "06",
    title: "Your tracking was set up once and never audited",
    desc: "The business has changed. The data has not kept up. You are making decisions on a broken foundation.",
  },
];

function PainCard({
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      bg="{colors.ink.800}"
      p={{ base: 6, md: 8 }}
      role="group"
      position="relative"
      _hover={{ bg: "{colors.ink.700}" }}
    >
      <Text
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        color="rgba(255,255,255,0.2)"
        mb={4}
      >
        {num}
      </Text>
      <Text
        fontFamily="heading"
        fontSize="17px"
        fontWeight="700"
        letterSpacing="-0.01em"
        color="white"
        mb={3}
        lineHeight={1.3}
      >
        {title}
      </Text>
      <Text fontSize="13px" color="rgba(255,255,255,0.45)" lineHeight={1.65}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function PainPoints() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="pain-points"
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
              If this sounds familiar
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
              Most data problems don't{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                announce themselves.
              </Box>
            </Text>
            <Text
              fontSize="16px"
              color="rgba(255,255,255,0.5)"
              lineHeight={1.7}
            >
              They quietly erode confidence until nobody trusts the numbers.
              Here's what that looks like in practice.
            </Text>
          </Grid>
        </MotionBox>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="1px"
          bg="rgba(255,255,255,0.06)"
          border="1px solid rgba(255,255,255,0.06)"
          borderRadius="md"
          overflow="hidden"
          mb={12}
        >
          {PAIN_POINTS.map((p, i) => (
            <PainCard key={p.num} {...p} delay={i * 0.07} />
          ))}
        </Grid>

        {/* Closing line */}
        <MotionBox
          ref={closingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={closingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          textAlign="center"
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: "22px", md: "28px" }}
            fontWeight="700"
            letterSpacing="-0.02em"
            color="white"
          >
            We've seen this before.{" "}
            <Box as="span" color="{colors.coral.500}">
              We know how to fix it.
            </Box>
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
}
