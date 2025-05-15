import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import Footer from "@/components/custom/Footer";

import { Heading, Box, Text, Link, List } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Heading>Privacy Policy</Heading>
        <Box>
          <Text>Effective Date 06-May-2024</Text>
          <Text>Last Updated On 07-May-2024</Text>
        </Box>
        <Text>
          This Privacy Policy describes the policies of Datakyu Inc., email:
          publisher at datakyu.co, on the collection, use and disclosure of your
          information that we collect when you use our website ( www.datakyu.co
          ). (the “Service”). By accessing or using the Service, you are
          consenting to the collection, use and disclosure of your information
          in accordance with this Privacy Policy. If you do not consent to the
          same, please do not access or use the Service.
        </Text>
        <Text>
          We may modify this Privacy Policy at any time without any prior notice
          to you and will post the revised Privacy Policy on the Service. The
          revised Policy will be effective 180 days from when the revised Policy
          is posted in the Service and your continued access or use of the
          Service after such time will constitute your acceptance of the revised
          Privacy Policy. We therefore recommend that you periodically review
          this page.
        </Text>

        <Heading>How We Use Your Information:</Heading>
        <Text>
          We will use the information that we collect about you for the
          following purposes:
        </Text>
        <List.Root>
          <List.Item>Marketing/ Promotional</List.Item>
        </List.Root>
        <Text>
          If we want to use your information for any other purpose, we will ask
          you for consent and will use your information only on receiving your
          consent and then, only for the purpose(s) for which grant consent
          unless we are required to do otherwise by law.
        </Text>

        <Heading>How We Share Your Information:</Heading>

        <Text>
          We will not transfer your personal information to any third party
          without seeking your consent, except in limited circumstances as
          described below:
        </Text>
        <List.Root>
          <List.Item>Analytics</List.Item>
          <List.Item>Data collection & process</List.Item>
        </List.Root>

        <Text>
          We require such third party’s to use the personal information we
          transfer to them only for the purpose for which it was transferred and
          not to retain it for longer than is required for fulfilling the said
          purpose.
        </Text>
        <Text>
          We may also disclose your personal information for the following: (1)
          to comply with applicable law, regulation, court order or other legal
          process; (2) to enforce your agreements with us, including this
          Privacy Policy; or (3) to respond to claims that your use of the
          Service violates any third-party rights. If the Service or our company
          is merged or acquired with another company, your information will be
          one of the assets that is transferred to the new owner.
        </Text>

        <Heading>Your Rights:</Heading>
        <Text>
          Depending on the law that applies, you may have a right to access and
          rectify or erase your personal data or receive a copy of your personal
          data, restrict or object to the active processing of your data, ask us
          to share (port) your personal information to another entity, withdraw
          any consent you provided to us to process your data, a right to lodge
          a complaint with a statutory authority and such other rights as may be
          relevant under applicable laws. To exercise these rights, you can
          write to us at publisher at datakyu.co. We will respond to your
          request in accordance with applicable law.
        </Text>

        <Text>
          You may opt-out of direct marketing communications or the profiling we
          carry out for marketing purposes by writing to us at aziz@datakyu.co.
        </Text>

        <Text>
          Do note that if you do not allow us to collect or process the required
          personal information or withdraw the consent to process the same for
          the required purposes, you may not be able to access or use the
          services for which your information was sought.
        </Text>

        <Heading>Cookies Etc.</Heading>
        <Text>
          To learn more about how we use these and your choices in relation to
          these tracking technologies, please refer to our
          <a href="https://www.datakyu.co/policies/cookie-policy.html">
            Cookie Policy.
          </a>
        </Text>

        <Heading>Security:</Heading>
        <Text>
          The security of your information is important to us and we will use
          reasonable security measures to prevent the loss, misuse or
          unauthorized alteration of your information under our control.
          However, given the inherent risks, we cannot guarantee absolute
          security and consequently, we cannot ensure or warrant the security of
          any information you transmit to us and you do so at your own risk.
        </Text>

        <Heading>Grievance / Data Protection Officer:</Heading>
        <Text>
          If you have any queries or concerns about the processing of your
          information that is available with us, you may email our Grievance
          Officer at Datakyu Inc., email: publisher at datakyu.co. We will
          address your concerns in accordance with applicable law.
        </Text>

        <Heading>Microsoft Clarity Disclosure</Heading>
        <Text>
          We partner with Microsoft Clarity and Microsoft Advertising to capture
          how you use and interact with our website through behavioral metrics,
          heatmaps, and session replay to improve and market our
          products/services. Website usage data is captured using first and
          third-party cookies and other tracking technologies to determine the
          popularity of products/services and online activity. Additionally, we
          use this information for site optimization, fraud/security purposes,
          and advertising. For more information about how Microsoft collects and
          uses your data, visit the
          <a
            href="https://privacy.microsoft.com/privacystatement"
            target="_blank"
          >
            Microsoft Privacy Statement.
          </a>
        </Text>
        <Text>
          Privacy Policy generated with{" "}
          <Link
            target="_blank"
            href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
          >
            CookieYes
          </Link>
          .
        </Text>
      </main>
      <Footer />
    </div>
  );
}
