// 🖼️ Styles
import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import CallToActionButton from "@/components/custom/CallToActionButton";
import Footer from "@/components/custom/Footer";
import TypedCodeSection from "@/components/animation/TypedCode";
import FeatureCards from "@/components/custom/FeatureCards";
import TableComponent from "@/components/custom/Table";
import SlidingLogoGrid from "@/components/animation/SlidingLogoGrid";
import ListsWithIcons from "@/components/custom/ListsWithIcons";
import AlternatingTimeline from "@/components/custom/AlternatingTimeline";
import CardsWithImages from "@/components/custom/CardsWithImages";
import FAQ from "@/components/custom/FAQ";

// 💅 Chakra UI
import { Text, Box, Flex, Heading } from "@chakra-ui/react";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "../../lib/helper/generatePageMetadata";

// 🎨 Icons
import { LuLayers3 } from "react-icons/lu";
import { FaGaugeHigh } from "react-icons/fa6";
import { FcWorkflow } from "react-icons/fc";
import { MdTimeline } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";

// ⚛️ React bits components
import BlurText from "@/components/Bits/BlurText";
// import MagicBento from "@/components/Bits/MagicBento";
// import LogoLoop from "@/components/Bits/LogoLoop";
import SplashCursor from "@/components/Bits/SplashCursor";
import AnimatedContent from "@/components/Bits/AnimatedContent";

export async function generateMetadata() {
  return getPageMetadata("/services/martech-audits");
}

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
      width: 70,
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

  const timeLineSteps = [
    { name: "Less hypothetical — more evidence-based execution" },
    { name: "Less noise — more measurable outcomes" },
    { name: "Less talk — more actionable tracking" },
    { name: "Less friction — more scalable infrastructure" },
    { name: "Less guesswork — more data-informed decisions" },
    { name: "Less fragmentation — more unified visibility" },
    { name: "Less lag — more real-time clarity" },
  ];

  const cardsContent = [
    {
      title: "Documentation",
      description:
        "We help you design, build, and maintain robust tracking documentation—from naming conventions to implementation references—so your data stays trustworthy.",
      image: "/images/headers.png",
    },
    {
      title: "Tracking Code",
      description:
        "We engineer high-quality, maintainable tracking code across web and product platforms, ensuring data flows cleanly from event to destination.",
      image: "/images/cards.png",
    },
    {
      title: "Training",
      description:
        "Coming soon. Workshops and stakeholder sessions to ensure everyone—from marketers to engineers—understands how to use and trust the data.",
      image: "/images/windows.png",
    },
  ];

  const faqs = [
    {
      question: "How does the auditing and implementation package work?",
      answer:
        "Our auditing and implementation package starts at $2000, which is the base price for standard marketing websites. Final pricing depends on the type of business (SaaS, Ecommerce, etc.), the number of pages involved, and the total number of events that need to be tracked. If you have specific requirements, please contact our sales team.",
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer:
        "We do not offer default ongoing support after the implementation is complete. However, if you require post-implementation assistance, please reach out to our team—we’re happy to explore a support agreement that fits your needs. During implementation, support and thorough documentation are provided.",
    },
    {
      question:
        "Do you offer auditing and implementation services for mobile apps?",
      answer:
        "Yes, we do. Whether you're building for Android, iOS, or a cross-platform app, we can help you implement event tracking, monitor app performance, and build a solid data foundation.",
    },
    {
      question:
        "Can I get only the auditing services without implementation? Or vice versa?",
      answer:
        "Absolutely. If you only need your analytics setup reviewed, our consulting services are a great fit. Likewise, if you already have a plan and need help implementing it, we can tailor a package specifically for implementation.",
    },
    {
      question:
        "Can I get a dashboard built without purchasing the full package?",
      answer:
        "Yes. You can purchase dashboard development as a standalone service. Please refer to our data visualization services for more information.",
    },
    {
      question:
        "How long does it take to complete the audit and implementation?",
      answer:
        "Timelines vary depending on the size and complexity of your setup. After our initial call, we’ll provide a clear timeline for both audit and implementation phases. Work begins once you give us the go-ahead.",
    },
    {
      question: "Do you support server-side tracking setups?",
      answer:
        "Yes, we support server-side tracking implementations using tools like GTM Server, Segment, and custom Node.js endpoints. Let us know your stack and we’ll take it from there.",
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
            text="Marketing Tech Stack Services"
            delay={150}
            animateBy="words"
            direction="top"
            className="tracking-tight text-[#f15a25]"
          />
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
          <section id="typed-code">
            <Box
              display={{ base: "none", md: "none", lg: "inherit" }}
              bg="gray.900"
              py={12}
              px={6}
              borderRadius="xl"
              width={{ lg: "75%" }}
              margin={{ lg: ".5rem auto" }}
            >
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
                      fontFamily: "var(--font-spectral)",
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
        </AnimatedContent>
        <CallToActionButton text={"Request an Audit"} toCenter={{ lg: true }} />
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
          <section id="services">
            <Heading
              my={6}
              size={"4xl"}
              textAlign={"left"}
              letterSpacing={"tight"}
              color={"#311c3b"}
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
              color={"#311c3b"}
            >
              Auditing Services
            </Heading>
            <Text>
              Comprehensive audits to ensure data accuracy, platform integrity,
              and alignment with business objectives.
            </Text>
            <TableComponent tableBodyContent={tableContent} />
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
          <section id="tech-stack">
            <Flex gap={6} justifyContent={{ xl: "space-evenly" }}>
              <Flex
                direction={"column"}
                justifyContent={{ xl: "space-evenly" }}
              >
                <Heading
                  my={6}
                  size={"4xl"}
                  textAlign={"left"}
                  letterSpacing={"tight"}
                  color={"#311c3b"}
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
              <section id="typed-code-back">
                <Box
                  display={{ base: "none", md: "none", lg: "inherit" }}
                  bg="gray.900"
                  py={12}
                  px={6}
                  w={{ lg: "30rem", xl: "45rem" }}
                  h={{ lg: "100%" }}
                  borderRadius="xl"
                >
                  <Box
                    bg="gray.800"
                    p={6}
                    borderRadius="md"
                    boxShadow="md"
                    minW="320px"
                    maxW="500px"
                    color="white"
                    style={{
                      fontFamily: "var(--font-spectral)",
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
              </section>
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
          <section style={{ marginTop: "4rem" }} id="anaytics-importance">
            <Heading
              my={6}
              size={"4xl"}
              textAlign={"left"}
              letterSpacing={"tight"}
              color={"#311c3b"}
            >
              You Are Only as Strong as Your Analytics Layer
            </Heading>
            <Text fontSize={"md"}>
              The right foundation lets every event, click, and user action
              drive value.
            </Text>
            <Box my={10}>
              <AlternatingTimeline steps={timeLineSteps} />
            </Box>
            <Heading
              my={10}
              size={"4xl"}
              textAlign={"left"}
              letterSpacing={"tight"}
              textAlignLast={"center"}
              color={"#311c3b"}
            >
              The Backbone of Marketing Analytics
            </Heading>
            <CardsWithImages cardsContent={cardsContent} />
            <section id="post-cards-contact-us">
              <CallToActionButton
                text={"Contact our Sales Team"}
                toCenter={{ base: true, md: true, lg: true, xl: true }}
              />
            </section>
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
          <section id="faq-section">
            <Heading
              my={6}
              size={"4xl"}
              textAlign={"left"}
              letterSpacing={"tight"}
              textAlignLast={"center"}
            >
              Frequently Asked Questions
            </Heading>
            <FAQ questions={faqs} />
          </section>
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}
