// 🖼️ Styles
import styles from "../../page.module.css";

// ⚛️ Next.js Built-ins
import Image from "next/image";

// 📬 Custom Components – Integrations
import OpenHubspotDialog from "@/components/custom/OpenHubspotDialog";

// 💅 Chakra UI
import { Text, Heading, Flex, Box } from "@chakra-ui/react";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CallToActionButton from "@/components/custom/CallToActionButton";
import Footer from "@/components/custom/Footer";

export default function MarketingTechMigration() {
  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>{/* <h1>Hello world</h1> */}</main>
    </div>
  );
}
