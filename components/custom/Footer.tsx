"use client";

import { Box, Text, Image, Flex, Link, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="contact"
      bg="coral.500"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
      textAlign="center"
    >
      {/* Giant watermark */}
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontFamily="heading"
        fontSize={{ base: "80px", md: "200px" }}
        fontWeight="extrabold"
        color="rgba(255,255,255,0.07)"
        whiteSpace="nowrap"
        pointerEvents="none"
        userSelect="none"
        letterSpacing="-0.04em"
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
        <Text
          fontFamily="heading"
          fontSize={{ base: "36px", md: "56px", lg: "64px" }}
          fontWeight="extrabold"
          letterSpacing="-0.03em"
          color="white"
          lineHeight={1.05}
          mb={5}
        >
          Ready to trust
          <br />
          your data?
        </Text>
      </MotionBox>
    </Box>
  );
}

const FOOTER_LINKS = {
  Resources: [
    {
      name: "Google Tag Manager Templates",
      href: "/resources/google-tag-manager-templates",
    },
    {
      name: "Looker Studio Templates",
      href: "/resources/looker-studio-templates",
    },
    {
      name: "Google Analytics 4 Event Generator",
      href: "/resources/generate-ga4-events",
    },
  ],
  Services: [
    { name: "Auditing & Implementation", href: "/services/martech-audits" },
    { name: "Stack Migration", href: "services/marketing-tech-migration" },
    { name: "Custom Analytics", href: "services/custom-marketing-analytics" },
  ],
  Company: [
    { name: "Blog", href: "https://datajournal.datakyu.co" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/policies/privacy-policy" },
    { name: "Cookie Policy", href: "/policies/cookie-policy" },
  ],
};

export function Footer() {
  return (
    <Box as="footer" bg="ink.900" px={{ base: 6, md: 12 }} pt={16} pb={10}>
      <Flex
        justify="space-between"
        align="flex-start"
        direction={{ base: "column", md: "row" }}
        gap={10}
        maxW="1200px"
        mx="auto"
        mb={16}
      >
        {/* Brand */}
        <Box maxW="260px">
          <Flex align="center" gap={2} mb={3}>
            <Image
              src="/logo.svg"
              boxSize="50px"
              borderRadius="full"
              fit="cover"
              alt="Datakyu Official Logo"
            />
          </Flex>
          <Text
            fontSize="13px"
            lineHeight={1.65}
            color="rgba(255,255,255,0.35)"
          >
            We help marketers and product teams build analytics infrastructure
            they can trust and turn that data into growth.
          </Text>
        </Box>

        {/* Link columns */}
        <Flex gap={{ base: 8, md: 16 }} flexWrap="wrap">
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <Box key={col}>
              <Text
                fontFamily="heading"
                fontSize="12px"
                fontWeight="semibold"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.6)"
                mb={4}
              >
                {col}
              </Text>
              <VStack align="flex-start">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    fontSize="13px"
                    color="rgba(255,255,255,0.35)"
                    _hover={{
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                    }}
                    transition="color 0.2s"
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Bottom bar */}
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        pt={8}
        borderTop="1px solid rgba(255,255,255,0.07)"
        fontFamily="mono"
        fontSize="12px"
        letterSpacing="0.04em"
        color="rgba(255,255,255,0.25)"
        flexWrap="wrap"
        gap={4}
      >
        <Text> © {new Date().getFullYear()} Datakyu. All rights reserved.</Text>
      </Flex>
    </Box>
  );
}
