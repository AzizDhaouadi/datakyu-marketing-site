// 🖼️ Styles
import styles from "../../page.module.css";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "../../lib/helper/generatePageMetadata";

// 🧩 Custom Components – Core
import { Footer } from "@/components/custom/Footer";
import CallToActionSection from "@/components/custom/CallToActionSection";

// Claude Generated Components - Core
import Navbar from "@/components/claude/Navbar";
import Ticker from "@/components/claude/Ticker";
import MigrationHero from "@/components/claude/MigrationHero";
import AdvantagesList from "@/components/claude/AdvantagesList";
import MigrationTechStack from "@/components/claude/MigrationTechStack";
import MigrationProcess from "@/components/claude/MigrationProcess";

export async function generateMetadata() {
  return getPageMetadata("/services/marketing-tech-migration");
}

export default function MarketingTechMigration() {
  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <MigrationHero />
        <Ticker />
        <AdvantagesList />
        <MigrationTechStack />
        <MigrationProcess />
        <section id="contact">
          <CallToActionSection description="Ready to migrate with confidence?" />
        </section>
      </main>
      <Footer />
    </>
  );
}
