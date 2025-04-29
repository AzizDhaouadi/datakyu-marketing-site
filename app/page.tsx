import styles from "./page.module.css";
import Image from "next/image";
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import IllustrationWithText from "@/components/custom/IllustrationWithText";
import FeatureCards from "@/components/custom/FeatureCards";
import { Text, Heading, Icon } from "@chakra-ui/react";
import { FiMap, FiTrendingUp, FiShield, FiPercent } from 'react-icons/fi';

export default function Home() {
  const featuredCards = [
    {
      title: "Clear Roadmapping",
      description: "Don't break the bank trying the understand how your product is evolving or if your marketing campaigns are profitable. We can show you the way.",
      icon: <FiMap />
    }, 
    {
      title: "Performance Driven",
      description: "We help you focus on measurements that matter to your business and its growth. We help you measure your North Star and keep track of your metrics, so you always know where you stand.",
      icon: <FiTrendingUp />
    },
    {
      title: "Data Integrity",
      description: "We strive to ensure the accuracy, completeness and consistency of our measurements to deliver data of the highest quality, so all your decision can be data-backed.",
      icon: <FiShield />
    },
    {
      title: "Complete Measurements",
      description: "Feel the impact of complete and accurate measurements for your product and business. We build measurement strategies that establish the basis for performance analysis, growth, and forecasting.",
      icon: <FiPercent />
    }
  ]


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id="hero">
          <HeroHeading title="Make your Marketing data work harder with Datakyu" highlight="Datakyu" />
          <Text textAlign={"center"} mx={"auto"} fontSize="xl" mt={4} maxW="2xl">
            We help you own the unlimited power of your marketing data.  
          </Text>
          <Image
          className={styles.heroImg}
            src="/images/collaboration.png"
            alt="Two analysts collaborating on a data project"
            priority
            width={600}
            height={400}
          />
        </section>
        <Heading size={"4xl"} my={6} textAlign={"center"} letterSpacing={"tight"}>Our Data Driven Approach</Heading>
        <IllustrationWithText 
          title={"Set goals and build a measurement plan"}
          description={"We are here to listen and we are here help. Let us know what your business goals are and we will help you build a plan to measure exactly what you need to grow."}
          imageSrc={"/images/Climbing.png"}
          imageAlt={"A person climibing strairs"}
          features={["Identify Key Business Goals", "Build a Measurement Infrastructure", "Ensure Data Fidelity & Integrity"]}
          reverse={false}
        />
        <IllustrationWithText 
          title={"Establish data-backed growth"}
          description={"We build execute our tracking to reflect our measurement plan which gives you the confidence to reduce uncertainty and make data-driven decisions."}
          imageSrc={"/images/on-laptop.png"}
          imageAlt={"A person working on a laptop"}
          features={["Focus on Real Metrics", "Capture Meaningful Data", "Build a Data-Driven Culture"]}
          reverse={true}
        />
        <IllustrationWithText 
          title={"Visualize your data and follow your growth"}
          description={"We don't just track data, we visualize it as well. Our dashboarding tools are our canvas and we are known for producing beautiful art."}
          imageSrc={"/images/project-management.png"}
          imageAlt={"A person working on industrial drawings."}
          features={["Gain Insights Beyond KPIs", "Tailored Dashboards for All Stakeholders"]}
          reverse={false}
        />
        <section id="features">
          <Heading my={6} size={"4xl"} textAlign={"left"} letterSpacing={"tight"}>Why do businesses choose to work with us?</Heading>
          <Text>We belive in transperancy and ownership. We help make sense of your data and empower you take decisions and guide you towards growth.</Text>
        </section>
        <FeatureCards featuredCards={featuredCards} />
      </main>
    </div>
  );
}
