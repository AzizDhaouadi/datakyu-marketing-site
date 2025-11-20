// 🖼️ Styles
import styles from "./page.module.css";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "./lib/helper/generatePageMetadata";

// 🧩 Custom Components – Core
import IllustrationWithText from "@/components/custom/IllustrationWithText";
import FeatureCards from "@/components/custom/FeatureCards";
import CallToActionSection from "@/components/custom/CallToActionSection";
import Footer from "@/components/custom/Footer";
import Nav from "@/components/custom/Nav";

// ⚛️ React bits components
import BlurText from "@/components/Bits/BlurText";
import MagicBento from "@/components/Bits/MagicBento";
import SplashCursor from "@/components/Bits/SplashCursor";
import AnimatedContent from "@/components/Bits/AnimatedContent";

// 🎞️ Custom Components – Animations
import SineWaveAnimation from "@/components/animation/SinFunction";

// 💅 Chakra UI
import { Text, Heading, Box, Flex } from "@chakra-ui/react";

// 🎨 Icons
import { FiMap, FiShield, FiPercent } from "react-icons/fi";
import {
  SiGoogleanalytics,
  SiLooker,
  SiMixpanel,
} from "@icons-pack/react-simple-icons";

export async function generateMetadata() {
  return getPageMetadata("/");
}

export default function Home() {
  const featuredCards = [
    {
      title: "Clear Roadmapping",
      description:
        "Don't break the bank trying the understand how your product is evolving or if your marketing campaigns are profitable. We can show you the way.",
      icon: <FiMap />,
    },
    {
      title: "Data Integrity",
      description:
        "We strive to ensure the accuracy, completeness and consistency of our measurements to deliver data of the highest quality, so all your decision can be data-backed.",
      icon: <FiShield />,
    },
    {
      title: "Complete Measurements",
      description:
        "Feel the impact of complete and accurate measurements for your product and business. We build measurement strategies that establish the basis for performance analysis, growth, and forecasting.",
      icon: <FiPercent />,
    },
  ];

  const techLogos = [
    {
      node: <SiGoogleanalytics size={80} color="#E37400" />,
      title: "Google Analytics",
      href: "https://analytics.google.com",
    },
    {
      node: <SiLooker size={80} color="#4285F4" />,
      title: "Looker Studio",
      href: "https://lookerstudio.google.com",
    },
    {
      node: <SiMixpanel size={80} color="#7856FF" />,
      title: "Mixpanel",
      href: "https://mixpanel.com",
    },
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <SplashCursor />
        <section id="hero">
          <BlurText
            text="Make your Marketing data work harder with Datakyu"
            delay={150}
            animateBy="words"
            direction="top"
            className="tracking-tight text-[#f15a25]"
          />
          <Text textAlign={"center"} mx={"auto"} my={4}>
            We help you own the unlimited power of your marketing data.
          </Text>
          <Box display={{ base: "none", lg: "initial" }}></Box>
        </section>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <section id="offered-services">
            <Heading
              size={"4xl"}
              my={6}
              textAlign={"center"}
              letterSpacing={"tight"}
            >
              Our Data Driven Approach
            </Heading>
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              my={4}
              justifyContent={{ base: "start", sm: "start", lg: "start" }}
              gap={2}
            >
              <IllustrationWithText
                title={"Build a measurement plan"}
                description={
                  "We are here to listen and we are here help. Let us know what your business goals are and we will help you build a plan to measure exactly what you need to grow."
                }
                reverse={false}
              />
              <IllustrationWithText
                title={"Establish growth"}
                description={
                  "We build execute our tracking to reflect our measurement plan which gives you the confidence to reduce uncertainty and make data-driven decisions."
                }
                reverse={true}
              />
              <IllustrationWithText
                title={"Identify opportunities"}
                description={
                  "We dig into your raw data and augment it as well as enrich it with CRM connectivity to empower your business. We help you catch shifts, outliers, and signals that point to real growth."
                }
              />
            </Flex>
          </section>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <section id="features">
            <Heading
              my={6}
              size={"4xl"}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              Why do businesses choose to work with us?
            </Heading>
            <Text>
              We belive in transperancy and ownership. We help make sense of
              your data and empower you take decisions and guide you towards
              growth.
            </Text>
            <FeatureCards featuredCards={featuredCards} />
          </section>
        </AnimatedContent>

        <CallToActionSection description="Ready to take your data to the next level?" />
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <section id="methodology">
            <Heading
              size={"4xl"}
              my={6}
              textAlign={"center"}
              letterSpacing={"tight"}
            >
              Why is our approach so effective? 🤫
            </Heading>
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={100}
              glowColor="132, 0, 255"
            />
          </section>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <section id="cta">
            <Heading
              size={"4xl"}
              my={6}
              color={"#311c3b"}
              textAlign={"center"}
              letterSpacing={"tight"}
            >
              Let&apos;s unlock your data&apos;s full potential.
            </Heading>
            <Box display={{ base: "none", md: "none", lg: "initial" }}>
              <SineWaveAnimation />
            </Box>
            <CallToActionSection description="Unlock Your Marketing Data's Full Potential" />
          </section>
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}
