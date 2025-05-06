// 🖼️ Styles
import styles from "../../page.module.css";

// ⚛️ Next.js Built-ins
import Image from "next/image";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CallToActionButton from "@/components/custom/CallToActionButton";
import Footer from "@/components/custom/Footer";
import TypedCodeSection from "@/components/animation/TypedCode";
import FeatureCards from "@/components/custom/FeatureCards";
import TableComponent from "@/components/custom/Table";
import SlidingLogoGrid from "@/components/animation/SlidingLogoGrid";
import ListsWithIcons from "@/components/custom/ListsWithIcons";

// 💅 Chakra UI
import { Text, Box, Flex, Heading } from "@chakra-ui/react";

// 🎨 Icons
import { LuLayers3 } from "react-icons/lu";
import { FaGaugeHigh } from "react-icons/fa6";
import { FcWorkflow } from "react-icons/fc";
import { GiChoice } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";

export default function MarTechAudits() {
  const codesToType = [
    `
gtag("event", "user_login", {
  method: "google"
});

`,
    `
  analytics.track("User Login", {
    method: "google",
    email: "datakyu@help.tracking"
  });
  `,
  ];

  const featuredCards = [
    {
      title: "Understand what you are tracking",
      description: "Which user actions if tracked can help us track our KPIs?",
      icon: <LuLayers3 />,
    },
    {
      title: "Understand your Marketing Tech Stack",
      description:
        "Which tools would be ideal for my tracking? How long would implementation take?",
      icon: <FaGaugeHigh />,
    },
    {
      title: "Understand data integrity and quality",
      description:
        "Is my current analytics layer collecting everything pertinent to my business? Do we have a Single Source of Truth? Is my data accurate?",
      icon: <FcWorkflow />,
    },
    {
      title: "Understand your data",
      description:
        "How do I make sense of all the data I have? How do I use it to make decisions?",
      icon: <GiChoice />,
    },
  ];

  const tableContent = [
    {
      service: "Google Analytics 4",
      basic: true,
      full: true,
    },
    {
      service: "Other Analytics Tools",
      basic: false,
      full: true,
    },
    {
      service: "Google Tag Manager Containers",
      basic: true,
      full: true,
    },
    {
      service: "Event Parameters",
      basic: false,
      full: true,
    },
    {
      service: "User Properties",
      basic: false,
      full: true,
    },
    {
      service: "Filters and data controls",
      basic: false,
      full: true,
    },
    {
      service: "Consent & Privacy Signals",
      basic: false,
      full: true,
    },
    {
      service: "Data Layer Review",
      basic: false,
      full: true,
    },
    {
      service: "Conversion Tracking",
      basic: false,
      full: true,
    },
    {
      service: "User Identification",
      basic: false,
      full: true,
    },
    {
      service: "Customer Dimensions & Metrics",
      basic: false,
      full: true,
    },
  ];

  const techStackLogos = [
    {
      src: "/images/techStack/google-analytics-4.svg",
      alt: "Google Analytics 4 logo",
      width: 25,
      height: 25,
    },
    {
      src: "/images/techStack/google-tag-manager.svg",
      alt: "Google Tag Manager logo",
      width: 25,
      height: 25,
    },
    {
      src: "/images/techStack/looker.svg",
      alt: "Looker logo",
      width: 60,
      height: 25,
    },
    {
      src: "/images/techStack/mixpanel.svg",
      alt: "Mixpanel logo",
      width: 60,
      height: 25,
    },
    {
      src: "/images/techStack/segment-1.svg",
      alt: "Segment logo",
      width: 70,
      height: 25,
    },
  ];

  const listWithIconsContent = [
    {
      title: "Collect data from any platform",
      description:
        "Whether you want to collect data from your website, mobile application or offline systems, we can get you there.",
      icon: <MdTimeline size={20} />,
    },
    {
      title: "Visualization that matters",
      description:
        "Everyone hates clutter, and so do we. That's why our dashboards are insightful and help you make descisions on the go.",
      icon: <BiLineChart size={20} />,
    },
  ];

  const trackingSnippets = [
    // 👉 Segment: industry standard customer data platform
    `// Segment event tracking
analytics.track("submitted_form", {
  form_id: "contact_form",
  session_number: 4
});`,

    // 👉 dataLayer: for use with Google Tag Manager (GTM) or GA4
    `// Push to dataLayer for GTM/GA4
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: "submitted_form",
  form_id: "contact_form",
  session_number: 4
});`,

    // 👉 Mixpanel: product analytics platform focused on behavioral events
    `// Mixpanel event tracking
mixpanel.track("submitted_form", {
  form_id: "contact_form",
  session_number: 4
});`,

    // 👉 Amplitude: analytics for product usage and growth
    `// Amplitude event logging
amplitude.getInstance().logEvent("submitted_form", {
  form_id: "contact_form",
  session_number: 4
});`,
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id="hero">
          <HeroHeading
            title="Marketing Tech Stack Implementation & Audits Services"
            highlight="Implementation & Audits"
          />
          <Text
            textAlign={"center"}
            mx={"auto"}
            fontSize="xl"
            mt={4}
            maxW="2xl"
          >
            You build. We measure. Actionable insights from every user
            interaction.
          </Text>
        </section>
        <section id="hero-contact-us">
          <CallToActionButton
            text={"Request a Measurement Plan Audit"}
            toCenter={true}
          />
        </section>
        <section id="typed-code">
          <Box bg="gray.900" py={12} px={6} borderRadius="xl">
            <Flex
              direction="row"
              wrap="wrap"
              gap={6}
              justify="center"
              align="flex-start"
            >
              {codesToType.map((code, index) => (
                <Box
                  key={index}
                  bg="gray.800"
                  p={6}
                  borderRadius="md"
                  boxShadow="md"
                  minW="320px"
                  maxW="500px"
                  color="white"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    whiteSpace: "pre",
                  }}
                >
                  <TypedCodeSection codeToType={code} />
                </Box>
              ))}
            </Flex>
          </Box>
        </section>
        <section id="what-do-we-do">
          <Heading
            size={"4xl"}
            my={6}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            Measure the Right Things, Not All Things
          </Heading>
          <Text
            textAlign={"center"}
            mx={"auto"}
            fontSize="xl"
            mt={4}
            maxW="2xl"
          >
            We build and implement measurement plans that help you answer the
            right business questions.
          </Text>
        </section>
        <section id="services">
          <Heading
            my={6}
            size={"4xl"}
            textAlign={"left"}
            letterSpacing={"tight"}
          >
            Implementation Services
          </Heading>
          <Text>
            Delivering seamless, scalable implementation tailored to your
            business objectives.
          </Text>
          <FeatureCards featuredCards={featuredCards} />
          <Heading
            my={6}
            size={"4xl"}
            textAlign={"left"}
            letterSpacing={"tight"}
          >
            Auditing Services
          </Heading>
          <Text>
            Comprehensive audits to ensure data accuracy, platform integrity,
            and alignment with business objectives.
          </Text>
          <TableComponent tableBodyContent={tableContent} />
        </section>
        <section id="tech-stack">
          <Flex direction={"row"} gap={6}>
            <Flex direction={"column"} minWidth={"60%"}>
              <Heading
                my={6}
                size={"4xl"}
                textAlign={"left"}
                letterSpacing={"tight"}
              >
                Our Technology Stack
              </Heading>
              <Text fontSize={"md"}>
                We operate on a modern, future-ready stack—if it can be built,
                we can track it.
              </Text>
              <SlidingLogoGrid logoStack={techStackLogos} />
              <ListsWithIcons listDescriptions={listWithIconsContent} />
            </Flex>
            <Box
              bg="gray.900"
              w={"60rem"}
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
                overflowX="auto"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  whiteSpace: "pre",
                }}
              >
                <TypedCodeSection
                  codeToType={trackingSnippets}
                  smartBackspace={true}
                />
              </Box>
            </Box>
          </Flex>
        </section>
      </main>
      <Footer />
    </div>
  );
}
