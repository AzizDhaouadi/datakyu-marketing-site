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
import { desc } from "framer-motion/client";

export default function MarketingTechMigration() {
  const codeToType = [
    "Helping every business.",
    "Helping every team.",
    "Helping every startup.",
    "Helping every decision maker.",
  ];

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

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Flex direction={"row"} gap={6}>
          <Flex direction={"column"} gap={4}>
            <TypedCodeSection codeToType={codeToType} smartBackspace={true} />
            <Text p={4}>
              Build a tracking infrastructure that scales with your business.
              Future proof your tracking and work with tooks that are shaping to
              future of web analytics.
            </Text>
            <ListsWithIcons listDescriptions={listsContent} />
          </Flex>
          <Flex></Flex>
        </Flex>
      </main>
    </div>
  );
}
