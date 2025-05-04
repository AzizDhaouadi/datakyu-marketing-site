// 🖼️ Styles
import styles from "../../page.module.css";

// ⚛️ Next.js Built-ins
import Image from "next/image";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CallToActionButton from "@/components/custom/CallToActionButton";
import Footer from "@/components/custom/Footer";

// 💅 Chakra UI
import { Text, Heading } from "@chakra-ui/react";

export default function MarTechAudits() {
  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id="hero">
            <HeroHeading title="Marketing Tech Stack Implementation & Audits Services" highlight="Implementation & Audits" />
            <Text textAlign={"center"} mx={"auto"} fontSize="xl" mt={4} maxW="2xl">
              You build. We measure. Actionable insights from every user interaction.
          </Text>
        </section>
        <section id="hero-contact-us">
          <CallToActionButton text={"Request a Measurement Plan Audit"} toCenter={true} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
