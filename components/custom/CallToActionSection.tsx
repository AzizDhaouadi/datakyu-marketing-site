"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import OpenHubspotDialog from "./OpenHubspotDialog";

const MotionBox = motion(Box);

export default function CallToActionSection({
  description,
}: {
  description: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      bg="{colors.coral.500}"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
      textAlign="center"
    >
      {/* Background watermark */}
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontFamily="heading"
        fontSize={{ base: "80px", md: "200px" }}
        fontWeight="800"
        color="rgba(255,255,255,0.07)"
        whiteSpace="nowrap"
        pointerEvents="none"
        userSelect="none"
        letterSpacing="-0.04em"
        lineHeight={1}
      >
        INSIGHTS
      </Text>

      <MotionBox
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        position="relative"
        zIndex={1}
        maxW="680px"
        mx="auto"
      >
        {/* Eyebrow line */}
        <Flex align="center" justify="center" gap={3} mb={6}>
          <Box w="32px" h="1px" bg="rgba(255,255,255,0.4)" />
          <Text
            fontFamily="mono"
            fontSize="11px"
            fontWeight="400"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.6)"
          >
            Ready to start
          </Text>
          <Box w="32px" h="1px" bg="rgba(255,255,255,0.4)" />
        </Flex>

        {/* Description as headline */}
        <Text
          fontFamily="heading"
          fontSize={{ base: "32px", md: "48px", lg: "56px" }}
          fontWeight="800"
          letterSpacing="-0.03em"
          color="white"
          lineHeight={1.05}
          mb={10}
        >
          {description}
        </Text>

        {/* CTA button — wraps OpenHubspotDialog in styled shell */}
        <Box
          display="inline-flex"
          alignItems="center"
          gap={2}
          color="{colors.coral.500}"
          fontFamily="body"
          fontWeight="500"
          fontSize="14px"
          letterSpacing="0.02em"
          px={8}
          py="14px"
          borderRadius="4px"
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ bg: "{colors.smoke.100}", transform: "translateY(-1px)" }}
        >
          <OpenHubspotDialog
            text="Book a Marketing Data Diagnostic"
            toCenter={false}
          />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </MotionBox>
    </Box>
  );
}
