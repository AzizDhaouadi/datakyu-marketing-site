"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Flex, Text, VStack, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CallToActionButton from "../custom/CallToActionButton";

const MotionBox = motion(Box) as any;

const NAV_ITEMS = [
  {
    label: "About",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Cookie Policy", href: "/policies/cookie-policy" },
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "Auditing & Implementation", href: "/services/martech-audits" },
      { label: "Stack Migration", href: "/services/marketing-tech-migration" },
      {
        label: "Custom Analytics",
        href: "/services/custom-marketing-analytics",
      },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "https://datajournal.datakyu.co" },
      {
        label: "GTM Templates",
        href: "/resources/google-tag-manager-templates",
      },
      {
        label: "Looker Studio Templates",
        href: "/resources/looker-studio-templates",
      },
      { label: "GA4 Event Generator", href: "/resources/generate-ga4-events" },
    ],
  },
];

const Chevron = ({ open }: { open: boolean }) => (
  <Box
    as="span"
    display="inline-flex"
    transform={open ? "rotate(180deg)" : "rotate(0deg)"}
    transition="transform 0.2s"
    ml={1}
  >
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

function Dropdown({
  links,
  onClose,
}: {
  links: (typeof NAV_ITEMS)[0]["links"];
  onClose: () => void;
}) {
  return (
    <MotionBox
      position="absolute"
      top="calc(100% + 8px)"
      left="50%"
      transform="translateX(-50%)"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      bg="white"
      border="1px solid rgba(12,11,9,0.1)"
      borderRadius="md"
      py={2}
      minW="220px"
      zIndex={200}
      boxShadow="0 8px 32px rgba(12,11,9,0.08)"
    >
      {links.map(({ label, href }) => (
        <Link
          key={label}
          as={NextLink}
          href={href}
          display="block"
          px={5}
          py={3}
          fontSize="14px"
          fontFamily="body"
          fontWeight="400"
          color="{colors.ink.600}"
          _hover={{
            bg: "rgba(12,11,9,0.04)",
            color: "{colors.ink.900}",
            textDecoration: "none",
          }}
          transition="all 0.15s"
          onClick={onClose}
        >
          {label}
        </Link>
      ))}
    </MotionBox>
  );
}

function NavItem({ label, links }: (typeof NAV_ITEMS)[0]) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Box ref={ref} position="relative">
      <Flex
        as="button"
        align="center"
        fontSize="14px"
        fontFamily="body"
        fontWeight="400"
        color={open ? "{colors.ink.900}" : "{colors.ink.600}"}
        bg="transparent"
        border="none"
        cursor="pointer"
        px={0}
        py={2}
        _hover={{ color: "{colors.ink.900}" }}
        transition="color 0.2s"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Chevron open={open} />
      </Flex>

      <AnimatePresence>
        {open && <Dropdown links={links} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </Box>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpanded(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <MotionBox
            position="fixed"
            inset={0}
            bg="rgba(12,11,9,0.3)"
            zIndex={150}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer — slides down from top */}
          <MotionBox
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={200}
            bg="white"
            borderBottomRadius="xl"
            boxShadow="0 16px 48px rgba(12,11,9,0.12)"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header — same height as navbar */}
            <Flex
              px={6}
              h="64px"
              align="center"
              justify="space-between"
              borderBottom="1px solid rgba(12,11,9,0.08)"
            >
              <Image
                src="/logo.svg"
                boxSize="50px"
                borderRadius="full"
                fit="cover"
                alt="Datakyu Official Logo"
              />
              <Box
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="32px"
                h="32px"
                bg="rgba(12,11,9,0.06)"
                borderRadius="sm"
                border="none"
                cursor="pointer"
                onClick={onClose}
                color="{colors.ink.600}"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 2l10 10M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>
            </Flex>

            {/* Sections */}
            <Box px={6} py={4} maxH="60vh" overflowY="auto">
              {NAV_ITEMS.map(({ label, links }) => (
                <Box key={label} mb={1}>
                  <Flex
                    as="button"
                    w="100%"
                    align="center"
                    justify="space-between"
                    py={4}
                    px={0}
                    bg="transparent"
                    border="none"
                    cursor="pointer"
                    borderBottom="1px solid rgba(12,11,9,0.07)"
                    onClick={() =>
                      setExpanded(expanded === label ? null : label)
                    }
                  >
                    <Text
                      fontFamily="heading"
                      fontSize="16px"
                      fontWeight="700"
                      letterSpacing="-0.01em"
                      color="{colors.ink.900}"
                    >
                      {label}
                    </Text>
                    <Chevron open={expanded === label} />
                  </Flex>

                  <AnimatePresence initial={false}>
                    {expanded === label && (
                      <MotionBox
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        overflow="hidden"
                      >
                        <VStack align="stretch" py={2}>
                          {links.map(({ label: linkLabel, href }) => (
                            <Link
                              key={linkLabel}
                              as={NextLink}
                              href={href}
                              display="flex"
                              alignItems="center"
                              gap={3}
                              px={3}
                              py={3}
                              borderRadius="sm"
                              fontSize="14px"
                              fontFamily="body"
                              color="{colors.ink.400}"
                              _hover={{
                                bg: "rgba(12,11,9,0.04)",
                                color: "{colors.ink.900}",
                                textDecoration: "none",
                              }}
                              transition="all 0.15s"
                              onClick={onClose}
                            >
                              <Box
                                w="4px"
                                h="4px"
                                borderRadius="full"
                                bg="{colors.coral.500}"
                                flexShrink={0}
                              />
                              {linkLabel}
                            </Link>
                          ))}
                        </VStack>
                      </MotionBox>
                    )}
                  </AnimatePresence>
                </Box>
              ))}
            </Box>

            {/* CTA */}
            <Box px={6} pb={8} pt={2} borderTop="1px solid rgba(12,11,9,0.08)">
              <CallToActionButton text={"Book a Consultation"} />
            </Box>
          </MotionBox>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        px={{ base: 6, md: 12 }}
        h="64px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        borderBottom="1px solid rgba(12,11,9,0.08)"
      >
        {/* Logo */}
        <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
          <Image
            src="/logo.svg"
            boxSize="50px"
            borderRadius="full"
            fit="cover"
            alt="Datakyu Official Logo"
          />
        </Link>

        {/* Desktop links */}
        <Flex
          as="ul"
          align="center"
          gap={8}
          listStyleType="none"
          display={{ base: "none", md: "flex" }}
        >
          {NAV_ITEMS.map((item) => (
            <Box as="li" key={item.label}>
              <NavItem {...item} />
            </Box>
          ))}
        </Flex>

        {/* Desktop CTA */}
        <Box display={{ base: "none", md: "block" }}>
          <CallToActionButton text={"Book a Consultation"} />
        </Box>

        {/* Mobile hamburger */}
        <Box
          as="button"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          justifyContent="center"
          w="36px"
          h="36px"
          bg="transparent"
          border="none"
          cursor="pointer"
          color="{colors.ink.900}"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 5h14M2 9h14M2 13h9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Box>
      </Box>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
