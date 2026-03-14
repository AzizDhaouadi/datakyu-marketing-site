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
import StepsTimeline from "@/components/custom/Timeline";
import CallToActionButton from "@/components/custom/CallToActionButton";

// ⚛️ React bits components
import BlurText from "@/components/Bits/BlurText";
import MagicBento from "@/components/Bits/MagicBento";
import AnimatedContent from "@/components/Bits/AnimatedContent";

// Custom Fonts
import { Fraunces } from "next/font/google";

// 💅 Chakra UI
import {
  Text,
  Heading,
  Box,
  Flex,
  DataList,
  Stat,
  FormatNumber,
  Link,
} from "@chakra-ui/react";

// 🎨 Icons
import {
  FiMap,
  FiShield,
  FiPercent,
  FiAlertTriangle,
  FiBarChart2,
  FiClock,
  FiUsers,
  FiTrendingDown,
  FiTool,
  FiCheck,
  FiX,
} from "react-icons/fi";

import { LuExternalLink } from "react-icons/lu";

export async function generateMetadata() {
  return getPageMetadata("/");
}

export default function Home() {
  const featuredCards = [
    {
      title: "Clear Roadmaping",
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

  const painPoints = [
    {
      title: "Your GGA4 revenue does not match your CRM",
      description:
        "Two sources of truth. Zero confidence in either. Every report becomes a negotiation.",
      icon: <FiAlertTriangle />,
    },
    {
      title: "Your paid media dashboards contradict your pipeline numbers",
      description:
        "Meta says one thing. Hubspot says another. Finance wants answers you cannot give them.",
      icon: <FiBarChart2 />,
    },
    {
      title: "Your team spends hours reconciling spreadsheets",
      description: "The analysis becomes the bottleneck and not the strategy.",
      icon: <FiClock />,
    },
    {
      title: "Your leadership questions your marketing attribution",
      description:
        "Every board meeting starts with the same uncomfortable silence around the numbers slide.",
      icon: <FiUsers />,
    },
    {
      title: "You cannot confidently answer: what is actually driving growth?",
      description: "You have data. You just do not have clarity.",
      icon: <FiTrendingDown />,
    },
    {
      title: "Your tracking was set up once and never audited or enhanced",
      description:
        "The business has changed. The data has not kept up. You are making decisions on a broken foundation.",
      icon: <FiTool />,
    },
  ];

  const timelineSteps = [
    { name: "Tracking Gap Analysis" },
    { name: "Platform Reconciliation Report" },
    { name: "Governance Risk Assessment" },
    { name: "Remediation Roadmap" },
  ];

  const beforeDataList = [
    {
      label: <FiX />,
      value:
        "Fragmented tracking across platforms with no single source of truth",
    },
    {
      label: <FiX />,
      value:
        "Manual reconciliation eating your team's time every reporting cycle",
    },
    {
      label: <FiX />,
      value: "Leadership mistrusting marketing numbers in every board meeting",
    },
    {
      label: <FiX />,
      value: "No clear answers on what is actually driving growth",
    },
    {
      label: <FiX />,
      value: "Budgets shifted based on data nobody should have trusted",
    },
  ];

  const afterDataList = [
    {
      label: <FiCheck />,
      value: "Aligned tracking systems across your full marketing stack",
    },
    {
      label: <FiCheck />,
      value: "Clean dashboards your team can act on without second-guessing",
    },
    {
      label: <FiCheck />,
      value: "Attribution your leadership trusts and can present to the board",
    },
    {
      label: <FiCheck />,
      value:
        "Confidence to forecast, report, and scale on data that actually holds up",
    },
    {
      label: <FiCheck />,
      value:
        "Budget decisions backed by numbers everyone in the room agrees on",
    },
  ];

  const featuredBlogPosts = [
    {
      title: "Flatten GA4 BigQuery Export Schema",
    },
    {
      title: "Google Consent Mode V2 with CookieYes & GTM",
    },
    {
      title: "Track Gravity Forms with Google Tag Manager",
    },
    {
      title: "GA4 Measurement Protocol: Server-Side Events",
    },
  ];

  const techStack = [
    "Google Analytics 4",
    "Google Tag Manager",
    "BigQuery",
    "Hubspot",
    "Salesforce",
    "Meta Ads",
    "Google Ads",
    "Looker Studio",
    "Segment",
    "Amplitude",
    "Mixpanel",
    "Server-Side GTM",
  ];

  const caseStudyOneTechStack = [
    "GA4",
    "User ID",
    "GTM",
    "Channel Attribution",
    "Referral Exclusions",
  ];

  const caseStudyOneOutcomes = [
    {
      label: <FiCheck />,
      value:
        "Self-referral exclusions removed. Direct traffic accurately reflects real behaviour",
    },
    {
      label: <FiCheck />,
      value:
        "Custom channel groupings covering Apple Search Ads, affiliates, programmatic, and mobile ad networks",
    },
    {
      label: <FiCheck />,
      value:
        "User ID implemented via GTM to enable cross-device sessions deduplication across Web, iOS, and Android",
    },
    {
      label: <FiCheck />,
      value:
        "GA4 attribution change documented with BigQuery recommended as ground truth for longitudinal analysis and forecasting",
    },
    {
      label: <FiCheck />,
      value:
        "Budget decisions backed by numbers everyone in the room agrees on",
    },
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        {/* <SplashCursor /> */}
        <section id="hero">
          <BlurText
            text="Your Marketing Data Should Not Be a Liability"
            delay={150}
            animateBy="words"
            direction="top"
            className="tracking-tight text-[#f15a25]"
          />
          <Text textAlign={"center"} mx={"auto"} my={4}>
            We diagnose and repair tracking, attribution, and reporting systems
            for established SMB marketing teams.
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
              We believe in transparency and ownership. We help make sense of
              your data and empower you take decisions and guide you towards
              growth.
            </Text>
            <FeatureCards featuredCards={featuredCards} />
          </section>

          <CallToActionSection description="Ready to take your data to the next level?" />
          <section id="methodology" style={{ marginTop: "4rem" }}>
            <Heading
              size={"4xl"}
              my={6}
              textAlign={"center"}
              letterSpacing={"tight"}
            >
              Why is our approach so effective? 🤫
            </Heading>
            <Box w={"80%"} m={"0 auto"}>
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
            </Box>
          </section>
          <section id="pain-points" style={{ marginTop: "4rem" }}>
            <Heading
              size={"4xl"}
              my={8}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              If This Sounds Familiar
            </Heading>
            <Text textAlign={"left"} mx={"auto"} my={4}>
              Most marketing data problems don't announce themselves. They
              quietly erode confidence until nobody trusts the numbers.
            </Text>
          </section>
          <FeatureCards featuredCards={painPoints} />
          <Heading
            size={"3xl"}
            my={6}
            color={"#311c3b"}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            We've seen this before and we know how to fix it.
          </Heading>
          <section id="data-integrity-audit">
            <Heading
              size={"4xl"}
              my={8}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              Marketing Data Integrity Audits
            </Heading>
            <Text textAlign={"left"} mx={"auto"} my={4}>
              A structured diagnostic to find exactly where your data breaks
              down and a clear roadmap to fix it.
            </Text>
            <Box
              backgroundColor={"#1a1f2e"}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="xl"
            >
              <Flex
                direction={"row"}
                p={"4rem"}
                gap={"4rem"}
                justifyContent={"center"}
              >
                <Flex direction={"column"} w={"45%"} p={"2"}>
                  <Text lineHeight={"taller"} color={"#8b8fa8"}>
                    Most marketing data problems hide in plain sight. A
                    misconfigured referral exclusion. A User ID that was never
                    implemented. An ad platform firing duplicate conversions.
                    Individually they seem minor. Together they distort every
                    report your team produces and every decision your leadership
                    makes. We find them all.
                  </Text>
                  <CallToActionButton text={"Book a Data Diagnostic"} />
                </Flex>
                <Flex w={"45%"} p={"2"}>
                  <StepsTimeline steps={timelineSteps} />
                </Flex>
              </Flex>
            </Box>
          </section>
          <section id="datakyu-before-after" style={{ marginTop: "4rem" }}>
            <Heading
              size={"4xl"}
              my={8}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              From Data Chaos to Reporting Confidence
            </Heading>
            <Box
              id="outer-container"
              backgroundColor={"#1a1f2e"}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="xl"
            >
              <Flex
                id="inner-container"
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"4rem"}
                gap={"4rem"}
              >
                <Flex direction={"column"}>
                  <Box
                    as="span"
                    fontSize="11px"
                    fontWeight="500"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    px={3}
                    py={1}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    color="gray.500"
                    maxW={"fit-content"}
                  >
                    Before
                  </Box>
                  <DataList.Root
                    orientation="horizontal"
                    divideY="1px"
                    maxW="md"
                  >
                    {beforeDataList.map((item, index) => (
                      <Box key={index}>
                        <DataList.Item pt="4">
                          <DataList.ItemLabel color={"white"}>
                            {item.label}
                          </DataList.ItemLabel>
                          <DataList.ItemValue color={"#8b8fa8"}>
                            {item.value}
                          </DataList.ItemValue>
                        </DataList.Item>
                      </Box>
                    ))}
                  </DataList.Root>
                </Flex>
                <Flex direction={"column"}>
                  <Box
                    as="span"
                    fontSize="11px"
                    fontWeight="500"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    px={3}
                    py={1}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="orange.800"
                    color="orange.400"
                    bg="orange.900"
                    maxW={"fit-content"}
                  >
                    After
                  </Box>
                  <DataList.Root
                    orientation="horizontal"
                    divideY="1px"
                    maxW="md"
                  >
                    {afterDataList.map((item, index) => (
                      <Box key={index}>
                        <DataList.Item pt="4">
                          <DataList.ItemLabel color={"white"}>
                            {item.label}
                          </DataList.ItemLabel>
                          <DataList.ItemValue color={"white"}>
                            {item.value}
                          </DataList.ItemValue>
                        </DataList.Item>
                      </Box>
                    ))}
                  </DataList.Root>
                </Flex>
              </Flex>
            </Box>
          </section>
          <section id="data-journal-callout">
            <Heading
              size={"4xl"}
              my={8}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              Trusted by Data Teams Worldwide
            </Heading>
            <Text textAlign={"left"} mx={"auto"} my={4}>
              Our technical guides on GA4, GTM, consent mode, BigQuery, and
              marketing attribution are read and shared by practitioners across
              North America and Europe.
            </Text>
            <Box
              id="outer-container"
              backgroundColor={"#1a1f2e"}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="xl"
            >
              <Flex
                id="inner-container"
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"4rem"}
                gap={"4rem"}
              >
                <Flex direction={"column"}>
                  <Flex direction={"row"} gap={"2rem"}>
                    <Stat.Root>
                      <Stat.ValueText
                        fontFamily="Fraunces, serif"
                        color={"#f15a25"}
                      >
                        587K
                      </Stat.ValueText>
                      <Stat.Label color={"#8b8fa8"}>
                        Annual impressions
                      </Stat.Label>
                    </Stat.Root>
                    <Stat.Root>
                      <Stat.ValueText
                        fontFamily="Fraunces, serif"
                        color={"#f15a25"}
                      >
                        37+
                      </Stat.ValueText>
                      <Stat.Label color={"#8b8fa8"}>
                        Technical Guides
                      </Stat.Label>
                    </Stat.Root>
                    <Stat.Root>
                      <Stat.ValueText
                        fontFamily="Fraunces, serif"
                        color={"#f15a25"}
                      >
                        <FormatNumber value={4} />
                      </Stat.ValueText>
                      <Stat.Label color={"#8b8fa8"}>
                        AI platforms citing us
                      </Stat.Label>
                    </Stat.Root>
                  </Flex>
                  <Box my="2rem">
                    <Text color={"#8b8fa8"}>
                      Data Journal is our independent publication covering GA4,
                      GTM, BigQuery, server-side tracking, and consent
                      management. Referenced by practitioners, cited by AI
                      tools, and shared in enterprise Slack and Teams channels
                      daily.
                    </Text>
                  </Box>
                  <Box>
                    <Link
                      color={"#f15a25"}
                      variant="plain"
                      href="https://datajournal.datakyu.co"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Read Data Journal <LuExternalLink />
                    </Link>
                  </Box>
                </Flex>
                <Flex id="featured-blog-posts">
                  <FeatureCards featuredCards={featuredBlogPosts} />
                </Flex>
              </Flex>
            </Box>
          </section>
          <section id="our-technology-stack">
            <Heading
              size={"4xl"}
              my={8}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              We Work Where Your Data Lives
            </Heading>
            <Text textAlign={"left"} mx={"auto"} my={4}>
              We work across the full modern marketing stack — from data
              collection and tag management to attribution, reporting, and
              everything that breaks in between.
            </Text>
            <Flex direction={"row"} gap={"1rem"}>
              {techStack.map((tech, index) => (
                <Box
                  key={index}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="#181c27"
                  border="1px solid"
                  borderColor="#252938"
                  borderRadius="lg"
                  px={4}
                  py={3}
                  fontSize="13px"
                  fontWeight="400"
                  color="#8b8fa8"
                  _hover={{
                    borderColor: "#f15a2530",
                    color: "#e8e8e8",
                  }}
                  transition="all 0.2s ease"
                >
                  <Box
                    w="6px"
                    h="6px"
                    borderRadius="full"
                    bg="orange.500"
                    opacity={0.5}
                    flexShrink={0}
                  />
                  {tech}
                </Box>
              ))}
            </Flex>
          </section>
          <section id={"case-study"} style={{ marginTop: "4rem" }}>
            <Heading
              size={"4xl"}
              my={8}
              textAlign={"left"}
              letterSpacing={"tight"}
            >
              Our Work
            </Heading>
            <Box
              id={"outer-container"}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="xl"
            >
              <Flex direction={"column"}>
                <Flex
                  id="hero-section"
                  direction={"row"}
                  justify={"space-around"}
                  alignItems={"center"}
                  borderBottom={"1px solid"}
                  borderBottomColor="gray.500"
                >
                  <Flex id={"title"} direction={"column"}>
                    <Box p={2}>
                      <Text>NORTH AMERICAN SAAS. MILLIONS OF ACTIVE USERS</Text>
                      <Heading
                        size={"3xl"}
                        my={4}
                        textAlign={"left"}
                        letterSpacing={"tight"}
                      >
                        User Intelligence & Attribution Overhaul
                      </Heading>
                    </Box>
                  </Flex>
                  <Flex id={"tech-stack"}>
                    <Flex direction={"row"} gap={"1rem"}>
                      {caseStudyOneTechStack.map((tech, index) => (
                        <Box
                          key={index}
                          display="inline-flex"
                          alignItems="center"
                          gap={2}
                          maxHeight={"fit-content"}
                          bg="#181c27"
                          border="1px solid"
                          borderColor="#252938"
                          borderRadius="lg"
                          px={4}
                          py={3}
                          fontSize="13px"
                          fontWeight="400"
                          color="#8b8fa8"
                          _hover={{
                            borderColor: "#f15a2530",
                            color: "#e8e8e8",
                          }}
                          transition="all 0.2s ease"
                        >
                          <Box
                            w="6px"
                            h="6px"
                            borderRadius="full"
                            bg="orange.500"
                            opacity={0.5}
                            flexShrink={0}
                          />
                          {tech}
                        </Box>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex id={"content-section"} direction={"row"}>
                  <Flex
                    w={"50%"}
                    p={6}
                    direction={"column"}
                    id={"work-description"}
                    borderRight={"1px solid"}
                    borderRightColor={"gray.500"}
                  >
                    <Heading
                      size={"xl"}
                      my={4}
                      textAlign={"left"}
                      letterSpacing={"tight"}
                    >
                      THE PROBLEM
                    </Heading>
                    <Text letterSpacing={"taller"}>
                      A large share of the client's traffic was appearing as
                      Direct with no clear explanation. Unassigned sessions were
                      inflating across all reports, channel groupings didn't
                      reflect the actual acquisition mix, and cross-device user
                      identity was fragmented across Web, iOS, and Android.
                      Leadership had no reliable baseline to make decisions
                      from.
                    </Text>
                    <Heading
                      size={"xl"}
                      my={4}
                      textAlign={"left"}
                      letterSpacing={"tight"}
                    >
                      WHAT WE DID
                    </Heading>
                    <Text letterSpacing={"taller"}>
                      We audited and removed a self-referral exclusion that was
                      silently bucketing traffic into Direct. We built custom
                      channel groupings covering Apple Search Ads, affiliates,
                      programmatic, and mobile ad networks. We implemented User
                      ID via GTM to deduplicate cross-platform sessions, and
                      documented the impact of GA4's April 2025 attribution
                      change with a BigQuery-based reporting recommendation.
                    </Text>
                  </Flex>
                  <Flex
                    w={"45%"}
                    p={6}
                    direction={"column"}
                    id={"work-description"}
                  >
                    <Heading
                      size={"xl"}
                      my={4}
                      textAlign={"left"}
                      letterSpacing={"tight"}
                    >
                      THE OUTCOME
                    </Heading>
                    <Flex direction={"row"} gap={"3rem"} wrap={"wrap"}>
                      <Stat.Root>
                        <Stat.ValueText
                          fontFamily="Fraunces, serif"
                          color={"#f15a25"}
                        >
                          -68%
                        </Stat.ValueText>
                        <Stat.Label color={"#8b8fa8"}>
                          Drop in misattributed direct traffic after self
                          referral exclusion fix.
                        </Stat.Label>
                      </Stat.Root>
                      <Stat.Root>
                        <Stat.ValueText
                          fontFamily="Fraunces, serif"
                          color={"#f15a25"}
                        >
                          -20.7%
                        </Stat.ValueText>
                        <Stat.Label color={"#8b8fa8"}>
                          Reduction in unassigned session via custom channel
                          grouping
                        </Stat.Label>
                      </Stat.Root>
                      <Stat.Root>
                        <Stat.ValueText
                          fontFamily="Fraunces, serif"
                          color={"#f15a25"}
                        >
                          59K
                        </Stat.ValueText>
                        <Stat.Label color={"#8b8fa8"}>
                          Sessions correctly classified in a single reporting
                          period
                        </Stat.Label>
                      </Stat.Root>
                      <Stat.Root>
                        <Stat.ValueText
                          fontFamily="Fraunces, serif"
                          color={"#f15a25"}
                        >
                          <FormatNumber value={3} />
                        </Stat.ValueText>
                        <Stat.Label color={"#8b8fa8"}>
                          Platforms deduped via User ID implementation (Web,
                          iOS, Android)
                        </Stat.Label>
                      </Stat.Root>
                    </Flex>
                    <Flex direction={"column"} my={"2rem"}>
                      <DataList.Root orientation="horizontal" maxW={"xl"}>
                        {caseStudyOneOutcomes.map((item, index) => (
                          <Box key={index}>
                            <DataList.Item pt="4">
                              <DataList.ItemLabel color={"#f15a25"}>
                                {item.label}
                              </DataList.ItemLabel>
                              <DataList.ItemValue color={"#8b8fa8"}>
                                {item.value}
                              </DataList.ItemValue>
                            </DataList.Item>
                          </Box>
                        ))}
                      </DataList.Root>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </section>
          <section id="footer-cta-section">
            <CallToActionSection description="Book a Data Diagnostic" />
          </section>
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}
