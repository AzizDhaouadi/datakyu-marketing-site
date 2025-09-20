// 💅 Chakra UI
import { Text, Heading, Flex, Tabs, List, Box } from "@chakra-ui/react";

type TechStackTabProps = {
  margin?: string | number;
};

export default function TechStackTabs({ margin }: TechStackTabProps) {
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
          <Heading size={"md"} mb={2}>
            Seamlessly Transition to Google Analytics 4
          </Heading>
          <Flex direction={"column"} gap={2}>
            <Text>
              Stop worrying about the GA4 deadline. We handle your complete
              migration with precision, rebuilding events and conversions around
              a measurement plan while your business keeps running smoothly.
            </Text>
            <Text>Our services include:</Text>
            <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
              <List.Item>
                Zero data loss during transition with parallel tracking
                validation
              </List.Item>
              <List.Item>
                Smart event architecture mapped from your legacy setup to GA4
                best practices
              </List.Item>
              <List.Item>
                Ecommerce tracking that actually works, with proper consent
                management
              </List.Item>
              <List.Item>
                BigQuery export ready from day one so your analysts never miss a
                beat
              </List.Item>
              <List.Item>
                Complete handover with clear documentation and naming
                conventions
              </List.Item>
            </List.Root>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="gtm" p={4} m={4}>
          <Heading size={"md"} mb={2}>
            Transform your chaotic tag situation into a performance-optimized
            powerhouse
          </Heading>
          <Flex direction={"column"} gap={2}>
            <Text>
              Tired of developers bottlenecking every marketing request? We
              migrate your hard-coded pixels into a governed GTM setup that lets
              marketing move fast while keeping your site blazing fast.
            </Text>
            <Text>Our services include:</Text>
            <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
              <List.Item>
                Clean container architecture with proper governance and version
                control
              </List.Item>
              <List.Item>
                Lightning-fast site performance through optimized tag loading
              </List.Item>
              <List.Item>
                Marketing velocity with self-serve capabilities for your team
              </List.Item>
              <List.Item>
                Bulletproof consent management integrated throughout
              </List.Item>
              <List.Item>
                Enterprise-grade workflow with preview, debug, and rollback
                systems
              </List.Item>
            </List.Root>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="amplitude" p={4} m={4}>
          <Heading size={"md"} mb={2}>
            Give your product and growth teams one source of truth
          </Heading>
          <Flex direction={"column"} gap={2}>
            <Text>
              Stop arguing about what the data means. We build your Amplitude
              setup around a unified event language that actually answers your
              biggest questions about user behavior, retention, and growth.
            </Text>
            <Text>Our services include:</Text>
            <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
              <List.Item>
                Unified event schema that makes sense across product and
                marketing
              </List.Item>
              <List.Item>
                Fixed user identity (no more mysterious split users ruining your
                funnels)
              </List.Item>
              <List.Item>
                Historical data import where it adds real value
              </List.Item>
              <List.Item>
                Ready-built dashboards for funnels, retention, user paths, and
                LTV
              </List.Item>
              <List.Item>
                Governance guardrails to keep your data clean as you scale
              </List.Item>
            </List.Root>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="segment" p={4} m={4}>
          <Heading size={"md"} mb={2}>
            Turn Segment into your single source of customer truth
          </Heading>
          <Flex direction={"column"} gap={2}>
            <Text>
              Stop sending different data to different tools. We architect your
              Segment implementation as a governed data pipeline where every
              destination gets the same clean, consistent customer picture.
            </Text>
            <Text>Our services include:</Text>
            <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
              <List.Item>
                Bulletproof tracking plan with schema enforcement across all
                sources
              </List.Item>
              <List.Item>
                Smart identity resolution that connects the customer journey
                dots
              </List.Item>
              <List.Item>
                Intelligent transformations and routing based on your business
                logic
              </List.Item>
              <List.Item>
                Warehouse sync that stays aligned with your data models
              </List.Item>
              <List.Item>
                End-to-end validation against your current setup
              </List.Item>
            </List.Root>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="mixpanel" p={4} m={4}>
          <Heading size={"md"} mb={2}>
            Reshape your product analytics to actually drive growth
          </Heading>
          <Flex direction={"column"} gap={2}>
            <Text>
              Your current tracking tells you what happened. Mixpanel done right
              tells you why it happened and what to do next. We migrate your
              data to unlock the insights that matter.
            </Text>
            <Text>Our services include:</Text>
            <List.Root as="ul" gap={2} mt={2} ml={4} marker="marker">
              <List.Item>
                Clean event structure mapped to Mixpanel{`'`}s proven frameworks
              </List.Item>
              <List.Item>
                Bulletproof user identity with proper alias and merge strategies
              </List.Item>
              <List.Item>
                Historical data preservation where it creates real value
              </List.Item>
              <List.Item>
                Growth-focused dashboards for conversion, retention, and feature
                adoption
              </List.Item>
              <List.Item>
                Quality monitors to catch issues before they corrupt your
                insights
              </List.Item>
            </List.Root>
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
