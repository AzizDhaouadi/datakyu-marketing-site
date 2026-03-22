"use client";

import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

function FAQItem({
  q,
  a,
  index,
  delay,
}: {
  q: string;
  a: string;
  index: number;
  delay: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      borderBottom="1px solid"
      borderColor="rgba(12,11,9,0.1)"
    >
      <Flex
        as="button"
        w="100%"
        align="center"
        justify="space-between"
        gap={6}
        py={6}
        onClick={() => setOpen(!open)}
        cursor="pointer"
        bg="transparent"
        border="none"
        textAlign="left"
        _hover={{ "& .faq-title": { color: "{colors.ink.900}" } }}
      >
        <Flex align="center" gap={4}>
          <Text
            fontFamily="mono"
            fontSize="10px"
            color="{colors.ink.200}"
            flexShrink={0}
          >
            {String(index + 1).padStart(2, "0")}
          </Text>
          <Text
            className="faq-title"
            fontFamily="heading"
            fontSize={{ base: "15px", md: "17px" }}
            fontWeight="700"
            letterSpacing="-0.01em"
            color={open ? "{colors.ink.900}" : "{colors.ink.700}"}
            transition="color 0.2s"
          >
            {q}
          </Text>
        </Flex>
        <Box
          flexShrink={0}
          transform={open ? "rotate(45deg)" : "rotate(0deg)"}
          transition="transform 0.25s"
          color="{colors.coral.500}"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M3 8h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Box>
      </Flex>

      <AnimatePresence initial={false}>
        {open && (
          <MotionBox
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            overflow="hidden"
          >
            <Text
              fontSize="15px"
              color="{colors.ink.400}"
              lineHeight={1.75}
              pb={6}
              pl={{ base: 0, md: "38px" }}
              maxW="90%"
            >
              {a}
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}

export default function FAQSection({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="faq"
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
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={10}
            alignItems="flex-end"
          >
            <Box>
              <Flex align="center" gap={3} mb={4}>
                <Box w="20px" h="1px" bg="{colors.ink.200}" />
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="{colors.ink.200}"
                >
                  FAQ
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
                Questions we{" "}
                <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                  always get.
                </Box>
              </Text>
            </Box>
            <Text fontSize="16px" color="{colors.ink.400}" lineHeight={1.7}>
              If yours isn't here, reach out directly. We're happy to walk
              through anything before you commit.
            </Text>
          </Grid>
        </MotionBox>

        <Box borderTop="1px solid" borderColor="rgba(12,11,9,0.1)">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} delay={i * 0.05} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
