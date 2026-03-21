"use client";

import { useState } from "react";
import { Box, Flex, Text, Grid, Textarea } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// 🧩 Custom Components – Core
import Navbar from "@/components/claude/Navbar";
import { Footer } from "@/components/custom/Footer";
import TypedCodeSection from "@/components/animation/TypedCode";

// 💻 tracking library
import track from "@/app/lib/universalTracking";

const MotionBox = motion(Box);

const TRACKING_MEDIUMS = ["GTM's dataLayer", "Gtag.js", "Measurement Protocol"];

const GA4_EVENTS = [
  "ad_click",
  "ad_impression",
  "add_payment_info",
  "add_shipping_info",
  "add_to_cart",
  "add_to_wishlist",
  "begin_checkout",
  "earn_virtual_currency",
  "generate_lead",
  "join_group",
  "level_end",
  "level_start",
  "level_up",
  "login",
  "purchase",
  "refund",
  "remove_from_cart",
  "search",
  "select_content",
  "select_item",
  "select_promotion",
  "share",
  "sign_up",
  "spend_virtual_currency",
  "tutorial_begin",
  "tutorial_complete",
  "unlock_achievement",
  "view_cart",
  "view_item",
  "view_item_list",
  "view_promotion",
  "view_search_results",
  "video_complete",
  "video_progress",
  "video_start",
];

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect
      x="4"
      y="4"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M2 9V3a1 1 0 011-1h6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2.5 7l3 3 6-6"
      stroke="#E8512A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Toggle ───
function ModeToggle({
  mode,
  onChange,
}: {
  mode: string;
  onChange: (mode: string) => void;
}) {
  return (
    <Flex
      bg="rgba(12,11,9,0.06)"
      borderRadius="4px"
      p="3px"
      display="inline-flex"
      border="1px solid rgba(12,11,9,0.1)"
    >
      {["recommended", "custom"].map((m) => (
        <Box
          key={m}
          as="button"
          px={5}
          py="8px"
          borderRadius="2px"
          fontFamily="body"
          fontSize="13px"
          fontWeight="500"
          letterSpacing="0.02em"
          cursor="pointer"
          border="none"
          transition="all 0.2s"
          bg={mode === m ? "{colors.coral.500}" : "transparent"}
          color={mode === m ? "white" : "{colors.ink.400}"}
          _hover={{ color: mode === m ? "white" : "{colors.ink.900}" }}
          onClick={() => onChange(m)}
          textTransform="capitalize"
        >
          {m}
        </Box>
      ))}
    </Flex>
  );
}

// ─── Select ───
function StyledSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
}) {
  return (
    <Flex direction="column" gap={2}>
      <Text
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color="{colors.ink.200}"
      >
        {label}
      </Text>
      <Box position="relative">
        <Box
          as="select"
          // value={value}
          onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
          w="100%"
          px={4}
          py={3}
          bg="{colors.smoke.50}"
          border="1px solid rgba(12,11,9,0.12)"
          borderRadius="4px"
          fontFamily="mono"
          fontSize="13px"
          color="{colors.ink.900}"
          appearance="none"
          cursor="pointer"
          _hover={{ borderColor: "rgba(12,11,9,0.25)" }}
          _focus={{ outline: "none", borderColor: "{colors.coral.500}" }}
          transition="border-color 0.2s"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Box>
        <Box
          position="absolute"
          right={3}
          top="50%"
          transform="translateY(-50%)"
          pointerEvents="none"
          color="{colors.ink.400}"
        >
          <ChevronIcon />
        </Box>
      </Box>
    </Flex>
  );
}

