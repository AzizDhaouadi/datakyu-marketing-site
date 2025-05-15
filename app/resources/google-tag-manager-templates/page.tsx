import styles from "../../page.module.css";

// 🧩 Custom Components – Core
import Nav from "@/components/custom/Nav";
import HeroHeading from "@/components/custom/HeroHeading";
import CardsWithImages from "@/components/custom/CardsWithImages";
import CustomDialog from "@/components/custom/Dialog";
import FAQ from "@/components/custom/FAQ";
import Footer from "@/components/custom/Footer";
import CallToActionSection from "@/components/custom/CallToActionSection";

// 💅 Chakra UI
import {
  Text,
  Heading,
  Separator,
  Flex,
  Timeline,
  List,
} from "@chakra-ui/react";

export default function GoogleTagManagerTemplates() {
  const containerTemplatesContent = [
    {
      image: "/images/techStack/google-tag-manager.svg",
      title: "General Template",
      description:
        "This container has all the tags you need to get started with events tracking whatever business you are.",
      includeFooter: false,
      toDownload: true,
      dialogFooter: (
        <CustomDialog
          placement={"center"}
          cta={"Learn more"}
          buttonVariant={"outline"}
          content={{
            title: "What does this template contain?",
            description:
              "This container is designed to help any business—regardless of industry—get started with event tracking using Google Analytics 4. It includes essential tags, triggers, and variables based on GA4’s recommended event structure. Each tag is preconfigured with the right parameters and firing conditions, making it easy to implement and customize. Whether you're a marketer, analyst, or business owner, this is the perfect launchpad for your analytics setup.",
          }}
        />
      ),
    },
    {
      image: "/images/techStack/google-tag-manager.svg",
      title: "SaaS Template",
      description:
        "This container has all the tags you need to get started with events tracking if you are a SaaS business.",
      includeFooter: false,
      toDownload: true,
      dialogFooter: (
        <CustomDialog
          placement={"center"}
          cta={"Learn more"}
          buttonVariant={"outline"}
          content={{
            title: "What does this template contain?",
            description:
              "This container is purpose-built for SaaS companies looking to implement Google Analytics 4 tracking quickly and effectively. It includes preconfigured tags for GA4’s recommended events, along with matching triggers and reusable variables. Whether you’re tracking signups, feature usage, or conversions, this container provides a ready-to-use foundation that simplifies implementation and speeds up your time to insight.",
          }}
        />
      ),
    },
    {
      image: "/images/techStack/google-tag-manager.svg",
      title: "E-commerce Template",
      description:
        "This container has all the tags you need to get started with events tracking if you are an E-commerce business.",
      includeFooter: false,
      toDownload: true,
      dialogFooter: (
        <CustomDialog
          placement={"center"}
          cta={"Learn more"}
          buttonVariant={"outline"}
          content={{
            title: "What does this template contain?",
            description:
              "This container is built for e-commerce stores that want to implement Google Analytics 4 quickly and effectively. It comes preloaded with all the essential tags for standard and e-commerce-specific events, including purchases, product views, add-to-cart actions, and more. Triggers and variables are already configured to follow GA4 best practices, making this container an ideal starting point for any online shop looking to gain insight into user behavior and optimize conversions.",
          }}
        />
      ),
    },
  ];

  const timelineContent = [
    {
      title: "Step One",
      description:
        "Select of the container templates that you would like to use. Next, download the container of your choice, and, if necessary, go over the provided json file.",
    },
    {
      title: "Step Two",
      description:
        "If you didn't already, create a Google Tag Manager account or create a new container for your existing account. Next, head to the Admin section, and choose import container.",
    },
    {
      title: "Step Three",
      description:
        "For Choose container file, select the file you just downloaded. Then choose Existing, followed by selecting Merge. Finally, click on confirm.",
    },
    {
      title: "Step Four",
      description:
        "Last but not least, change the Google Analytics 4 Measurement ID variable's value to that of your property and review the other tags, triggers and variables. Once you are done reviewing, it's time to preview and test the workspace changes. Once you have confirmed everything is working correctly, publish your container and you are done.",
    },
  ];

  const questionsAndAnswers = [
    {
      question:
        "How do I create a new container for my Google Tag Manager workspace?",
      answer: (
        <List.Root as={"ol"} textAlign={"left"}>
          <List.Item>Open Tag Manager</List.Item>
          <List.Item>
            In the Accounts tab, next to the account name, click More
            ActionsCreate Container.
          </List.Item>
          <List.Item>
            Enter a descriptive Container name and select the container type.
          </List.Item>
          <List.Item>To create your container, click Create</List.Item>
        </List.Root>
      ),
    },
    {
      question: "Do I merge or overwrite when importing the container?",
      answer:
        "We recommend merging the imported container with your current one. This way, you avoid overwriting any existing configuration which may lead to errors later. Any duplicate settings wll be renamed which avoid issues.If you want to merge, make sure to inspect your current configuration and the new tags, triggers and variables to make sure nothing is causing any conflicts; only then do you proceed with the merge.",
    },
    {
      question: "How do I change the Google Analytics 4 Measurement ID?",
      answer: (
        <List.Root as={"ol"} textAlign={"left"}>
          <List.Item>Open Tag Manager.</List.Item>
          <List.Item>
            In the Variables tab, locate the variable
            <em> Google Analytics 4 Measurement ID.</em>
          </List.Item>
          <List.Item>
            Paste the new value. The new value should be the Measurement ID of
            your Google Analytics 4 property.
          </List.Item>
          <List.Item>To confirm the change, click save.</List.Item>
        </List.Root>
      ),
    },
    {
      question: "How do I modify the event trigger?",
      answer: (
        <>
          <List.Root as={"ol"} textAlign={"left"}>
            <List.Item>Open Tag Manager.</List.Item>
            <List.Item>
              In the Triggers tab, locate the trigger you want to change.
            </List.Item>
            <List.Item>
              If you are looking to fire the event using the Custom Event
              trigger but using a different name, simply paste your the new
              event name in the <em>Event name</em> input field.
            </List.Item>
            <List.Item>
              If you are looking to change the trigger type, click on the
              <em> Trigger Type</em> field and proceed to select the new event
              trigger.
            </List.Item>
          </List.Root>
          <Text py={4} fontSize={"sm"} color={"grey.50"}>
            Please note that changing the event trigger can cause some issues if
            not done properly. If you run into issues, you can reach out to us.
          </Text>
        </>
      ),
    },
    {
      question: "How do I change the event parameters?",
      answer: (
        <>
          <List.Root as={"ol"} textAlign={"left"}>
            <List.Item>Open Tag Manager.</List.Item>
            <List.Item>
              In the Tags tab, locate the event you want to change.
            </List.Item>
            <List.Item>
              If you are looking to change the name of the parameter, then
              locate the parameter and simply enter the new name in the
              <em>Parameter Name</em> field.
            </List.Item>
            <List.Item>
              If you are looking to change the value of the parameter, then
              locate the parameter and simply enter the new value in the{" "}
              <em>Value</em>
              field.
            </List.Item>
            <List.Item>
              If you are looking to remove an event parameter, then locate the
              parameter and click on the (-) button.
            </List.Item>
            <List.Item>
              If you are looking to add a new parameter, then on the{" "}
              <em>Add row</em>
              button and enter the event parameter name along with its
              corresponding value.
            </List.Item>
          </List.Root>
        </>
      ),
    },
  ];

  return (
    <div className={styles.page}>
      <header style={{ width: "100%" }} className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section id="hero">
          <HeroHeading
            title={"Google Tag Manager Templates"}
            highlight={"Templates"}
          />
          <Text textAlign={"center"}>
            Set up Google Analytics 4 event tracking in four simple steps. Our
            Google Tag Manager containers come fully configured ready to be
            tested and launched.
          </Text>
        </section>
        <section id="containers-description">
          <CardsWithImages cardsContent={containerTemplatesContent} />
        </section>
        <section id="how-does-it-work">
          <Heading
            size={"4xl"}
            my={6}
            textAlign={"left"}
            letterSpacing={"tight"}
          >
            How does it work?
          </Heading>
          <Separator size="md" />
          <Flex direction={{ base: "column", md: "row" }} gap={10}>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              gap={4}
            >
              <Heading
                size={"2xl"}
                my={6}
                textAlign={"left"}
                color={"rgb(79, 59, 62)"}
                letterSpacing={"tight"}
              >
                Set up GA4 event tracking with Google Tag Manager
              </Heading>
              <Text>
                Get started with Google Analytics 4 event tracking with Google
                Tag Manager in four simple steps. Just select the container,
                download it, import it and then test and publish.
              </Text>
              <Text>
                If you have any questions, you might find an answer in our FAQ
                section below 👇. If you did not find what you were looking for,
                feel free to contact us.
              </Text>
            </Flex>
            <Timeline.Root my={6} size={"xl"} variant={"subtle"}>
              {timelineContent.map((item, index) => (
                <Timeline.Item key={index} my={2}>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator>{index + 1}</Timeline.Indicator>
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title>
                      <Heading>{item.title}</Heading>
                    </Timeline.Title>
                    <Text textStyle={"md"}>{item.description}</Text>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
          </Flex>
        </section>
        <section id="faq">
          <Heading
            size={"4xl"}
            my={6}
            textAlign={"left"}
            letterSpacing={"tight"}
          >
            Frequently Asked Questions
          </Heading>
          <FAQ questions={questionsAndAnswers} />
        </section>
        <section id="contact-us">
          <CallToActionSection description={"We are here to help!"} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
