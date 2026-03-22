"use client";

import { Box, Grid, Flex, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const BEFORE = [
  "Fragmented tracking across platforms with no single source of truth",
  "Manual reconciliation eating your team's time every reporting cycle",
  "Leadership mistrusting marketing numbers in every board meeting",
  "No clear answers on what is actually driving growth",
  "Budgets shifted based on data nobody should have trusted",
];

const AFTER = [
  "Aligned tracking systems across your full marketing stack",
  "Clean dashboards your team can act on without second-guessing",
  "Attribution your leadership trusts and can present to the board",
  "Confidence to forecast, report, and scale on data that holds up",
  "Budget decisions backed by numbers everyone in the room agrees on",
];

const XIcon = () => (
  <Flex
    w="18px"
    h="18px"
    borderRadius="full"
    bg="rgba(255,255,255,0.06)"
    align="center"
    justify="center"
    flexShrink={0}
    mt="2px"
  >
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path
        d="M2 2l4 4M6 2L2 6"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  </Flex>
);

const CheckIcon = () => (
  <Flex
    w="18px"
    h="18px"
    borderRadius="full"
    bg="rgba(232,81,42,0.15)"
    align="center"
    justify="center"
    flexShrink={0}
    mt="2px"
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
);

function ListItem({
  text,
  type,
  delay,
}: {
  text: string;
  type: "before" | "after";
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: type === "before" ? -16 : 16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Flex
        align="flex-start"
        gap={3}
        py={4}
        borderBottom="1px solid rgba(255,255,255,0.06)"
        _last={{ borderBottom: "none" }}
      >
        {type === "before" ? <XIcon /> : <CheckIcon />}
        <Text
          fontSize="14px"
          color={
            type === "before"
              ? "rgba(255,255,255,0.35)"
              : "rgba(255,255,255,0.8)"
          }
          lineHeight={1.65}
        >
          {text}
        </Text>
      </Flex>
    </MotionBox>
  );
}

export default function BeforeAfter() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="before-after"
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
              The transformation
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
            From data chaos to{" "}
            <Box as="em" fontStyle="normal" color="{colors.coral.500}">
              reporting confidence.
            </Box>
          </Text>
        </MotionBox>

        <Box
          bg="{colors.ink.900}"
          borderRadius="lg"
          overflow="hidden"
          border="1px solid rgba(255,255,255,0.06)"
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
            {/* Before */}
            <Box
              p={{ base: 8, md: 12 }}
              borderRight={{ md: "1px solid rgba(255,255,255,0.06)" }}
              borderBottom={{
                base: "1px solid rgba(255,255,255,0.06)",
                md: "none",
              }}
            >
              <Box
                display="inline-flex"
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.3)"
                border="1px solid rgba(255,255,255,0.1)"
                px={3}
                py={1}
                borderRadius="2px"
                mb={8}
              >
                Before
              </Box>
              <Box borderTop="1px solid rgba(255,255,255,0.06)">
                {BEFORE.map((item, i) => (
                  <ListItem
                    key={i}
                    text={item}
                    type="before"
                    delay={i * 0.06}
                  />
                ))}
              </Box>
            </Box>

            {/* After */}
            <Box p={{ base: 8, md: 12 }}>
              <Box
                display="inline-flex"
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="{colors.coral.500}"
                border="1px solid rgba(232,81,42,0.3)"
                bg="rgba(232,81,42,0.06)"
                px={3}
                py={1}
                borderRadius="2px"
                mb={8}
              >
                After
              </Box>
              <Box borderTop="1px solid rgba(255,255,255,0.06)">
                {AFTER.map((item, i) => (
                  <ListItem key={i} text={item} type="after" delay={i * 0.06} />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Bottom CTA strip */}
          <Flex
            borderTop="1px solid rgba(255,255,255,0.06)"
            px={{ base: 8, md: 12 }}
            py={6}
            align="center"
            justify="space-between"
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
          >
            <Text
              fontFamily="mono"
              fontSize="11px"
              color="rgba(255,255,255,0.25)"
              letterSpacing="0.06em"
            >
              Data Integrity Audits
            </Text>
            <Link
              href="#contact"
              display="inline-flex"
              alignItems="center"
              gap={2}
              bg="{colors.coral.500}"
              color="white"
              fontFamily="body"
              fontSize="13px"
              fontWeight="500"
              px={6}
              py="10px"
              borderRadius="4px"
              _hover={{ bg: "{colors.coral.200}", textDecoration: "none" }}
              transition="all 0.2s"
            >
              Book a Data Diagnostic
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