// ─── Code output panel ───
function CodePanel({ isLoading, code }: { isLoading: boolean; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPlaceholder =
    code === "Choose which event you need help with and we'll handle the rest";

  return (
    <Box
      bg="#0C0B09"
      borderRadius="md"
      border="1px solid rgba(255,255,255,0.06)"
      overflow="hidden"
      h="100%"
      minH="480px"
      display="flex"
      flexDirection="column"
    >
      {/* Panel header */}
      <Flex
        px={5}
        py={3}
        borderBottom="1px solid rgba(255,255,255,0.06)"
        align="center"
        justify="space-between"
      >
        <Flex align="center" gap={3}>
          <Flex gap={2}>
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <Box key={c} w="10px" h="10px" borderRadius="full" bg={c} />
            ))}
          </Flex>
          <Text
            fontFamily="mono"
            fontSize="10px"
            color="rgba(255,255,255,0.25)"
            letterSpacing="0.08em"
          >
            output.js
          </Text>
        </Flex>

        {!isPlaceholder && !isLoading && (
          <Box
            as="button"
            display="inline-flex"
            alignItems="center"
            gap={2}
            px={3}
            py="6px"
            bg="rgba(255,255,255,0.06)"
            border="1px solid rgba(255,255,255,0.08)"
            borderRadius="4px"
            fontFamily="mono"
            fontSize="11px"
            color={copied ? "{colors.coral.500}" : "rgba(255,255,255,0.4)"}
            cursor="pointer"
            onClick={handleCopy}
            _hover={{ bg: "rgba(255,255,255,0.1)", color: "white" }}
            transition="all 0.2s"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied" : "Copy"}
          </Box>
        )}
      </Flex>

      {/* Code content */}
      <Box
        flex={1}
        p={6}
        fontFamily="mono"
        fontSize="13px"
        lineHeight={1.8}
        overflowX="auto"
        color={"white"}
      >
        {isLoading ? (
          <Flex direction="column" gap={3}>
            {[80, 60, 90, 50, 70, 40].map((w, i) => (
              <Box
                key={i}
                h="14px"
                w={`${w}%`}
                bg="rgba(255,255,255,0.06)"
                borderRadius="2px"
              />
            ))}
          </Flex>
        ) : isPlaceholder ? (
          <Flex
            h="100%"
            align="center"
            justify="center"
            direction="column"
            gap={4}
            py={16}
          >
            <Box
              w="40px"
              h="40px"
              borderRadius="sm"
              bg="rgba(232,81,42,0.1)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="#E8512A"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M3 9h12M9 3l6 6-6 6" />
              </svg>
            </Box>
            <Text
              fontFamily="mono"
              fontSize="12px"
              textAlign="center"
              maxW="240px"
              lineHeight={1.6}
            >
              {code}
            </Text>
          </Flex>
        ) : (
          <TypedCodeSection
            codeToType={code}
            smartBackspace={false}
            isGen={true}
          />
        )}
      </Box>
    </Box>
  );
}

