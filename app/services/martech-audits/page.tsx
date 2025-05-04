// 🖼️ Styles
import styles from "../../page.module.css";

// ⚛️ Next.js Built-ins
import Image from "next/image";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CallToActionButton from "@/components/custom/CallToActionButton";
import Footer from "@/components/custom/Footer";
import TypedCodeSection from "@/components/animation/TypedCode";
// 💅 Chakra UI
import { Text, Box, Flex } from "@chakra-ui/react";

export default function MarTechAudits() {
  const codesToType = [
    `
gtag("event", "user_login", {
  method: "google"
});

gtag("event", "user_signup", {
  signup_method: "email"
});

`,
    `
  analytics.track("User Login", {
    method: "google",
    email: "datakyu@help.tracking"
  });
  
  analytics.track("User Signup", {
    method: "email",
    email: "datakyu@help.tracking"
  });
  `,
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id="hero">
          <HeroHeading
            title="Marketing Tech Stack Implementation & Audits Services"
            highlight="Implementation & Audits"
          />
          <Text
            textAlign={"center"}
            mx={"auto"}
            fontSize="xl"
            mt={4}
            maxW="2xl"
          >
            You build. We measure. Actionable insights from every user
            interaction.
          </Text>
        </section>
        <section id="hero-contact-us">
          <CallToActionButton
            text={"Request a Measurement Plan Audit"}
            toCenter={true}
          />
        </section>
        <section id="typed-code">
          <Box bg="gray.900" py={12} px={6} borderRadius="xl">
            <Flex
              direction="row"
              wrap="wrap"
              gap={6}
              justify="center"
              align="flex-start"
            >
              {codesToType.map((code, index) => (
                <Box
                  key={index}
                  bg="gray.800"
                  p={6}
                  borderRadius="md"
                  boxShadow="md"
                  minW="320px"
                  maxW="500px"
                  color="white"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    whiteSpace: "pre",
                  }}
                >
                  <TypedCodeSection codeToType={code} />
                </Box>
              ))}
            </Flex>
          </Box>
        </section>
      </main>
      <Footer />
    </div>
  );
}
