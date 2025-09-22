// 🖼️ Styles
import styles from "../page.module.css";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "../lib/helper/generatePageMetadata";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CardsWithImages from "@/components/custom/CardsWithImages";
import FeatureCards from "@/components/custom/FeatureCards";
import CallToActionButton from "@/components/custom/CallToActionButton";
import TechStackTools from "@/components/custom/TechStackTools";
import MarketingToolsTable from "@/components/custom/MarketingToolsTable";
import FAQ from "@/components/custom/FAQ";
import Footer from "@/components/custom/Footer";

// 💅 Chakra UI
import { Text, Heading, Box } from "@chakra-ui/react";

// 🎨 Icons
import { HiDocumentReport } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export async function generateMetadata() {
  return getPageMetadata("/our-technology-stack");
}

export default function OurTechnologyStack() {
  const featureCardsContent = [
    {
      image: null,
      title: "Improve Conversion Rates",
      description:
        "Streamline your online performance and increase conversions with our web and product analytics auditing and implementation consulting services.",
      includeFooter: false,
    },
    {
      image: null,
      title: "Increase Event Reliability",
      description:
        "Maximize the potential of your product and drive growth through the utilization of our consulting services for product growth strategy.",
      includeFooter: false,
    },
    {
      image: null,
      title: "Decrease Time Insight",
      description:
        "Transform your data into actionable insights with our analytics consulting services, empowering you to make informed decisions and drive growth.",
      includeFooter: false,
    },
  ];

  const featuredCards = [
    {
      title: "Messy tracking to clear taxonomy",
      description:
        "We audit your tags and event schema, then ship a tracking plan and data layer that standardizes events and unifies identity (user_id). Result: accurate, de-duplicated data teams can trust.",
      icon: <HiDocumentReport />,
    },
    {
      title: "Slow dashboard to warehouse-ready models",
      description:
        "We model raw events in your warehouse into clean, documented tables with semantic metrics and freshness SLAs so dashboards load fast and stay consistent across teams.",
      icon: <FaDatabase />,
    },
    {
      title: "Incomplete measurements to full-funnel reporting",
      description:
        "We set up pre-/post-measurement and tie behaviors to revenue KPIs, surfacing clear lift in dashboards so stakeholders see impact in dollars, not just clicks.",
      icon: <MdDashboard />,
    },
  ];

  const faqs = [
    {
      question:
        "Do I need all of these tools (GA4, GTM, Segment, Mixpanel, Amplitude) to work with you?",
      answer:
        "No. Most clients start with one or two. We adapt to your current stack, audit what’s in place, and show you where each tool adds the most value.",
    },
    {
      question:
        "How do you make sure tracking stays compliant with privacy regulations?",
      answer:
        "We implement Consent Mode v2, integrate with CMPs like CookieYes or OneTrust, and apply strict event governance so data collection aligns with GDPR, CCPA, and evolving ad platform requirements.",
    },
    {
      question: "What's the typical timeline for an engagement?",
      answer:
        "Audits and quick fixes can take 1 to 2 weeks. Full tracking refactors, warehouse modeling, and dashboard builds usually take 4 to 6 weeks depending on scope.",
    },
    {
      question:
        "Do you work directly with our developers, or just marketing/product teams?",
      answer:
        "Both. We act as the technical bridge between business stakeholders and engineering, so teams get faster time-to-insight with less code debt.",
    },
    {
      question: "What if my data is already a mess?",
      answer:
        "That's often the starting point. We specialize in cleaning up messy tags, inconsistent schemas, and duplicated events so your analytics can become a trusted source of truth.",
    },
    {
      question: "How do you measure ROI from analytics work?",
      answer:
        "We use pre- vs post-implementation measurement, tie behaviors to KPIs like revenue per visit and conversion rate, and surface business impact in dashboards your execs can understand.",
    },
    {
      question: "Can you train my team to manage the tools after setup?",
      answer:
        "Yes. Every engagement includes handover docs, live training sessions, and recorded walkthroughs so your team can confidently manage the stack without ongoing dependency.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a free consultation or request a tailored “Stack Plan.” Tell us your tools and goals, and we'll map out the fastest path to reliable, ROI-driven analytics.",
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
            title="Analytics that moves revenue"
            highlight="revenue"
          />
          <Text textAlign={"center"}>
            Google Analytics 4, Google Tag Manager, Segment, Mixpanel, Amplitude
            - we use the best tools for your business.
          </Text>
          <CardsWithImages cardsContent={featureCardsContent} />
          <CallToActionButton
            text={"Book a free consultation"}
            toCenter={{ base: true, md: true, lg: true, xl: true }}
          />
        </section>
        <section id="promise-solution">
          <Heading
            my={6}
            size={"4xl"}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            Problems we solve
          </Heading>
          <FeatureCards featuredCards={featuredCards} />
        </section>
        <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
          <section id="tech-stack-tools">
            <Heading
              my={6}
              size={"4xl"}
              textAlign={"center"}
              letterSpacing={"tight"}
            >
              Your Technology Stack, Our Expertise
            </Heading>
            <TechStackTools />
            <MarketingToolsTable />
            <CallToActionButton
              text={"Start Optimizing with Datakyu"}
              toCenter={{ base: true, md: true, lg: true, xl: true }}
            />
          </section>
        </Box>
        <section id="frequently-asked-question">
          <Heading
            my={6}
            size={"4xl"}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            Frequently Asked Questions
          </Heading>
          <FAQ questions={faqs} />
          <CallToActionButton
            text={"Book a consultation"}
            toCenter={{ base: true, md: true, lg: true, xl: true }}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
