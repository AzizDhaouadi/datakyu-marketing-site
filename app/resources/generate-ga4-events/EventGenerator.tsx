"use client";

import React from "react";
import { useState } from "react";

// 🖼️ Styles
import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import TypedCodeSection from "@/components/animation/TypedCode";
import Footer from "@/components/custom/Footer";

// 💻 tracking library
import track from "@/app/lib/universalTracking";

// 💅 Chakra UI
import {
  Text,
  Field,
  Flex,
  Fieldset,
  For,
  NativeSelect,
  Textarea,
  Tabs,
  Button,
  Box,
  SkeletonText,
  Clipboard,
} from "@chakra-ui/react";

// ⚛️ React bits components
import BlurText from "@/components/Bits/BlurText";
import AnimatedContent from "@/components/Bits/AnimatedContent";

export default function GenerateGA4Events() {
  // State handling for the default tracking medium
  const [defaultTrackingMedium, setDefaultTrackingMedium] =
    useState("GTM's dataLayer"); // setting the default value to GTM's dataLayer as that's selected by default
  // State handing for the default event name
  const [defaultEventName, setDefaultEventName] = useState("ad_click"); // setting the default value to ad_click as that's selected by default
  // State handling for the custom tracking medium
  const [customTrackingMedium, setCustomTrackingMedium] =
    useState("GTM's dataLayer"); // setting the default value to GTM's dataLayer as that's selected by default
  // State handling for the custom event description
  const [customEventDescription, setCustomEventDescription] = useState("");
  // state handling for loading
  const [isLoading, setIsLoading] = useState(false);

  const [generatedCode, setGenerateCode] = useState<string | any>(
    "Choose which event you need help with and we'll handle the rest"
  );

  const defaultPrompt = `Given the GA4 event name "${defaultEventName}" and the tracking method "${defaultTrackingMedium}", generate the JavaScript code only, with:

- No markdown
- No triple backticks
- No language tags like "javascript"
- Just clean, raw JS code that can be copy-pasted into a file.

If the tracking method is:
- "gtag": use gtag('event', ...)
- "dataLayer": use window.dataLayer.push({...})
- "Measurement Protocol": use fetch() in Node.js with the body as a JS object, sent to the GA4 MP endpoint

❌ Do not wrap the output in any formatting
✅ Output raw code only`;

  const customEventPrompt = `Givent the tracking method ${customTrackingMedium} and the event description: ${customEventDescription},  generate the JavaScript code only, with:

- No markdown
- No triple backticks
- No language tags like "javascript"
- Just clean, raw JS code that can be copy-pasted into a file.

If the tracking method is:
- "gtag": use gtag('event', ...)
- "dataLayer": use window.dataLayer.push({...})
- "Measurement Protocol": use fetch() in Node.js with the body as a JS object, sent to the GA4 MP endpoint

❌ Do not wrap the output in any formatting
✅ Output raw code only`;

  const handleDefaultFormSubmission = async () => {
    setIsLoading(true);
    const generatedResponse = await fetch("/api/generate-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: defaultPrompt,
      }),
    });
    setIsLoading(false);

    if (!generatedResponse.ok) {
      const errorPayload = await generatedResponse.json();
      throw new Error(
        `HTTP error! Status: ${generatedResponse.status}. Error: ${errorPayload.error}`
      );
    }

    const data = await generatedResponse.json();

    setGenerateCode(data.text);

    track({
      trackingPlatform: { segment: true, dataLayer: true },
      eventPayload: {
        event_name: "generated_code_sample",
        event_parameters: { medium: defaultTrackingMedium },
      },
      identify: { capture: false, identifier: "" },
    });
  };

  const handleCustomFormSubmission = async () => {
    setIsLoading(true);
    const generatedCustomEventResponse = await fetch("/api/generate-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: customEventPrompt,
      }),
    });

    setIsLoading(false);

    if (!generatedCustomEventResponse.ok) {
      const errPayload = await generatedCustomEventResponse.json();
      throw new Error(
        `HTTP error! Status: ${generatedCustomEventResponse.status}. Error: ${errPayload.error}`
      );
    }

    const customEventData = await generatedCustomEventResponse.json();

    setGenerateCode(customEventData.text);

    track({
      trackingPlatform: { segment: true, dataLayer: true },
      eventPayload: {
        event_name: "generated_code_sample",
        event_parameters: { medium: customTrackingMedium },
      },
      identify: { capture: false, identifier: "" },
    });
  };

  const codeReady = (
    <TypedCodeSection
      codeToType={generatedCode}
      smartBackspace={false}
      isGen={true}
    />
  );
  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <Flex
            direction={{ base: "column", md: "column", lg: "row" }}
            gap={10}
          >
            <section id={"controls"}>
              <Flex direction={"column"} gap={6}>
                <BlurText
                  text="Google Analytics 4 Events Generator"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="tracking-tight text-[#f15a25]"
                />
                <Text>
                  Set up Google Analytics 4 event tracking for recommended
                  events, ecommerce events, SaaS events, and custom events using
                  JavaScript, the dataLayer or the Measurement Protocol.
                </Text>
                <Flex id="form-controls" direction={"column"} gap={4}>
                  <Tabs.Root defaultValue={"default"} variant={"enclosed"}>
                    <Tabs.List mb={4}>
                      <Tabs.Trigger p={4} value={"default"}>
                        Recommended
                      </Tabs.Trigger>
                      <Tabs.Trigger p={4} value={"custom"}>
                        Custom
                      </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value={"default"}>
                      <Fieldset.Root size={{ base: "sm", md: "md", lg: "lg" }}>
                        <Fieldset.Legend my={4}>
                          Please select the event name and the tracking medium
                        </Fieldset.Legend>
                        <Fieldset.Content>
                          <Field.Root my={4} required>
                            <Field.Label>
                              Tracking medium
                              <Field.RequiredIndicator />
                            </Field.Label>
                            <NativeSelect.Root>
                              <NativeSelect.Field
                                value={defaultTrackingMedium}
                                onChange={(e) =>
                                  setDefaultTrackingMedium(e.target.value)
                                }
                                px={4}
                                name={"tracking-medium"}
                              >
                                <For
                                  each={[
                                    "GTM's dataLayer",
                                    "Gtag.js",
                                    "Measurement Protocol",
                                  ]}
                                >
                                  {(item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  )}
                                </For>
                              </NativeSelect.Field>
                              <NativeSelect.Indicator />
                            </NativeSelect.Root>
                          </Field.Root>
                          <Field.Root my={4} required>
                            <Field.Label>
                              Event name
                              <Field.RequiredIndicator />
                            </Field.Label>
                            <NativeSelect.Root>
                              <NativeSelect.Field
                                px={4}
                                name={"event-name"}
                                value={defaultEventName}
                                onChange={(e) =>
                                  setDefaultEventName(e.target.value)
                                }
                              >
                                <For
                                  each={[
                                    "ad_click",
                                    "ad_impression",
                                    "add_payment_info",
                                    "add_shipping_info",
                                    "add_to_cart",
                                    "add_to_wishlist",
                                    "begin_checkout",
                                    "earn_virtual_currency",
                                    "generate_lead",
                                    "join_group",
                                    "level_end",
                                    "level_start",
                                    "level_up",
                                    "login",
                                    "purchase",
                                    "refund",
                                    "remove_from_cart",
                                    "search",
                                    "select_content",
                                    "select_item",
                                    "select_promotion",
                                    "share",
                                    "sign_up",
                                    "spend_virtual_currency",
                                    "tutorial_begin",
                                    "tutorial_complete",
                                    "unlock_achievement",
                                    "view_cart",
                                    "view_item",
                                    "view_item_list",
                                    "view_promotion",
                                    "view_search_results",
                                    "video_complete",
                                    "video_progress",
                                    "video_start",
                                  ]}
                                >
                                  {(item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  )}
                                </For>
                              </NativeSelect.Field>
                              <NativeSelect.Indicator />
                            </NativeSelect.Root>
                          </Field.Root>
                        </Fieldset.Content>
                        <Button
                          className={styles.ctaButton}
                          type="submit"
                          alignSelf="flex-start"
                          onClick={handleDefaultFormSubmission}
                        >
                          Generate Event
                        </Button>
                      </Fieldset.Root>
                    </Tabs.Content>
                    <Tabs.Content value={"custom"}>
                      <Fieldset.Root size={{ base: "sm", md: "md", lg: "lg" }}>
                        <Fieldset.Legend my={4}>
                          Please provide details on your custom event.
                        </Fieldset.Legend>
                        <Fieldset.Content>
                          <Field.Root my={4} required>
                            <Field.Label>
                              Tracking medium
                              <Field.RequiredIndicator />
                            </Field.Label>
                            <NativeSelect.Root>
                              <NativeSelect.Field
                                px={4}
                                value={customTrackingMedium}
                                onChange={(e) =>
                                  setCustomTrackingMedium(e.target.value)
                                }
                                name={"tracking-medium"}
                              >
                                <For
                                  each={[
                                    "GTM's dataLayer",
                                    "Gtag.js",
                                    "Measurement Protocol",
                                  ]}
                                >
                                  {(item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  )}
                                </For>
                              </NativeSelect.Field>
                              <NativeSelect.Indicator />
                            </NativeSelect.Root>
                          </Field.Root>
                          <Field.Root my={4} required>
                            <Field.Label>
                              Event description
                              <Field.RequiredIndicator />
                            </Field.Label>
                            <Textarea
                              variant="flushed"
                              size={{
                                base: "sm",
                                md: "sm",
                                lg: "lg",
                                xl: "xl",
                              }}
                              placeholder="Please describe the event by adding a name and the desired parameter names..."
                              value={customEventDescription}
                              onChange={(e) =>
                                setCustomEventDescription(e.target.value)
                              }
                            />
                          </Field.Root>
                        </Fieldset.Content>
                        <Button
                          className={styles.ctaButton}
                          type="submit"
                          alignSelf="flex-start"
                          onClick={handleCustomFormSubmission}
                        >
                          Generate Event
                        </Button>
                      </Fieldset.Root>
                    </Tabs.Content>
                  </Tabs.Root>
                </Flex>
              </Flex>
            </section>
            <section id={"code"}>
              {isLoading ? (
                <Box
                  width={{ lg: "25rem", xl: "45rem" }}
                  bg="gray.900"
                  mx={"auto"}
                  color={"white"}
                  py={4}
                  px={2}
                  wordBreak={"break-word"}
                  borderRadius="xl"
                  maxW={"100%"}
                  height={"100%"}
                  overflowWrap={"break-word"}
                  overflowX="hidden"
                  fontFamily={"var(--font-spectral)"}
                  fontSize={"0.9rem"}
                  whiteSpace={"pre-wrap"}
                >
                  <SkeletonText noOfLines={5} gap="4" />
                </Box>
              ) : (
                <Box
                  width={{ lg: "25rem", xl: "45rem" }}
                  bg="gray.900"
                  mx={"auto"}
                  color={"white"}
                  py={4}
                  px={2}
                  wordBreak={"break-word"}
                  borderRadius="xl"
                  maxW={"100%"}
                  height={"100%"}
                  overflowWrap={"break-word"}
                  overflowX="hidden"
                  fontFamily={"var(--font-spectral)"}
                  fontSize={"0.9rem"}
                  whiteSpace={"pre-wrap"}
                >
                  <Flex
                    direction={"row"}
                    alignItems={"flex-end"}
                    justifyContent={"flex-end"}
                  >
                    <Clipboard.Root value={generatedCode}>
                      <Clipboard.Trigger asChild>
                        <Button variant="surface" size="sm">
                          <Clipboard.Indicator />
                          <Clipboard.CopyText />
                        </Button>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </Flex>
                  {codeReady}
                </Box>
              )}
            </section>
          </Flex>
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}
