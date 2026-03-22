// 🖼️ Styles
import styles from "../page.module.css";

// 🧩 Custom Components – Core
import HubspotForm from "@/components/HubspotForm";
import { Footer } from "@/components/custom/Footer";

// Claude Generated Components - Core
import Navbar from "@/components/claude/Navbar";

// Chakra UI Components - Core
import { Box, Flex, Text, Grid } from "@chakra-ui/react";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "@/app/lib/helper/generatePageMetadata";

export async function generateMetadata() {
  return getPageMetadata("/contact");
}

const CONTACT_POINTS = [
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: (
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
        <path d="M8 5v3l2 2" />
      </svg>
    ),
  },
  {
    label: "First call",
    value: "Free, no commitment",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="#E8512A"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M3 3h4l1.5 3.5-2 1.2a7 7 0 003.8 3.8l1.2-2L15 11v4a1 1 0 01-1 1A13 13 0 012 4a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    label: "What to expect",
    value: "A diagnostic, not a pitch",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="#E8512A"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M8 2l1.8 3.6L14 6.3l-3 2.9.7 4.1L8 11.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Box as="main" minH="100vh" position="relative" overflow="hidden">
          {/* Background */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="radial(ellipse 700px 500px at 50% 20%, rgba(232,81,42,0.06), transparent 60%)"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            inset={0}
            opacity={0.4}
            backgroundImage="linear-gradient(rgba(12,11,9,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,9,0.1) 1px, transparent 1px)"
            backgroundSize="80px 80px"
            pointerEvents="none"
          />

          <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 6, md: 12 }}
            pt={{ base: "100px", md: "140px" }}
            pb={{ base: 16, md: 24 }}
            position="relative"
            zIndex={1}
          >
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: 16, lg: 20 }}
              alignItems="start"
            >
              {/* Left — headline + context */}
              <Box position={{ lg: "sticky" }} top={{ lg: "100px" }}>
                <Flex align="center" gap={3} mb={6}>
                  <Box w="32px" h="1px" bg="{colors.coral.500}" />
                  <Text
                    fontFamily="mono"
                    fontSize="11px"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    color="{colors.coral.500}"
                  >
                    Get in touch
                  </Text>
                </Flex>

                <Text
                  as="h1"
                  fontFamily="heading"
                  fontSize={{ base: "48px", md: "64px", lg: "72px" }}
                  fontWeight="800"
                  lineHeight="0.95"
                  letterSpacing="-0.03em"
                  color="{colors.ink.900}"
                  mb={7}
                >
                  We are one message{" "}
                  <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                    away.
                  </Box>
                </Text>

                <Text
                  fontSize="17px"
                  fontWeight="300"
                  color="{colors.ink.400}"
                  lineHeight={1.7}
                  maxW="420px"
                  mb={12}
                >
                  Whatever your question, we are here to help. Fill out the form
                  and we will get back to you as soon as possible.
                </Text>

                {/* Contact points */}
                <Flex direction="column" gap={0}>
                  {CONTACT_POINTS.map(({ label, value, icon }) => (
                    <Flex
                      key={label}
                      align="center"
                      gap={4}
                      py={5}
                      borderBottom="1px solid rgba(12,11,9,0.08)"
                      _first={{ borderTop: "1px solid rgba(12,11,9,0.08)" }}
                    >
                      <Flex
                        w="36px"
                        h="36px"
                        borderRadius="sm"
                        bg="rgba(232,81,42,0.08)"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        {icon}
                      </Flex>
                      <Box>
                        <Text
                          fontFamily="mono"
                          fontSize="10px"
                          letterSpacing="0.08em"
                          color="{colors.ink.200}"
                          mb={0.5}
                        >
                          {label}
                        </Text>
                        <Text
                          fontSize="14px"
                          fontWeight="500"
                          color="{colors.ink.900}"
                        >
                          {value}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* Right — HubSpot form */}
              <Box
                bg="white"
                border="1px solid rgba(12,11,9,0.1)"
                borderRadius="lg"
                p={{ base: 7, md: 10 }}
                id="contact-form-section"
              >
                <Text
                  fontFamily="heading"
                  fontSize="20px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  color="{colors.ink.900}"
                  mb={2}
                >
                  Send us a message
                </Text>
                <Text
                  fontSize="14px"
                  color="{colors.ink.400}"
                  mb={8}
                  lineHeight={1.6}
                >
                  Tell us about your data setup and what you're trying to solve.
                  The more detail the better.
                </Text>

                <Box id="target-container" />
                <HubspotForm
                  region="na1"
                  portalId="44171646"
                  formId="828e791e-00b4-47aa-a81d-5e76effe844f"
                  targetID="target-container"
                />
              </Box>
            </Grid>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
