// 🖼️ Styles
import styles from "./page.module.css";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "./lib/helper/generatePageMetadata";

// 🧩 Custom Components – Core
import { Footer } from "@/components/custom/Footer";
import CallToActionSection from "@/components/custom/CallToActionSection";

// Claude Generated Components - Core
import Navbar from "@/components/claude/Navbar";
import Ticker from "@/components/claude/Ticker";
import HomeHero from "@/components/claude/HomeHero";
import HomeServices from "@/components/claude/HomeServices";
import PainPoints from "@/components/claude/PainPoints";
import BeforeAfter from "@/components/claude/BeforeAndAfter";
import CaseStudy from "@/components/claude/CaseStudy";
import DataJournal from "@/components/claude/DataJournal";

export async function generateMetadata() {
  return getPageMetadata("/");
}

export default function Home() {
  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main>
        <HomeHero />
        <Ticker />
        <HomeServices />
        <PainPoints />
        <BeforeAfter />
        <CaseStudy />
        <DataJournal />
        <section id="contact">
          <CallToActionSection description="Ready to trust your data?" />
        </section>
      </main>
      <Footer />
    </>
  );
}
