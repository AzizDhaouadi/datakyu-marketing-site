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

// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "@/app/lib/helper/generatePageMetadata";

export async function generateMetadata() {
  return getPageMetadata("/resources/looker-studio-templates");
}

export default function LookerStudioTemplates() {
  const dashboardTemplatesContent = [
    {
      image: "/images/techStack/looker.svg",
      title: "Google Analytics 4 with BigQuery",
      description:
        "This dashboard helps businesses analyze user engagement, session and event performance, source-based traffic, and extract insights without SQL expertise.",
      includeFooter: false,
      toDownload: true,
      dialogFooter: (
        <CustomDialog
          placement={"center"}
          cta={"Learn more"}
          buttonVariant={"outline"}
          content={{
            title: "Dashboard Overview",
            description:
              "This dashboard is powered entirely by BigQuery, using data exported directly from Google Analytics 4 (GA4). It features a variety of visualizations, including time series, tables, filled maps, and bar charts, offering a comprehensive view of your GA4 data.",
          }}
        />
      ),
    },
  ];

  const timelineContent = [
    {
      title: "Step One",
      description:
        "Select of the dashboard templates that you would like to use. You can test the template and discover its features by opening it in a seperate tab or window. Next, click on the Replicate button to create a copy of your own.",
    },
    {
      title: "Step Two",
      description:
        "If you didn't already, create a Looker Studio account. If you already have an account, you should be taken to the template. Next, click on ⋮ then click on Make a copy.",
    },
    {
      title: "Step Three",
      description:
        "The next step is data mapping. Once you click on Make a copy, you will be asked to map the original data sources to the ones you will be using in your dashboard. This is why it is important to take your time during step one 👆. Once the mapping is done, click Copy Report.",
    },
    {
      title: "Step Four",
      description:
        "Last but not least, go over the dashbooard and make sure all reports are correctly visualizing the data and that there are no broken charts. If you are happy with what you are seeing then there is nothing to do. Mission accomplished!",
    },
  ];

  const questionsAndAnswers = [
    {
      question: "How do I create a Looker Studio account?",
      answer:
        "To create a Looker Studio account, go to the Looker Studio website and sign in with your Google account.",
    },
    {
      question: "How do I map the original data sources?",
      answer: (
        <>
          <Text py={4} color={"grey.50"}>
            Mapping the original data sources is very straightforward.
            Here&apos;s how can map them:
          </Text>
          <List.Root as={"ol"} textAlign={"left"}>
            <List.Item>
              On the overview page of the dashboard, we mention what are the
              data sources were used to build the dashboard.
            </List.Item>
            <List.Item>
              Once you have the list, make sure to add equivalent data sources
              in order for the mapping to work.
            </List.Item>
            <List.Item>
              Next, once you are asked to map the data source, map each data
              source to its equivalent. For instance map the original Google
              Analytics 4 source to your Google Analytics 4 source.
            </List.Item>
            <List.Item>
              Once the mapping is done, click on Make a copy to start using the
              dashboard
            </List.Item>
          </List.Root>
          <Text py={4} color={"grey.50"}>
            If your mapping is incorrect, you will notice some broken charts.
            This is due to the data sources incompatibility
          </Text>
        </>
      ),
    },
    {
      question: "Are the charts customizable?",
      answer:
        "Yes, they are. Although, it is important to note that to customize the reports, you will need to be familiar with Looker Studio.",
    },
    {
      question: "Can I add more data sources to the dashboard?",
      answer:
        "Yes, you can. Once you have made a copy of the dashboard, you are free to use it as you would like including adding data sources and other charts.",
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
            title={"Looker Studio Templates"}
            highlight={"Templates"}
          />
          <Text textAlign={"center"}>
            Get up and running with visualizing your data in seconds with our
            ready to go templates. Just duplicate, connect and start analyzing!
          </Text>
        </section>
        <section id="containers-description">
          <CardsWithImages cardsContent={dashboardTemplatesContent} />
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
                Visualize your data with Looker Studio 📊
              </Heading>
              <Text>
                Viusalize your data using Looker Studio in 4 simple steps using
                our templates. Whatever your business is, we have a temlate for
                it. All of our tempaltes work seamlessly and use the innate
                Google Analytics connector with Looker Studio, so there is no
                funny business there.
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
