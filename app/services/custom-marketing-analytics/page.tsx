// 🖼️ Styles
import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CardsWithImages from "@/components/custom/CardsWithImages";
import CallToActionButton from "@/components/custom/CallToActionButton";
import CustomDialog from "@/components/custom/Dialog";
import ListsWithIcons from "@/components/custom/ListsWithIcons";
import Footer from "@/components/custom/Footer";

// 💅 Chakra UI
import { Text, Heading, Image, Flex, Box } from "@chakra-ui/react";

// 💻 Code Hightlighter
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default function CustomMarketingAnalytics() {
  const dialogsContent = [
    {
      placement: "center",
      cta: "Learn more",
      buttonVariant: "outline",
      content: {
        title: "What are auditing & implementation consulting services?",
        description:
          "Our web analytics consulting services provide comprehensive analysis of your website data. We help identify key performance indicators, track user behavior, and provide actionable insights to optimize your website and drive business growth. By utilizing our web analytics consulting services, you can gain a deeper understanding of your audience, improve user experience and increase conversions.",
      },
    },
    {
      placement: "center",
      cta: "Learn more",
      buttonVariant: "outline",
      content: {
        title: "What are product performance consulting services?",
        description:
          "Our product analytics consulting services provide a comprehensive evaluation of your product performance. By analyzing data from user interactions and usage patterns, we identify key areas for improvement and provide actionable recommendations to optimize user experience and drive revenue growth. Through the utilization of our product analytics consulting services, you can gain a deeper understanding of your audience, improve product performance, and increase revenue.",
      },
    },
    {
      placement: "center",
      cta: "Learn more",
      buttonVariant: "outline",
      content: {
        title: "What are marketing performance consulting services?",
        description:
          "Our marketing performance consulting services provide a comprehensive evaluation of your marketing efforts. By analyzing data from campaigns, customer interactions and other marketing-related activities, we identify areas for improvement and provide actionable recommendations to optimize your marketing strategy and drive better results. Utilize our consulting services to gain a competitive edge, achieve desired business outcomes and optimize return on investment.",
      },
    },
  ];
  const featureCardsContent = [
    {
      image: null,
      title: "Auditing & Implementation",
      description:
        "Streamline your online performance and increase conversions with our web and product analytics auditing and implementation consulting services.",
      includeFooter: false,
      dialogFooter: (
        <CustomDialog
          placement={dialogsContent[0].placement}
          cta={dialogsContent[0].cta}
          buttonVariant={dialogsContent[0].buttonVariant}
          content={dialogsContent[0].content}
        />
      ),
    },
    {
      image: null,
      title: "Product Performance",
      description:
        "Maximize the potential of your product and drive growth through the utilization of our consulting services for product growth strategy.",
      includeFooter: false,
      dialogFooter: (
        <CustomDialog
          placement={dialogsContent[1].placement}
          cta={dialogsContent[1].cta}
          buttonVariant={dialogsContent[1].buttonVariant}
          content={dialogsContent[1].content}
        />
      ),
    },
    {
      image: null,
      title: "Analytics Consulting",
      description:
        "Transform your data into actionable insights with our analytics consulting services, empowering you to make informed decisions and drive growth.",
      includeFooter: false,
      dialogFooter: (
        <CustomDialog
          placement={dialogsContent[2].placement}
          cta={dialogsContent[2].cta}
          buttonVariant={dialogsContent[2].buttonVariant}
          content={dialogsContent[2].content}
        />
      ),
    },
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
        <section id="hero">
          <Flex direction={"row-reverse"} gap={6}>
            <Image
              src="/images/project-management.png"
              width={"25rem"}
              display={{ base: "none", md: "none", lg: "initial" }}
              height={"auto"}
              alt={"An image showing a hand drawing a schematic"}
            />
            <Flex
              direction={"column"}
              alignItems={"self-start"}
              justifyContent={"flex-start"}
              gap={6}
            >
              <HeroHeading
                title="Turn data into insights"
                highlight="insights"
              />
              <Text>
                Unleash the hidden potential of your website and products with
                our analytics consulting services and take your online presence
                to the next level!
              </Text>
              <Text>
                Our team combines technical expertise with a marketer’s mindset,
                bridging the gap between data and action. We dive into your
                current setup, identify gaps, and implement tracking strategies
                tailored to your business goals. From event architecture to
                custom dashboards, every insight we deliver is built to inform
                smarter decisions.
              </Text>
              <Text>
                The result? Clear visibility, measurable growth, and confidence
                in every move you make. Whether you're running a campaign,
                launching a new feature, or refining your funnel, you'll finally
                have data you trust and the strategy to back it up.
              </Text>
              <CallToActionButton text={"Contact us"} toCenter={false} />
            </Flex>
          </Flex>
        </section>
        <section id="consulting-services">
          <Heading
            size={"4xl"}
            my={6}
            textAlign={"center"}
            letterSpacing={"tight"}
          >
            Our Consulting Services
          </Heading>
          <Text textAlign={"center"}>All the different ways we can help.</Text>
          <CardsWithImages cardsContent={featureCardsContent} />
          <CallToActionButton text={"Contact us"} toCenter={true} />
        </section>
        <section style={{ marginTop: "2rem" }} id={"analytics-tech-stack"}>
          <Flex direction={"row"} gap={6}>
            <Flex direction={"column"} gap={6}>
              <Heading
                my={6}
                color={"rgb(79, 59, 62)"}
                size={"4xl"}
                textAlign={"left"}
                letterSpacing={"tight"}
              >
                Our Technology Stack
              </Heading>
              <Text>
                Build a tracking infrastructure that scales with your business.
                Future proof your tracking and work with tooks that are shaping
                to future of web analytics.
              </Text>
              <ListsWithIcons listDescriptions={listsContent} />
            </Flex>
            <Flex
              display={{ base: "none", md: "none", lg: "flex" }}
              width={{ lg: "35rem" }}
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
      </main>
    </div>
  );
}
