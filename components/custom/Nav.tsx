// ⚛️ React bits components
import CardNav from "@/components/Bits/CardNav";

export default function Nav() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Home",
          ariaLabel: "About Home",
          href: "/",
        },
        {
          label: "Our Technology Stack",
          ariaLabel: "About Technology",
          href: "/our-technology-stack",
        },
        {
          label: "Cookie Policy",
          ariaLabel: "About Cookie Policy",
          href: "/policies/cookie-policy",
        },
        {
          label: "Privacy Policy",
          ariaLabel: "About Privacy Policy",
          href: "/policies/privacy-policy",
        },
      ],
    },
    {
      label: "Services",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Auditing & Implementation",
          ariaLabel: "Auditing & Impelementation Services",
          href: "/services/martech-audits",
        },
        {
          label: "Stack Migration",
          ariaLabel: "Marketing Tech Stack Migration Services",
          href: "/services/marketing-tech-migration",
        },
        {
          label: "Custom Analytics",
          ariaLabel: "Custom Marketing Analytics Services",
          href: "/services/custom-marketing-analytics",
        },
      ],
    },
    {
      label: "Resources",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Blog",
          ariaLabel: "Blog",
          href: "https://datajournal.datakyu.co",
        },
        {
          label: "GTM Templates",
          ariaLabel: "GTM Templates",
          href: "/resources/google-tag-manager-templates",
        },
        {
          label: "Looker Studio Templates",
          ariaLabel: "LS Templates",
          href: "/resources/looker-studio-templates",
        },
        {
          label: "GA4 Event Generator",
          ariaLabel: "GA4 Event Generator",
          href: "/resources/generate-ga4-events",
        },
      ],
    },
  ];

  return (
    <CardNav
      logoAlt="Company Logo"
      logo={"/logo.svg"}
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
