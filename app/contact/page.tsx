import styles from "../../app/page.module.css";
import HubspotForm from "@/components/HubspotForm";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import Footer from "@/components/custom/Footer";

// 💅 Chakra UI
import { Text } from "@chakra-ui/react";

// ⚛️ React bits components
import BlurText from "@/components/Bits/BlurText";
import SplashCursor from "@/components/Bits/SplashCursor";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "@/app/lib/helper/generatePageMetadata";

export async function generateMetadata() {
  return getPageMetadata("/contact");
}

export default function Contact() {
  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <SplashCursor />
        <section id="hero">
          <BlurText
            text="We are one message away"
            delay={150}
            animateBy="words"
            direction="top"
            className="tracking-tight text-[#f15a25]"
          />
          <Text textAlign={"center"}>
            Whatever your question is, we are here to help. Fill out the form
            below and we will get back to you as soon as possible.
          </Text>
        </section>
        <section id="contact-form-section">
          <div id="target-container"></div>
          <HubspotForm
            region="na1"
            portalId="44171646"
            formId="828e791e-00b4-47aa-a81d-5e76effe844f"
            targetID="target-container"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
