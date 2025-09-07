// 🖼️ Styles
import styles from "./page.module.css";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "./lib/helper/generatePageMetadata";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import IllustrationWithText from "@/components/custom/IllustrationWithText";
import FeatureCards from "@/components/custom/FeatureCards";
import FeatureTabs from "@/components/custom/FeatureTabs";
import CallToActionSection from "@/components/custom/CallToActionSection";
import Footer from "@/components/custom/Footer";

// 🎞️ Custom Components – Animations
import SineWaveAnimation from "@/components/animation/SinFunction";
import SlidingLogoGrid from "@/components/animation/SlidingLogoGrid";

// 💅 Chakra UI
import { Text, Heading, Box, Image, Flex } from "@chakra-ui/react";

// 🎨 Icons
import { LuFolder, LuSquareCheck, LuUser, LuDatabase } from "react-icons/lu";
import { FiMap, FiTrendingUp, FiShield, FiPercent } from "react-icons/fi";

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
      title: "Performance Driven",
      description:
        "We help you focus on measurements that matter to your business and its growth. We help you measure your North Star and keep track of your metrics, so you always know where you stand.",
      icon: <FiTrendingUp />,
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

  const processSteps = [
    {
      step: "Consultation Call",
      description:
        "At Datakyu, we hold one value above all: respect for your time and ours. That’s why our process begins with a structured discovery call — not as a formality, but as a crucial alignment step. This conversation allows us to understand your business challenges, goals, and expectations, while also giving you a transparent view into how we operate, what we specialize in, and the kind of results we deliver. We believe in working with intent — and that starts by ensuring we’re the right partner for each other. If we aren’t the best fit, we’ll tell you upfront and point you in the right direction. But if we are, that initial conversation becomes the first step in a streamlined, purpose-driven collaboration.",
      icon: <LuUser />,
    },
    {
      step: "Measurement Plan",
      description:
        "We work closely with you to develop a tailored measurement plan aligned with your unique business objectives. Our goal is to help you identify the metrics that truly matter — the ones that reflect progress, performance, and growth — and establish the infrastructure to measure them accurately and consistently. Whether you're focused on customer acquisition, retention, revenue, or operational efficiency, we ensure your data strategy is built around meaningful, actionable insights — not vanity metrics.",
      icon: <LuFolder />,
    },
    {
      step: "Implementation",
      description:
        "We translate your strategic vision into a measurable reality by implementing the right instrumentation using the most appropriate and scalable technology stack. Every implementation is rigorously tested to ensure alignment with the measurement plan, guaranteeing that your data is clean, reliable, and trustworthy. Our focus is not just on tracking — but on ensuring every event, property, and interaction is captured with precision, so you can move forward with full confidence in your analytics.",
      icon: <LuSquareCheck />,
    },
    {
      step: "Data Visualization",
      description:
        "We transform complex data into clear, actionable insights through thoughtfully designed dashboards tailored to your business goals. Our visualizations go beyond aesthetics — they are built to highlight what matters most, enabling you and your team to make informed, data-driven decisions with confidence. Whether you're tracking performance, identifying trends, or aligning stakeholders, we ensure your data tells a story that drives strategic action.",
      icon: <LuDatabase />,
    },
  ];

  const techStackLogos = [
    {
      src: "/images/techStack/google-analytics-4.svg",
      alt: "Google Analytics 4 logo",
      width: 90,
      height: 50,
    },
    {
      src: "/images/techStack/google-tag-manager.svg",
      alt: "Google Tag Manager logo",
      width: 50,
      height: 50,
    },
    {
      src: "/images/techStack/looker.svg",
      alt: "Looker logo",
      width: 90,
      height: 50,
    },
    {
      src: "/images/techStack/mixpanel.svg",
      alt: "Mixpanel logo",
      width: 90,
      height: 50,
    },
    {
      src: "/images/techStack/segment-1.svg",
      alt: "Segment logo",
      width: 100,
      height: 50,
    },
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id="hero">
          <HeroHeading
            title="Make your Marketing data work harder with Datakyu"
            highlight="Datakyu"
          />
          <Text textAlign={"center"} mx={"auto"} my={4}>
            We help you own the unlimited power of your marketing data.
          </Text>
          <Box display={{ base: "none", lg: "initial" }}>
            {/* <Image
              src="/images/collaboration.png"
              alt="Two analysts collaborating on a data project"
              m={{ lg: "0 auto" }}
              width={"45rem"}
              height={"auto"}
            /> */}
          </Box>
        </section>
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
            direction={"row"}
            my={4}
            justifyContent={"center"}
            gap={4}
            width={{ lg: "100%" }}
          >
            <IllustrationWithText
              title={"Build a measurement plan"}
              description={
                "We are here to listen and we are here help. Let us know what your business goals are and we will help you build a plan to measure exactly what you need to grow."
              }
              // imageSrc={"/images/Climbing.png"}
              // imageAlt={"A person climibing strairs"}
              // features={[
              //   "Identify Key Business Goals",
              //   "Build a Measurement Infrastructure",
              //   "Ensure Data Fidelity & Integrity",
              // ]}
              reverse={false}
              // elaboration={[
              //   "At Datakyu, we believe analytics should work for you — not overwhelm you. Whether you're running an e-commerce store, a SaaS startup, or a service-based business, the truth is the same: you can't grow what you don't measure. That’s why we're here — to help you understand what matters most and remove the guesswork from your marketing and product decisions.",
              // ]}
            />
            <IllustrationWithText
              title={"Establish data-backed growth"}
              description={
                "We build execute our tracking to reflect our measurement plan which gives you the confidence to reduce uncertainty and make data-driven decisions."
              }
              // imageSrc={"/images/on-laptop.png"}
              // imageAlt={"A person working on a laptop"}
              // features={[
              //   "Focus on Real Metrics",
              //   "Capture Meaningful Data",
              //   "Build a Data-Driven Culture",
              // ]}
              reverse={true}
              // elaboration={[
              //   "At Datakyu, we don’t just track for the sake of tracking — we build with purpose. Every implementation begins with a solid measurement plan that aligns with your business objectives. Whether you're focused on increasing leads, improving conversion rates, or understanding user behavior, we tailor the tracking strategy to support those exact goals.",
              // ]}
            />
            <IllustrationWithText
              title={"Visualize your data"}
              description={
                "We visualize data. Our dashboarding tools are our canvas and we are known for producing beautiful art."
              }
              // imageSrc={"/images/project-management.png"}
              // // imageAlt={"A person working on industrial drawings."}
              // features={[
              //   "Gain Insights Beyond KPIs",
              //   "Tailored Dashboards for All Stakeholders",
              // ]}
              reverse={false}
              // elaboration={[
              //   "At Datakyu, we don’t just track data — we bring it to life. Once your events and metrics are flowing correctly, we design dashboards that speak clearly, beautifully, and with purpose. Whether you're tracking campaign performance, product engagement, or customer retention, we make sure the numbers don't just exist — they make sense.",
              // ]}
            />
            <IllustrationWithText
              title={"Identify opportunities"}
              description={
                "We dig into your raw data and augment it as well as enrich it with CRM connectivity to empower your business. We help you catch shifts, outliers, and signals that point to real growth."
              }
            />
          </Flex>
        </section>
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
            We belive in transperancy and ownership. We help make sense of your
            data and empower you take decisions and guide you towards growth.
          </Text>
          <FeatureCards featuredCards={featuredCards} />
        </section>
        <CallToActionSection description="Ready to take your data to the next level?" />
        <section id="methodology">
          <Heading
            size={"4xl"}
            my={6}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            Why is our approach so effective? 🤫
          </Heading>
          <FeatureTabs FeatureTabs={processSteps} />
        </section>
        <section id="martech-stack">
          <Heading
            size={"4xl"}
            my={6}
            color={"#311c3b"}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            Our Technology Stack
          </Heading>
          <SlidingLogoGrid logoStack={techStackLogos} />
        </section>
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
      </main>
      <Footer />
    </div>
  );
}
