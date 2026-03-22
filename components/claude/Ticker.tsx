import { Box, Text, Flex } from "@chakra-ui/react";

const ITEMS = [
  "Google Analytics 4",
  "Segment CDP",
  "Mixpanel",
  "Amplitude",
  "GTM Architecture",
  "Custom Dashboards",
  "Event Tracking",
  "Funnel Analysis",
  "E-commerce Tracking",
  "User Journey Mapping",
  "ROI Attribution",
];

// Duplicate for seamless loop
const ALL_ITEMS = [...ITEMS, ...ITEMS];

const Dot = () => (
  <Box w="4px" h="4px" borderRadius="full" bg="coral.500" flexShrink={0} />
);

export default function Ticker() {
  return (
    <Box
      bg="#0C0B09"
      py="14px"
      overflow="hidden"
      borderTop="1px solid rgba(255,255,255,0.05)"
      borderBottom="1px solid rgba(255,255,255,0.05)"
    >
      <Flex
        width="max-content"
        whiteSpace="nowrap"
        css={{ animation: "ticker 40s linear infinite" }}
      >
        {[...ALL_ITEMS, ...ALL_ITEMS].map((item, i) => (
          <Flex key={i} align="center" gap={4} px={10} shrink={0}>
            <Dot />
            <Text
              fontFamily="mono"
              fontSize="11px"
              fontWeight="light"
              letterSpacing="0.08em"
              color="rgba(255,255,255,0.45)"
            >
              {item}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
