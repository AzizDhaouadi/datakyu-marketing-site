// 💅 Chakra UI
import {
  Text,
  Heading,
  Flex,
  Tabs,
  List,
  Box,
  Separator,
} from "@chakra-ui/react";

type TechStackTabProps = {
  margin?: string | number;
};

export default function TechStackTools({ margin }: TechStackTabProps) {
  return (
    <Box
      display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      boxShadow={"8px 8px #311c3b"}
      borderRadius={"8px"}
    >
      <Tabs.Root
        mt={margin}
        fitted
        defaultValue={"ga4"}
        size={"lg"}
        variant={"line"}
        gap={2}
      >
        <Tabs.List rounded="l3">
          <Tabs.Trigger
            boxShadow="4px 4px #311c3b"
            _hover={{ boxShadow: "4px 4px #f15a25" }}
            value="ga4"
          >
            Google Analytics 4
          </Tabs.Trigger>
          <Tabs.Trigger
            boxShadow="4px 4px #311c3b"
            _hover={{ boxShadow: "4px 4px #f15a25" }}
            value="gtm"
          >
            Google Tag Manager
          </Tabs.Trigger>
          <Tabs.Trigger
            boxShadow="4px 4px #311c3b"
            _hover={{ boxShadow: "4px 4px #f15a25" }}
            value="amplitude"
          >
            Amplitude
          </Tabs.Trigger>
          <Tabs.Trigger
            boxShadow="4px 4px #311c3b"
            _hover={{ boxShadow: "4px 4px #f15a25" }}
            value="segment"
          >
            Segment
          </Tabs.Trigger>
          <Tabs.Trigger
            boxShadow="4px 4px #311c3b"
            _hover={{ boxShadow: "4px 4px #f15a25" }}
            value="mixpanel"
          >
            Mixpanel
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="ga4" p={4} m={4}>
          <Flex direction={"row"} justify={"space-evenly"} gap={10}>
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>What we do</Heading>
              <Text>
                GA4 is powerful but messy out of the box. We design a clean
                event model, unify identity, and connect BigQuery so your teams
                can trust metrics and prove ROI across marketing and product.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>
                  Audit existing GA4 setup (events, conversions, audiences).
                </List.Item>
                <List.Item>Build event taxonomy and tracking plan.</List.Item>
                <List.Item>
                  Implement client & server changes with GTM/SDK.
                </List.Item>
                <List.Item>
                  Enable Consent Mode v2 and privacy compliance.
                </List.Item>
                <List.Item>Model GA4 export in BigQuery with dbt.</List.Item>
              </List.Root>
            </Flex>
            <Separator orientation="vertical" size={"lg"} variant={"dotted"} />
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>Outcomes</Heading>
              <Text>
                You gain reconciled KPIs across teams, faster time-to-insight
                through a reliable warehouse model, and the ability to clearly
                prove ROI with pre- and post-implementation dashboards.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>
                  Audit existing GA4 setup (events, conversions, audiences).
                </List.Item>
                <List.Item>Build event taxonomy and tracking plan.</List.Item>
                <List.Item>
                  Implement client & server changes with GTM/SDK.
                </List.Item>
                <List.Item>
                  Enable Consent Mode v2 and privacy compliance.
                </List.Item>
                <List.Item>Model GA4 export in BigQuery with dbt.</List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="gtm" p={4} m={4}>
          <Flex direction={"row"} justify={"space-evenly"} gap={10}>
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>What we do</Heading>
              <Text>
                We architect both client-side and server-side GTM containers
                with robust data layers and custom templates, integrate consent
                management, and set up QA pipelines and release processes so
                every deployment is governed and safe.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>
                  Architect client & server-side GTM containers.
                </List.Item>
                <List.Item>
                  Create secure data layers and custom templates.
                </List.Item>
                <List.Item>
                  Integrate with CMPs (OneTrust, CookieYes).
                </List.Item>
                <List.Item>
                  Set up QA, environments, and release pipelines.
                </List.Item>
                <List.Item>Connect conversion APIs for ad platforms.</List.Item>
              </List.Root>
            </Flex>
            <Separator orientation="vertical" size={"lg"} variant={"dotted"} />
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>Outcomes</Heading>
              <Text>
                Your tagging becomes scalable and reliable, reducing engineering
                overhead, minimizing production issues, and ensuring every ad
                platform conversion is tracked with confidence.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>
                  Lower engineering overhead with clean data layers.
                </List.Item>
                <List.Item>
                  Fewer production issues with rollback-ready governance.
                </List.Item>
                <List.Item>
                  Ad spend tracked reliably across platforms.
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="amplitude" p={4} m={4}>
          <Flex direction={"row"} justify={"space-evenly"} gap={10}>
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>What we do</Heading>
              <Text>
                We implement event designs and behavioral journeys, configure
                cohorts and experiments, and integrate Amplitude with feature
                flags, paid media, and BI systems while maintaining governance
                practices.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>Architect event design and taxonomy.</List.Item>
                <List.Item>
                  Configure behavioral cohorts and journeys.
                </List.Item>
                <List.Item>
                  Integrate with experimentation and feature flags.
                </List.Item>
                <List.Item>
                  Set up governance and annotation practices.
                </List.Item>
                <List.Item>
                  Connect Amplitude data to paid media and BI.
                </List.Item>
              </List.Root>
            </Flex>
            <Separator orientation="vertical" size={"lg"} variant={"dotted"} />
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>Outcomes</Heading>
              <Text>
                This enables deeper behavioral insights across user journeys,
                supports confident experimentation, and proves feature adoption
                and retention improvements in ways stakeholders can measure.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>Architect event design and taxonomy.</List.Item>
                <List.Item>
                  Richer behavioral insight across user journeys.
                </List.Item>
                <List.Item>Confident experiments tied to KPIs.</List.Item>
                <List.Item>
                  Measurable increases in feature adoption and retention.
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="segment" p={4} m={4}>
          <Flex direction={"row"} justify={"space-evenly"} gap={10}>
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>What we do</Heading>
              <Text>
                We design and enforce a tracking plan, configure Segment
                Connections, Protocols, and Engage, govern PII handling, and set
                up warehouse writes so that every event is accurate and
                destinations remain consistent.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>Configure Connections, Protocols, Engage.</List.Item>
                <List.Item>Design tracking plans and schemas.</List.Item>
                <List.Item>QA destinations and replay workflows.</List.Item>
                <List.Item>Apply PII governance and hashing.</List.Item>
                <List.Item>
                  Set up warehouse write to Snowflake/BigQuery.
                </List.Item>
              </List.Root>
            </Flex>
            <Separator orientation="vertical" size={"lg"} variant={"dotted"} />
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>Outcomes</Heading>
              <Text>
                This creates a single, trustworthy schema across tools, lowers
                costs and lock-in by reducing event bloat, and delivers
                high-quality traits that power better personalization and
                marketing activation.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>
                  One consistent contract for events across tools.
                </List.Item>
                <List.Item>Reduced vendor lock-in and lower costs.</List.Item>
                <List.Item>
                  Higher-quality traits for marketing activation.
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="mixpanel" p={4} m={4}>
          <Flex direction={"row"} justify={"space-evenly"} gap={10}>
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>What we do</Heading>
              <Text>
                We define product analytics taxonomies, establish an identity
                strategy, and set up funnels, retention views, and cohorts that
                link marketing inputs to product behavior while enforcing
                governance through Mixpanel lexicon.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>Build cohorts and sync to ad platforms.</List.Item>
                <List.Item>
                  Configure identity strategy (user_id vs distinct_id).
                </List.Item>
                <List.Item>Define event taxonomy and product KPIs.</List.Item>
                <List.Item>Build cohorts and sync to ad platforms.</List.Item>
                <List.Item>
                  Govern taxonomy with lexicon and descriptions.
                </List.Item>
              </List.Root>
            </Flex>
            <Separator orientation="vertical" size={"lg"} variant={"dotted"} />
            <Flex direction={"column"} width={"45%"}>
              <Heading mb={2}>Outcomes</Heading>
              <Text>
                Your product team gets clear funnels and retention metrics, your
                marketers can activate cohorts directly in campaigns, and your
                organization accelerates growth loops with faster iteration
                cycles.
              </Text>
              <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
                <List.Item>
                  Richer behavioral insight across user journeys.
                </List.Item>
                <List.Item>Confident experiments tied to KPIs.</List.Item>
                <List.Item>
                  Measurable increases in feature adoption and retention.{" "}
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
