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
import Ticker from "@/components/claude/Ticker";
import AuditHero from "@/components/claude/AuditHero";
import ImplementationServices from "@/components/claude/ImplementationServices";
import AuditTiers from "@/components/claude/AuditTiers";
import AnalyticsImportance from "@/components/claude/AnalyticsImportance";

export async function generateMetadata() {
  return getPageMetadata("/services/martech-audits");
}
const FAQS = [
  {
    q: "How does the auditing and implementation package work?",
    a: "Our auditing and implementation package starts at $2,000, which is the base price for standard marketing websites. Final pricing depends on the type of business (SaaS, ecommerce, etc.), the number of pages involved, and the total number of events that need to be tracked. If you have specific requirements, contact our sales team.",
  },
  {
    q: "Do you offer ongoing support after implementation?",
    a: "We do not include ongoing support by default after implementation is complete. However, if you require post-implementation assistance, reach out — we're happy to explore a support agreement that fits your needs. During implementation, full support and thorough documentation are always provided.",
  },
  {
    q: "Do you offer auditing and implementation for mobile apps?",
    a: "Yes. Whether you're building for Android, iOS, or a cross-platform app, we can help you implement event tracking, monitor app performance, and build a solid data foundation.",
  },
  {
    q: "Can I get only the auditing services without implementation?",
    a: "Absolutely. If you only need your analytics setup reviewed, our consulting services are a great fit. Likewise, if you already have a plan and just need help implementing it, we can tailor a package for that too.",
  },
  {
    q: "Can I get a dashboard built without the full package?",
    a: "Yes. Dashboard development is available as a standalone service. Refer to our data visualization services for more information.",
  },
  {
    q: "How long does the audit and implementation take?",
    a: "Timelines vary depending on the size and complexity of your setup. After our initial call, we'll provide a clear timeline for both phases. Work begins once you give us the go-ahead.",
  },
  {
    q: "Do you support server-side tracking setups?",
    a: "Yes. We support server-side tracking implementations using GTM Server, Segment, and custom Node.js endpoints. Let us know your stack and we'll take it from there.",
  },
];

export default function MarTechAudits() {
  return (
    <>
      <header style={{ width: "100%" }} className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <AuditHero />
        <Ticker />
        <ImplementationServices />
        <AuditTiers />
        <AnalyticsImportance />
        <FAQSection faqs={FAQS} />
        <section id="contact">
          <CallToActionSection description="Ready to trust your data?" />
        </section>
      </main>
      <Footer />
    </>
  );
}
