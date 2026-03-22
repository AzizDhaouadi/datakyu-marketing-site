"use client";

import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// 💻 Code Hightlighter
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const MotionBox = motion(Box) as any;

const STACK = [
  {
    name: "Google Analytics 4",
    desc: "Event-based data model with machine learning insights. The industry standard, done right.",
  },
  {
    name: "Segment",
    desc: "Customer data platform that lets you collect once and send anywhere. We design the taxonomy and own the implementation.",
  },
  {
    name: "Mixpanel",
    desc: "Advanced product analytics with self-serve exploration. We set up the events so your team can actually use it without us.",
  },
];

const codeContent = [
  `gtag("event",
    "submitted_form",{
    "form_id":"contact_form",
    "session_number": 4
});`,

  `
analytics.track("submitted_form", {
    "form_id":"contact_form",
    "session_number": 4
});`,
  `
mixpanel.track(
    "submitted_form", {
    "form_id":"contact_form",
    "session_number": 4
});
    `,
];

const highlightedCodeContent = codeContent.map((code) => {
  return Prism.highlight(code, Prism.languages.javascript, "javascript");
});

function StackCard({
  name,
  desc,
  delay,
}: {
  name: string;
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
      bg="ink.800"
      p={{ base: 7, md: 9 }}
    >
      <Flex align="center" gap={3} mb={3}>
        <Box
          w="8px"
          h="8px"
          borderRadius="full"
          bg="coral.500"
          flexShrink={0}
        />
        <Text
          fontFamily="heading"
          fontSize="15px"
          fontWeight="bold"
          color="white"
        >
          {name}
        </Text>
      </Flex>
      <Text fontSize="13px" color="rgba(255,255,255,0.45)" lineHeight={1.65}>
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function Stack() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const codeRef = useRef(null);
  const codeInView = useInView(codeRef, { once: true, margin: "-40px" });

  return (
    <Box
      as="section"
      id="stack"
      bg="ink.900"
      px={{ base: 6, md: 12 }}
      py={{ base: 20, md: 28 }}
    >
      <Box maxW="1200px" mx="auto">
        {/* Header */}
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
              Technology stack
            </Text>
          </Flex>
          <Text
            fontFamily="heading"
            fontSize={{ base: "36px", md: "52px" }}
            fontWeight="bold"
            letterSpacing="-0.025em"
            lineHeight={1.05}
            color="white"
          >
            We work with the tools{" "}
            <Box as="em" fontStyle="normal" color="coral.500">
              shaping modern analytics.
            </Box>
          </Text>
          <Text
            fontSize="16px"
            color="rgba(255,255,255,0.5)"
            mt={4}
            maxW="500px"
          >
            Future-proof tracking infrastructure built on platforms that last.
          </Text>
        </MotionBox>

        {/* Stack cards */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="1px"
          bg="rgba(255,255,255,0.08)"
          border="1px solid rgba(255,255,255,0.08)"
          borderRadius="md"
          overflow="hidden"
        >
          {STACK.map((s, i) => (
            <StackCard key={s.name} {...s} delay={i * 0.1} />
          ))}
        </Grid>

        {/* Code block */}
        <MotionBox
          ref={codeRef}
          initial={{ opacity: 0, y: 24 }}
          animate={codeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          bg="#0C0B09"
          borderRadius="md"
          p={{ base: 6, md: 7 }}
          border="1px solid rgba(255,255,255,0.06)"
          mt={10}
          overflowX="auto"
        >
          <Flex direction={"row"} align="stretch" gap={6}>
            {highlightedCodeContent.map((code: string, index) => (
              <Box
                color={"white"}
                p={4}
                key={index}
                dangerouslySetInnerHTML={{ __html: code }}
              ></Box>
            ))}
          </Flex>
        </MotionBox>
      </Box>
    </Box>
  );
}
