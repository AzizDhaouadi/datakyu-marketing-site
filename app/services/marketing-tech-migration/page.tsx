// 🖼️ Styles
import styles from "../../page.module.css";

// ⚛️ Next.js Built-ins
import Image from "next/image";

// 📬 Custom Components – Integrations
import OpenHubspotDialog from "@/components/custom/OpenHubspotDialog";

// 💅 Chakra UI
import { Text, Heading, Flex, Box } from "@chakra-ui/react";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import CallToActionButton from "@/components/custom/CallToActionButton";
import ListsWithIcons from "@/components/custom/ListsWithIcons";
import Footer from "@/components/custom/Footer";

// 🎞️ Custom Components – Animations
import TypedCodeSection from "@/components/animation/TypedCode";

// 💻 Code Hightlighter
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default function MarketingTechMigration() {
  const codeToType = ["business.", "team.", "startup.", "enterprise."];

  const listsContent = [
    {
      title: "Google Analytics 4",
      description:
        "Google Analytics 4 is the latest version of Google Analytics, which uses event-based data collection and machine learning to provide insights into user behavior across websites and apps.",
      icon: null,
    },
    {
      title: "Segment",
      description:
        "Segment is a customer data platform (CDP) that helps businesses collect, clean, and control their customer data. It allows you to send data to various marketing and analytics tools.",
      icon: null,
    },
    {
      title: "Mixpanel",
      description:
        "Mixpanel is an advanced analytics platform that helps businesses track user interactions with web and mobile applications. It provides insights into user behavior, engagement, and retention.",
      icon: null,
    },
  ];

  const codeContent = [
    `gtag("event",
    "submitted_form",{
    "form_id":"contact_form",
    "session_number":4
});`,

    `
window.dataLayer.push({
    "event":"submitted_form",
    "form_id":"contact_form",
    "session_number":4
});`,
    `
mixpanel.track(
    "submitted_form",{
    "form_id":"contact_form",
    "session_number":4
});
    `,
  ];

  const highlightedCodeContent = codeContent.map((code) => {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  });

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Flex direction={"row"} gap={6}>
          <Flex direction={"column"} gap={6}>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              display={{ base: "flex-column", md: "flex" }}
            >
              <Heading
                my={6}
                color={"rgb(79, 59, 62)"}
                size={"4xl"}
                textAlign={"left"}
                letterSpacing={"tight"}
              >
                Helping every
              </Heading>
              <Heading size={"4xl"} textAlign={"left"} letterSpacing={"tight"}>
                <TypedCodeSection
                  codeToType={codeToType}
                  smartBackspace={true}
                  isHeader={true}
                />
              </Heading>
            </Flex>
            <Text>
              Build a tracking infrastructure that scales with your business.
              Future proof your tracking and work with tooks that are shaping to
              future of web analytics.
            </Text>
            <ListsWithIcons listDescriptions={listsContent} />
          </Flex>
          <Flex display={{ base: "none", md: "flex" }}>
            <Box
              bg="gray.900"
              w={"55rem"}
              mx={"auto"}
              py={4}
              px={2}
              borderRadius="xl"
            >
              <Box
                bg="gray.800"
                p={6}
                borderRadius="md"
                color="white"
                overflowX="hidden"
                height={"100%"}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  whiteSpace: "pre",
                }}
              >
                {highlightedCodeContent.map((code: any, index) => (
                  <Box
                    key={index}
                    dangerouslySetInnerHTML={{ __html: code }}
                  ></Box>
                ))}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
