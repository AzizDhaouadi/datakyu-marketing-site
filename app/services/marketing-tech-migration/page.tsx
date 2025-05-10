// 🖼️ Styles
import styles from "../../page.module.css";

// 💅 Chakra UI
import { Text, Heading, Flex, Box, Image } from "@chakra-ui/react";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import CallToActionButton from "@/components/custom/CallToActionButton";
import ListsWithIcons from "@/components/custom/ListsWithIcons";
import CardsWithImages from "@/components/custom/CardsWithImages";
import Footer from "@/components/custom/Footer";

// 🎞️ Custom Components – Animations
import TypedCodeSection from "@/components/animation/TypedCode";

// 💻 Code Hightlighter
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

// ⚛️ React icons
import { FiShield } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import { GiCookie } from "react-icons/gi";
import { MdTrendingUp } from "react-icons/md";

export default function MarketingTechMigration() {
  const codeToType = ["business.", "team.", "startup."];

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

  const analyticsToolsContent = [
    {
      title: "Google Analytics 4",
      description:
        "Track every interaction with an event-based model, unlock insights with machine learning, and power up with seamless Google integrations.",
      image: "/images/techStack/google-analytics-4.svg",
      includeFooter: true,
    },
    {
      title: "Segment",
      description:
        "Centralize your data, enforce clean collection, and identify users precisely with Personas.",
      image: "/images/techStack/segment-1.svg",
      includeFooter: true,
    },
    {
      title: "Mixpanel",
      description:
        "Dive into interactive reports, explore limitless segmentation, and uncover insights with advanced group analytics.",
      image: "/images/techStack/mixpanel.svg",
      includeFooter: true,
    },
  ];

  const highlightedCodeContent = codeContent.map((code) => {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  });

  const analyticsAdvantagesContent = [
    {
      title: "Future-Proof Analytics Tools",
      description:
        "As the digital landscape of web analytics continues to change, you can build your set up to work with tools that are shaping the future of industry.",
      icon: <FiShield size={20} />,
      reverse: true,
    },
    {
      title: "Complete Data Visibility",
      description:
        "Build your web analytics set up on tools that can offer your the full picture; from acquisiont to conversion to retention.",
      icon: <FaDatabase size={20} />,
      reverse: true,
    },
    {
      title: "Compliance and Privacy Friendly",
      description:
        "Migrate your set up to work with tools offering easily manageable cookie-consent tracking.",
      icon: <GiCookie size={20} />,
      reverse: true,
    },
    {
      title: "Scalable and Flexible",
      description:
        "Don't let your growth limit your data collection or analysis. Build your web and product analytics with tools that scale as your business grows.",
      icon: <MdTrendingUp size={20} />,
      reverse: true,
    },
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id={"hero"}>
          <Flex direction={"row"} gap={6}>
            <Flex direction={"column"} gap={6}>
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                display={{
                  base: "flex-column",
                  md: "inherit",
                  lg: "inherit",
                  xl: "inherit",
                }}
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
                <Heading
                  size={"4xl"}
                  textAlign={"left"}
                  letterSpacing={"tight"}
                >
                  <TypedCodeSection
                    codeToType={codeToType}
                    smartBackspace={true}
                    isHeader={true}
                  />
                </Heading>
              </Flex>
              <Text>
                Build a tracking infrastructure that scales with your business.
                Future proof your tracking and work with tooks that are shaping
                to future of web analytics.
              </Text>
              <ListsWithIcons listDescriptions={listsContent} />
            </Flex>
            <Flex
              display={{ base: "none", md: "none", lg: "flex" }}
              width={{ lg: "25rem", xl: "inherit" }}
            >
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
        </section>
        <section id="analytics-tools">
          <Heading
            size={"4xl"}
            my={6}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            The Infrastructure Behind Lasting Success
          </Heading>
          <Text
            textAlign={"center"}
            mx={"auto"}
            fontSize="xl"
            mt={4}
            maxW="2xl"
          >
            Power your marketing with data you can trust.
          </Text>
          <CardsWithImages cardsContent={analyticsToolsContent} />
        </section>
        <section id="analytics-advantages">
          <Flex direction={"row"} gap={6}>
            <ListsWithIcons
              toReverse={true}
              listDescriptions={analyticsAdvantagesContent}
            />
          </Flex>
        </section>
      </main>
    </div>
  );
}
