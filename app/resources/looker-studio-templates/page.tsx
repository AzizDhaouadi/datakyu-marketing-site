// 🖼️ Styles
import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import { Footer } from "@/components/custom/Footer";
import FAQSection from "@/components/custom/FAQ";
import CallToActionSection from "@/components/custom/CallToActionSection";

// Claude Generated Components - Core
import Navbar from "@/components/claude/Navbar";

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "@/app/lib/helper/generatePageMetadata";
import LookerHero from "@/components/claude/LookerHero";
import LookerTemplates from "@/components/claude/LookerTemplates";
import LookerHowItWorks from "@/components/claude/LookerHowItWorks";

export async function generateMetadata() {
  return getPageMetadata("/resources/looker-studio-templates");
}

export default function LookerStudioTemplates() {
  const FAQS = [
    {
      q: "How do I create a Looker Studio account?",
      a: "Go to lookerstudio.google.com and sign in with your Google account. That's it — no separate signup needed.",
    },
    {
      q: "How do I map the original data sources?",
      a: "When you click Make a copy, Looker Studio will prompt you to map each original data source to your own. Match each source to its equivalent — for example, map the original GA4 source to your GA4 property and the BigQuery source to your own export. Once mapping is done, click Copy Report. If you see broken charts afterwards, it usually means a source wasn't mapped correctly — go back and remap.",
    },
    {
      q: "Are the charts customizable?",
      a: "Yes. Once you've made a copy the dashboard is fully yours — you can edit any chart, change visualizations, add new data sources, or restructure the layout. Familiarity with Looker Studio will help, but most edits are straightforward.",
    },
    {
      q: "Can I add more data sources to the dashboard?",
      a: "Yes. After copying you're free to add additional data sources, blend them with existing ones, and build new charts on top. The template is a starting point, not a constraint.",
    },
  ];

  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <LookerHero />
        <LookerTemplates />
        <LookerHowItWorks />
        <FAQSection faqs={FAQS} />
        <CallToActionSection description="Need a custom dashboard instead?" />
      </main>
      <Footer />
    </>
  );
}
