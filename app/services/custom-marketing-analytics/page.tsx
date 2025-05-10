// 🖼️ Styles
import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import IllustrationWithText from "@/components/custom/IllustrationWithText";
import FeatureCards from "@/components/custom/FeatureCards";
import FeatureTabs from "@/components/custom/FeatureTabs";
import CallToActionSection from "@/components/custom/CallToActionSection";
import CallToActionButton from "@/components/custom/CallToActionButton";
import Footer from "@/components/custom/Footer";

// 💅 Chakra UI
import { Text, Heading, Image, Flex } from "@chakra-ui/react";

export default function CustomMarketingAnalytics() {
  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
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
            <HeroHeading title="Turn data into insights" highlight="insights" />
            <Text>
              Unleash the hidden potential of your website and products with our
              analytics consulting services and take your online presence to the
              next level!
            </Text>
            <Text>
              Our team combines technical expertise with a marketer’s mindset,
              bridging the gap between data and action. We dive into your
              current setup, identify gaps, and implement tracking strategies
              tailored to your business goals. From event architecture to custom
              dashboards, every insight we deliver is built to inform smarter
              decisions.
            </Text>
            <Text>
              The result? Clear visibility, measurable growth, and confidence in
              every move you make. Whether you're running a campaign, launching
              a new feature, or refining your funnel, you'll finally have data
              you trust and the strategy to back it up.
            </Text>
            <CallToActionButton text={"Contact us"} toCenter={false} />
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
