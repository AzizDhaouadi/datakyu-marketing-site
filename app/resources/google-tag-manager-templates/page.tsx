// 🖼️ Styles
import styles from "../../page.module.css";
// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "../../lib/helper/generatePageMetadata";

// 🧩 Custom Components – Core
import { Footer } from "@/components/custom/Footer";
import FAQSection from "@/components/custom/FAQ";
import CallToActionSection from "@/components/custom/CallToActionSection";

// Claude Generated Components - Core
import Navbar from "@/components/claude/Navbar";
import GTMHero from "@/components/claude/GtmHero";
import GTMTemplates from "@/components/claude/GtmTemplates";
import GTMHowItWorks from "@/components/claude/GtmHowItWorks";

export async function generateMetadata() {
  return getPageMetadata("/resources/google-tag-manager-templates");
}

export default function GoogleTagManagerTemplates() {
  const FAQS = [
    {
      q: "How do I create a new container in Google Tag Manager?",
      a: "Open Tag Manager and go to the Accounts tab. Next to your account name, click More Actions → Create Container. Enter a descriptive container name, select the container type, and click Create.",
    },
    {
      q: "Should I merge or overwrite when importing the container?",
      a: "We recommend merging. This avoids overwriting any existing configuration. Duplicate settings will be renamed automatically to prevent conflicts. Before merging, inspect both your current config and the new tags, triggers, and variables to ensure nothing conflicts.",
    },
    {
      q: "How do I change the Google Analytics 4 Measurement ID?",
      a: "Open Tag Manager and go to the Variables tab. Locate the variable called Google Analytics 4 Measurement ID. Paste your new Measurement ID — this is the ID of your GA4 property. Click Save to confirm.",
    },
    {
      q: "How do I modify an event trigger?",
      a: "Open Tag Manager and go to the Triggers tab. Locate the trigger you want to change. To fire using a different event name, paste the new name into the Event Name field. To change the trigger type entirely, click the Trigger Type field and select the new type. Note that changing trigger types can cause issues if not done carefully — reach out if you run into problems.",
    },
    {
      q: "How do I change the event parameters?",
      a: "Open Tag Manager and go to the Tags tab. Locate the event you want to modify. To rename a parameter, find it and update the Parameter Name field. To change its value, update the Value field. To remove a parameter, click the minus (−) button next to it. To add a new parameter, click Add Row and fill in the name and value.",
    },
  ];

  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <GTMHero />
        <GTMTemplates />
        <GTMHowItWorks />
        <FAQSection faqs={FAQS} />
        <CallToActionSection description="Need a custom setup instead?" />
      </main>
      <Footer />
    </>
  );
}