// ─── Main page ───
export default function GenerateGA4Events() {
  const [mode, setMode] = useState("recommended");
  const [defaultMedium, setDefaultMedium] = useState("GTM's dataLayer");
  const [defaultEvent, setDefaultEvent] = useState("ad_click");
  const [customMedium, setCustomMedium] = useState("GTM's dataLayer");
  const [customDescription, setCustomDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(
    "Choose which event you need help with and we'll handle the rest"
  );

  const defaultPrompt = `Given the GA4 event name "${defaultEvent}" and the tracking method "${defaultMedium}", generate the JavaScript code only, with:
- No markdown
- No triple backticks
- No language tags like "javascript"
- Just clean, raw JS code that can be copy-pasted into a file.
If the tracking method is:
- "gtag": use gtag('event', ...)
- "dataLayer": use window.dataLayer.push({...})
- "Measurement Protocol": use fetch() in Node.js with the body as a JS object, sent to the GA4 MP endpoint
❌ Do not wrap the output in any formatting
✅ Output raw code only`;

  const customPrompt = `Given the tracking method ${customMedium} and the event description: ${customDescription}, generate the JavaScript code only, with:
- No markdown
- No triple backticks
- No language tags like "javascript"
- Just clean, raw JS code that can be copy-pasted into a file.
If the tracking method is:
- "gtag": use gtag('event', ...)
- "dataLayer": use window.dataLayer.push({...})
- "Measurement Protocol": use fetch() in Node.js with the body as a JS object, sent to the GA4 MP endpoint
❌ Do not wrap the output in any formatting
✅ Output raw code only`;

  const handleGenerate = async () => {
    setIsLoading(true);

    const prompt = mode === "recommended" ? defaultPrompt : customPrompt;
    const medium = mode === "recommended" ? defaultMedium : customMedium;

    try {
      const res = await fetch("/api/generate-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(`HTTP ${res.status}: ${err.error}`);
      }

      const data = await res.json();
      setGeneratedCode(data.text);

      track({
        trackingPlatform: { segment: true, dataLayer: true },
        eventPayload: {
          event_name: "generated_code_sample",
          event_parameters: { medium, mode },
        },
        identify: { capture: false, identifier: "" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const canGenerate =
    mode === "recommended" ? true : customDescription.trim().length > 0;

  return (
    <>
      <Navbar />
      <Box
        as="main"
        minH="100vh"
        px={{ base: 6, md: 12 }}
        pt={{ base: "100px", md: "120px" }}
        pb={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        {/* Background */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial(ellipse 600px 400px at 60% 10%, rgba(232,81,42,0.06), transparent 60%)"
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

        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
          {/* Page header */}
          <Box mb={12}>
            <Flex align="center" gap={3} mb={5}>
              <Box w="32px" h="1px" bg="{colors.coral.500}" />
              <Text
                fontFamily="mono"
                fontSize="11px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="{colors.coral.500}"
              >
                Free Tool
              </Text>
            </Flex>
            <Text
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "40px", md: "60px", lg: "72px" }}
              fontWeight="800"
              lineHeight="0.95"
              letterSpacing="-0.03em"
              color="{colors.ink.900}"
              mb={5}
            >
              GA4 Event{" "}
              <Box as="em" fontStyle="normal" color="{colors.coral.500}">
                Generator.
              </Box>
            </Text>
            <Text
              fontSize="16px"
              fontWeight="300"
              color="{colors.ink.400}"
              maxW="480px"
              lineHeight={1.7}
            >
              Generate GA4 tracking code for recommended events, e-commerce,
              SaaS, and custom events — using dataLayer, gtag.js, or the
              Measurement Protocol.
            </Text>
          </Box>

          {/* Tool */}
          <Grid
            templateColumns={{ base: "1fr", lg: "420px 1fr" }}
            gap={{ base: 8, lg: 6 }}
            alignItems="start"
          >
            {/* Left — controls */}
            <Box
              bg="{colors.smoke.50}"
              border="1px solid rgba(12,11,9,0.1)"
              borderRadius="md"
              p={{ base: 6, md: 8 }}
            >
              {/* Toggle */}
              <Box mb={8}>
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="{colors.ink.200}"
                  mb={3}
                >
                  Event type
                </Text>
                <ModeToggle mode={mode} onChange={setMode} />
              </Box>

              {/* Form fields */}
              <AnimatePresence mode="wait">
                <MotionBox
                  key={mode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flex direction="column" gap={6}>
                    <StyledSelect
                      label="Tracking medium"
                      value={
                        mode === "recommended" ? defaultMedium : customMedium
                      }
                      onChange={
                        mode === "recommended"
                          ? setDefaultMedium
                          : setCustomMedium
                      }
                      options={TRACKING_MEDIUMS}
                    />

                    {mode === "recommended" ? (
                      <StyledSelect
                        label="GA4 event name"
                        value={defaultEvent}
                        onChange={setDefaultEvent}
                        options={GA4_EVENTS}
                      />
                    ) : (
                      <Flex direction="column" gap={2}>
                        <Text
                          fontFamily="mono"
                          fontSize="10px"
                          letterSpacing="0.1em"
                          textTransform="uppercase"
                          color="{colors.ink.200}"
                        >
                          Event description
                        </Text>
                        <Textarea
                          value={customDescription}
                          onChange={(e) => setCustomDescription(e.target.value)}
                          placeholder="Describe the event — include a name and the parameters you want to track..."
                          rows={5}
                          bg="{colors.smoke.50}"
                          border="1px solid rgba(12,11,9,0.12)"
                          borderRadius="4px"
                          fontFamily="mono"
                          fontSize="13px"
                          color="{colors.ink.900}"
                          _placeholder={{ color: "{colors.ink.200}" }}
                          _focus={{
                            outline: "none",
                            borderColor: "{colors.coral.500}",
                          }}
                          _hover={{ borderColor: "rgba(12,11,9,0.25)" }}
                          resize="vertical"
                          transition="border-color 0.2s"
                        />
                      </Flex>
                    )}
                  </Flex>
                </MotionBox>
              </AnimatePresence>

              {/* Generate button */}
              <Box
                as="button"
                mt={8}
                w="100%"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                gap={2}
                bg={canGenerate ? "{colors.coral.500}" : "rgba(12,11,9,0.08)"}
                color={canGenerate ? "white" : "{colors.ink.200}"}
                fontFamily="body"
                fontSize="14px"
                fontWeight="500"
                letterSpacing="0.02em"
                px={8}
                py="13px"
                borderRadius="4px"
                border="none"
                cursor={canGenerate ? "pointer" : "not-allowed"}
                onClick={canGenerate && !isLoading ? handleGenerate : undefined}
                _hover={canGenerate ? { bg: "{colors.coral.200}" } : {}}
                transition="all 0.2s"
                opacity={isLoading ? 0.7 : 1}
              >
                {isLoading ? (
                  <>
                    <Box
                      w="14px"
                      h="14px"
                      border="1.5px solid rgba(255,255,255,0.3)"
                      borderTopColor="white"
                      borderRadius="full"
                      css={{
                        "@keyframes spin": {
                          to: { transform: "rotate(360deg)" },
                        },
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Code
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </Box>

              {/* Hint */}
              {mode === "custom" && !canGenerate && (
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  color="{colors.ink.200}"
                  textAlign="center"
                  mt={3}
                  letterSpacing="0.04em"
                >
                  Add an event description to generate
                </Text>
              )}
            </Box>

            {/* Right — code output */}
            <CodePanel isLoading={isLoading} code={generatedCode} />
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
