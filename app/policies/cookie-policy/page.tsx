import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import Footer from "@/components/custom/Footer";

import { Heading, Box, Link, Text } from "@chakra-ui/react";

export default function CookiePolicy() {
  return (
    <Box className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Heading>Cookie Policy</Heading>
        <Text>
          Effective Date: 16-Apr-2024 <br />
          Last Updated: 16-Apr-2024
        </Text>
        <Heading>What are cookies?</Heading>
        <Box>
          <Text>
            This Cookie Policy explains what cookies are and how we use them,
            the types of cookies we use i.e, the information we collect using
            cookies and how that information is used, and how to manage the
            cookie settings.
          </Text>
          <Text>
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when the website is
            loaded on your browser. These cookies help us make the website
            function properly, make it more secure, provide better user
            experience, and understand how the website performs and to analyze
            what works and where it needs improvement.
          </Text>
        </Box>
        <Heading>How do we use cookies?</Heading>
        <Box>
          <Text>
            As most of the online services, our website uses first-party and
            third-party cookies for several purposes. First-party cookies are
            mostly necessary for the website to function the right way, and they
            do not collect any of your personally identifiable data.
          </Text>
          <Text>
            The third-party cookies used on our website are mainly for
            understanding how the website performs, how you interact with our
            website, keeping our services secure, providing advertisements that
            are relevant to you, and all in all providing you with Link better
            and improved user experience and help speed up your future
            interactions with our website.
          </Text>
        </Box>
        <Heading>Types of Cookies we use</Heading>
        <Box className="cky-audit-table-element"></Box>
        <Heading style={{ marginBottom: "20px" }}>
          Manage cookie preferences
        </Heading>
        <Link className="cky-banner-element">Cookie Settings</Link>
        <Box>
          <Text>
            You can change your cookie preferences any time by clicking the
            above button. This will let you revisit the cookie consent banner
            and change your preferences or withdraw your consent right away.{" "}
          </Text>
          <Text>
            In addition to this, different browsers provide different methods to
            block and delete cookies used by websites. You can change the
            settings of your browser to block/delete the cookies. Listed below
            are the links to the support documents on how to manage and delete
            cookies from the major web browsers.
          </Text>{" "}
          <Text>
            Chrome:{" "}
            <Link
              href="https://support.google.com/accounts/answer/32050"
              target="_blank"
            >
              https://support.google.com/accounts/answer/32050
            </Link>
          </Text>
          <Text>
            Safari:{" "}
            <Link
              href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
              target="_blank"
            >
              https://support.apple.com/en-in/guide/safari/sfri11471/mac
            </Link>
          </Text>
          <Text>
            Firefox:{" "}
            <Link
              href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
              target="_blank"
            >
              https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
            </Link>
          </Text>
          <Text>
            Internet Explorer:{" "}
            <Link
              href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
              target="_blank"
            >
              https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
            </Link>
          </Text>
          <Text>
            If you are using any other web browser, please visit your browser’s
            official support documents.
          </Text>
        </Box>
        &nbsp;
        <Text className="cookie-policy-Text">
          Cookie Policy Generated By{" "}
          <Link
            target="_blank"
            href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
          >
            CookieYes - Cookie Policy Generator
          </Link>
          .
        </Text>
      </main>
      <Footer />
    </Box>
  );
}
