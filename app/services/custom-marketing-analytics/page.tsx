// 🖼️ Styles
import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import CallToActionSection from "@/components/custom/CallToActionSection";
import { Footer } from "@/components/custom/Footer";

// Claude Generated Components - Core
import Hero from "@/components/claude/Hero";
import Navbar from "@/components/claude/Navbar";
import Ticker from "@/components/claude/Ticker";
import Problem from "@/components/claude/Problem";
import Services from "@/components/claude/Services";
import Stack from "@/components/claude/Stack";
import Process from "@/components/claude/Process";
import Outcomes from "@/components/claude/Outcomes";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "@/app/lib/helper/generatePageMetadata";

export async function generateMetadata() {
  return getPageMetadata("/services/custom-marketing-analytics");
}

export default function CustomMarketingAnalytics() {
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

  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
        <Ticker />
        <Problem />
        <Services />
        <Stack />
        <Process />
        <Outcomes />
        <CallToActionSection
          description={"Turn your analytics into an advantage"}
        />
      </main>
      <Footer />
    </>
  );
}
